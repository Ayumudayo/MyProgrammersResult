class Queue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        this.items[this.tail] = element;
        this.tail++;
    }

    dequeue() {
        if (this.isEmpty()) return undefined;
        const element = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return element;
    }

    isEmpty() {
        return this.head === this.tail;
    }
}

function solution(x, y, n) {
    if (x === y) return 0;
    
    // y만큼의 수에 대해 방문을 확인할 수 있어야 함
    // y보다 숫자가 커지면 어차피 안되므로 그 위는 생각할 필요 없음
    const visited = new Array(y + 1).fill(false);
    const q = new Queue();
    
    // 연산 횟수를 추척해야 하기에 [x, 0]의 형태로 관리
    q.enqueue([x, 0]);
    visited[x] = true;
    
    while(!q.isEmpty()) {
        const [cur, cnt] = q.dequeue();
        
        // 연산들을 미리 정의
        const insts = [cur + n, cur * 2, cur * 3];
        
        for (let inst of insts) {
            if (inst === y)         // 목표값과 같다면
                return cnt + 1;     // 현재 카운트에 1 더해서 리턴
            
            // 아직 현재값이 y보다 작고 방문하지 않은 숫자라면
            if (inst < y && !visited[inst]) {
                visited[inst] = true;           // 방문 처리
                q.enqueue([inst, cnt + 1]);     // 큐에 넣음
            }
        }
    }
    
    // 불가능하면 -1 리턴
    return -1;
}