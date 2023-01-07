<script setup>
import { Background, Controls, MiniMap, Panel, PanelPosition } from '@vue-flow/additional-components'
import { VueFlow, isNode, useVueFlow, Position } from '@vue-flow/core'
import { ref } from 'vue'

const { nodes, addNodes, edges, addEdges, removeEdges, onConnect, onPaneReady, onNodeDragStop, dimensions } = useVueFlow()


class Eve{
  constructor(id){
    this.id = id
  }
  // edge methods
  edge_click(){
    const id = (nodes.value.length + 1).toString()
    const newNode = this.node_create(id)
    addNodes([newNode])
    const edge = this.edge_search()
    const source = edge.source
    const target = edge.target
    const newEdge1 = this.edge_create(source,id)
    const newEdge2 = this.edge_create(id,target)
    addEdges([newEdge1,newEdge2])
    removeEdges([edge])
  }
  edge_search(){
    for(let edge of edges.value){
      if(this.id == edge.id){
        return edge
      }
    }
  }
  edge_create(source,target){
    const id = `e${source}-${target}`
    const newEdge = {
      id: id,
      source: source,
      target: target,
      animated: false,
      events: {
        click: () => {
          const eve = new Eve(id)
          eve.edge_click()
        },
      }
    }
    return newEdge
  }
  // node methods
  node_click(){
    console.log('開発途中')
  }
  node_search(){
    for(let node of nodes.value){
        if(this.id == node.id){
          return node
        }
      }
  }
  node_create(id){
    const newNode = {
      id: id,
      label: `Node: ${id}`,
      position: { x: Math.random() * dimensions.value.width, y: Math.random() * dimensions.value.height },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    }
    return newNode
  }
}

const initialElements = [
  {
    id: '1',
    type: 'input',
    label: 'Start',
    position: { x: 0, y: 50 },
    sourcePosition: Position.Right,
  },
  {
    id: '2',
    type: 'output',
    label: 'End',
    position: { x: 750, y: 50 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  { id: 'e1-2',
   source: '1',
    target: '2',
     animated: false,
     events: {
      click: () => {
        const eve = new Eve('e1-2')
        eve.edge_click()
      },
     }
  },
]


const elements = ref(initialElements)

onConnect((params) => addEdges([params]))

</script>

<template>
  <VueFlow
    v-model="elements"
    class="basicflow"
    :default-edge-options="{ type: 'smoothstep' }"
    :default-zoom="1.0"
    :min-zoom="0.2"
    :max-zoom="4"
    fit-view-on-init
  >
    <Background pattern-color="#aaa" gap="8" />

    <MiniMap />

    <Controls />
  </VueFlow>
</template>

<style>
  @import '../assets/stylesheets/main2.css';
</style>