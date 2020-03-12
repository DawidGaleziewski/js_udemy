// Observer patterns allows us to subscribe and unsubscribe to certain events
// used in Angular
//ES6 standard

class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}

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
