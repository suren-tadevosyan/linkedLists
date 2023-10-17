class Queue{
    constructor(){
        this.storage = [] 
    }

    enqueue(element){
        this.storage.push(element)
    }
    
    dequeue(){
        return this.storage.shift()
    }
    front(){
        return this.storage[0]
    }
    isEmpty(){
        if(this.storage.length === 0){
            return true
        }

        return false
    }
    size(){
        return this.storage.length
    }

    print(){
         this.storage.forEach((elem) => console.log(elem))
         
    }
}

const queue  = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print();

