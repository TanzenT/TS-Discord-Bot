import * as Discord from 'discord.js'
import { LogManager } from './utils/LogManager'
import config = require('../config.json')

class TypeBot extends Discord.Client {
  config: object
  logger: object
  constructor(config) {
    super()
    this.config = config
    this.logger = LogManager

    this.on('ready', () => {
      LogManager.logger.info("I'm Ready!")
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
