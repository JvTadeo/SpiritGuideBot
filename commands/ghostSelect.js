const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ghost")
        .setDescription("Breve explicação de todos os fantasmas do Phasmophobia"),
    async execute(interaction) {
            const select = new StringSelectMenuBuilder()
                .setCustomId('ghost')
                .setPlaceholder('Selecione um e fique por dentro dele')
                .addOptions(
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Spirit')
                        .setValue('spirit'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Wraith')                
                        .setValue('wraith'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Phantom')
                        .setValue('phantom'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Poltergeist')
                        .setValue('poltergeist'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Banshee')
                        .setValue('banshee'),                        
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Jinn')
                        .setValue('jinn'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Mare')
                        .setValue('mare'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Revenant')
                        .setValue('revenant'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Shade')
                        .setValue('shade'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Demon')
                        .setValue('demon'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Yurei')
                        .setValue('yurei'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Oni')
                        .setValue('oni'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Youkai')
                        .setValue('youkai'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Hantu')
                        .setValue('hantu'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Goryo')
                        .setValue('goryo'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Myling')
                        .setValue('myling'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Onryo')
                        .setValue('onryo'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('The Twins')
                        .setValue('the_Twins'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Raiju')
                        .setValue('raiju'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Obake')
                        .setValue('obake'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Mímico')
                        .setValue('mimico'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Moroi')
                        .setValue('moroi'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Deogen')
                        .setValue('deogen'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Thaye')
                        .setValue('thaye'),
                );

            const row = new ActionRowBuilder()
            .addComponents(select);
    
            await interaction.reply({
                content: 'Selecione um fantasma:',
                components: [row],
                ephemeral: true                
            });                  
    },
};
