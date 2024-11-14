const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('credits')
        .setDescription('Multi Credits.'),
    async execute(interaction) {
        const creditsEmbed = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle('Multi Credits')
            .setAuthor({ name: 'Multi 22' })
            .setThumbnail('https://i.imgur.com/BGPsW1F.png')
            .addFields(
                { name: '**MAIN LIBRARIES**', value: '\u200B' },  // Added valid text here
                { name: 'Discord.js', value: 'The thing this very bot runs on.' },
                { name: 'Firebase', value: 'All Data is hosted on Firebase RTDB.', inline: true },
                { name: 'Node.js', value: 'Server-side Js which makes this all possible.', inline: true },
                { name: 'axios', value: 'Server-side NPM package for API calls.', inline: true },
                { name: 'dotenv', value: 'Server-side NPM Package for .env calls.', inline: true },
                { name: 'Express', value: 'Server-side NPM/Node.js Addon to support bot functions.', inline: true },
                { name: 'Noblox.js', value: 'Provides Roblox Verification.', inline: true },
                { name: '\u200B', value: '\u200B' },  // Non-breaking space for separation
                { name: '**QHDT CONTRIBUTORS**', value: '\u200B' },  // Added valid text here
                { name: 'West7014', value: 'Project Manager & Lead Dev', inline: true },
                { name: 'Bluepur', value: 'Project Overisight & QA Manager', inline: true },
                { name: 'NorthernStarlight', value: 'Resource Management & Assisting QA Mgmnt', inline: true },
                { name: 'QHDT:Alpha2', value: 'This team of ~50 people is what keeps this bot operating. Without them this wouldnt be possible.', inline: true },
                { name: '\u200B', value: '\u200B' },  // Non-breaking space for separation
                { name: '**OUTSIDE CONTRIBUTORS**', value: '\u200B' },  // Added valid text here
                { name: 'Zacharyeb17', value: 'Project Inspiration', inline: true },
                { name: 'Aaron227', value: 'Project Feedback', inline: true },
                { name: '\u200B', value: '\u200B' }  // Non-breaking space for separation
            )
            .setTimestamp()
            .setFooter({ text: 'We ♥ Our Devs. - QHDT Mgmnt' });

        await interaction.reply({ embeds: [creditsEmbed] });
    },
};
