# Persistent-Nicknames
#### A Discord Bot that stores nicknames in a MongoDB database and re-nicknames returning members when the re-join the server with the same nickname they had before they left.

## Setup
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Create a file called `config.json` in the root directory of the project
4. Add the following to the `config.json` file:
```json
{
    "token": "YOUR_BOT_TOKEN",
    "mongo": "YOUR_MONGODB_CONNECTION_STRING",
    "DEL": "YOUR_DISCORDEXTREMELIST_API_KEY",
    "clientID": "YOUR_BOT_CLIENT_ID"
}
```
5. Run `npm start` to start the bot

## Usage
1. Invite the bot to your server
2. Give the bot the `Manage Nicknames` permission
3. Profit

## License
This project is protected - see the [LICENSE](LICENSE) file for details

## Privacy Policy
See the [PRIVACY](PRIVACY) file for details