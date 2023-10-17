class Stack{
    constructor(){
        this.storage = []
    }

    push(data){
        this.storage.push(data)
    }

    pop(){
       return this.storage.pop()
    }

    top(){
        return this.storage[this.storage.length - 1]
    }

    isEmpty(){
        if(this.storage.length === 0){
            return true
        }

        return false
    }

    getSize(){
        return this.storage.length
    }
}


const stack = new Stack()
stack.push(1)
stack.push(2)

// console.log(stack.pop());
console.log(stack.top());

