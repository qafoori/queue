"use strict";class t{constructor(){this.stack=[],this.pointer=0}push(t){return this.stack[this.pointer]=t,this.pointer++,this}pop(){if(0===this.pointer)return null;this.pointer--;const t=this.stack[this.pointer];return this.stack.length=this.pointer,t}peek(){return 0===this.pointer?null:this.stack[this.pointer-1]}isEmpty(){return 0===this.pointer}clear(){return this.stack=[],this.pointer=0,this}toArray(){return this.stack.slice(0,this.pointer)}toString(){return`ArrayStack(${this.toArray().join(", ")})`}}let e=class{constructor(t){this.value=t,this.next=null,this.prev=null}};class i{constructor(){this.head=null,this.tail=null,this.length=0}printAll(){if(!this.head)return this;let t=this.head;do{console.log(t.value),t=t.next}while(t!==this.head);return this}toArray(){const t=[];if(!this.head)return t;let e=this.head;do{t.push(e.value),e=e.next}while(e!==this.head);return t}appendHead(t){const i=new e(t);return this.head?(i.next=this.head,i.prev=this.tail,this.head.prev=i,this.head=i,this.tail.next=this.head):(this.head=i,this.tail=i,i.next=i,i.prev=i),this.length++,this}appendTail(t){const i=new e(t);return this.tail?(i.prev=this.tail,i.next=this.head,this.tail.next=i,this.head.prev=i,this.tail=i):(this.head=i,this.tail=i,i.next=i,i.prev=i),this.length++,this}appendAt(t,i){if(t<0||t>this.length)throw new Error("Index out of bounds");if(0===t)return this.appendHead(i);if(t===this.length)return this.appendTail(i);const r=new e(i);let s=this.head;for(let e=0;e<t-1;e++)s=s.next;return r.next=s.next,r.prev=s,s.next.prev=r,s.next=r,this.length++,this}clear(){return this.head=null,this.tail=null,this.length=0,this}reverse(){if(!this.head||!this.head.next)return this;let t=this.head,e=null,i=null;do{i=t.next,t.next=t.prev,t.prev=i,e=t,t=i}while(t!==this.head);return this.tail=this.head,this.head=e,this}indexOf(t){if(!this.head)return-1;let e=0,i=this.head;do{if(i.value===t)return e;i=i.next,e++}while(i!==this.head);return-1}indexOfAll(t){const e=[];if(!this.head)return e;let i=0,r=this.head;do{r.value===t&&e.push(i),r=r.next,i++}while(r!==this.head);return e}isEmpty(){return 0===this.length}removeHead(){return this.head?(this.head===this.tail?(this.head=null,this.tail=null):(this.head=this.head.next,this.head.prev=this.tail,this.tail.next=this.head),this.length--,this):this}removeTail(){return this.head?(this.head===this.tail?(this.head=null,this.tail=null):(this.tail=this.tail.prev,this.tail.next=this.head,this.head.prev=this.tail),this.length--,this):this}removeAt(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");if(0===t)return this.removeHead();if(t===this.length-1)return this.removeTail();let e=this.head;for(let i=0;i<t;i++)e=e.next;return e.prev.next=e.next,e.next.prev=e.prev,this.length--,this}removeBy(t){const e=this.indexOf(t);return-1!==e?this.removeAt(e):this}removeAllBy(t){let e=this.head,i=0;for(;e&&i<this.length;)e.value===t?(e=e.next,this.removeAt(i)):(e=e.next,i++);return this}getHead(){return this.head}getTail(){return this.tail}getAt(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");let e=this.head;for(let i=0;i<t;i++)e=e.next;return e}getBy(t){if(!this.head)return null;let e=this.head;do{if(e.value===t)return e;e=e.next}while(e!==this.head);return null}getAllBy(t){const e=[];if(!this.head)return e;let i=this.head;do{i.value===t&&e.push(i),i=i.next}while(i!==this.head);return e}getNthFromEnd(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");let e;if(t<this.length/2){e=this.tail;for(let i=0;i<t;i++)e=e.prev}else{e=this.head;for(let i=0;i<this.length-1-t;i++)e=e.next}return e}toString(){return"CircularDoublyLinkedList"}}let r=class{constructor(t){this.value=t,this.next=null}};class s{constructor(){this.head=null,this.tail=null,this.length=0}printAll(){if(!this.head)return this;let t=this.head;do{console.log(t.value),t=t.next}while(t!==this.head);return this}toArray(){const t=[];if(!this.head)return t;let e=this.head;do{t.push(e.value),e=e.next}while(e!==this.head);return t}appendHead(t){const e=new r(t);return this.head?(e.next=this.head,this.head=e,this.tail.next=this.head):(this.head=e,this.tail=e,e.next=e),this.length++,this}appendTail(t){const e=new r(t);return this.tail?(this.tail.next=e,this.tail=e,this.tail.next=this.head):(this.head=e,this.tail=e,e.next=e),this.length++,this}appendAt(t,e){if(t<0||t>this.length)throw new Error("Index out of bounds");if(0===t)return this.appendHead(e);if(t===this.length)return this.appendTail(e);const i=new r(e);let s=this.head;for(let e=0;e<t-1;e++)s=s.next;return i.next=s.next,s.next=i,this.length++,this}clear(){return this.head=null,this.tail=null,this.length=0,this}reverse(){if(!this.head||!this.head.next)return this;let t=null,e=this.head,i=null;this.head;do{i=e.next,e.next=t,t=e,e=i}while(e!==this.head);return this.head.next=t,this.tail=this.head,this.head=t,this}indexOf(t){if(!this.head)return-1;let e=0,i=this.head;do{if(i.value===t)return e;i=i.next,e++}while(i!==this.head);return-1}indexOfAll(t){const e=[];if(!this.head)return e;let i=0,r=this.head;do{r.value===t&&e.push(i),r=r.next,i++}while(r!==this.head);return e}isEmpty(){return 0===this.length}removeHead(){return this.head?(this.head===this.tail?(this.head=null,this.tail=null):(this.head=this.head.next,this.tail.next=this.head),this.length--,this):this}removeTail(){if(!this.head)return this;if(this.head===this.tail)this.head=null,this.tail=null;else{let t=this.head;for(;t.next!==this.tail;)t=t.next;t.next=this.head,this.tail=t}return this.length--,this}removeAt(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");if(0===t)return this.removeHead();if(t===this.length-1)return this.removeTail();let e=this.head;for(let i=0;i<t-1;i++)e=e.next;return e.next=e.next.next,this.length--,this}removeBy(t){const e=this.indexOf(t);return-1!==e?this.removeAt(e):this}removeAllBy(t){let e=this.head,i=0;for(;e&&i<this.length;)e.value===t?(e=e.next,this.removeAt(i)):(e=e.next,i++);return this}getHead(){return this.head}getTail(){return this.tail}getAt(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");let e=this.head;for(let i=0;i<t;i++)e=e.next;return e}getBy(t){if(!this.head)return null;let e=this.head;do{if(e.value===t)return e;e=e.next}while(e!==this.head);return null}getAllBy(t){const e=[];if(!this.head)return e;let i=this.head;do{i.value===t&&e.push(i),i=i.next}while(i!==this.head);return e}getNthFromEnd(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");let e=this.head,i=this.head;for(let i=0;i<=t;i++)e=e.next;for(;e!==this.head;)e=e.next,i=i.next;return i}toString(){return"CircularSinglyLinkedList"}}let h=class{constructor(t){this.value=t,this.next=null,this.prev=null}};class n{constructor(){this.head=null,this.tail=null,this.length=0}printAll(){let t=this.head;for(;t;)console.log(t.value),t=t.next;return this}toArray(){const t=[];let e=this.head;for(;e;)t.push(e.value),e=e.next;return t}appendHead(t){const e=new h(t);return this.head?(e.next=this.head,this.head.prev=e,this.head=e):(this.head=e,this.tail=e),this.length++,this}appendTail(t){const e=new h(t);return this.tail?(e.prev=this.tail,this.tail.next=e,this.tail=e):(this.head=e,this.tail=e),this.length++,this}appendAt(t,e){if(t<0||t>this.length)throw new Error("Index out of bounds");if(0===t)return this.appendHead(e);if(t===this.length)return this.appendTail(e);const i=new h(e);let r=this.head;for(let e=0;e<t-1;e++)r=r.next;return i.next=r.next,i.prev=r,r.next.prev=i,r.next=i,this.length++,this}clear(){return this.head=null,this.tail=null,this.length=0,this}reverse(){if(!this.head||!this.head.next)return this;let t=this.head,e=null,i=null;for(;t;)i=t.next,t.next=e,t.prev=i,e=t,t=i;return this.tail=this.head,this.head=e,this}indexOf(t){let e=0,i=this.head;for(;i;){if(i.value===t)return e;i=i.next,e++}return-1}indexOfAll(t){const e=[];let i=0,r=this.head;for(;r;)r.value===t&&e.push(i),r=r.next,i++;return e}isEmpty(){return 0===this.length}removeHead(){return this.head?(this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,this):this}removeTail(){return this.tail?(this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,this):this}removeAt(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");if(0===t)return this.removeHead();if(t===this.length-1)return this.removeTail();let e=this.head;for(let i=0;i<t;i++)e=e.next;return e.prev.next=e.next,e.next.prev=e.prev,this.length--,this}removeBy(t){const e=this.indexOf(t);return-1!==e?this.removeAt(e):this}removeAllBy(t){let e=this.head;for(;e;)if(e.value===t){const t=e;e=e.next,this.removeAt(this.indexOf(t.value))}else e=e.next;return this}getHead(){return this.head}getTail(){return this.tail}getAt(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");let e=this.head;for(let i=0;i<t;i++)e=e.next;return e}getBy(t){let e=this.head;for(;e;){if(e.value===t)return e;e=e.next}return null}getAllBy(t){const e=[];let i=this.head;for(;i;)i.value===t&&e.push(i),i=i.next;return e}getNthFromEnd(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");let e;if(t<this.length/2){e=this.tail;for(let i=0;i<t;i++)e=e.prev}else{e=this.head;for(let i=0;i<this.length-1-t;i++)e=e.next}return e}toString(){return"DoublyLinkedList"}}class u{constructor(t){this.value=t,this.next=null}}class a{constructor(){this.head=null,this.tail=null,this.length=0}printAll(){let t=this.head;for(;t;)console.log(t.value),t=t.next;return this}toArray(){const t=[];let e=this.head;for(;e;)t.push(e.value),e=e.next;return t}appendHead(t){const e=new u(t);return this.head?(e.next=this.head,this.head=e):(this.head=e,this.tail=e),this.length++,this}appendTail(t){const e=new u(t);return this.head?(this.tail.next=e,this.tail=e):(this.head=e,this.tail=e),this.length++,this}appendAt(t,e){if(t<0||t>this.length)throw new Error("Index out of bounds");if(0===t)return this.appendHead(e);if(t===this.length)return this.appendTail(e);const i=new u(e);let r=this.head;for(let e=0;e<t-1;e++)r=r.next;return i.next=r.next,r.next=i,this.length++,this}clear(){return this.head=null,this.tail=null,this.length=0,this}reverse(){if(!this.head||!this.head.next)return this;let t=null,e=this.head,i=null;for(;e;)i=e.next,e.next=t,t=e,e=i;return this.tail=this.head,this.head=t,this}indexOf(t){let e=0,i=this.head;for(;i;){if(i.value===t)return e;i=i.next,e++}return-1}indexOfAll(t){const e=[];let i=0,r=this.head;for(;r;)r.value===t&&e.push(i),r=r.next,i++;return e}isEmpty(){return 0===this.length}removeHead(){return this.head?(this.head=this.head.next,this.length--,0===this.length&&(this.tail=null),this):this}removeTail(){if(!this.head)return this;if(this.head===this.tail)return this.head=null,this.tail=null,this.length=0,this;let t=this.head;for(;t.next!==this.tail;)t=t.next;return t.next=null,this.tail=t,this.length--,this}removeAt(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");if(0===t)return this.removeHead();if(t===this.length-1)return this.removeTail();let e=this.head;for(let i=0;i<t-1;i++)e=e.next;return e.next=e.next.next,this.length--,this}removeBy(t){const e=this.indexOf(t);return-1!==e?this.removeAt(e):this}removeAllBy(t){let e=this.head;for(;e;)e.value===t&&this.removeBy(t),e=e.next;return this}getHead(){return this.head}getTail(){return this.tail}getAt(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");let e=this.head;for(let i=0;i<t;i++)e=e.next;return e}getBy(t){let e=this.head;for(;e;){if(e.value===t)return e;e=e.next}return null}getAllBy(t){const e=[];let i=this.head;for(;i;)i.value===t&&e.push(i),i=i.next;return e}getNthFromEnd(t){if(t<0||t>=this.length)throw new Error("Index out of bounds");const e=this.length-1-t;let i=this.head;for(let t=0;t<e;t++)i=i.next;return i}toString(){return"SinglyLinkedList"}}class l{constructor(){this.stack=new i,this.pointer=0}push(t){return this.stack.appendTail(t),this.pointer++,this}pop(){if(0===this.pointer)return null;const t=this.stack.getTail()?.value||null;return this.stack.removeTail(),this.pointer--,t}peek(){return 0===this.pointer?null:this.stack.getTail()?.value||null}isEmpty(){return 0===this.pointer}clear(){return this.stack.clear(),this.pointer=0,this}toArray(){return this.stack.toArray()}toString(){return"CircularDoublyLinkedListStack"}}class o{constructor(){this.stack=new s,this.pointer=0}push(t){return this.stack.appendTail(t),this.pointer++,this}pop(){if(0===this.pointer)return null;const t=this.stack.getTail()?.value||null;return this.stack.removeTail(),this.pointer--,t}peek(){return 0===this.pointer?null:this.stack.getTail()?.value||null}isEmpty(){return 0===this.pointer}clear(){return this.stack.clear(),this.pointer=0,this}toArray(){return this.stack.toArray()}toString(){return"CircularSinglyLinkedListStack"}}class d{constructor(){this.stack=new n,this.pointer=0}push(t){return this.stack.appendTail(t),this.pointer++,this}pop(){if(0===this.pointer)return null;const t=this.stack.getTail()?.value||null;return this.stack.removeTail(),this.pointer--,t}peek(){return 0===this.pointer?null:this.stack.getTail()?.value||null}isEmpty(){return 0===this.pointer}clear(){return this.stack.clear(),this.pointer=0,this}toArray(){return this.stack.toArray()}toString(){return"DoublyLinkedListStack"}}class c{constructor(){this.stack=new a,this.pointer=0}push(t){return this.stack.appendTail(t),this.pointer++,this}pop(){if(0===this.pointer)return null;const t=this.stack.getTail()?.value||null;return this.stack.removeTail(),this.pointer--,t}peek(){return 0===this.pointer?null:this.stack.getTail()?.value||null}isEmpty(){return 0===this.pointer}clear(){return this.stack.clear(),this.pointer=0,this}toArray(){return this.stack.toArray()}toString(){return"SinglyLinkedListStack"}}exports.ArrayQueue=class{constructor(){this.queue=[],this.head=0,this.tail=0}add(t){return this.queue[this.tail]=t,this.tail++,this}offer(t){return this.queue[this.tail]=t,this.tail++,!0}poll(){if(this.head===this.tail)return null;const t=this.queue[this.head];return this.head++,this.head===this.tail&&this.clear(),t}remove(){if(this.head===this.tail)throw new Error("Queue is empty");const t=this.queue[this.head];return this.head++,this.head===this.tail&&this.clear(),t}peek(){return this.head===this.tail?null:this.queue[this.head]}element(){if(this.head===this.tail)throw new Error("Queue is empty");return this.queue[this.head]}isEmpty(){return this.head===this.tail}clear(){return this.queue=[],this.head=0,this.tail=0,this}toArray(){return this.queue.slice(this.head,this.tail)}reverse(){return this.head!==this.tail&&(this.queue=this.queue.slice(this.head,this.tail).reverse(),this.head=0,this.tail=this.queue.length),this}toString(){return"ArrayQueue"}},exports.ArrayStackQueue=class{constructor(){this.enqueueStack=new t,this.dequeueStack=new t}transferStacks(){if(this.dequeueStack.isEmpty())for(;!this.enqueueStack.isEmpty();)this.dequeueStack.push(this.enqueueStack.pop())}add(t){return this.enqueueStack.push(t),this}offer(t){return this.enqueueStack.push(t),!0}poll(){return this.transferStacks(),this.dequeueStack.pop()}remove(){this.transferStacks();const t=this.dequeueStack.pop();if(null===t)throw new Error("Queue is empty");return t}peek(){return this.transferStacks(),this.dequeueStack.peek()}element(){this.transferStacks();const t=this.dequeueStack.peek();if(null===t)throw new Error("Queue is empty");return t}isEmpty(){return this.enqueueStack.isEmpty()&&this.dequeueStack.isEmpty()}clear(){return this.enqueueStack.clear(),this.dequeueStack.clear(),this}toArray(){return this.transferStacks(),this.dequeueStack.toArray().reverse().concat(this.enqueueStack.toArray())}reverse(){const t=this.toArray().reverse();return this.clear(),t.forEach((t=>this.enqueueStack.push(t))),this}toString(){return"ArrayStackQueue"}},exports.CircularDoublyLinkedListStackQueue=class{constructor(){this.enqueueStack=new l,this.dequeueStack=new l}transferStacks(){if(this.dequeueStack.isEmpty())for(;!this.enqueueStack.isEmpty();)this.dequeueStack.push(this.enqueueStack.pop())}add(t){return this.enqueueStack.push(t),this}offer(t){return this.enqueueStack.push(t),!0}poll(){return this.transferStacks(),this.dequeueStack.pop()}remove(){this.transferStacks();const t=this.dequeueStack.pop();if(null===t)throw new Error("Queue is empty");return t}peek(){return this.transferStacks(),this.dequeueStack.peek()}element(){this.transferStacks();const t=this.dequeueStack.peek();if(null===t)throw new Error("Queue is empty");return t}isEmpty(){return this.enqueueStack.isEmpty()&&this.dequeueStack.isEmpty()}clear(){return this.enqueueStack.clear(),this.dequeueStack.clear(),this}toArray(){return this.transferStacks(),this.dequeueStack.toArray().reverse().concat(this.enqueueStack.toArray())}reverse(){const t=this.toArray().reverse();return this.clear(),t.forEach((t=>this.enqueueStack.push(t))),this}toString(){return"CircularDoublyLinkedListStackQueue"}},exports.CircularSinglyLinkedListStackQueue=class{constructor(){this.enqueueStack=new o,this.dequeueStack=new o}transferStacks(){if(this.dequeueStack.isEmpty())for(;!this.enqueueStack.isEmpty();)this.dequeueStack.push(this.enqueueStack.pop())}add(t){return this.enqueueStack.push(t),this}offer(t){return this.enqueueStack.push(t),!0}poll(){return this.transferStacks(),this.dequeueStack.pop()}remove(){this.transferStacks();const t=this.dequeueStack.pop();if(null===t)throw new Error("Queue is empty");return t}peek(){return this.transferStacks(),this.dequeueStack.peek()}element(){this.transferStacks();const t=this.dequeueStack.peek();if(null===t)throw new Error("Queue is empty");return t}isEmpty(){return this.enqueueStack.isEmpty()&&this.dequeueStack.isEmpty()}clear(){return this.enqueueStack.clear(),this.dequeueStack.clear(),this}toArray(){return this.transferStacks(),this.dequeueStack.toArray().reverse().concat(this.enqueueStack.toArray())}reverse(){const t=this.toArray().reverse();return this.clear(),t.forEach((t=>this.enqueueStack.push(t))),this}toString(){return"CircularSinglyLinkedListStackQueue"}},exports.DoublyLinkedListStackQueue=class{constructor(){this.enqueueStack=new d,this.dequeueStack=new d}transferStacks(){if(this.dequeueStack.isEmpty())for(;!this.enqueueStack.isEmpty();)this.dequeueStack.push(this.enqueueStack.pop())}add(t){return this.enqueueStack.push(t),this}offer(t){return this.enqueueStack.push(t),!0}poll(){return this.transferStacks(),this.dequeueStack.pop()}remove(){this.transferStacks();const t=this.dequeueStack.pop();if(null===t)throw new Error("Queue is empty");return t}peek(){return this.transferStacks(),this.dequeueStack.peek()}element(){this.transferStacks();const t=this.dequeueStack.peek();if(null===t)throw new Error("Queue is empty");return t}isEmpty(){return this.enqueueStack.isEmpty()&&this.dequeueStack.isEmpty()}clear(){return this.enqueueStack.clear(),this.dequeueStack.clear(),this}toArray(){return this.transferStacks(),this.dequeueStack.toArray().reverse().concat(this.enqueueStack.toArray())}reverse(){const t=this.toArray().reverse();return this.clear(),t.forEach((t=>this.enqueueStack.push(t))),this}toString(){return"DoublyLinkedListStackQueue"}},exports.SinglyLinkedListStackQueue=class{constructor(){this.enqueueStack=new c,this.dequeueStack=new c}transferStacks(){if(this.dequeueStack.isEmpty())for(;!this.enqueueStack.isEmpty();)this.dequeueStack.push(this.enqueueStack.pop())}add(t){return this.enqueueStack.push(t),this}offer(t){return this.enqueueStack.push(t),!0}poll(){return this.transferStacks(),this.dequeueStack.pop()}remove(){this.transferStacks();const t=this.dequeueStack.pop();if(null===t)throw new Error("Queue is empty");return t}peek(){return this.transferStacks(),this.dequeueStack.peek()}element(){this.transferStacks();const t=this.dequeueStack.peek();if(null===t)throw new Error("Queue is empty");return t}isEmpty(){return this.enqueueStack.isEmpty()&&this.dequeueStack.isEmpty()}clear(){return this.enqueueStack.clear(),this.dequeueStack.clear(),this}toArray(){return this.transferStacks(),this.dequeueStack.toArray().reverse().concat(this.enqueueStack.toArray())}reverse(){const t=this.toArray().reverse();return this.clear(),t.forEach((t=>this.enqueueStack.push(t))),this}toString(){return"SinglyLinkedListStackQueue"}};
