module.exports.run = async (bot, message, args) => {

    //console.log(args[0]);// user
    //console.log(args[1]);// role
    //console.log(args[2]);//time
    
    message.delete();
    
    if(!args.join(" ")){
      return message.channel.send("| لطفا یک متن را بنویسید" + " **|** <:TickNo:764816791699980318>   ")
    }
    return message.channel.send({ files: [{ attachment: Buffer.from(args.join(" ")), name: `${message.member.displayName}.txt` }] });
    }
    
    module.exports.help = {
        name: "txt",
        aliases: [""]
    }
