const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('manage')
        .setDescription('Manage your server Multi instance.'),
    async execute(interaction) {
        const mngrEmbed = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle('Multi Guild Settings')
            .setAuthor({ name: 'Multi 22'})
            .setDescription('[E/D] <Cmnd>')
            .setThumbnail('https://i.imgur.com/BGPsW1F.png')
            .addFields(
                { name: '**REQUIRED COMMANDS**', value: '\u200B'},
                { name: '/enable', value: 'Brings up this menu.' },
                { name: '/credits', value: 'Lists all Resources and People who contributed.', inline: true },
                { name: '/msg', value: 'Allows for sending messages as the bot. **Only can be used when Automated messages fail.**', inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: '**REGULAR COMMANDS**', value: '\u200B'},
                { name: '/warnings', value: 'Displays all Multi warnings for a user.', inline: true },
                { name: '/announce', value: 'Make an announcement through Multi.', inline: true },
                { name: '/delshard', value: 'Dev Command to delete a shard. Locked outside QHDT.', inline: true },
                { name: '/delwarn', value: 'Delete a warning for a user.', inline: true },
                { name: '/embed', value: 'Dev Command to test the embeds. Locked outside QHDT.', inline: true },
                { name: '/estop', value: 'Dev Command to remotely terminate the bot. Locked.', inline: true },
                { name: '/eval', value: 'Announces a QHSD Evaluation. [DEPRICATED] Locked.', inline: true },
                { name: '/guildcount', value: 'Displays how many guilds the bot is in.', inline: true },
                { name: '/lockdown', value: 'Locks all channels in a server.', inline: true },
                { name: '/nick', value: 'Edit the bots nickname.', inline: true },
                { name: '/pban', value: 'Perma-ban a user.', inline: true },
                { name: '/purge', value: 'Purges the past *x* messgaes in a channel.', inline: true },
                { name: '/shardcreate', value: 'Dev Command to create a shard. Locked outside QHDT.', inline: true },
                { name: '/tban', value: 'Time-ban a user.', inline: true },
                { name: '/tryout', value: 'Announces a QHSD Tryout [DEPREACTED] Locked.', inline: true },
                { name: '/updates', value: 'Provides Multi announcements to a channel', inline: true },
                { name: '/verify', value: 'Allow a user to verify via Roblox. [WIP]', inline: true },
                { name: '/warn', value: 'Issues a Multi Warning.', inline: true },
                { name: 'And More Coming in Multi 22 Stable LTS', value: '\u200B', inline: false },
            )
            .setFooter({ text: 'Multi Guild Mngr'});

        await interaction.reply({ embeds: [mngrEmbed] });
    },
};
