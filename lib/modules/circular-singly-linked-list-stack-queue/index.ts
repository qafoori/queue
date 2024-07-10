import { CircularSinglyLinkedListStack } from 'lifoer'

import { Queue } from '../../types'

export class CircularSinglyLinkedListStackQueue<T> implements Queue<T> {
  private readonly enqueueStack: CircularSinglyLinkedListStack<T>
  private readonly dequeueStack: CircularSinglyLinkedListStack<T>

  constructor() {
    this.enqueueStack = new CircularSinglyLinkedListStack<T>()
    this.dequeueStack = new CircularSinglyLinkedListStack<T>()
  }

  private transferStacks(): void {
    if (this.dequeueStack.isEmpty()) {
      while (!this.enqueueStack.isEmpty()) {
        this.dequeueStack.push(this.enqueueStack.pop()!)
      }
    }
  }

  add(value: T): this {
    this.enqueueStack.push(value)
    return this
  }

  offer(value: T): boolean {
    this.enqueueStack.push(value)
    return true
  }

  poll(): T | null {
    this.transferStacks()
    return this.dequeueStack.pop()
  }

  remove(): T {
    this.transferStacks()
    const value = this.dequeueStack.pop()
    if (value === null) {
      throw new Error('Queue is empty')
    }
    return value
  }

  peek(): T | null {
    this.transferStacks()
    return this.dequeueStack.peek()
  }

  element(): T {
    this.transferStacks()
    const value = this.dequeueStack.peek()
    if (value === null) {
      throw new Error('Queue is empty')
    }
    return value
  }

  isEmpty(): boolean {
    return this.enqueueStack.isEmpty() && this.dequeueStack.isEmpty()
  }

  clear(): this {
    this.enqueueStack.clear()
    this.dequeueStack.clear()
    return this
  }

  toArray(): T[] {
    this.transferStacks()
    return this.dequeueStack
      .toArray()
      .reverse()
      .concat(this.enqueueStack.toArray())
  }

  reverse(): this {
    const combinedArray = this.toArray().reverse()
    this.clear()
    combinedArray.forEach(value => this.enqueueStack.push(value))
    return this
  }

  toString(): string {
    return 'CircularSinglyLinkedListStackQueue'
  }
}
