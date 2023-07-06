const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("mapa")
        .setDescription("Mostra os mapas do jogo"),
    async execute(interaction) {
            const select = new StringSelectMenuBuilder()
                .setCustomId('maps')
                .setPlaceholder('Selecione um mapa')
                .addOptions(
                    new StringSelectMenuOptionBuilder()
                        .setLabel('6 Tanglewood Drive')
                        .setValue('tangle'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('13 Willow Street')
                        .setValue('willow'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('42 Edgefield Road')
                        .setValue('edgefield'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('10 Ridgeview Court')
                        .setValue('ridgeview'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Bleasdale Farmhouse')
                        .setValue('bleasdale'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Grafton Farmhouse')
                        .setValue('grafton'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Camp Woodwind')
                        .setValue('woodwind'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Maple Lodge Campsite')
                        .setValue('maple'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Prison')
                        .setValue('prison'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Brownstone High School')
                        .setValue('highSchool'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Sunny Meadows Mental Institution')
                        .setValue('sunny'),
                );

            const row = new ActionRowBuilder()
            .addComponents(select);
    
            await interaction.reply({
                content: 'Selecione um mapa:',
                components: [row],
                ephemeral: true                
            });                  
    },
};
