const discord = require("discord.js");
const fetch = require("node-fetch");

const tenorapi = 'KK7QNJ9EQQYS';
module.exports.run = async (bot, message, args) => {
    var query = args.join(' ');
    fetch(`https://api.tenor.com/v1/random?q=${query}&key=`+tenorapi)  //get from the Tenor website
      .then(res => res.json())
      .then(json => message.channel.send(json.results[0].url))
      .catch(e => {
        message.channel.send('لطفا یک اسم صحیح از گیف مورد نظر خودتون رو بنویسید');
        // console.error(e);
        return;
      });
};

module.exports.help = {
	name: "gif",
  aliases: []
};