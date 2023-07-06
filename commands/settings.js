const { SlashCommandBuilder, ChannelSelectMenuBuilder, ActionRowBuilder, bold} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('settings')
        .setDescription('Configuração sobre o canal que o bot pode enviar mensagens'),
    async execute(interaction) {        
        if(interaction.user.id !== interaction.guild.ownerId){    
            await interaction.reply({
                content: 'Você não tem acesso a esse comando!',
                ephemeral: true
            })
            return;             
        }
        const selectChannel = new ChannelSelectMenuBuilder()
            .setCustomId('selectChannel')
            .setPlaceholder('Selecione um Canal de Texto')
            .setMaxValues(1)
            .setChannelTypes('GuildText');

            const row = new ActionRowBuilder()
            .addComponents(selectChannel);        

        this.initialReply = await interaction.reply({
            content: 'Por favor, selecione um canal que o bot pode enviar mensagens:',
            ephemeral: true,
            components: [row],            
        });
        
    },
    async response(interaction){        
        let selecetChannel = interaction.channels.first();
        await this.initialReply.edit({
            content: `✅ - Canal Selecionado: ${bold(`#${selecetChannel.name}`)}`,
            ephemeral: true,
            components: [],
        })
        return selecetChannel.id;
    }
};
