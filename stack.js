
class Stack {
  #mapInstance
  
  constructor() {
    this.#mapInstance = new WeakMap()
    this.init()
  }

  init() {
    this.#mapInstance.set(this, [])
    this.items = this.#mapInstance.get(this)
  }

  push(item) {  
    this.items.push(item)
  }

  pop () {  
    this.items.pop()
  }

  peek () {  
    const lastItemIndex = this.size() - 1
    return this.items[lastItemIndex]
  }

  isEmpty() {
    return this.size() === 0
  }

  clear () {
    this.init()
  }

  size () {  
    return this.items.length
  }
}

const stack = new Stack()
stack.push('hello')
console.log(stack.peek())