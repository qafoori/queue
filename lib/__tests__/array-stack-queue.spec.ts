import { ArrayStackQueue } from '../modules'

describe('TEST ARRAY-STACK-QUEUE', () => {
  it('should convert queue into an array', () => {
    const queue = new ArrayStackQueue()
    queue.add(1).add(2).add(3)
    expect(queue.toArray()).toEqual([1, 2, 3])
  })

  it('should add an element to the end of the queue and return true', () => {
    const queue = new ArrayStackQueue()
    const result = queue.offer(1)
    expect([result, queue.toArray()]).toEqual([true, [1]])
  })

  it('should remove and returns the element from the front of the queue.', () => {
    const queue = new ArrayStackQueue()
    const polled = queue.add(1).add(2).poll()
    expect([polled, queue.toArray()]).toEqual([1, [2]])
  })

  it('should remove and returns the element from the front of the queue.', () => {
    const queue = new ArrayStackQueue()
    const polled = queue.add(1).add(2).remove()
    expect([polled, queue.toArray()]).toEqual([1, [2]])
  })

  it('should return the element at the front of the queue without removing it', () => {
    const queue = new ArrayStackQueue()
    const peeked = queue.add(1).add(2).peek()
    expect([peeked, queue.toArray()]).toEqual([1, [1, 2]])
  })

  it('should return the element at the front of the queue without removing it', () => {
    const queue = new ArrayStackQueue()
    const peeked = queue.add(1).add(2).element()
    expect([peeked, queue.toArray()]).toEqual([1, [1, 2]])
  })

  it('should check whether the queue is empty', () => {
    const emptyQueue = new ArrayStackQueue()
    const filledQueue = new ArrayStackQueue().add(1)
    expect([emptyQueue.isEmpty(), filledQueue.isEmpty()]).toEqual([true, false])
  })

  it('should clear all elements from queue', () => {
    const queue = new ArrayStackQueue().add(1).add(2).clear()
    expect(queue.isEmpty()).toEqual(true)
  })

  it('should reverse the elements inside queue', () => {
    const queue = new ArrayStackQueue().add(1).add(2).add(3)
    expect(queue.reverse().toArray()).toEqual([3, 2, 1])
  })
})
