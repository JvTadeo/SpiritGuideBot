const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, EmbedBuilder, codeBlock, bold } = require('discord.js');
module.exports = {
    async execute(interaction) {
        const select = new StringSelectMenuBuilder()
        .setCustomId('monkeySelect')
        .setPlaceholder('Selecione um desejo')
        .addOptions(
            new StringSelectMenuOptionBuilder()
                .setLabel('👻| Eu desejo ver o fantasma')
                .setValue('seeGhost'),
            new StringSelectMenuOptionBuilder()
                .setLabel('📈| Eu desejo por atividade')                
                .setValue('activity'),
            new StringSelectMenuOptionBuilder()
                .setLabel('👮| Eu desejo prender fantasma')
                .setValue('trapGhost'),
            new StringSelectMenuOptionBuilder()
                .setLabel('🧠| Eu desejo por sanidade')
                .setValue('sanity'),
            new StringSelectMenuOptionBuilder()
                .setLabel('🔐| Eu desejo estar seguro')
                .setValue('safe'),
            new StringSelectMenuOptionBuilder()
                .setLabel('🚪| Eu desejo sair')
                .setValue('leave'),
            new StringSelectMenuOptionBuilder()
                .setLabel('👨🏻| Eu desejo reviver meu amigo')
                .setValue('reviveFriend'),
            new StringSelectMenuOptionBuilder()
                .setLabel('📘| Eu desejo por conhecimento')
                .setValue('knowledge'),
            new StringSelectMenuOptionBuilder()
                .setLabel('☁️| Eu desejo por clima')
                .setValue('weather'),
            new StringSelectMenuOptionBuilder()
                .setLabel('♾️| Eu desejo qualquer coisa')
                .setValue('anything'),
        );
                
        const row = new ActionRowBuilder()
        .addComponents(select);
    
        const explain = new EmbedBuilder()
            .setColor(290025)
            .setTitle('PATA DO MACACO')
            .setDescription(`${bold('Ela concede o desejo que o jogador pediu. Cada desejo só pode ser usado uma vez por contrato.')}`)
            .addFields(
                {name: `${bold('NÚMERO DE DESEJOS')}`, value:`
                ${codeBlock('A Monkey Paw concede um número específico de desejos, dependendo do multiplicador de recompensa da dificuldade:\n\n0x - 1.99x - 5 Desejos\n2x - 2.99x - 4 Desejos\n3x ou mais - 3 Desejos')}                `,
                },
                {name: `${bold('CHAT DE VOZ OU TEXTO')}`, value:`
                ${codeBlock('Se usar o chat de voz, a Monkey Paw concederá qualquer desejo reconhecido feito pelo jogador. \nSe usar a interface de texto, a interface aparecerá ao ser ativada (padrão: clique com o botão direito do mouse). Os jogadores podem então clicar para selecionar uma das 3 categorias e, em seguida, selecionar um desejo específico da categoria, ou sair da interface ao desativá-la (padrão: clique com o botão direito do mouse).')}
                `,              
                },
                {name:`${bold('LOCALIZAÇÕES DOS DESEJOS')}`, value: `
                ${codeBlock('A maioria dos desejos pode ser encontrada em etiquetas espalhadas em Sunny Meadows. \nPegar uma etiqueta (exceto para desejos relacionados ao clima e qualquer outro desejo) registrará o desejo no diário. Não é necessário encontrar os desejos para usar a Monkey Paw.')}`}
            )
            .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1125995161307058176/monkeyPaw.png')
            
        await interaction.reply({
            embeds: [explain],
            content: 'Selecione um desejo:',
            components: [row],
            ephemeral: true                
            });                  
        },

}