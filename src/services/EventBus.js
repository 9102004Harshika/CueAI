import { EventEmitter } from 'events';

class EventBus extends EventEmitter {
    constructor() {
        super();
        this.setMaxListeners(50); // Scale up for many subscribers
    }
}

// Singleton instance to be shared across the entire backend
export default new EventBus();
