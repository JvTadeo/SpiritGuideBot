const { EmbedBuilder, quote, bold, codeBlock, inlineCode, blockQuote} = require('discord.js');
module.exports = {
    async execute(interaction, client){        
        let difficultyExplain = new EmbedBuilder();
        const apoI = client.emojis.cache.find(emoji => emoji.name === 'ApocISticker');
        const apoII = client.emojis.cache.find(emoji => emoji.name === 'ApocIISaticker');
        const apoIII = client.emojis.cache.find(emoji => emoji.name === 'ApocIIISticker');
        switch(interaction.values.toString())                               
        {
            case 'amateur':                
                difficultyExplain
                .setColor(0x0099FF)
                .setTitle('Amador')                        
                .setDescription('Recomendado Para Novos Caçadores de Fantasmas.')                            
                .addFields(
                    { name: `${bold("JOGADOR | 😀")}`, value:'\n'},
                    { name: `Desbloqueado`, value: `${quote(`${inlineCode('Nível 1')}`)}`, inline:true},
                    { name: `Recompesa`, value: `${quote(`${inlineCode('1x')}`)}`, inline:true},                    
                    { name: `Sanidade Inicial`, value: `${quote(`${inlineCode('100%')}`)}`, inline:true},
                    { name: `Consumo de Sanidade`, value:`${quote(`${inlineCode('1x')}`)}`, inline:true},
                    { name: `Restaurações das Pílulas`, value:`${quote(`${inlineCode('40%')}`)}`, inline:true},
                    { name: `Seguro`, value:`${quote(`${inlineCode('50% do valor dos itens perdidos para jogadores mortos.')}`)}\n`, inline:true },             
                           
                    { name: `${bold("FANTASMA | 👻")}`, value:'\n'},
                    { name: `Frequência de Atividade do Fantasma`, value:`${quote(`${inlineCode('Alta')}`)}`, inline:true},
                    { name: `Tempo de Caçada`, value: `${quote(`${inlineCode('Curto')}`)}`, inline:true},
                    { name: `Chance de Trocar de Sala Favorita`, value: `${quote(`${inlineCode('Nenhuma')}`)}`, inline:true},
                    { name: `Morte Extende Caçada`, value: `${quote(`${inlineCode('Não')}`)}`, inline:true},
                    { name: `Evidências`, value: `${quote(`${inlineCode('3')}`)}`, inline:true},
                    { name: `Tempo de Impressão`, value: `${quote(`${inlineCode('120s')}`)}`, inline:true},
                    { name: `Período de Imunidade`, value: `${quote(`${inlineCode('5s')}`)}`},

                    { name: '\n', value:'\n'},  
                    { name: `\n${bold("CONTRATO | ✒️")}`, value:'\n'},
                    { name: 'Portas Abertas', value: `${quote(`${inlineCode('Nenhuma')}`)}`, inline:true},
                    { name: 'Esconderijos', value: `${quote(`${inlineCode('Muito Alto')}`)}`, inline:true},
                    { name: 'Monitor de Sanidade e Atividade', value: `${quote(`${inlineCode('Sim')}`)}`, inline:true},
                    { name: 'Quadro de Objetivo Específica se Responde a Todos ou Sozinho', value: `${quote(`${inlineCode('Sim')}`)}`, inline:true},
                    { name: 'Caixa de Fusíveis Aparece no Mapa', value: `${quote(`${inlineCode('Sim')}`)}`, inline:true},
                    { name: 'Caixa de Fusíveis Começa Ligada', value: `${quote(`${inlineCode('Sim')}`)}`, inline:true},
                    { name: 'Tempo de Preparação', value: `${quote(`${inlineCode('5 Minutos')}`)}`, inline: true},
                    { name: 'Quantidade de Objetos Amaldiçoados', value:  `${quote(`${inlineCode('1')}`)}`, inline: true},
                )
            break;         
            case 'intermediate':                
                difficultyExplain
                .setColor(0x0099FF)
                .setTitle('Intermediário')                        
                .setDescription('A Experiência Padrão de Caça Fantasma.')                            
                .addFields(
                    { name: `${bold("JOGADOR | 😀")}`, value:'\n'},
                    { name: `Desbloqueado`, value: `${quote(`${inlineCode('Nível 10')}`)}`, inline:true},
                    { name: `Recompesa`, value: `${quote(`${inlineCode('2x')}`)}`, inline:true},                    
                    { name: `Sanidade Inicial`, value: `${quote(`${inlineCode('100%')}`)}`, inline:true},
                    { name: `Consumo de Sanidade`, value:`${quote(`${inlineCode('1.5x')}`)}`, inline:true},
                    { name: `Restaurações das Pílulas`, value:`${quote(`${inlineCode('35%')}`)}`, inline:true},
                    { name: `Seguro`, value:`${quote(`${inlineCode('25% do valor dos itens perdidos para jogadores mortos.')}`)}\n`, inline:true },             
                        
                    { name: `${bold("FANTASMA | 👻")}`, value:'\n'},
                    { name: `Frequência de Atividade do Fantasma`, value:`${quote(`${inlineCode('Média')}`)}`, inline:true},
                    { name: `Tempo de Caçada`, value: `${quote(`${inlineCode('Média')}`)}`, inline:true},
                    { name: `Chance de Trocar de Sala Favorita`, value: `${quote(`${inlineCode('Nenhuma')}`)}`, inline:true},
                    { name: `Morte Extende Caçada`, value: `${quote(`${inlineCode('Não')}`)}`, inline:true},
                    { name: `Evidências`, value: `${quote(`${inlineCode('3')}`)}`, inline:true},
                    { name: `Tempo de Impressão`, value: `${quote(`${inlineCode('120s')}`)}`, inline:true},
                    { name: `Período de Imunidade`, value: `${quote(`${inlineCode('4s')}`)}`},

                    { name: '\n', value:'\n'},  
                    { name: `\n${bold("CONTRATO | ✒️")}`, value:'\n'},
                    { name: 'Portas Abertas', value: `${quote(`${inlineCode('Poucas')}`)}`, inline:true},
                    { name: 'Esconderijos', value: `${quote(`${inlineCode('Alto')}`)}`, inline:true},
                    { name: 'Monitor de Sanidade e Atividade', value: `${quote(`${inlineCode('Sim')}`)}`, inline:true},
                    { name: 'Quadro de Objetivo Específica se Responde a Todos ou Sozinho', value: `${quote(`${inlineCode('Não')}`)}`, inline:true},
                    { name: 'Caixa de Fusíveis Aparece no Mapa', value: `${quote(`${inlineCode('Sim')}`)}`, inline:true},
                    { name: 'Caixa de Fusíveis Começa Ligada', value: `${quote(`${inlineCode('Não')}`)}`, inline:true},
                    { name: 'Tempo de Preparação', value: `${quote(`${inlineCode('2 Minutos')}`)}`, inline: true},
                    { name: 'Quantidade de Objetos Amaldiçoados', value:  `${quote(`${inlineCode('1')}`)}`, inline: true},
                )
            break;
            case 'professional':                
                difficultyExplain
                .setColor(0x0099FF)
                .setTitle('Profissional')                        
                .setDescription('Para Caçadores de Fantasmas Experientes.')                            
                .addFields(
                    { name: `${bold("JOGADOR | 😀")}`, value:'\n'},
                    { name: `Desbloqueado`, value: `${quote(`${inlineCode('Nível 15')}`)}`, inline:true},
                    { name: `Recompesa`, value: `${quote(`${inlineCode('3x')}`)}`, inline:true},                    
                    { name: `Sanidade Inicial`, value: `${quote(`${inlineCode('100%')}`)}`, inline:true},
                    { name: `Consumo de Sanidade`, value:`${quote(`${inlineCode('2x')}`)}`, inline:true},
                    { name: `Restaurações das Pílulas`, value:`${quote(`${inlineCode('30%')}`)}`, inline:true},
                    { name: `Seguro`, value:`${quote(`${inlineCode('Não Tem.')}`)}\n`, inline:true },             
                        
                    { name: `${bold("FANTASMA | 👻")}`, value:'\n'},
                    { name: `Frequência de Atividade do Fantasma`, value:`${quote(`${inlineCode('Baixa')}`)}`, inline:true},
                    { name: `Tempo de Caçada`, value: `${quote(`${inlineCode('Longo')}`)}`, inline:true},
                    { name: `Chance de Trocar de Sala Favorita`, value: `${quote(`${inlineCode('Baixo')}`)}`, inline:true},
                    { name: `Morte Extende Caçada`, value: `${quote(`${inlineCode('Não')}`)}`, inline:true},
                    { name: `Evidências`, value: `${quote(`${inlineCode('3')}`)}`, inline:true},
                    { name: `Tempo de Impressão`, value: `${quote(`${inlineCode('120s')}`)}`, inline:true},
                    { name: `Período de Imunidade`, value: `${quote(`${inlineCode('3s')}`)}`},

                    { name: '\n', value:'\n'},  
                    { name: `\n${bold("CONTRATO | ✒️")}`, value:'\n'},
                    { name: 'Portas Abertas', value: `${quote(`${inlineCode('Médio')}`)}`, inline:true},
                    { name: 'Esconderijos', value: `${quote(`${inlineCode('Médio')}`)}`, inline:true},
                    { name: 'Monitor de Sanidade e Atividade', value: `${quote(`${inlineCode('Sim')}`)}`, inline:true},
                    { name: 'Quadro de Objetivo Específica se Responde a Todos ou Sozinho', value: `${quote(`${inlineCode('Não')}`)}`, inline:true},
                    { name: 'Caixa de Fusíveis Aparece no Mapa', value: `${quote(`${inlineCode('Sim')}`)}`, inline:true},
                    { name: 'Caixa de Fusíveis Começa Ligada', value: `${quote(`${inlineCode('Não')}`)}`, inline:true},
                    { name: 'Tempo de Preparação', value: `${quote(`${inlineCode('Não Tem.')}`)}`, inline: true},
                    { name: 'Quantidade de Objetos Amaldiçoados', value:  `${quote(`${inlineCode('1')}`)}`, inline: true},
                )
            break;
            case 'nightmare':                
                difficultyExplain
                .setColor(0x0099FF)
                .setTitle('Pesadelo')                        
                .setDescription('Um Desafio Para o Melhor dos Melhores.')                            
                .addFields(
                    { name: `${bold("JOGADOR | 😀")}`, value:'\n'},
                    { name: `Desbloqueado`, value: `${quote(`${inlineCode('Nível 20')}`)}`, inline:true},
                    { name: `Recompesa`, value: `${quote(`${inlineCode('4x')}`)}`, inline:true},                    
                    { name: `Sanidade Inicial`, value: `${quote(`${inlineCode('100%')}`)}`, inline:true},
                    { name: `Consumo de Sanidade`, value:`${quote(`${inlineCode('2x')}`)}`, inline:true},
                    { name: `Restaurações das Pílulas`, value:`${quote(`${inlineCode('25%')}`)}`, inline:true},
                    { name: `Seguro`, value:`${quote(`${inlineCode('Não Tem.')}`)}\n`, inline:true },             
                        
                    { name: `${bold("FANTASMA | 👻")}`, value:'\n'},
                    { name: `Frequência de Atividade do Fantasma`, value:`${quote(`${inlineCode('Baixa')}`)}`, inline:true},
                    { name: `Tempo de Caçada`, value: `${quote(`${inlineCode('Longo')}`)}`, inline:true},
                    { name: `Chance de Trocar de Sala Favorita`, value: `${quote(`${inlineCode('Médio')}`)}`, inline:true},
                    { name: `Morte Extende Caçada`, value: `${quote(`${inlineCode('Sim, Baixo')}`)}`, inline:true},
                    { name: `Evidências`, value: `${quote(`${inlineCode('2')}`)}`, inline:true},
                    { name: `Tempo de Impressão`, value: `${quote(`${inlineCode('120s')}`)}`, inline:true},
                    { name: `Período de Imunidade`, value: `${quote(`${inlineCode('2s')}`)}`},

                    { name: '\n', value:'\n'},  
                    { name: `\n${bold("CONTRATO | ✒️")}`, value:'\n'},
                    { name: 'Portas Abertas', value: `${quote(`${inlineCode('Alto')}`)}`, inline:true},
                    { name: 'Esconderijos', value: `${quote(`${inlineCode('Pouco')}`)}`, inline:true},
                    { name: 'Monitor de Sanidade e Atividade', value: `${quote(`${inlineCode('Não')}`)}`, inline:true},
                    { name: 'Quadro de Objetivo Específica se Responde a Todos ou Sozinho', value: `${quote(`${inlineCode('Não')}`)}`, inline:true},
                    { name: 'Caixa de Fusíveis Aparece no Mapa', value: `${quote(`${inlineCode('Não')}`)}`, inline:true},
                    { name: 'Caixa de Fusíveis Começa Ligada', value: `${quote(`${inlineCode('Não')}`)}`, inline:true},
                    { name: 'Tempo de Preparação', value: `${quote(`${inlineCode('Não Tem.')}`)}`, inline: true},
                    { name: 'Quantidade de Objetos Amaldiçoados', value:  `${quote(`${inlineCode('1')}`)}`, inline: true},
                )
            break;
            case 'insanity':                
                difficultyExplain
                .setColor(0x0099FF)
                .setTitle('Insano')                        
                .setDescription('Sentindo-se corajoso? Esses Fantasmas Não Brincam...')                            
                .addFields(
                    { name: `${bold("JOGADOR | 😀")}`, value:'\n'},
                    { name: `Desbloqueado`, value: `${quote(`${inlineCode('Nível 25')}`)}`, inline:true},
                    { name: `Recompesa`, value: `${quote(`${inlineCode('6x')}`)}`, inline:true},                    
                    { name: `Sanidade Inicial`, value: `${quote(`${inlineCode('75%')}`)}`, inline:true},
                    { name: `Consumo de Sanidade`, value:`${quote(`${inlineCode('2x')}`)}`, inline:true},
                    { name: `Restaurações das Pílulas`, value:`${quote(`${inlineCode('20%')}`)}`, inline:true},
                    { name: `Seguro`, value:`${quote(`${inlineCode('Não Tem.')}`)}\n`, inline:true },             
                        
                    { name: `${bold("FANTASMA | 👻")}`, value:'\n'},
                    { name: `Frequência de Atividade do Fantasma`, value:`${quote(`${inlineCode('Baixa')}`)}`, inline:true},
                    { name: `Tempo de Caçada`, value: `${quote(`${inlineCode('Longo')}`)}`, inline:true},
                    { name: `Chance de Trocar de Sala Favorita`, value: `${quote(`${inlineCode('Alta')}`)}`, inline:true},
                    { name: `Morte Extende Caçada`, value: `${quote(`${inlineCode('Sim, Baixo')}`)}`, inline:true},
                    { name: `Evidências`, value: `${quote(`${inlineCode('1')}`)}`, inline:true},
                    { name: `Tempo de Impressão`, value: `${quote(`${inlineCode('60s')}`)}`, inline:true},
                    { name: `Período de Imunidade`, value: `${quote(`${inlineCode('2s')}`)}`},

                    { name: '\n', value:'\n'},  
                    { name: `\n${bold("CONTRATO | ✒️")}`, value:'\n'},
                    { name: 'Portas Abertas', value: `${quote(`${inlineCode('Alto')}`)}`, inline:true},
                    { name: 'Esconderijos', value: `${quote(`${inlineCode('Baixo')}`)}`, inline:true},
                    { name: 'Monitor de Sanidade e Atividade', value: `${quote(`${inlineCode('Não')}`)}`, inline:true},
                    { name: 'Quadro de Objetivo Específica se Responde a Todos ou Sozinho', value: `${quote(`${inlineCode('Não')}`)}`, inline:true},
                    { name: 'Caixa de Fusíveis Aparece no Mapa', value: `${quote(`${inlineCode('Não')}`)}`, inline:true},
                    { name: 'Caixa de Fusíveis Começa Ligada', value: `${quote(`${inlineCode('Não')}`)}`, inline:true},
                    { name: 'Tempo de Preparação', value: `${quote(`${inlineCode('Não Tem.')}`)}`, inline: true},
                    { name: 'Quantidade de Objetos Amaldiçoados', value:  `${quote(`${inlineCode('0')}`)}`, inline: true},
                )
            break;
            case 'apo':                
                difficultyExplain = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('Apocalypse')                        
                .setDescription('Desafio do Apocalypse, foi introduzido na atualização do "Apocalypse Update". Com as dificuldades personalizadas, é um desafio criado para que os jogadores jogarem nas dificuldades mais difíceis e conseguir os objetivos. Segue os requisitos para este desafio')                            
                .addFields(
                    { name: `${bold("REQUISITOS")}`, value:`${codeBlock('➡️ Criar Uma Dificuldade Personalizada\n➡️ Jogar Sozinho no Sunny Meadows Mental Institution\n➡️ Completar os 3 Objetivos\n➡️ Tirar uma Foto do Fantasma e Descobrir o Tipo')}
                    `})
                .addFields(
                    {name:'TROFÉIS', 
                    value:`${codeBlock('❗Depois que o jogador concluir o contrato com sucesso, os troféus serão concedidos automaticamente com base no conjunto de dificuldade personalizado.\n❗Nenhuma outra ação é necessária após a conclusão. Uma vez obtidos, esses troféus serão exibidos no lobby.\n❗A conclusão de um multiplicador mais alto recompensará automaticamente os troféus dos multiplicadores mais baixos; todos os três troféus podem ser obtidos no mesmo contrato multiplicador de 15x.\n❗Este desafio é permanente.')}
                    `},
                    { name: 'MULTIPLACADORES', value:`
                    ${quote(`Multiplicador 6x ou Maior: Troféu de Bronze ${apoI}`)}
                    ${quote(`Multiplicador 10x ou Maior: Troféu de Prata ${apoII}`)}
                    ${quote(`Multiplicador 15x: Troféu de Ouro ${apoIII}`)}`}
                )
            break;
        }        
        await interaction.reply({embeds: [difficultyExplain], ephemeral: true});
    }
}