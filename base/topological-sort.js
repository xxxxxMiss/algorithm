import LinkedList from './mock-linkedlist'

class Graph {
  constructor(v /* 顶点个数 */) {
    this.v = v
    this.adj = [] // 连接表
    for (let i = 0; i < v; i++) {
      adj[i] = new LinkedList()
    }
  }

  addEdge(s, t) {
    // s先与t,边s->t
    this.adj[s].append(t)
  }
}
