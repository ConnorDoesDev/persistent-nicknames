<style>
    a.invite-now-button {
        display: block;
        width: 140px;
        padding: 10px 20px;
        font-style: italic;
        position: relative;
        left: 0%;
        color: lightpink;
    }
    
    a.invite-now-button:hover {
        background-color: #4BD934;
        color: red;
        cursor: pointer;
    }
    
    img.help-command {
        width: 450px;
        height: 350px;
    }
    
    img.logging-in-toggle {
        width: 450px;
        height: 350px;
    }

   img.store-toggle {
        width: 450px;
        height: 350px;
    }
    
    img.notification-toggle {
        width: 450px;
        height: 350px;
    }
    
    img.online-toggle {
        width: 450px;
        height: 350px;
    }

    img.more-guide {
        width: 450px;
        height: 350px;
    }
    
    .help-starting-guide {
        padding: 10px 10px 10px;
        display: flex;
        padding-left: 2%;
        flex-direction: row;
    }
    
    .logging-in-starting-guide {
        padding: 10px 10px 10px;
        display: flex;
        padding-left: 2%;
        flex-direction: row;
    }

    .store-starting-guide {
        padding: 10px 10px 10px;
        display: flex;
        padding-left: 2%;
        flex-direction: row;
    }
    
    .notification-starting-guide {
        padding: 10px 10px 10px;
        display: flex;
        padding-left: 2%;
        flex-direction: row;
    }


    .more-starting-guide {
        padding: 10px 10px 10px;
        display: flex;
        padding-left: 2%;
        flex-direction: row;
    }
    
    
    .command-help-desc {
        padding-left: 2%;
    }
    
    .logging-in-toggle-desc {
        padding-left: 2%;
    }

    .store-toggle-desc {
        padding-left: 2%;
    }
    
    .notification-toggle-desc {
        padding-left: 2%;
    }
    
    .more-guide-desc {
        padding-left: 2%;
    }

    .more-guide-button {
        display: block;
        width: 140px;
        padding: 10px 20px;
        font-style: italic;
        position: relative;
        left: 0%;
        color: pink;
    }
    
    h5.this-italic {
        font-style: italic;
    }
    
    @media screen and (max-width:900px) {
        .help-starting-guide {
            flex-direction: column;
        }
        .logging-in-starting-guide {
            flex-direction: column;
        }
        .store-starting-guide {
            flex-direction: column;
        }
        .notification-starting-guide {
            flex-direction: column;
        }
        .online-starting-guide {
            flex-direction: column;
        }
        .music-starting-guide {
            flex-direction: column;
        }
        .command-help-desc {
            padding-top: 2%;
        }
        .logging-in-toggle-desc {
            padding-top: 2%;
        }
        .store-toggle-desc {
            padding-top: 2%;
        }
        .automod-toggle-desc {
            padding-top: 2%;
        }
        .more-guide-desc {
            padding-top: 2%;
        }
    }
</style>

<h1><b>Persistent Nicknames</b></h1>
<p>
    A Discord Bot that stores nicknames in a MongoDB database and re-nicknames returning members when the re-join a specific server with the same nickname they had before they left.
</p>
<h1>Starting guide:</h1>
<div class="help-starting-guide">
    <img class="help-command" src="https://cdn.upload.systems/uploads/an6Ptmh7.png" />
    <div class="command-help-desc">
        <h2>Command List</h2>
        <p>There aren't a lot of commands, you don't need them! Just <bold>invite the bot, and that's it!</bold>The bot will automatically start storing nicknames and re-nicknames returning members.</p>
    </div>
</div>

</div>
<h2>What are you waiting for?</h2>
<a class="invite-now-button" href="https://discord.com/api/oauth2/authorize?client_id=1038443411646189690&permissions=134217728&scope=bot">Invite Persistent Nicknames!</a>

<div id="donate" style="margin-top: 20px;">
    <h2>Donate</h2>
    <p>Persistent Nicknames is a free bot, even the smallest donation will be highly appreciated! You can support us via <a href="https://ko-fi.com/connordoesdev">Ko-fi</a> or via <a href="https://www.buymeacoffee.com/connordouijo">Buy me a Coffee!</p>
</div>