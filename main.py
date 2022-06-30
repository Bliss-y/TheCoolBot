from distutils.log import info
import os;
import dotenv;
import botInfo;
from discord.ext import tasks, commands


dotenv.load_dotenv();
bot = commands.Bot(command_prefix = botInfo.prefix);

@bot.event
async def on_ready():
	print('TheCoolBot V snake is now online.')



@bot.command(name='hey')
async def hey(ctx):
	print('asdf');
	await ctx.channel.send('yea yea whatever');





bot.run(os.getenv('TOKEN'));