const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName("cursed")
        .setDescription("Explica cada objeto amaldiçoado"),
    async execute(interaction) {
            const select = new StringSelectMenuBuilder()
                .setCustomId('cursed')
                .setPlaceholder('Selecione um objeto')
                .addOptions(
                    new StringSelectMenuOptionBuilder()
                        .setLabel('🎵| Caixa de Música')
                        .setValue('musicaBox'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('❓| Tabuleiro Ouija')                
                        .setValue('ouijaBorad'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('🧸| Boneco Voodo')
                        .setValue('voodooDoll'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('🪞| Espelho Amaldiçoado')
                        .setValue('hauntedMirror'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('⭕| Circulo de Invocação')
                        .setValue('summoningCircle'),                        
                    new StringSelectMenuOptionBuilder()
                        .setLabel('🐾| Pata do Macaco')
                        .setValue('monkeyPaw'),                
                    new StringSelectMenuOptionBuilder()
                        .setLabel('🃏| Cartas de Tarot')
                        .setValue('tarotCards'),  
                );
            const row = new ActionRowBuilder()
            .addComponents(select);

            await interaction.reply({
                content: 'Selecione um objeto:',
                components: [row],
                ephemeral: true                
            });                  
    },
};
