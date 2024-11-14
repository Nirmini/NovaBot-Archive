// /src/shard-monitor.js

const { ShardingManager } = require('discord.js');
const path = require('path');

// Load environment variables or configuration (if any)
require('dotenv').config();

const token = process.env.TOKEN || '<Token>'; // Make sure your token is set up correctly

// Create a new ShardingManager instance
const manager = new ShardingManager(path.join(__dirname, 'index.js'), {
    totalShards: 'auto', // Let Discord.js do ~drugs~ Magic. 'auto' or integer above 0
    token: token
});

// Event when a shard is created
manager.on('shardCreate', (shard) => {
    console.log(`Launched shard ${shard.id}`);

    // Monitoring shard events
    shard.on('ready', () => console.log(`Shard ${shard.id} is ready`));
    shard.on('disconnect', () => console.log(`Shard ${shard.id} disconnected`));
    shard.on('reconnecting', () => console.log(`Shard ${shard.id} reconnecting`));
    shard.on('death', (process) => console.error(`Shard ${shard.id}'s process died with code ${process.exitCode}`));
    shard.on('error', (error) => console.error(`Error in shard ${shard.id}:`, error));
    shard.on('message', (message) => console.log(`Message from shard ${shard.id}:`, message));
    shard.on('spawn', () => console.log(`Shard ${shard.id} spawned`));
});

// Start all the shards
manager.spawn()
    .then(() => {
        console.log('All shards launched successfully.');
    })
    .catch(error => {
        console.error('Error while launching shards:', error);
    });
