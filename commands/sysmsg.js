const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sysmsg')
        .setDescription('Send a system message with options.')
        // Required options first
        .addStringOption(option =>
            option.setName('embedtitle')
                .setDescription('The title of the embed.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('embeddescription')
                .setDescription('The description of the embed.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('field1name')
                .setDescription('Name of the first field.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('field1value')
                .setDescription('Value of the first field.')
                .setRequired(true))
        .addBooleanOption(option =>
            option.setName('field1inline')
                .setDescription('Is the first field inline?')
                .setRequired(true))
        // Optional options
        .addStringOption(option =>
            option.setName('field2name')
                .setDescription('Name of the second field.')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('field2value')
                .setDescription('Value of the second field.')
                .setRequired(false))
        .addBooleanOption(option =>
            option.setName('field2inline')
                .setDescription('Is the second field inline?')
                .setRequired(false))
        .addBooleanOption(option =>
            option.setName('requiresbttn')
                .setDescription('Add Yes and No buttons to the message.')
                .setRequired(false)),

    async execute(interaction) {
        const authorizedUserId = '600464355917692952';

        // Check for authorization
        if (interaction.user.id !== authorizedUserId) {
            await interaction.reply({ content: 'You are not authorized to use this command.', ephemeral: true });
            return;
        }

        // Defer the reply to give more time for processing
        await interaction.deferReply({ ephemeral: true });

        const embedTitle = interaction.options.getString('embedtitle');
        const embedDescription = interaction.options.getString('embeddescription');
        const field1Name = interaction.options.getString('field1name');
        const field1Value = interaction.options.getString('field1value');
        const field1Inline = interaction.options.getBoolean('field1inline');

        // Optional fields
        const field2Name = interaction.options.getString('field2name');
        const field2Value = interaction.options.getString('field2value');
        const field2Inline = interaction.options.getBoolean('field2inline');

        const requiresButton = interaction.options.getBoolean('requiresbttn') || false;

        // Create the embed
        const embed = new EmbedBuilder()
            .setTitle(embedTitle)
            .setDescription(embedDescription)
            .addFields(
                { name: field1Name, value: field1Value, inline: field1Inline }
            );

        // Only add the second field if it's provided
        if (field2Name && field2Value) {
            embed.addFields({ name: field2Name, value: field2Value, inline: field2Inline || false });
        }

        // Prepare action rows for buttons if required
        let components = [];
        if (requiresButton) {
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('yes')
                        .setLabel('Yes')
                        .setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
                        .setCustomId('no')
                        .setLabel('No')
                        .setStyle(ButtonStyle.Danger)
                );
            components.push(row);
        }

        // Send the actual embed with/without buttons
        await interaction.followUp({ embeds: [embed], components: components });
    },
};
