import { ArrayQueue } from '../modules'

describe('TEST ARRAY-QUEUE', () => {
  it('should convert queue into an array', () => {
    const queue = new ArrayQueue()
    queue.add(1).add(2).add(3)
    expect(queue.toArray()).toEqual([1, 2, 3])
  })

  it('should add an element to the end of the queue and return true', () => {
    const queue = new ArrayQueue()
    const result = queue.offer(1)
    expect([result, queue.toArray()]).toEqual([true, [1]])
  })

  it('should remove and returns the element from the front of the queue.', () => {
    const queue = new ArrayQueue()
    const polled = queue.add(1).add(2).poll()
    expect([polled, queue.toArray()]).toEqual([1, [2]])
  })

  it('should remove and returns the element from the front of the queue.', () => {
    const queue = new ArrayQueue()
    const removed = queue.add(1).add(2).remove()
    expect([removed, queue.toArray()]).toEqual([1, [2]])
  })

  it('should return the element at the front of the queue without removing it', () => {
    const queue = new ArrayQueue()
    const peeked = queue.add(1).add(2).peek()
    expect([peeked, queue.toArray()]).toEqual([1, [1, 2]])
  })

  it('should return the element at the front of the queue without removing it', () => {
    const queue = new ArrayQueue()
    const peeked = queue.add(1).add(2).element()
    expect([peeked, queue.toArray()]).toEqual([1, [1, 2]])
  })

  it('should check whether the queue is empty', () => {
    const emptyQueue = new ArrayQueue()
    const filledQueue = new ArrayQueue().add(1)
    expect([emptyQueue.isEmpty(), filledQueue.isEmpty()]).toEqual([true, false])
  })

  it('should clear all elements from queue', () => {
    const queue = new ArrayQueue().add(1).add(2).clear()
    expect(queue.isEmpty()).toEqual(true)
  })

  it('should reverse the elements inside queue', () => {
    const queue = new ArrayQueue().add(1).add(2).add(3)
    expect(queue.reverse().toArray()).toEqual([3, 2, 1])
  })
})
