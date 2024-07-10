import { Queue } from '../../types';
export declare class ArrayStackQueue<T> implements Queue<T> {
    private readonly enqueueStack;
    private readonly dequeueStack;
    constructor();
    private transferStacks;
    add(value: T): this;
    offer(value: T): boolean;
    poll(): T | null;
    remove(): T;
    peek(): T | null;
    element(): T;
    isEmpty(): boolean;
    clear(): this;
    toArray(): T[];
    reverse(): this;
    toString(): string;
}
