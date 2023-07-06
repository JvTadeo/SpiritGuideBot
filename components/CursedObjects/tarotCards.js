const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, EmbedBuilder, bold, codeBlock} = require('discord.js');
module.exports = {
    async tarotSelect(interaction, client){
        const star = client.emojis.cache.find(emoji => emoji.name === 'Star');
        const select = new StringSelectMenuBuilder()
        .setCustomId('tarotCard')
        .setPlaceholder('Selecione uma carta')
        .addOptions(
            new StringSelectMenuOptionBuilder()
                .setLabel('♟️ The Tower')
                .setValue('theTower'),
            new StringSelectMenuOptionBuilder()
                .setLabel('🎡 The Wheel of Fortune')                
                .setValue('theWheelOfFortune'),
            new StringSelectMenuOptionBuilder()
                .setLabel('🤡 The Fool')
                .setValue('theFool'),
            new StringSelectMenuOptionBuilder()
                .setLabel('😈 The Devil')
                .setValue('theDevil'),
            new StringSelectMenuOptionBuilder()
                .setLabel('☠️ Death')
                .setValue('death'),
            new StringSelectMenuOptionBuilder()
                .setLabel('🔒 The Hermit')
                .setValue('theHermit'),
            new StringSelectMenuOptionBuilder()
                .setLabel('☀️ The Sun')
                .setValue('theSun'),
            new StringSelectMenuOptionBuilder()
                .setLabel('🌑 The Moon')
                .setValue('theMoon'),
            new StringSelectMenuOptionBuilder()
                .setLabel('💡 The High Priestess')
                .setValue('theHighPriestess'),                                                                                
            new StringSelectMenuOptionBuilder()
                .setLabel('⚰️ The Hanged Man')
                .setValue('theHangedMan'),                
        );

        const row = new ActionRowBuilder()
        .addComponents(select);

        const explain = new EmbedBuilder()
            .setColor(290025)
            .setTitle('CARTAS DE TAROT')
            .setDescription(`${bold('As tarot cards são uma possessão amaldiçoada que pode desencadear diversos efeitos aleatórios tanto no jogador quanto nos fantasmas próximos.')}`)
            .addFields(
                {name: `${bold('ATIVAÇÃO')}`, value:`
                ${codeBlock('As tarot cards podem ser coletadas (padrão: tecla E no teclado) e apenas uma carta pode ser retirada (padrão: clique com o botão direito do mouse) por vez.\nAs tarot cards só podem ser retiradas dentro da área de investigação.\nUma vez que as dez cartas tenham sido usadas, não serão dadas mais cartas ao jogador para aquele contrato. Quando o deck for usado, todas as futuras caçadas também terão 20 segundos adicionais, mesmo se nenhuma carta da Morte tiver sido tirada anteriormente.')}
                `},
                {name: `${bold('DECK DE CARTAS')}`, value:`
                ${codeBlock('Cada deck de tarot cards contém 10 cartas geradas aleatoriamente. Existem 10 tipos de cartas possíveis que o jogador pode tirar, cada uma com um efeito único no jogador ou no fantasma. Após serem usadas, cada carta queimará e desaparecerá em uma chama com cor única. Cada tipo de carta tem uma chance diferente e independente de ser tirada, então alguns tipos de cartas podem ser tirados várias vezes ou não serem tirados em um único deck.')}
                `}
            )
            .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1126204193783414874/tarot_Cards.png')
            .setImage('https://media.discordapp.net/attachments/1117126812758188112/1126204180525236384/tarot_Gif.gif')

        await interaction.reply({
            embeds: [explain],
            content: 'Selecione uma carta:',
            components: [row],
            ephemeral: true                
        });             
    },
}