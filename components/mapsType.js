const { ClientEvents, EmbedBuilder } = require('discord.js');
module.exports = {
    async execute(interaction){        
        let embed;
        switch(interaction.values.toString())                               
        {
            case 'tangle':                
                embed = await embedImage('6 Tanglewood Drive', 'https://media.discordapp.net/attachments/1117126812758188112/1117128299886411836/tanglewood.png?width=577&height=554');
            break;
            case 'willow':                
                embed = await embedImage('13 Willow Street', 'https://media.discordapp.net/attachments/1117126812758188112/1117128296921038938/13-willow-street.png?width=714&height=554');
            break;
            case 'edgefield':                
                embed = await embedImage('42 Edgefield Road', 'https://media.discordapp.net/attachments/1117126812758188112/1117128297227227186/42-edgefield-road.png?width=643&height=554');
            break;
            case 'ridgeview':                
                embed = await embedImage('10 Ridgeview Court', 'https://media.discordapp.net/attachments/1117126812758188112/1117128299886411836/tanglewood.png?width=577&height=554');
            break;
            case 'bleasdale':                
                embed = await embedImage('Bleasdale Farmhouse', 'https://media.discordapp.net/attachments/1117126812758188112/1117128297508241508/bleasdale-farmhouse.png?width=678&height=554');
            break;
            case 'grafton':                
                embed = await embedImage('Grafton Farmhouse', 'https://media.discordapp.net/attachments/1117126812758188112/1117128298519068802/grafton-farmhouse.png?width=1037&height=554');
            break;
            case 'woodwind':                
                embed = await embedImage('Camp Woodwind', 'https://media.discordapp.net/attachments/1117126812758188112/1117128298233868309/camp-woodwind.png?width=672&height=554');
            break;
            case 'maple':                
                embed = await embedImage('Maple Lodge Campsite', 'https://media.discordapp.net/attachments/1117126812758188112/1117128298783313920/maple-lodge-campsite.png?width=942&height=553');
            break;
            case 'prison':                
                embed = await embedImage('Prison', 'https://media.discordapp.net/attachments/1117126812758188112/1117128299202740364/prison.png?width=1055&height=554');
            break;
            case 'highSchool':                
                embed = await embedImage('Brownstone High School', 'https://media.discordapp.net/attachments/1117126812758188112/1117128297860567131/brownstone-high-school.png?width=1080&height=484');
            break;
            case 'sunny':                
                embed = await embedImage('Sunny Meadows Mental Institution', 'https://media.discordapp.net/attachments/1117126812758188112/1117128299529900062/sunny-meadows-mental-institution.png?width=960&height=554');
            break;
        }
        async function embedImage(name, imageUrl){
            const imageEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(`${name}`)            
            .setDescription('Prontinho, aqui está o mapa.')
            .setImage(imageUrl)       
            .setFooter({ text:'Fonte: Phasmo.karotte.org '});
            return imageEmbed;
        }
        await interaction.reply({embeds: [embed], ephemeral: true});
    }
}