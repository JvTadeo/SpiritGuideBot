const {EmbedBuilder, bold, quote, codeBlock, inlineCode} = require('discord.js');
module.exports = {
    async execute(interaction){             
        let message;
        switch(interaction.values.toString())                               
        {
            case 'theTower': //Tarot Carts                
                message = new EmbedBuilder()
                    .setColor(0x0099FF)
                    .setTitle('The Tower')    
                    .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1126207092848590878/theTower.png')                                        
                    .addFields(
                        {name: `${bold('EFEITO')}` , value:` 
                        ${codeBlock('➡️ Causa um interação e o dobro de atividade do fantasma por 20 segundos.')}
                        `},
                        {name: `${bold('COR QUEIMADA')}`, value:`
                        ${codeBlock('➡️ Azul')}               
                        `},
                        {name: `${bold('CHANCE')}`, value:`
                        ${codeBlock('➡️ 20%')}      
                        `}
                    )             
            break;      
            case 'theWheelOfFortune':                
                message = new EmbedBuilder()
                    .setColor(0x0099FF)
                    .setTitle('The Wheel of Fortune')   
                    .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1126207093163184158/theWheelOfFortune.png')                                         
                    .addFields(
                        {name: `${bold('EFEITO')}` , value:` 
                        ${codeBlock('➡️ O jogador ganha 25% de sanidade se queimar VERDE, ou perde 25% se queimar VERMELHO.')}
                        `},
                        {name: `${bold('COR QUEIMADA')}`, value:`
                        ${codeBlock('➡️ Verde (Ganha Sanidade) | Vermelho (Perde Sanidade)')}               
                        `},
                        {name: `${bold('CHANCE')}`, value:`
                        ${codeBlock('➡️ 20%')}      
                        `}
                    )             
            break;       
            case 'theFool':
                message = new EmbedBuilder()
                    .setColor(0x0099FF)
                    .setTitle('The Fool')   
                    .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1126207090671767742/theFool.png')                                         
                    .addFields(
                        {name: `${bold('EFEITO')}` , value:` 
                        ${codeBlock('➡️ É selecionada quando você pega um carta qualquer, ele basicamente não aplica o efeito da carta que você tirou.')}
                        `},
                        {name: `${bold('COR QUEIMADA')}`, value:`
                        ${codeBlock('➡️ Roxo Claro')}               
                        `},
                        {name: `${bold('CHANCE')}`, value:`
                        ${codeBlock('➡️ 17% | 100% durante as caçadas')}      
                        `}
                    )
            break;
            case 'theDevil':
                message = new EmbedBuilder()
                    .setColor(0x0099FF)
                    .setTitle('The Devil')                                            
                    .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1126207090952769686/theDevil.png')
                    .addFields(
                        {name: `${bold('EFEITO')}` , value:` 
                        ${codeBlock('➡️ Ativa um evento fantasma.')}
                        `},
                        {name: `${bold('COR QUEIMADA')}`, value:`
                        ${codeBlock('➡️ Rosa')}               
                        `},
                        {name: `${bold('CHANCE')}`, value:`
                        ${codeBlock('➡️ 10%')}      
                        `}
                    )
            break;
            case 'death':
                message = new EmbedBuilder()
                    .setColor(0x0099FF)
                    .setTitle('Death')                                            
                    .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1126207091200229426/theDeath.png')
                    .addFields(
                        {name: `${bold('EFEITO')}` , value:` 
                        ${codeBlock('➡️ Ativa uma caçada amaldiçoada.')}
                        `},
                        {name: `${bold('COR QUEIMADA')}`, value:`
                        ${codeBlock('➡️ Roxo')}               
                        `},
                        {name: `${bold('CHANCE')}`, value:`
                        ${codeBlock('➡️ 10%')}      
                        `}
                    )
            break;
            case 'theHermit':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('The Hermit')                                            
                .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1126207091468685462/theHermit.png')
                .addFields(
                    {name: `${bold('EFEITO')}` , value:` 
                    ${codeBlock('➡️ Teleporta o fantasma para a sala dele e prende ele lá por 1 minuto.')}
                    `},
                    {name: `${bold('COR QUEIMADA')}`, value:`
                    ${codeBlock('➡️ Ciano')}               
                    `},
                    {name: `${bold('CHANCE')}`, value:`
                    ${codeBlock('➡️ 10%')}      
                    `}
                )
            break;
            case 'theSun':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('The Sun')         
                .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1126207091690967060/theSun.png')                                   
                .addFields(
                    {name: `${bold('EFEITO')}` , value:` 
                    ${codeBlock('➡️ Restaura 100% da sanidade do jogador individual.')}
                    `},
                    {name: `${bold('COR QUEIMADA')}`, value:`
                    ${codeBlock('➡️ Amarelo')}               
                    `},
                    {name: `${bold('CHANCE')}`, value:`
                    ${codeBlock('➡️ 5%')}      
                    `}
                )
            break;
            case 'theMoon':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('The Moon')                                            
                .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1126207091946815638/theMoon.png')
                .addFields(
                    {name: `${bold('EFEITO')}` , value:` 
                    ${codeBlock('➡️ Reduz instantaneamente a sanidade do jogador individual para 0%.')}
                    `},
                    {name: `${bold('COR QUEIMADA')}`, value:`
                    ${codeBlock('➡️ Branco')}               
                    `},
                    {name: `${bold('CHANCE')}`, value:`
                    ${codeBlock('➡️ 5%')}      
                    `}
                )
            break;
            case 'theHighPriestess':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('The High Priestes')                                            
                .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1126207092240437398/theHighPreistess.png')
                .addFields(
                    {name: `${bold('EFEITO')}` , value:` 
                    ${codeBlock('➡️ Revive um jogador morto escolhido aleatoriamente em seu cadáver. Se ninguém estiver morto no momento, ele reviverá o próximo jogador que morrer.')}
                    `},
                    {name: `${bold('COR QUEIMADA')}`, value:`
                    ${codeBlock('➡️ Amarelo Claro')}               
                    `},
                    {name: `${bold('CHANCE')}`, value:`
                    ${codeBlock('➡️ 2%')}      
                    `}
                )
            break;
            case 'theHangedMan':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('The Hanged Man')                                            
                .addFields(
                    {name: `${bold('EFEITO')}` , value:` 
                    ${codeBlock('➡️ Mata instantaneamente o jogador.')}
                    `},
                    {name: `${bold('COR QUEIMADA')}`, value:`
                    ${codeBlock('➡️ N/A')}               
                    `},
                    {name: `${bold('CHANCE')}`, value:`
                    ${codeBlock('➡️ 1%')}      
                    `}
                )
            break;
            //MonkeyPaw
            case 'seeGhost':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Eu desejo ver o fantasma')             
                .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1125995161307058176/monkeyPaw.png')                               
                .addFields(
                    {name: `${bold('EFEITOS')}` , value:` 
                    ${codeBlock('➡️ Ativa uma evento fantasma na frente do jogador: O fantasma aparece e a visão do jogador vai ficar escura com uma neblina.')}
                    ${codeBlock('➡️ O fantasma fica parado durante 5 segundos, depois disso uma caçada amaldiçoado é iniciada no lugar onde ele apareceu.')}
                    ${codeBlock('➡️ A visão do jogador vai ficar escura até a caçada amaldiçaoda terminar.')}
                    `},
                    {name: `${bold('LOCALIZAÇÃO NO SUNNY MEADOWS')}`, value:`
                    ${codeBlock('🚩 Manager office')}      
                    `},                                      
                )
                .setFooter({text:'Em Inglês: I wish to see the ghost.'})
            break;
            case 'activity':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Eu desejo por atividade')                
                .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1125995161307058176/monkeyPaw.png')                            
                .addFields(
                    {name: `${bold('EFEITOS')}` , value:` 
                    ${codeBlock('➡️ Duplica toda a atividade do fantasma por 2 minutos, incluindo arremessos, portas, roamings, habilidades e etc.')}
                    ${codeBlock('➡️ A caixa de fusíveis é quebrada e a porta de entrada e fechada por 2 minutos.')}
                    `},
                    {name: `${bold('LOCALIZAÇÃO NO SUNNY MEADOWS')}`, value:`
                    ${codeBlock('🚩 Chapel')}      
                    `},                                      
                )
                .setFooter({text:'Em Inglês: I wish for activity.'})
            break;
            case 'trapGhost':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Eu desejo prender o fantasma')    
                .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1125995161307058176/monkeyPaw.png')                                        
                .addFields(
                    {name: `${bold('EFEITOS')}` , value:` 
                    ${codeBlock('➡️ Teleporta o fantasma para a sua sala favorita, fecha a porta do quarto e o prende lá por 1 minuto, nesse tempo ele não pode caçar, usar habilidade ou fazer roaming.')}
                    ${codeBlock('➡️ O jogador é preso na sala que ele está durante 1 minuto também.')}
                    ${codeBlock('➡️ Depois desse período de 1 minuto, uma caçada amaldiçoada é iniciada.')}
                    `},
                    {name: `${bold('LOCALIZAÇÃO NO SUNNY MEADOWS')}`, value:`
                    ${codeBlock('🚩 Female Dorm Room')}      
                    `},                                      
                )
                .setFooter({text:'Em Inglês: I wish to trap the ghost.'})
            break;
            case 'sanity':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Eu desejo por sanidade')              
                .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1125995161307058176/monkeyPaw.png')                              
                .addFields(
                    {name: `${bold('EFEITOS')}` , value:` 
                    ${codeBlock('➡️ Coloca a sanidade de todos os jogadores para 50%.')}
                    ${codeBlock('➡️ O dreno de sanidade é multiplicado por 1.5.')}
                    ${codeBlock('➡️ A sala favorita do fantasma é trocada por uma aleatória.')}
                    `},
                    {name: `${bold('LOCALIZAÇÃO NO SUNNY MEADOWS')}`, value:`
                    ${codeBlock('🚩 Kitchen')}      
                    `},                                      
                )
                .setFooter({text:'Em Inglês: I wish for sanity.'})
            break;
            case 'safe':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Eu desejo estar seguro')                                            
                .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1125995161307058176/monkeyPaw.png')
                .addFields(
                    {name: `${bold('EFEITOS')}` , value:` 
                    ${codeBlock('➡️ Abre o esconderijo mais próximo do jogador e explode a luz da sala atual do jogador.')}
                    ${codeBlock('➡️ O fantasma, pelo resto do contrato, vai ouvir o jogador que fez o desejo e seus eletrônicos a qualquer distância.')}                    
                    `},
                    {name: `${bold('LOCALIZAÇÃO NO SUNNY MEADOWS')}`, value:`
                    ${codeBlock('🚩 Matron Office 1')}      
                    `},                                      
                )
                .setFooter({text:'Em Inglês: I wish to be safe.'})
            break;
            case 'leave':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Eu desejo sair')                                            
                .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1125995161307058176/monkeyPaw.png')
                .addFields(
                    {name: `${bold('EFEITOS')}` , value:` 
                    ${codeBlock('➡️ Desbloqueia todos as portas de saída ao mesmo tempo, incluindo durante caçadas.')}
                    ${codeBlock('➡️ A velocidade do jogador é diminuida e a visão do jogador é reduzida por 5 segundos.')}                    
                    `},
                    {name: `${bold('LOCALIZAÇÃO NO SUNNY MEADOWS')}`, value:`
                    ${codeBlock('🚩 Hospital Wing')}      
                    `},                                      
                )
                .setFooter({text:'Em Inglês: I wish to leave.'})
            break;
            case 'reviveFriend':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Eu desejo reviver meu amigo')  
                .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1125995161307058176/monkeyPaw.png')                                          
                .addFields(
                    {name: `${bold('EFEITOS')}` , value:` 
                    ${codeBlock('➡️ Revive um jogador morto, mas o jogador que fez o pedido tem 50% de chance de morrer.')}                                   
                    `},
                    {name: `${bold('LOCALIZAÇÃO NO SUNNY MEADOWS')}`, value:`
                    ${codeBlock('🚩 Classroom')}      
                    `},                                      
                )
                .setFooter({text:'Em Inglês: I wish to revive my friend.'})
            break;
            case 'knowledge':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Eu desejo por conhecimento')   
                .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1125995161307058176/monkeyPaw.png')                                         
                .addFields(
                    {name: `${bold('EFEITOS')}` , value:` 
                    ${codeBlock('➡️ Remove 1 evidência do Jornal.')}
                    ${codeBlock('➡️ O fantasma vai começar a caçar próximo do jogador que fez o desejo.')}
                    ${codeBlock('➡️ O jogador vai ter o áudio e a visão reduzidas até o fim da partida.')}
                    `},
                    {name: `${bold('LOCALIZAÇÃO NO SUNNY MEADOWS')}`, value:`
                    ${codeBlock('🚩 Restricted Wing')}      
                    `},                                      
                )
                .setFooter({text:'Em Inglês: I wish for knowledge.'})
            break;
            case 'weather':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Eu desejo por [Clima]')    
                .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1125995161307058176/monkeyPaw.png')                                        
                .addFields(
                    {name: `${bold('EFEITOS')}` , value:` 
                    ${codeBlock('➡️ Climas: Nascer do Sol, Chuva forte ou leve, Céu limpo, Neblina, Neve e vento.')}
                    ${codeBlock('➡️ Muda o clima da partida para o qual você pediu.')}
                    ${codeBlock('➡️ O jogador vai perder 25% da sanidade.')}
                    ${codeBlock('➡️ Se pedir por clima de chuva, tem 50% de chance de vir chuva leve ou pesada.')}
                    `},
                    {name: `${bold('LOCALIZAÇÃO NO SUNNY MEADOWS')}`, value:`
                    ${codeBlock('🚩 Morgue')}      
                    `},                                      
                )
                .setFooter({text:'Em Inglês: I wish for[Weather(Sun, Rain, Clear Sky, Fog, Snow, Wind)].'})
            break;
            case 'anything':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Eu desejo qualquer coisa')                                            
                .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1125995161307058176/monkeyPaw.png')
                .addFields(
                    {name: `${bold('EFEITOS')}` , value:` 
                    ${codeBlock('➡️ Aciona um dos desejos não usados.')}                   
                    `},
                    {name: `${bold('LOCALIZAÇÃO NO SUNNY MEADOWS')}`, value:`
                    ${codeBlock('🚩 Waiting Room')}      
                    `},                                      
                )
                .setFooter({text:'Em Inglês: I wish for anything.'})
            break;          
            //Ouija  
            case 'whereAreYou':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Onde você está?')                                            
                .setDescription(`${codeBlock('Retorna a sala atual do fantasma, não a sala favorita.')}`)
                .addFields(
                    {name: `${bold('RESPOSTA')}` , value:` 
                    ${codeBlock('➡️ Retorna o nome da sala do fantasma em inglês de acordo com o mapa.')}                   
                    `},
                    {name: `${bold('DRENO DE SANIDADE')}`, value:`
                    ${codeBlock('🧠 50%')}      
                    `},                                      
                )
                .setFooter({text:'Em Inglês: Where are you?'})
            break;
            case 'bone':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Onde está o osso?')                                            
                .setDescription(`${codeBlock('Retorna o nome da sala atual do osso')}`)
                .addFields(
                    {name: `${bold('RESPOSTA')}` , value:` 
                    ${codeBlock('➡️ Retorna o nome da sala do osso em inglês de acordo com o mapa.')}                   
                    `},
                    {name: `${bold('DRENO DE SANIDADE')}`, value:`
                    ${codeBlock('🧠 50%')}      
                    `},                                      
                )
                .setFooter({text:'Em Inglês: Where is the bone?'})
            break;
            case 'allAnswer':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Você responde a todos?')                                            
                .setDescription(`${codeBlock('Essa resposta vai dizer se ele responde sozinho ou à todos.')}`)
                .addFields(
                    {name: `${bold('RESPOSTA')}` , value:` 
                    ${codeBlock('➡️ Sim / Não.')}
                    `},
                    {name: `${bold('DRENO DE SANIDADE')}`, value:`
                    ${codeBlock('🧠 20%')}      
                    `},                                      
                )
                .setFooter({text:'Em Inglês: Do you respond to everyone?'})
            break;
            case 'age':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Qual a sua idade?')                                            
                .setDescription(`${codeBlock('É uma idade gerada aleatoriamente entre o 2 à 90.')}`)
                .addFields(
                    {name: `${bold('RESPOSTA')}` , value:` 
                    ${codeBlock('➡️ 2-90.')}
                    `},
                    {name: `${bold('DRENO DE SANIDADE')}`, value:`
                    ${codeBlock('🧠 5%')}      
                    `},                                      
                )
                .setFooter({text:'Em Inglês: How old are you?'})
            break;                    
            case 'die':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Como você morreu?')                                            
                .setDescription(`${codeBlock('A causa da morte do fantasma.')}`)
                .addFields(
                    {name: `${bold('RESPOSTA')}` , value:` 
                    ${codeBlock('➡️ Accident, Drowned, Choked, Murder, Shot, Fell, Slipped.')}
                    `},
                    {name: `${bold('DRENO DE SANIDADE')}`, value:`
                    ${codeBlock('🧠 5%')}      
                    `},                                      
                )
                .setFooter({text:'Em Inglês: How did you die?'})            
            break;
            case 'hideSeek':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Esconde-Esconde?')                                            
                .setDescription(`${codeBlock('O ouija vai começar um contador que se inicia no 5 e vai até 0. Chegado em 0 o ouija se quebra e uma caçada amaldiçoada começa.')}`)
                .addFields(
                    {name: `${bold('RESPOSTA')}` , value:` 
                    ${codeBlock('➡️ Conta de 5 até 0.')}
                    `},
                    {name: `${bold('DRENO DE SANIDADE')}`, value:`
                    ${codeBlock('🧠 0%')}      
                    `},                                      
                )
                .setFooter({text:'Em Inglês: Hide and seek?'})            
            break;
            case 'crazy':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Eu sou maluco?')                                            
                .setDescription(`${codeBlock('Essa questão retorna uma estimativa da sanidade do jogador.')}`)
                .addFields(
                    {name: `${bold('RESPOSTA')}` , value:` 
                    ${codeBlock('➡️ > 50%: Not Very.')}
                    ${codeBlock('➡️ 25% - 50%: Very.')}
                    ${codeBlock('➡️ < 25%: Insane.')}
                    `},
                    {name: `${bold('DRENO DE SANIDADE')}`, value:`
                    ${codeBlock('🧠 5%')}      
                    `},                                      
                )
                .setFooter({text:'Em Inglês: How crazy am I?'})            
            break;
            case 'insane':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Quão Sã eu sou?')                                            
                .setDescription(`${codeBlock('Essa questão retorna uma estimativa da sanidade do jogador.')}`)
                .addFields(
                    {name: `${bold('RESPOSTA')}` , value:` 
                    ${codeBlock('➡️ > 90%: No.')}
                    ${codeBlock('➡️ 20% - 90%: Maybe.')}
                    ${codeBlock('➡️ < 20%: Yes.')}
                    `},
                    {name: `${bold('DRENO DE SANIDADE')}`, value:`
                    ${codeBlock('🧠 5%')}      
                    `},                                      
                )
                .setFooter({text:'Em Inglês: "Am I insane?'})            
            break;
            //Others            
            case 'musicaBox':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('CAIXA DE MÚSICA')                        
                .setDescription('Uma vez ativada, a caixa de música vai fazer o fantasma cantar, mostrando assim a sua localização.')       
                .addFields(
                    {name: `${bold('ATIVAÇÃO E USO')}` , value:` 
                    ${quote('➡️ Quando pegar a caixa, ela vai se abrir e para ligar ela, aperte o botão direito do mouse.')}
                    ${quote('➡️ Quando atividada, a caixa de música irá reproduzir uma música, com isso o fantasma vai cantar junto com ela, mostrando sua atual localização.')}
                    ${quote('➡️ O fantasma vai se manifestar e andar em direção a ela, se a caixa estiver 5 metros dele.')}
                    ${quote('➡️ A Caixa de músiva pode ficar na sua mão ou colocada no chão.')}
                    ${quote('➡️ Ela só pode ser USADA UMA VEZ!')}
                    `},
                    {name: `${bold('CAÇADA AMALDIÇOADA')}`, value:`
                    ${quote('➡️ Ao usar a caixa de música, você pode começar uma caçada amaldiçoada dependendo das condições:')}
                    ${quote('➡️ Se o fantasma estiver a uma curta distância da caixa de música, ele vai andar por mais de 5 segundos durante o evento fantasma e logo em seguida, começando a caçar.')}
                    ${quote('➡️ Se a caixa for jogada no chão, enquanto está tocando, irá começar a caçar.')}
                    ${quote('➡️ Em vez disso, uma caçada normal vai acontecer se o jogador atingir ou já estiver com 0% de sanidade.')}                    
                    `},
                    {name: `${bold('OUTROS EFEITOS')}`, value:`
                    ${quote('➡️ Se qualquer jogador estiver aproximadamente 2.5 metros enquanto a caixa de música está tocando, ela vai drenar 2.5% por segundo da sanidade.')}      
                    `}
                )
                .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1125989685903245402/musicBox_Image.png?width=501&height=501')        
                .setImage('https://media.discordapp.net/attachments/1117126812758188112/1125989936353525780/Music_box_activation.gif')
            break;
            case 'voodooDoll':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('BONECO VOODO')                        
                .setDescription('O Boneco Voodo tem um total de 10 pinos para serem apertados.')       
                .addFields(
                    {name: `${bold('MECÂNICAS')}` , value:` 
                    ${quote('➡️ Interagindo com o Voodo com o botão direito, vai ser acionado 1 dos 10 pinos de modo aleatório.')}
                    ${quote('➡️ Cada pino pressionado vai disparar uma interação do fantasma e dropar 5% da sua sanidade.')}
                    ${quote('➡️ Força interações podem incluir algumas envidências, como Escrita Fantasma, Projetor DOTS e Impressões digitais.')}
                    `},
                    {name: `${bold('CAÇADA AMALDIÇOADA')}`, value:`
                    ${quote('➡️ Se o alfinete do coração for pressionado, a sanidade do jogador cairá 10% e o fantasma iniciará uma caçada amaldiçoada.')}                    
                    `},
                    {name: `${bold('OUTROS EFEITOS')}`, value:`
                    ${quote('➡️ Se a sanidade do jogador for menor do que o alfinete pressionado drenaria, todos os alfinetes restantes também serão empurradaos e uma caçada amaldiçoada ocorrerá.')}      
                    `}
                )
                .setImage('https://media.discordapp.net/attachments/1117126812758188112/1125989338510012436/voodoDool_Image.png');
            break;
            case 'hauntedMirror':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('ESPELHO AMALDIÇOADO')                        
                .setDescription('O Espelho Amaldiçoado mostrará uma parte do cômodo favorito do fantasma.')       
                .addFields(
                    {name: `${bold('MECÂNICAS')}` , value:` 
                    ${quote('➡️ Interagindo com o Espelho com o botão direito, mostrará uma parte do cômodo favorito do fantasma fazendo um parorama.')}
                    ${quote('➡️ Cada uso do espelho drena 7.5% da sua sanidade, ou seja, quanto mais tempo você fica olhando no espelho ativo, mas a sua sanidade vai ser drenada.')}
                    ${quote('➡️ Isso significa, se você usar o espelho por ~2,67 segundos, ainda drenará pelo menos 20% da sua sanidade. Isso inclui a animação de levantar, mas não de abaixar.')}
                    `},
                    {name: `${bold('CAÇADA AMALDIÇOADA')}`, value:`
                    ${quote('➡️ Se a sanidade do jogador chegar a ZERO, o espelho vai se quebrar e uma caçada vai começar.')}                    
                    `}
                )
                .setImage('https://media.discordapp.net/attachments/1117126812758188112/1125988391322923008/hauntedMirror.gif')
                .setThumbnail('https://media.discordapp.net/attachments/1117126812758188112/1125988644809871430/hauntedMirro_Image.png?width=416&height=501')
            break;
            case 'summoningCircle':
                message = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('CÍRCULO DE INVOCAÇÃO')                        
                .setDescription('Quando acesso, o fantasma fica preso no meio dele.')       
                .addFields(
                    {name: `${bold('MECÂNICAS')}` , value:` 
                    ${quote('➡️ Pode ser usado acendendo todas as cinco velas vermelhas com um isqueiro.')}
                    ${quote('➡️ Cada vela diminui 16% da sanidade dos jogadores próximos, totalizando 80% para todas as velas.')}
                    ${quote('➡️ Uma vez que todas as velas estão acessas, o fantasma é convocado e totalmente materializado.')}
                    ${quote('➡️ O fantasma fica 5 segundos imovél, incapaz de matar qualquer jogador, esse período é considerado um evento fantasma.')}
                    `},
                    {name: `${bold('CAÇADA AMALDIÇOADA')}`, value:`
                    ${quote('➡️ Após os 5 segundos, inicia-se uma caçada amaldiçoada no local, sem nenhum período de imunidade.')}                    
                    `},
                    {name: `${bold('OUTROS EFEITOS')}`, value:`
                    ${quote('➡️ Em certos casos não haverá um evento fantasma e ele vai começar a caçar logo em seguida. Isso ocorre se o jogador tiver 16% ou menos de sanidade ao acender a última vela.')}      
                    `}
                )
                .setImage('https://media.discordapp.net/attachments/1117126812758188112/1125987299910496367/SummoningCircle.jpeg?width=783&height=501')   
            break;
        }
        await interaction.reply({embeds: [message], ephemeral: true});
    }
}