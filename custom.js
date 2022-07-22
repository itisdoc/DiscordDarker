let button = document.createElement('button'); button.innerText="Darker Settings";button.setAttribute("style", "width: 60px; margin-bottom: 10px; border-radius: 12px; margin-left: 7px;");$(".scroller-3X7KbA").prepend(button)
function options() {
  let option = prompt('What setting to you want to change?')
  if (option == "home-button-logo") {
   let value = prompt('Input SVG code (without the "svg" tag) to set it as the logo(or press cancel to not)') 
   if (value.includes("<")) {
    document.getElementsByClassName('homeIcon-r0w4ny')[0].innerHTML = value
   } else {
    return; 
   }
  }
}
button.addEventListener('click', options)

class Gateway {
  constructor(client) {
    let interval;
const WebSocket = require('ws');

const ws = new WebSocket('wss://gateway.discord.gg/?v=9&encoding=json');

  let payload = {
      op: 2,
      d: {
        token: client.token,
        intents: 32767,
        properties: {
          $os: "linux",
          $browser: "chrome",
          $device: "chrome",
        },
      },
    };

ws.on('open', function open(data) {
    ws.send(JSON.stringify(payload))
})
  
    ws.on("message", async function incoming(data) {
      let payload = JSON.parse(data)
    const { t, event, op, d } = payload;

    switch (op) {
        case 10:
            const { heartbeat_interval } = d;
            interval = heartbeat(heartbeat_interval)
            break;
    }
    switch (t) {
        case "READY":
            if(t === "READY"){
              const c = payload.d;
              client.guilds = c.guilds
              client.user = c.user;
              client.user.tag = client.user.username + '#' + client.user.discriminator
              on('ready', c)
            }
        break;
        case "MESSAGE_CREATE":
        const c = payload.d;
        c.channel = await  client.getChannel(c.channel_id)
        c.guild = await client.getGuild(c.channel.guild_id)
        c.reply = (content, options) => client.sendMessage(content, options, c.channel_id)
        on('message', c)
        break;
    }
    });

    const heartbeat = (ms) => {
      return setInterval(() => {
        ws.send(JSON.stringify({ op: 1, d: null }));
      }, ms);
    };

    function on(event, payload) {
  if (event == 'message') {
    client.whenMessage(payload)
  } else if (event == 'ready') {
    client.whenReady(payload)
  }
}
}
}

module.exports = {
  Gateway
}

class Client {
  token = '';
  client = {};
   getAllGuilds = async () => {
    let guilds = toMap(await fetch('https://discord.com/api/v10/@me/guilds/', {
        headers: {
          "Authorization": "Bot " + this.token
        }
      }).then(res => res.json()))
    let newGuilds = [];

  guilds.forEach(async guild => {
    let newGuild = await this.getGuild(guild.id)
    newGuilds.push(newGuild)
  })
console.log(newGuilds)
    return newGuilds;
  }

  guilds = this.getAllGuilds()
  
  bot = true;
  connect = async (token) => {
    if (!token || token == "") throw new Error('No token provided')
    this.token = token;

    new Gateway(this)
  }

  whenMessage = (message) => {
  }

  whenReady = () => {
  }

  sendMessage = async (content, options, channel) => {
    let json = options || {}
    json.content = content
    let message = await fetch('https://discord.com/api/v10/channels/' + channel + '/messages', {
      method: 'POST',
      headers: {
        "Authorization": "Bot " + this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json)
    }).then(res => res.json())
    return message
  }
  getChannel = async (id) => {
  let channel = await fetch('https://discord.com/api/v10/channels/' + id, {
        headers: {
          "Authorization": "Bot " + this.token
        }
      }).then(res => res.json())
    channel.createThread = async (name, options) => {
          let json = options || {}
          json.name = name
          let message = await fetch('https://discord.com/api/v10/channels/' + channel.id + '/threads', {
      method: 'POST',
      headers: {
        "Authorization": "Bot " + this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json)
    }).then(res => res.json())
    message.send = async (content, options) => this.sendMessage(content, options, message.id)
      
      let members = await fetch('https://discord.com/api/v10/channels/' + channel.id + '/thread-members', {
      method: 'GET',
      headers: {
        "Authorization": "Bot " + this.token,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      members.add = async (user) => {
        let addedUser = await fetch('https://discord.com/api/v10/channels/' + channel.id + '/thread-members/' + user, {
      method: 'PUT',
      headers: {
        "Authorization": "Bot " + this.token,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
        return addedUser
      }
      members.remove = async (user) => {
        let addedUser = await fetch('https://discord.com/api/v10/channels/' + channel.id + '/thread-members/' + user, {
      method: 'DELETE',
      headers: {
        "Authorization": "Bot " + this.token,
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())

        return addedUser;
      }
    message.members = members
    return message
        }
    
    return channel
  }
  getGuild = async (id) => {
    // Make a request for a user with a given ID
    if (this.bot == true) {
      let guild = await fetch('https://discord.com/api/v10/guilds/' + id, {
        headers: {
          "Authorization": "Bot " + this.token
        }
      }).then(res => res.json())

      

      let channels = toMap(await fetch('https://discord.com/api/v7/guilds/' + id + '/channels', {
        method: 'GET',
        headers: {
          "Authorization": "Bot " + this.token
        }
      }).then(res => res.json()))

      let newChannels = new Array();
      channels.forEach(async channel => {
        let newChannel = toMap(channel)
        newChannel.set('send', (content, options) => client.sendMessage(content, options, channel))
        newChannel.set('threads', {create: async (name, options) => {
          let json = options || {}
          json.name = name
          let message = await fetch('https://discord.com/api/v10/channels/' + channel.id + '/threads', {
      method: 'POST',
      headers: {
        "Authorization": "Bot " + this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json)
    }).then(res => res.json())
    return message
        }})
        newChannels.push(newChannel)
      })

      

      let members = await fetch('https://discord.com/api/v10/guilds/' + id + '/members', {
        headers: {
          "Authorization": "Bot " + this.token
        }
      }).then(res => res.json())

      let newGuild = {}
      newGuild.roles = guild.roles
      newGuild.id = guild.id
      newGuild.name = guild.name
      newGuild.icon = guild.icon
      newGuild.members = members
      newGuild.channels = newChannels
      newGuild.threads = await fetch('https://discord.com/api/v10/guilds/' + id + '/threads/active', {
        headers: {
          "Authorization": "Bot " + this.token
        }
      }).then(res => res.json())
      return newGuild;
    } else {
      return fetch('https://discord.com/api/v10/guilds/' + id, {
        headers: {
          "Authorization": "Bearer " + this.token
        }
      }).then(res => res.json())
    }
  }
}

function toMap(obj) {
   const keys = Object.keys(obj);
   const map = new Map();
   for(let i = 0; i < keys.length; i++){
      //inserting new key value pair inside map
      map.set(keys[i], obj[keys[i]]);
   };
   return map;
};

module.exports = {
  Client
}

let token = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()
// |||                                                                                     ||||||
// vvv WE ARE NOT USING YOUR TOKEN FOR BAD. WE ARE USING IT TO MAKE A FUNCTION IN WEBTOOLS vvvvvv
function getMyToken() {
return token;
}

document.getElementsByTagName('body')[0].addEventListener("load", page)

function page() {
if (window.location.href ==  "https://discord.com/store") {
document.getElementsByClassName('scroller-29cQFV')[0].childNodes.forEach((i) => {
    document.getElementsByClassName('scroller-29cQFV')[0].removeChild(i)
});
document.getElementsByClassName('scroller-29cQFV')[0].innerHTML = `<div class="premiumContainer-3GGa8Q"><div class="container-LUKdw8"><div class="content-374sTA"><div></div><div><h3 class="defaultColor-24IHKz heading-xl-medium-_XBxHT defaultColor-HXu-5n featuresHeader-2bjq5B" data-text-variant="heading-xl/medium">Coming soon...</h3></div></div></div></div><div aria-hidden="true" style="position: absolute; pointer-events: none; min-height: 0px; min-width: 1px; flex: 0 0 auto; height: 0px;"></div>`
} else {
  // dont do nothin
}
}
