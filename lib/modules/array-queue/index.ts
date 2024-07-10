import { Queue } from '../../types'

export class ArrayQueue<T> implements Queue<T> {
  private queue: T[]
  private head: number
  private tail: number

  constructor() {
    this.queue = []
    this.head = 0
    this.tail = 0
  }

  add(value: T): this {
    this.queue[this.tail] = value
    this.tail++
    return this
  }

  offer(value: T): boolean {
    this.queue[this.tail] = value
    this.tail++
    return true
  }

  poll(): T | null {
    if (this.head === this.tail) {
      return null
    }
    const value = this.queue[this.head]
    this.head++
    if (this.head === this.tail) {
      // Reset the queue when it's empty to avoid excessive memory usage
      this.clear()
    }
    return value
  }

  remove(): T {
    if (this.head === this.tail) {
      throw new Error('Queue is empty')
    }
    const value = this.queue[this.head]
    this.head++
    if (this.head === this.tail) {
      // Reset the queue when it's empty to avoid excessive memory usage
      this.clear()
    }
    return value
  }

  peek(): T | null {
    if (this.head === this.tail) {
      return null
    }
    return this.queue[this.head]
  }

  element(): T {
    if (this.head === this.tail) {
      throw new Error('Queue is empty')
    }
    return this.queue[this.head]
  }

  isEmpty(): boolean {
    return this.head === this.tail
  }

  clear(): this {
    this.queue = []
    this.head = 0
    this.tail = 0
    return this
  }

  toArray(): T[] {
    return this.queue.slice(this.head, this.tail)
  }

  reverse(): this {
    if (this.head !== this.tail) {
      this.queue = this.queue.slice(this.head, this.tail).reverse()
      this.head = 0
      this.tail = this.queue.length
    }
    return this
  }

  toString(): string {
    return 'ArrayQueue'
  }
}
