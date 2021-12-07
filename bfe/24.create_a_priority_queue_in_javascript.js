class BinaryHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let element = this.heap[index];
            let parentIdx = Math.floor((index - 1) * 2);
            let parent = this.heap[parentIdx];

            if (parent >= element) break;

            this.heap[index] = parent;
            this.heap[parentIdx] = element;
            index = parentIdx;
        }
    }

    extractMax() {
        let max = this.heap[0];
        this.heap[0] = this.heap.pop();

        this.sinkDown(0);
        return max;
    }

    sinkDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let largest = index;

        const length = this.heap.length;

        if (left <= length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }


        if (right <= length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest != index) {
            [this.heap[largest],this.heap[index]] =
            [this.heap[index],this.heap[largest]];
            this.sinkDown(largest);
        }
    }
}