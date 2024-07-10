import { Queue } from '../../types';
export declare class ArrayQueue<T> implements Queue<T> {
    private queue;
    private head;
    private tail;
    constructor();
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
