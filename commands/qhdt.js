const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('qhdt')
        .setDescription('Info on QHDT'),
    async execute(interaction) {
        const allowedUserID = '600464355917692952';    // Replace with the actual allowed user ID

        // Check if the command is executed in the allowed guild
        if (interaction.guild.id !== '1225142849922928661') {
            await interaction.reply({
                content: 'This command can only be used in the QHDG guild.',
                ephemeral: true
            });
            return;
        }

        // Check if the user executing the command is allowed
        if (interaction.user.id !== allowedUserID) {
            await interaction.reply({
                content: 'You do not have permission to use this command.',
                ephemeral: true
            });
            return;
        }

        // If both checks pass, send the embed
        const exampleEmbed = new EmbedBuilder()
            .setColor(0x504159)
            .setTitle('QHDT - Quantum Horizon Dev Team')
            .setAuthor({ name: 'QHDG Directorate Data', iconURL: 'https://i.imgur.com/Xfa13tZ.png' })
            .setDescription('Info on the QHDT & Public Projects')
            .setThumbnail('https://i.imgur.com/BGPsW1F.png')
            .addFields(
                { name: 'What is QHDT?', value: 'QHDT is the dev team of QHDG and is responsible for all in-game actions excluding moderation.' },
                { name: '\u200B', value: '\u200B' },
                { name: "QHDT 1 PJT's", value: 'HSRF/HRF Development + R&D', inline: true },
                { name: "QHDT 2 PJT's", value: 'MultiBot', inline: true },
                { name: "QHDT 3 PJT's", value: 'The Everything Department', inline: true },
                { name: '\u200B', value: '\u200B' },
            )
            .addFields({ name: "Our Goals", value: 'At QHDT the main goal is to deliver high-quality content and to inspire others with such content.', inline: false })
            .setImage('https://i.imgur.com/vS9QUuo.png')
            .setTimestamp()
            .setFooter({ text: 'Last Updated 5/9/2024 aka 9/5/2024[US]', iconURL: 'https://i.imgur.com/BGPsW1F.png' });

        // Send an ephemeral reply first, then the actual embed
        await interaction.reply({ content: 'Working...', ephemeral: true });
        await interaction.channel.send({ embeds: [exampleEmbed] });
    },
};
