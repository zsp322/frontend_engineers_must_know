// Snapchat考过这道题

class EventEmitter {
    subscriptions = {};

    subscribe(eventName, callback) {
        if (!(eventName in this.subscritions)) {
        this.subscritions[eventName] = []
      }
  
      const callbacks = this.subscritions[eventName]
      callbacks.push(callback)
  
      return {
        release: () => {
          if (!(eventName in this.subscritions)) {
            return
          }
  
          const callbacks = this.subscritions[eventName]
          const index = callbacks.indexOf(callback)
          if (index < 0) return
  
          callbacks.splice(index, 1)
  
          if (callbacks.length === 0) {
            delete this.subscritions[eventName]
          }
        }
      }
    }

    emit(eventName, ...args) {
        if (!(evcentName in trhis.subscriptions)) return;

        for (const callback of this.subscriptions[eventName]) {
            callback(...args);
        }
    }
}