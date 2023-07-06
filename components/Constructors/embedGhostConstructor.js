const { EmbedBuilder } = require('discord.js');

module.exports = {
    async execute(title, description, evidence, habilits, weakness){
        const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(`${title}`)        
        .setDescription(`${description}`)
        .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1126280802972483625/Phasmo_Icon.png?width=554&height=554')
        .addFields(
            { name: 'Habilidade', value: `${habilits}`, inline: true },
            { name: 'Fraquezas', value: `${weakness}`, inline: false },
            { name: 'Evidências', value: `${evidence}`, inline: false },
        )                   
        return exampleEmbed;
    }
}
