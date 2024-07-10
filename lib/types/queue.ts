export interface Queue<T> {
  add: (value: T) => this
  clear: () => this
  reverse: () => this

  offer: (value: T) => boolean
  isEmpty: () => boolean

  poll: () => T | null
  peek: () => T | null

  remove: () => T
  element: () => T

  toArray: () => T[]

  toString: () => string
}
