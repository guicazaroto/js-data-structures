
class Stack {

  constructor() {
    this.mapInstance = new WeakMap()
    this.clear()
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
    this.mapInstance.set(this, [])
    this.items = this.mapInstance.get(this)
  }

  size () {  
    return this.items.length
  }
}

const stack = new Stack()
const stack2 = new Stack()
stack.push('hello')
stack2.push('world')
