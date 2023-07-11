// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const ghostType = require('./components/ghostType');
const mapsType = require('./components/mapsType');
const difficultyType = require('./components/difficultyType');
const cursedType = require('./components/cursedType');
const tarotCards = require('./components/CursedObjects/tarotCards');
const ouijaBorad = require('./components/CursedObjects/ouijaBorad');
const monkeyPaw = require('./components/CursedObjects/monkeyPaw');


const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CLIENT_ID } = process.env;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds]});
//Set collections
client.commands = new Collection();

//Settings Commandos
const fs = require('node:fs');
const path = require('node:path');
const commandsPath = path.join(__dirname, "commands");
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

for (const file of commandsFiles){
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    if("data" in command && "execute" in command){
        client.commands.set(command.data.name, command);
    }else{
        
    }
}
// Log in to Discord with your client's token
// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);    
});
client.login(TOKEN);

//All Commands
client.on(Events.InteractionCreate, async interaction => {   
    if(!interaction.isChatInputCommand())return;
    const command = interaction.client.commands.get(interaction.commandName);
    if(!command){
        console.error("Comando não encontrado");        
        return
    }
    try{        
        await command.execute(interaction, client)                    
    }catch(error){
        console.error(error);
        await interaction.reply("Houve um erro ao executar esse comando!");
    }    
})

//Select Menu Commands
client.on(Events.InteractionCreate, async interaction => {       
    if(interaction.isSelectMenu()){
        handleSelectMenuItems(interaction);  
    }
})

async function handleSelectMenuItems(interaction){
    if(interaction.customId === 'ghost'){
        await ghostType.execute(interaction);        
    }
    else if(interaction.customId === 'maps'){
        await mapsType.execute(interaction);
    }
    else if(interaction.customId === 'difficulty'){
        await difficultyType.execute(interaction, client);
    }
    else if(interaction.customId === 'cursed'){             
        if(interaction.values.toString() === 'tarotCards')            
            await tarotCards.tarotSelect(interaction, client);            
        else if(interaction.values.toString() === 'monkeyPaw')
            await monkeyPaw.execute(interaction);
        else if(interaction.values.toString() === 'ouijaBorad')
            await ouijaBorad.execute(interaction);        
        else
            await cursedType.execute(interaction);    
    }
    else if(interaction.customId === 'tarotCard' || interaction.customId === 'monkeySelect' || interaction.customId === 'ouijaSelect'){
        await cursedType.execute(interaction);
    }      
}
