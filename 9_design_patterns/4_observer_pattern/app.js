// Observer patterns allows us to subscribe and unsubscribe to certain events
// used in Angular

function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },

  // Fiters out from the list whatever matches the callback function. generates a new list  of observers without a callback function passed in and assigns it again
  unsubscribe: function(fn) {
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },

  // Fires all observers
  fire: function() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
};

const click = new EventObserver();

// Event listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  console.clear();
  click.fire();
});

document.querySelector('.sub-honk').addEventListener('click', function() {
  click.subscribe(honkHandler);
});

document.querySelector('.unsub-honk').addEventListener('click', function() {
  click.unsubscribe(honkHandler);
});

//Click Handlers
const getCurMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const honkHandler = function() {
  console.log('Honk Honk');
};
