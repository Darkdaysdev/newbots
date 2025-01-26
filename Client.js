const { Client, GatewayIntentBits, Partials, Events } = require('discord.js');

class Bots extends Client {
    constructor(options) {
        super({
            options,
            fetchAllMembers: true,
            intents: Object.values(GatewayIntentBits),
            partials: Object.values(Partials),
            restRequestTimeout: 30000,
            ws: { version: 10, properties: { $browser: 'discord.js' } },
            rest: { version: 10, hashLifetime: Infinity, rejectOnRateLimit: false },
        });
        this.on('rateLimit', (rate) => console.warn(rate));
        this.on(Events.Warn, (warn) => console.warn(warn));
        this.on(Events.Error, (error) => console.error(error));
        process.on('warning', (warn) => console.warn(warn));
        process.on('unhandledRejection', (reason) => console.error(reason));
        process.on('uncaughtException', (error) => console.error(error));
    }
}

module.exports = { Bots };
