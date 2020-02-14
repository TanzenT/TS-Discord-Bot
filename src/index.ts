import * as Discord from 'discord.js'
import * as config from '../config.json'

class TypeBot extends Discord.Client {
  config: object
  constructor(config) {
    super()
    this.config = config

    this.on('ready', () => {
      console.log("I'm Ready!")
    })

    this.on('message', msg => {
      if (msg.content === `${config.bot.prefix}ping`) {
        msg.channel.send(`Pong! ${Math.round(this.ping)}ms`)
      }
    })
  }
}

const typeBot = new TypeBot(config)
typeBot.login(config.bot.token)
