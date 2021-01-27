const Discord = require('discord.js')

const db = require("quick.db")

module.exports.run = async (bot, message, args) => {

	let permission = message.member.hasPermission("ADMINISTRATOR");

if(!permission) return message.channel.send("شما پریمیشن ادمینستوری را ندارید `ADMINISTRATOR`")

 let cArgs = args[0]
 
 if(isNaN(cArgs)) return message.channel.send(' لطفا یک آیدی عددی صحیح را وارد کنید')

 db.delete(`${message.guild.id}ch`, cArgs)
 
 message.channel.send("شما با موفقیت چنل تغییرات چنل های سرور را پاک کردید <#" + cArgs + ">")
return;
 }
 
module.exports.help = {
  name:"unset-channel",
  aliases: [""]
}