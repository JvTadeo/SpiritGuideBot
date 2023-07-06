const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("difficulty")
        .setDescription("Explica cada dificuldade"),
    async execute(interaction) {
            const select = new StringSelectMenuBuilder()
                .setCustomId('difficulty')
                .setPlaceholder('Selecione uma dificuldade')
                .addOptions(
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Amador')
                        .setValue('amateur'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Intermediário')                
                        .setValue('intermediate'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Profissional')
                        .setValue('professional'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Pesadelo')
                        .setValue('nightmare'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Insano')
                        .setValue('insanity'),                        
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Apocalypse')
                        .setValue('apo'),                
                );

            const row = new ActionRowBuilder()
            .addComponents(select);
    
            await interaction.reply({
                content: 'Selecione uma dificuldade:',
                components: [row],
                ephemeral: true                
            });                  
    },
};
