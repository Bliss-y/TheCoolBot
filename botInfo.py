import os;
import dotenv;

dotenv.load_dotenv();

prefix=  "cool"

if(os.getenv('dev')):
	prefix = "snake "

