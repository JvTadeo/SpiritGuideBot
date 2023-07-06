const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, EmbedBuilder, bold, codeBlock} = require("discord.js");
module.exports = {
    async execute(interaction) {
        const select = new StringSelectMenuBuilder()
        .setCustomId("ouijaSelect")
        .setPlaceholder("Selecione uma pergunta")
        .addOptions(
            new StringSelectMenuOptionBuilder()
            .setLabel("🗺️| Onde Você está?")
            .setValue("whereAreYou"),
            new StringSelectMenuOptionBuilder()
            .setLabel("🦴| Onde está o osso?")
            .setValue("bone"),
            new StringSelectMenuOptionBuilder()
            .setLabel("👥| Você responde a todos?")
            .setValue("allAnswer"),
            new StringSelectMenuOptionBuilder()
            .setLabel("👨‍🦳| Qual a sua idade?")
            .setValue("age"),
            new StringSelectMenuOptionBuilder()
            .setLabel("☠️| Como você morreu?")
            .setValue("die"),
            new StringSelectMenuOptionBuilder()
            .setLabel("👣| Esconde-Esconde?")
            .setValue("hideSeek"),
            new StringSelectMenuOptionBuilder()
            .setLabel("😖| Eu sou maluco?")
            .setValue("crazy"),
            new StringSelectMenuOptionBuilder()
            .setLabel("😖| Quão Sã eu sou?")
            .setValue("insane"),
        );
        const row = new ActionRowBuilder().addComponents(select);

        const explain = new EmbedBuilder()
            .setColor(290025)
            .setTitle('TABULEIRO OUIJA')
            .setDescription(`${bold('O ouija permite você falar com o fantasma')}`)
            .addFields(
                {name: `${bold('ATIVAÇÃO')}`, value:`
                ${codeBlock('A Ouija Board pode ser ativada clicando com o botão esquerdo (padrão: clique esquerdo do mouse)\nse o jogador não estiver segurando-a, ou ativando-a diretamente enquanto segura a prancheta. A prancheta cairá na placa, indicando que a placa foi ativada.')}
                `},
                {name: `${bold('QUESTIONAMENTO')}`, value:`
                ${codeBlock('Usando o chat de voz, uma vez ativada, a Ouija Board responderá ao áudio dentro de um raio de 5 metros.\nUsando a interface de texto, a interface aparecerá ao ser ativada. Os jogadores podem então clicar para selecionar uma das 3 categorias, em seguida, selecionar uma pergunta específica da categoria ou dizer adeus.')}
                `},
                {name:`${bold('DESATIVAÇÃO')}`, value: `
                ${codeBlock('Para desativar a Ouija Board, qualquer jogador próximo deve dizer "Adeus", o que fará com que a prancheta desapareça. A Ouija Board pode então ser deixada em paz. \nA Ouija Board também será desativada automaticamente se o jogador segurá-la e sair da área de investigação.')}
                `},
                {name: 'OUIJA QUEBRARÁ SE', value: `
                ${codeBlock('➖ Não houver jogador dentro de 5 metros de uma placa ainda ativa.\n➖ Jogador que está fazendo as perguntas tiver menos sanidade do que o necessário para "pagar" pela pergunta.\n➖ O jogador que diz adeus não tiver mais sanidade restante.\n➖ A frase "esconde-esconde" (ou similar) for dita.\n🚨 A placa se quebrará e queimará, iniciando uma caçada amaldiçoada se algum jogador estiver dentro do prédio.')}`}
            )
            .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1126195380430839870/Ouija.png?width=1193&height=671')

        await interaction.reply({
            embeds: [explain],
            content: "Selecione um frase:",
            components: [row],
            ephemeral: true,
        });
    },
};
