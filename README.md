# Fifoer

Lightweight implementation of queues in TypeScript.

You can use it to improve the performance of your node or browser applications built with JavaScript/TypeScript

This package contains six different implementations of queue:

1. Array queue (`new ArrayQueue()`)
2. Array stack queue (`new ArrayStackQueue()`)
3. Singly linked list stack queue (`new SinglyLinkedListStackQueue()`)
4. Doubly linked list stack queue (`new DoublyLinkedListStackQueue()`)
5. Circular singly linked list stack queue (`new CircularSinglyLinkedListStackQueue()`)
6. Circular doubly linked list stack queue (`new CircularDoublyLinkedListStackQueue()`)

All queues contains similar properties and methods.

Here is what each class contains:

> In all examples below, we used ArrayQueue implementation. But the usages are just the same for all implementations.

## `.toArray<T>(): T[]`

> Converts the queue into an array

```ts
const queue = new ArrayQueue()
const array = queue.add(1).add(2).add(3).toArray()
// [1, 2, 3]
```

## `.add<T>(value: T): this`

> Adds an element to the end of the queue. Returns the queue object for chaining.

```ts
const queue = new ArrayQueue()
const array = queue.add(1).add(2).add(3).toArray()
// [1, 2, 3]
```

## `.offer<T>(value: T): boolean`

> Adds an element to the end of the queue. Returns true to indicate the element was added successfully.

```ts
const queue = new ArrayQueue()
const result = queue.offer(1).offer(2).offer(3)
// true
```

## `.poll<T>(): T | null`

> Removes and returns the element from the front of the queue. Returns null if the queue is empty.

```ts
const queue = new ArrayQueue()
const result = queue.add(1).add(2).poll()
// 1
```

## `.remove<T>(): T`

> Removes and returns the element from the front of the queue. Throws an error if the queue is empty.

```ts
const queue = new ArrayQueue()
const result = queue.add(1).add(2).remove()
// 1
```

## `.peek<T>(): T | null`

> Returns the element at the front of the queue without removing it. Returns null if the queue is empty.

```ts
const queue = new ArrayQueue()
const result = queue.add(1).add(2).peek()
// 1
```

## `.element<T>(): T`

> Returns the element at the front of the queue without removing it. Throws an error if the queue is empty.

```ts
const queue = new ArrayQueue()
const result = queue.add(1).add(2).element()
// 1
```

## `.isEmpty<T>(): boolean`

> Returns true if the queue is empty

```ts
const queue = new ArrayQueue()
const result = queue.isEmpty()
// true
```

## `.clear<T>(): this`

> Removes all elements from the queue

```ts
const queue = new ArrayQueue()
const result = queue.add(1).add(2).clear().isEmpty()
// true
```

## `.reverse<T>(): this`

> Reverses elements inside queue

```ts
const queue = new ArrayQueue()
const result = queue.add(1).add(2).reverse().toArray()
// [2, 1]
```
