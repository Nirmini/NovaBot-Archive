const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('msg')
        .setDescription('Allows a specific user to pass a string for the bot to say')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('The message for the bot to say')
                .setRequired(true)),
    async execute(interaction) {
        const authorizedUserId = '600464355917692952';
        const message = interaction.options.getString('message');

        // Ensure only the authorized user can run this command
        if (interaction.user.id === authorizedUserId) {
            // Reply to the interaction to let the user know their message was sent
            await interaction.reply({ content: 'Message sent!', ephemeral: true });

            // Send the message to the channel, interpreting any newlines, markdown, etc.
            await interaction.channel.send({
                content: message, // Send the message as-is, allowing \n and markdown like ```codeblocks```
            });
        } else {
            await interaction.reply({ content: 'You are not authorized to use this command.', ephemeral: true });
        }
    },
};
