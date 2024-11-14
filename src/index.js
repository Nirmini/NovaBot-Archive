const { Client, IntentsBitField, ActivityType, Collection } = require('discord.js');
const client = require('../core/global/Client');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

/*const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildVoiceStates
    ]
});

client.commands = new Collection();*/

const commandsPath = path.join(__dirname, '..', 'commands'); // Adjust path to point to 'commands'
console.log('Commands directory path:', commandsPath); // Log the path for verification

try {
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(path.join(commandsPath, file));
        client.commands.set(command.data.name, command);
    }
} catch (err) {
    console.error('Error reading commands directory:', err);
}

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        activities: [{
            name: '22.1(ALPHA) [DEV]',
            type: ActivityType.Streaming,
            url: 'https://www.twitch.tv/notwest7014'
        }],
        status: 'online'
    });

    // Set Statuspage item to operational
    const statusPageApiKey = 'null';
    const pageId = 'null';
    const itemId = 'null';

    axios({
        method: 'patch',
        url: `https://api.statuspage.io/v1/pages/${pageId}/components/${itemId}`,
        headers: {
            'Authorization': `OAuth ${statusPageApiKey}`,
            'Content-Type': 'application/json'
        },
        data: {
            component: {
                status: 'operational'
            }
        }
    })
    .then(response => {
        console.log('Statuspage item set to operational:', response.data);
    })
    .catch(error => {
        console.error('Error setting Statuspage item to operational:', error);
    });
});

client.on('messageCreate', async (message) => {
    const pattern = /@Multi\s+\$Stack\.TestExecute\(HelloWorld\.js\)/;

    if (pattern.test(message.content)) {
        message.reply('Hello, World!');
    }

    const QHDGguild = client.guilds.cache.get('1225142849922928661');
    const NERFguild = client.guilds.cache.get('1146596503075434638');

    if (message.guild === QHDGguild) {
        if (message.content.toLowerCase() === 'how secops' || message.content.toLowerCase() === 'how qrsf' || message.content.toLowerCase() === 'how security' || message.content.toLowerCase() === 'how secops?' || message.content.toLowerCase() === 'how qrsf?' || message.content.toLowerCase() === 'how security?') {
            message.reply(`You may join SecOps by attending a tryout when one is availible here: <#1231745115165556746>, ${message.author}!`);
        }
        if (message.content.toLowerCase() === 'how developer' || message.content.toLowerCase() === 'how dev' || message.content.toLowerCase() === 'how qhdt' || message.content.toLowerCase() === 'how developer?' || message.content.toLowerCase() === 'how dev?' || message.content.toLowerCase() === 'how qhdt?') {
            message.reply(`You may join the QHDT by submitting an application here: <#1226316800388628551>, ${message.author}!`);
        }
        if (message.content.toLowerCase() === 'how director' || message.content.toLowerCase() === 'how directorate' || message.content.toLowerCase() === 'how director?' || message.content.toLowerCase() === 'how directorate?') {
            message.reply(`You may apply for a Directorate application when one is availible. Please do note most Directorates are hand-picked, ${message.author}!`);
        }
        if (message.content.toLowerCase() === 'how contractor' || message.content.toLowerCase() === 'how government contractor' || message.content.toLowerCase() === 'how gov contractor' || message.content.toLowerCase() === 'how contractor?' || message.content.toLowerCase() === 'how government contractor?' || message.content.toLowerCase() === 'how gov contractor?') {
            message.reply(`You may apply for Contractor(R2) or Gov Contractor(R3) via an application here: <#1226316800388628551>, ${message.author}!`);
        }
        if (message.content.toLowerCase() === 'how red right hand' || message.content.toLowerCase() === 'how red right hand?') {
            message.reply(`Red Right Hand is a role given to those by the Group Director, ${message.author}!`);
        }
        if (message.content.toLowerCase() === 'what\'s qcg' || message.content.toLowerCase() === 'whats qcg') {
            message.reply(`HRF is a Reactor Core Game Currently Indev by QHDG, ${message.author}!`);
        }
        if (message.content.toLowerCase() === 'what\'s hrf' || message.content.toLowerCase() === 'whats hrf') {
            message.reply(`HRF is a Reactor Core Game Currently Indev by QHDG, ${message.author}!`);
        }
        if (message.content.toLowerCase() === 'what\'s multi' || message.content.toLowerCase() === 'whats multi') {
            message.reply(`Multi or myself, Is a multi-purpose moderation and operations bot designed and maintained by the QHDT, ${message.author}!`);
        }
    } else if (message.guild === NERFguild) {
        if (message.content.toLowerCase() === 'how secops' || message.content.toLowerCase() === 'how asf' || message.content.toLowerCase() === 'how security' || message.content.toLowerCase() === 'how secops?' || message.content.toLowerCase() === 'how asf?' || message.content.toLowerCase() === 'how security?') {
            message.reply(`As of right now, Security accepts people via rigorous tryouts and screenings. These tryouts may be hosted at any given time and persons wishing to join a tryout will be notified a few days in advance when a tryout will be hosted. You can find more information at <#1233371779297316886>, ${message.author}!`);
        }
        if (message.content.toLowerCase() === 'how directorate' || message.content.toLowerCase() === 'how directorate?' || message.content.toLowerCase() === 'how admin' || message.content.toLowerCase() === 'how admin?') {
            message.reply(`This role is usually unavailable. If it is you'll see an announcement in <#1179229117154070558>, ${message.author}!`);
        }
        if (message.content.toLowerCase() === 'how dev' || message.content.toLowerCase() === 'how developer?' || message.content.toLowerCase() === 'how dev' || message.content.toLowerCase() === 'how developer?') {
            message.reply(`This role is recived by either being handpicked or by an appliction here: <#1179229117154070558>, ${message.author}!`);
        }
        if (message.content.toLowerCase() === 'how tester' || message.content.toLowerCase() === 'how game tester?' || message.content.toLowerCase() === 'how game tester' || message.content.toLowerCase() === 'how tester?') {
            message.reply(`This role/rank can be obtained by being handpicked by a member of the Development Team, ${message.author}!`);
        }
        if (message.content.toLowerCase() === 'what\'s nerf' || message.content.toLowerCase() === 'whats nerf') {
            message.reply(`NERF is a reactor core game based off the RMBK nuclear Fission Reactor, ${message.author}!`);
        }
        if (message.content.toLowerCase() === 'what\'s multi' || message.content.toLowerCase() === 'whats multi') {
            message.reply(`Multi or myself, Is a multi-purpose moderation and operations bot designed and maintained by the QHDT, ${message.author}!`);
        }
    }
});

client.on('guildCreate', guild => {
    const guildId = guild.id;

    // Add the new guild to the commandsStatus if it doesn't exist
    if (!commandsStatus[guildId]) {
        commandsStatus[guildId] = { disabledCommands: [] };
        saveCommandsStatus();
        console.log(`Joined new guild: ${guild.name} (ID: ${guildId})`);
    }
});

client.on('guildDelete', guild => {
    const guildId = guild.id;

    // Remove the guild from the commandsStatus
    if (commandsStatus[guildId]) {
        delete commandsStatus[guildId];
        saveCommandsStatus();
        console.log(`Left guild: ${guild.name} (ID: ${guildId})`);
    }
});

client.on('interactionCreate', async interaction => {
    // Handle slash commands
    if (interaction.isCommand()) {
        const command = client.commands.get(interaction.commandName);
        
        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
    // Handle modal submissions
    if (interaction.isModalSubmit()) {
        const command = client.commands.get('verify');
        
        if (command && command.modalHandler) {
            try {
                await command.modalHandler(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while processing the modal!', ephemeral: true });
            }
        }
    }

    // Handle button clicks
    if (interaction.isButton()) {
        const command = client.commands.get('verify');
        
        if (command && command.buttonHandler) {
            try {
                await command.buttonHandler(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while processing the button interaction!', ephemeral: true });
            }
        }
    }
});

client.login('<Token>');
