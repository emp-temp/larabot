import { Client, GatewayIntentBits, Message } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("messageCreate", (message: Message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("!lara")) {
    switch (message.content.toString().split(" ")[1]) {
      case "ping":
        message.channel.send("Pong!");
        break;

      default:
        message.channel.send("unknown argment");
        break;
    }
  } else {
    message.channel.send("hoge");
  }
});

client.login(process.env.TOKEN);
