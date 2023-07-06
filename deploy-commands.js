const { REST, Routes } = require('discord.js')
//Dotenv
const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CLIENT_ID } = process.env;

//Settings Commandos
const fs = require('node:fs');
const path = require('node:path');
const commandsPath = path.join(__dirname, "commands");
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

const commands = [];

for (const file of commandsFiles){
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

// New Intance REST
const rest = new REST({version:"10"}).setToken(TOKEN);

//Deploy
(async () => {
    try{
        console.log(`Resetando ${commands.length}`)

        const data = await rest.put(
            Routes.applicationCommands(CLIENT_ID),
            { body: commands },
        )
        console.log("Comandos registrados com sucesso!");
    }catch (error){
        console.error(error);
    }
})()