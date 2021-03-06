const {EventEmitter} = require('events');

class Man extends EventEmitter {
    constructor() {
        super();
        this.walk();
    }
    walk() {
        //console.log('Man can walks');
        this.emit('walking','menna');
    }

    walkEvent(n) {
        for (let i = 1;i<=10;i++) {
            process.stdout.write('\u001B[2J\u001B[0;0f');
            process.stdout.write('still walking'+ String('.').repeat(i));
            process.stdout.write('\n');
        }
        console.log('finished..');
    }
}

//const hosam = new Man();
module.exports = new Man();

process.on('exit', (e)=>{
    console.warn('why you are exiting from here');
});
console.log(process.eventNames())

process.exit(0)