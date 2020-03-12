// Mediator pattern
// Similar to observer
// Interface for communicating with callings
// used for example in chatroom

const User = function(name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function(message, toUser) {
    this.chatroom.send(message, this, toUser);
  },

  recive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
};

const Chatroom = function() {
  let users = {}; //List of users
  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, toUser) {
      if (toUser) {
        //Single user message
        toUser.recive(message, from);
      } else {
        // Mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].recive(message, from);
          }
        }
      }
    }
  };
};

const brad = new User('Brad');
const mike = new User('Mike');
const sarah = new User('Sarah');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(mike);
chatroom.register(sarah);

brad.send('Hello Jeff', sarah);
sarah.send('Hello there handsome!', brad);
