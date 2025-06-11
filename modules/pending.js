module.exports.config = {
    name: "pending",
    version: "1.0.6",
    credits: "CatalizCS mod by Kadeer",
    hasPermssion: 2,
    description: "Quản lý tin nhắn chờ của bot",
    commandCategory: "Admin",
    usages: "[u] [t] [a]",
    cooldowns: 5
};

module.exports.handleReply = async function({ api, event, handleReply, getText }) {
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { body, threadID, messageID } = event;
    var count = 0;

    if (isNaN(body) && body.indexOf("c") == 0 || body.indexOf("cancel") == 0) {
        const index = (body.slice(1, body.length)).split(/\s+/);
        for (const singleIndex of index) {
            console.log(singleIndex);
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(`${singleIndex} Không phải là một con số hợp lệ`, threadID, messageID);
        }
        return api.sendMessage(`»「 𝐏𝐄𝐍𝐃𝐈𝐍𝐆 」«\n𝗧𝘂̛̀ 𝗰𝗵𝗼̂́𝗶 𝗻𝗵𝗼́𝗺 𝗻𝗮̀𝘆 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 😽`, threadID, messageID);
    }
    else {

        const index = body.split(/\s+/);
        const fs = require("fs");       
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(`${singleIndex} Không phải là một con số hợp lệ`, threadID, messageID);
            api.unsendMessage(handleReply.messageID);
            api.changeNickname(`>> ${global.config.PREFIX} << • ${(!global.config.BOTNAME) ? "Made by Kadeer" : global.config.BOTNAME}`, handleReply.pending[singleIndex - 1].threadID, api.getCurrentUserID());
            api.sendMessage("", event.threadID, () => api.sendMessage({body:`► 𝗞𝗘̂́𝗧 𝗡𝗢̂́𝗜 𝗧𝗛𝗔̀𝗡𝗛 𝗖𝗢̂𝗡𝗚 ◄\n━━━━━━━━━━━━━━━━━━\n→ [🐧] 𝗛𝗶 𝗠𝗼̣𝗶 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗠𝗶̀𝗻𝗵 𝗟𝗮̀ 𝗕𝗼𝘁 𝗖𝘂̉𝗮 T\n→ [🎀] 𝗩𝘂𝗶 𝗟𝗼̀𝗻𝗴 𝗞𝗵𝗼̂𝗻𝗴 𝗦𝗽𝗮𝗺 , 𝗖𝗵𝘂̛̉𝗶 𝗕𝗼𝘁\n→ [🎊] 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴 !𝗵𝗲𝗹𝗽 , !𝗺𝗲𝗻𝘂 Đ𝗲̂̉ 𝗫𝗲𝗺 𝗖𝗵𝗶 𝗧𝗶𝗲̂́𝘁 𝗟𝗲̣̂𝗻𝗵 𝗖𝗼́ 𝗧𝗿𝗼𝗻𝗴 𝗕𝗼𝘁\n→ [🌸] 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴 !𝗱𝘂𝘆𝗲𝘁𝗯𝗼𝘅 Đ𝗲̂̉ Đ𝘂̛𝗼̛̣𝗰 𝗔𝗱𝗺𝗶𝗻 𝗗𝘂𝘆𝗲̣̂𝘁\n→ [💓] 𝗖𝗵𝘂́𝗰 𝗖𝗮́𝗰 𝗕𝗮̣𝗻 𝗦𝗮̀𝗶 𝗕𝗼𝘁 𝗩𝘂𝗶 𝗩𝗲̉\n━━━━━━━━━━━━━━━━━━\n→ [🌐] 𝗡𝗲̂́𝘂 𝗠𝘂𝗼̂́𝗻 𝗠𝘂̛𝗼̛̣𝗻 𝗕𝗼𝘁 𝗖𝗵𝗼 𝗖𝗮́𝗰 𝗕𝗼𝘅 𝗞𝗵𝗮́𝗰 𝗧𝗵𝗶̀ 𝗟𝗶𝗲̂𝗻 𝗛𝗲̣̂ 𝗖𝗵𝗼 𝗔𝗱𝗺𝗶𝗻 𝗕𝗼𝘁:fb.me/wind.099\n━━━━━━━━━━━━━━━━━━\n→ 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 𝗯𝗼𝘁 💓`, attachment: fs.createReadStream(__dirname + "/noprefix/MQx7j9E.gif")} ,handleReply.pending[singleIndex - 1].threadID));
            count+=1;
            
        }
        return api.sendMessage(`»「 𝐏𝐄𝐍𝐃𝐈𝐍𝐆 」«\n𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁 𝗻𝗵𝗼́𝗺 𝗻𝗮̀𝘆 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 😽`, threadID, messageID);
    }
}

module.exports.run = async function({ api, event, args, permission, handleReply }) {
        if (args.join() == "") {api.sendMessage("Bạn có thể dùng pending:\nPending user: Hàng chờ người dùng\nPending thread: Hàng chờ nhóm\nPending all:Tất cả hàng chờ ",event.threadID, event.messageID);
    }
        const content = args.slice(1, args.length);   
     switch (args[0]) {
    case "user":
    case "u":
    case "-u":
    case "User": {
    const permission = ["61550528673840"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Quyền lồn biên giới?", event.threadID, event.messageID);
    const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗹𝗮̂́𝘆 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗵𝗮̀𝗻𝗴 𝗰𝗵𝗼̛̀ !", threadID, messageID) }

      const list = [...spam, ...pending].filter(group => group.isGroup == false);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`»「 𝐏𝐄𝐍𝐃𝐈𝐍𝐆 」«\n❯ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗰𝗮̂̀𝗻 𝗱𝘂𝘆𝗲̣̂𝘁: ${list.length} 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 ❮\n\n${msg}`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("»「 𝐏𝐄𝐍𝐃𝐈𝐍𝐆 」«\n❯ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗻𝗮̀𝗼 𝘁𝗿𝗼𝗻𝗴 𝗵𝗮̀𝗻𝗴 𝗰𝗵𝗼̛̀ ❮", threadID, messageID);
}
    case "thread":
    case "-t":
    case "t":
    case "Thread": {
        const permission = ["61550528673840"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Quyền lồn biên giới?", event.threadID, event.messageID);
     const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗹𝗮̂́𝘆 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗵𝗮̀𝗻𝗴 𝗰𝗵𝗼̛̀ !", threadID, messageID) }

    const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`»「 𝐏𝐄𝐍𝐃𝐈𝐍𝐆 」«\n❯ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺 𝗰𝗮̂̀𝗻 𝗱𝘂𝘆𝗲̣̂𝘁: ${list.length} 𝗻𝗵𝗼́𝗺 ❮\n\n${msg}`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("»「 𝐏𝐄𝐍𝐃𝐈𝐍𝐆 」«\n❯ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗻𝗵𝗼́𝗺 𝗻𝗮̀𝗼 𝘁𝗿𝗼𝗻𝗴 𝗵𝗮̀𝗻𝗴 𝗰𝗵𝗼̛̀ ❮", threadID, messageID);
        }
    case "all":
    case "a":
    case "-a":
    case "al": {
        const permission = ["61550528673840"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Quyền lồn biên giới?", event.threadID, event.messageID);
     const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗹𝗮̂́𝘆 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗵𝗮̀𝗻𝗴 𝗰𝗵𝗼̛̀ !", threadID, messageID) }

            const listThread = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);
        const listUser = [...spam, ...pending].filter(group => group.isGroup == false)
    const list = [...spam, ...pending].filter(group => group.isSubscribed);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`»「 𝐏𝐄𝐍𝐃𝐈𝐍𝐆 」«\n❯ 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗨𝘀𝗲𝗿 & 𝗧𝗵𝗿𝗲𝗮𝗱 𝗰𝗮̂̀𝗻 𝗱𝘂𝘆𝗲̣̂𝘁: ${list.length} 𝗨𝘀𝗲𝗿 & 𝗧𝗵𝗿𝗲𝗮𝗱 ❮\n\n${msg}`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("»「 𝐏𝐄𝐍𝐃𝐈𝐍𝐆 」«\n❯ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗨𝘀𝗲𝗿 & 𝗧𝗵𝗿𝗲𝗮𝗱 𝗻𝗮̀𝗼 𝘁𝗿𝗼𝗻𝗴 𝗵𝗮̀𝗻𝗴 𝗰𝗵𝗼̛̀ ❮", threadID, messageID);
        }
    }       
}
