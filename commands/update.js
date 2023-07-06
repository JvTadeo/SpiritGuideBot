const {SlashCommandBuilder, EmbedBuilder, bold, hyperlink, codeBlock} = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('update')
		.setDescription('Retorna as 3 ultimas atualizações do Phasmophobia'),
	async execute(interaction, client) {		
        const steamEmoji = client.emojis.cache.find(emoji => emoji.name === 'steam64');
        let data = await returnData();        
        let message;        
        message = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(`${bold('Ultimas notícas do Phasmophobia')}`)
            .addFields({name:`1️⃣ - ${bold(`${data[0].title.toUpperCase()}`)}`, 
                value:`                                                 
                ${codeBlock(`${data[0].contents}`)}
                ${hyperlink(`${steamEmoji} STEAM PAGE`, `${data[0].url}`)}
            `},
            { name: '\u200B', value: '\u200B' },
            {name:`2️⃣ - ${bold(`${data[1].title.toUpperCase()}`)}`, 
            value:`                                                 
                ${codeBlock(`${data[1].contents}`)}
                ${hyperlink(`${steamEmoji} STEAM PAGE`, `${data[1].url}`)}
            `},            
            { name: '\u200B', value: '\u200B' },
            {name:`3️⃣ - ${bold(`${data[2].title.toUpperCase()}`)}`, 
            value:`                                                 
                ${codeBlock(`${data[2].contents}`)}
                ${hyperlink(`${steamEmoji} STEAM PAGE`, `${data[2].url}`)}
            `}            
            ) 
        async function returnData(){
            return new Promise((resolve, reject) =>{
                fetch('http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=739630&count=3&maxlength=350&format=json')
                .then((response) => response.json())
                .then((data) => {
                    resolve(data.appnews.newsitems);                
                })
                .catch((error) => {
                    reject(error);
                })            
            })            
        }
        await interaction.reply({embeds: [message], ephemeral: true});        
	},    
};