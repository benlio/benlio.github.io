const discord = require('discord.js')
const client = new discord.Client();


client.login('token');

client.on('ready', () => {
  console.log('I am ready!');
});

const prefix = ".";

  client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split('.juif');
    const command = args.shift().toLowerCase();
      
    if (command === "ping") {
         const timeTaken = Date.now() - message.createdTimestamp;
         message.reply(`@everyone`);                       
    }    
        
    });
  
   
  client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split('.juif');
    const command = args.shift().toLowerCase();
      
    if (command === "yo") {
         const timeTaken = Date.now() - message.createdTimestamp;
         message.reply(`je suis le bot du serveur mais je suis en developement et comme tu peut le voir je suis pas encore fini XD`);                       
    }    
        
    });
    client.on("message", function(message) {
      if (message.author.bot) return;
      if (!message.content.startsWith(prefix)) return;
      const commandBody = message.content.slice(prefix.length);
      const args = commandBody.split('.juif');
      const command = args.shift().toLowerCase();
        
      if (command === "pourquoi") {
           const timeTaken = Date.now() - message.createdTimestamp;
           message.reply(`bah pourquoi pas `);                       
      }    
          
      });
      client.on("message", function(message) {
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
        const commandBody = message.content.slice(prefix.length);
        const args = commandBody.split('.juif');
        const command = args.shift().toLowerCase();
          
        if (command === "wesh") {
             const timeTaken = Date.now() - message.createdTimestamp;
             message.reply(`salut bg`);                       
        }    
            
        });
        client.on("message", function(message) {
          if (message.author.bot) return;
          if (!message.content.startsWith(prefix)) return;
          const commandBody = message.content.slice(prefix.length);
          const args = commandBody.split('.juif');
          const command = args.shift().toLowerCase();
            
          if (command === "hug") {
               const timeTaken = Date.now() - message.createdTimestamp;
               message.reply(`voila un gros calin ^^`);                       
          }    
              
          });
          client.on("message", function(message) {
            if (message.author.bot) return;
            if (!message.content.startsWith(prefix)) return;
            const commandBody = message.content.slice(prefix.length);
            const args = commandBody.split('.juif');
            const command = args.shift().toLowerCase();
              
            if (command === "tbo") {
                 const timeTaken = Date.now() - message.createdTimestamp;
                 message.reply(`tu a de beaux yeux tu sais `);                       
            }    
                
            });
                      
            client.on("message", function(message) {
              if (message.author.bot) return;
              if (!message.content.startsWith(prefix)) return;
              const commandBody = message.content.slice(prefix.length);
              const args = commandBody.split('.juif');
              const command = args.shift().toLowerCase();
                
              if (command === "ip") {
                   const timeTaken = Date.now() - message.createdTimestamp;
                   message.reply(`ton ip est : 152.258.1.1`);                       
              }    
 });
    
    




 client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // If the message content starts with "!kick"
    if (message.content.startsWith('.kik')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              // We let the message author know we were able to kick the person
              message.reply(`tu t'es fait enculé bg ${user.tag}`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to kick the member,
              // either due to missing permissions or role hierarchy
              message.reply('tu a pas les permes petits chilleur ');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("ce gens n'es pas dans le serveur pauvre naze ");
        }
        // Otherwise, if no user was mentioned
      } else {
        message.reply("ho le modo faut me presisé qui tu veut kick sinon je peut rien faire ");
      }
    }
  });
  // Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '.avt') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }

/*Ban*/
client.on('message',message =>{
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLocaleLowerCase() === prefix + 'ban'){
     if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
     let member = message.mentions.members.first()
     if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
     if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
     if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
     message.guild.ban(member, {days: 7})
     message.channel.send("**"+member.user.username + '** a été banni :white_check_mark:')
  }
});


client.on("message", message => {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + "purge") {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
      let count = args[1]
      if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
      if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
      if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
      message.channel.bulkDelete(parseInt(count) + 1)
  }
})


client.on("message", message => {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  //Muted
  if (args[0].toLowerCase() === prefix + "mute") {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
      let member = message.mentions.members.first()
      if (!member) return message.channel.send("Membre introuvable")
      if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
      if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne peux pas mute ce membre")
      let muterole = message.guild.roles.find(role => role.name === 'Muted')
      if (muterole) {
          member.addRole(muterole)
          message.channel.send(member + ' a été mute :white_check_mark:')
      }
      else {
          message.guild.createRole({name: 'Muted', permissions: 0}).then((role) => {
              message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {
                  channel.overwritePermissions(role, {
                      SEND_MESSAGES: false
                  })
              })
              member.addRole(role)
              message.channel.send(member + ' a été mute :white_check_mark:')
          })
      }
  }


if (args[0].toLowerCase() === prefix + "infractions") {
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
  let member = message.mentions.members.first()
  if (!member) return message.channel.send("Veuillez mentionner un membre")
  let embed = new Discord.RichEmbed()
      .setAuthor(member.user.username, member.user.displayAvatarURL)
      .addField('10 derniers warns', ((warns[member.id]) ? warns[member.id].slice(0, 10).map(e => e.reason) : "Ce membre n'a aucun warns"))
      .setTimestamp()
  message.channel.send(embed)
}


//infraction
if (args[0].toLowerCase() === prefix + "infractions") {
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
  let member = message.mentions.members.first()
  if (!member) return message.channel.send("Veuillez mentionner un membre")
  let embed = new Discord.RichEmbed()
      .setAuthor(member.user.username, member.user.displayAvatarURL)
      .addField('10 derniers warns', ((warns[member.id] && warns[member.id].length) ? warns[member.id].slice(0, 10).map(e => e.reason) : "Ce membre n'a aucun warns"))
      .setTimestamp()
  message.channel.send(embed)
}


//unmute
if(args[0].toLowerCase() === prefix + "unmute"){
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
  let member = message.mentions.members.first()
  if(!member) return message.channel.send("Membre introuvable")
  if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unmute ce membre.")
  if(member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne pas unmute ce membre.")
  let muterole = message.guild.roles.find(role => role.name === 'Muted')
  if(muterole && member.roles.has(muterole.id)) member.removeRole(muterole)
  message.channel.send(member + ' a été unmute :white_check_mark:')
}

//unwarn
if(args[0].toLowerCase() === prefix + "unwarn"){
  let member = message.mentions.members.first()
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande.")
  if(!member) return message.channel.send("Membre introuvable")
  if(member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas unwarn ce membre.")
  if(member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne pas unwarn ce membre.")
  if(!warns[member.id]|| !warns[member.id].length) return message.channel.send("Ce membre n'a actuellement aucun warns.")
  warns[member.id].shift()
  fs.writeFileSync('./warns.json',JSON.stringify(warns))
  message.channel.send("Le dernier warn de " +member+ " a été retiré :white_check_mark:")
   }
  

//warns
if (args[0].toLowerCase() === prefix + "warn") {
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
  let member = message.mentions.members.first()
  if (!member) return message.channel.send("mentionne quelqu'un sinon ca sert à rien ")
  if (member.highestRole.comparePositionTo(message.member.highestRole) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas warn ce membre")
  let reason = args.slice(2).join(' ')
  if (!reason) return message.channel.send("Veuillez indiquer une raison")
  if (!warns[member.id]) {
      warns[member.id] = []
  }
  warns[member.id].unshift({
      reason: reason,
      date: Date.now(),
      mod: message.author.id
  })
  fs.writeFileSync('./warns.json', JSON.stringify(warns))
  message.channel.send(member + " a été warn pour " + reason + " :white_check_mark:")
};


});
})
