const { ClientEvents, EmbedBuilder } = require('discord.js');
const embedConstructor = require('./Constructors/embedGhostConstructor.js');

module.exports = {
    async execute(interaction){
        let title = '', description = '', evidence = '', habilits = '', weakness = '';
        let embed = undefined;    
        switch (interaction.values.toString()) {
            case 'spirit':
                title = 'Spirit';
                description = 'Um Spirit é o fantasma mais comum que você encontrará, porém, ainda é muito poderoso e perigoso. Eles geralmente são descobertos em um dos seus campos de caça após uma morte inexplicada.';
                evidence = "EMF Nível 5, Spirit Box, Escrita fantasma";
                habilits = 'Nenhuma habilidade.';
                weakness = 'Usar incenso em um Spirit irá impedi-lo de atacar por um longo período de tempo.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);                
                break;
            case 'wraith':
                title = 'Wraith';
                description = 'Um Wraith é um dos fantasmas mais perigosos que você encontrará. É também o único fantasma conhecido que tem a habilidade de voar e às vezes é conhecido por viajar através de parades.';
                evidence = "EMF Nível 5, Spirit Box, Projetor DOTS";
                habilits = 'Os wraiths quase nunca tocam no solo, o que significa que não podem ser rastreados por passos.';
                weakness = 'Wraiths têm uma reação tóxicas ao sal.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);                
                break;
            case 'phantom':
                title = 'Phantom';
                description = 'Um Phantom é um fantasma que pode possuir os vivos, mas comumente convocado por um Tabuleiro Ouija. Também induz medo nas pessoas ao seu redor.';
                evidence = "Spirit Box, Impressões Digitas, Projetor DOTS";
                habilits = 'Olhar para um Phantom diminuirá consideravelmente a sua sanidade.';
                weakness = 'Tirar uma foto do fantasma fará com que ele desapareça temporariamente.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'poltergeist':
                title = 'Poltergeist';
                description = 'Um dos fantasmas mais famosos, um Poltergeist, também conhecido como fantasma barulhento, pode manipular objetos ao seu redor para espalhar o medo nas suas vítimas.';
                evidence = "Spirit Box, Impressões Digitas, Escrita Fantasma";
                habilits = 'Um poltergeist pode lançar grandes quantidades de objetos de uma vez.';
                weakness = 'Um poltergeist é quase ineficaz em uma sala vazia.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'banshee':
                title = 'Banshee';
                description = 'O canto da sereia, é conhecido por atrair as suas vítimas através da música. Ela é conhecida por isolar a sua presa antes de dar um golpe mortal.';
                evidence = "Impressões Digitais, Orbe Fantasma, Projetor DOTS";
                habilits = 'Um Banshee enfraquecerá o seu alvo antes de atacar.';
                weakness = 'Os Banshees podem ser ouvidos através de um microfone parabólico.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'jinn':
                title = 'Jinn';
                description = 'Um Jinn é um fantasma territorial que vai atacar quando ameaçado. Também é conhecido por ser capaz de andar a uma velocidade significativa.';
                evidence = "EMF Nível 5, Impressões Digitais, Temperatura Baixa";
                habilits = 'Um Jinn ficará mais rápido se a vítima estiver longe.';
                weakness = 'Desligar a fonte de energia do local impedirá o Jinn de usar sua habilidade.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'mare':
                title = 'Mare';
                description = 'Um Mare é a fonte de todos os pesadelos, tornando-se mais poderoso no escuro.';
                evidence = "Spirit-Box, Orbe Fantasma, Escrita Fantasma";
                habilits = 'Um Mare terá uma chance maior de atacar no escuro.';
                weakness = 'Ligar as luzes ao redor do Mare reduzirá a sua chance de ataque.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'revenant':
                title = 'Revenant';
                description = 'Um Revenant é um fantasma lento mas violento, que atacará indiscriminadamente. Há rumores de que ele viaja a uma velocidade significativamente alta durante a caça.';
                evidence = "Temperatura Baixa, Orbe Fantasma, Escrita Fantasma";
                habilits = 'Um Revenant irá viajar a uma velocidade significativamente mais rápido ao caçar uma vítima.';
                weakness = 'Esconder-se do Revenant fará com que ele se mova muito lentamente.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'shade':
                title = 'Shade';
                description = 'Um Shade é conhecido por ser um fantasma tímido. Há evidências de que um Shade interromperá todas as atividades paranormais se houver várias pessoas por perto.';
                evidence = "Temperatura Baixa, EMF Nível 5, Escrita Fantasma";
                habilits = 'Ser tímido significa que o fantasma será mais difícil de encontrar.';
                weakness = 'O fantasma não entrará no modo de caça se houver várias pessoas por perto.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'demon':
                title = 'Demon';
                description = 'Demônios são os fantasmas mais agressivos que já encontramos. Conhecidos por atacar sem motivo, eles parecem gostar da emoção da caça';
                evidence = "Temperatura Baixa, Impressões Digitais, Escrita Fantasma";
                habilits = 'Os Demônios iniciarão caçadas com mais frequências do que outros fantasmas.';
                weakness = 'Demônios temem o crucifixo e serão menos agressivos perto de um.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'yurei':
                title = 'Yurei';
                description = 'Um Yurei é um fantasma que voltou ao mundo físico, geralmente com o propósito de vingança ou ódio';
                evidence = "Temperatura Baixa, Orbe Fantasma, Projetor DOTS";
                habilits = 'Yurei é conhecido por ter um efeito mais forte na sanidade das pessoas.';
                weakness = 'Acender incensos na sala onde o Yurei está, fará com que ele fique preso no local dele por um tempo.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'oni':
                title = 'Oni';
                description = 'Os Onis adoram assustar sua vítimas tanto quanto puderem antes de atacar. São geralmente vistos em sua forma física, guardando seu local de morte';
                evidence = "Temperatura Baixa, EMF Nível 5, Projetor DOTS";
                habilits = 'Os Oni são mais ativos quando as pessoas estão por perto e são vistas movendo objetos a grandes velocidades.';
                weakness = 'Ser mais ativo tornará o Oni mais fácil de encontrar e identificar.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'youkai':
                title = 'Youkai';
                description = 'Um Youkai é um tipo comum de fantasma que é atraído por vozes humanas. Eles geralmente podem ser encontrados em casas de família assombradas.';
                evidence = "Spirit-Box, Orbe Fantasma, Projetor DOTS";
                habilits = 'Falar perto de um Youkai irá irritá-lo e aumentar a sua chance de ataque.';
                weakness = 'Ao caçar, um Youkai só pode ouvir vozes próximas dele.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'hantu':
                title = 'Hantu';
                description = 'Um Hantu é um fantasma raro que prospera nos climas mais gelados. O frio parece torná-los mais agressivos e poderosos.';
                evidence = "Temperatura Baixa, Orbe Fantasma, Impressões Digitais";
                habilits = 'As temperaturas mais baixas podem fazer com que o Hantu se mova a velocidades mais rápidas.';
                weakness = 'Um Hantu irá mover-se mais devagar em áreas mais quentes.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'goryo':
                title = 'Goryo';
                description = 'Quando um Goryo passar por um projetor DOTS, usar uma câmera de vídeo é a única maneira de vê-lo.';
                evidence = "EMF Nível 5, Projetor DOTS, Impressões Digitais";
                habilits = 'Um Goryo normalmente só se mostra na câmera se não houver pessoas por perto.';
                weakness = 'Eles raramente são visto longe do seu local de morte.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'myling':
                title = 'Myling';
                description = 'Um Myling é um fantasma muito ativo e vocal. Há rumores de que ficam quietos quando caças as suas presas.';
                evidence = "EMF Nível 5, Escrita Fantasma, Impressões Digitais";
                habilits = 'Um Myling é conhecido por ser mais silecioso enquanto está a caçar.';
                weakness = 'Mylings emitem sons paranormais com mais frequência.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'onryo':
                title = 'Onryo';
                description = 'O Onryo é frequentemente chamado de "O Espírito Raivoso". Ele rouba almas dos corpos moribundos de suas vítimas em busca de vingança. Este fantasma tem medo de qualquer forma de fogo e fará de tudo para ficar longe dele.';
                evidence = "Spirit-Box, Orbe Fantasma, Temperatura Baixa";
                habilits = 'Extinguir uma chama pode fazer com que um Onryo ataque.';
                weakness = 'Quando ameaçado, este fantasma terá menos probabilidade de caçar.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'the_Twins':
                title = 'The Twins';
                description = 'Foi relatado que esses fantasmas imitam as açoes uns dos outros. Eles alternam seus ataques para confundir suas presas.';
                evidence = "Spirit-Box, EMF Nível 5, Temperatura Baixa";
                habilits = 'Qualquer um dos gêmeos pode ficar com raiva e iniciar um ataque à sua presa.';
                weakness = 'Os gêmeos frequentemente interagirão com o ambiente ao mesmo tempo.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'raiju':
                title = 'Raiju';
                description = 'Um Raiju é um demônio que se alimenta de corrente elétrica. Embora geralmente calmos, eles podem ficar agitados quando tomados pelo poder.';
                evidence = "Projetor DOTS, EMF Nível 5, Orbe Fantasma";
                habilits = 'Raiju extraii energia de dispositivos elétricos próximos, tornando-o mais rápido.';
                weakness = 'Os Raiju estão constantemente interrompendo equipamentos eletrônicos tornando-os mais fáceis de rastrear durante o ataque.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'obake':
                title = 'Obake';
                description = 'Obake são terríveis metamorfos, capazes de assumir muitas formas. Eles foram vistos assumindo formas humanóides para atrair suas presas.';
                evidence = "Impressões Digitais, EMF Nível 5, Orbe Fantasma";
                habilits = 'Ao interagir com o ambiente, um Obake raramente deixa rastros.';
                weakness = 'Às vezes, esse fantasma muda e forma, deixando para trás evidências únicas.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'mimico':
                title = 'Mimico';
                description = 'O Mímico é um fantasma evasivo, misterioso e imitador que reflete traços e comportamentos de outras pessoas, incluindo outros tipo de fantasmas.';
                evidence = "Spirit-Box, Impressões Digitais, Temperatura Baixa";
                habilits = 'Não temos certeza do que esse fantasma é capaz... Tome Cuidado!';
                weakness = 'Vários relatórios notaram avistamentos de orbe fantasma perto de mímicos.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'moroi':
                title = 'Moroi';
                description = 'O Moroi levanta-se da sepultura para drenar a energia dos vivos. Eles são conhecidos por colocar maldições em suas vítimas, curáveis apenas por antídotos ou movendo-se para muito longe.';
                evidence = "Spirit-Box, Escrita Fantasma, Temperatura Baixa";
                habilits = 'Quanto mais enfraquecida suas vítimas, mais forte o Moroi se torna';
                weakness = 'Vários relatórios notaram avistamentos de orbe fantasma perto de mímicos.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'deogen':
                title = 'Deogen';
                description = 'Às vezes cercado por um nevoeiro sem fim, Deogen tem iludido caçadores de fantasmas por anos. Esses fantasmas são capazes de encontrar até as presas mais escondidas, antes de persegui-las até a exaustão';
                evidence = "Spirit-Box, Escrita Fantasma, Projetor DOTS";
                habilits = 'Deogen sente constantemente os vivos. Você pode correr, mas não pode se esconder.';
                weakness = 'Deogen requer muita energia para se formar e se move muito lentamente.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            case 'thaye':
                title = 'Thaye';
                description = 'Thaye é conhecido por envelhecer rapidamente, mesmo na vida após a morte. Pelo que aprendemos, eles parecem se de deteriorar mais rapidamente na presença dos vivos.';
                evidence = "Orbe Fantasma, Escrita Fantasma, Projetor DOTS";
                habilits = 'Ao entrar no local, Thaye se tornará ativo, defensivo e ágil.';
                weakness = 'Thaye irá enfraquecer com o tempo, tornando-os mais fracos, mais lentos e menos agressivos.';
                embed = await embedConstructor.execute(title, description, evidence, habilits, weakness);
                break;
            default:
                break;
        }
        await interaction.reply({embeds: [embed], ephemeral: true});                                    
    }
}