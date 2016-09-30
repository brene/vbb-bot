import restify from 'restify'
import builder from 'botbuilder'

// Setting up the server
const server = restify.createServer()
server.listen(3978, () => {
  console.log('%s listening to %s', server.name, server.url)
})

// Create chat bot
const connector = new builder.ChatConnector({
  appId: process.env.APP_ID,
  appPassword: process.env.APP_PASSWORD,
})

const bot = new builder.UniversalBot(connector)

server.post('/api/messages', connector.listen())

bot.dialog('/', (session) => {
  session.send("Hello World")
})

