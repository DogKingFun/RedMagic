<script setup>
import { Background, Controls, MiniMap, Panel, PanelPosition } from '@vue-flow/additional-components'
import { VueFlow, isNode, useVueFlow, Position } from '@vue-flow/core'
import { ref } from 'vue'

const { nodes, addNodes, edges, addEdges, onConnect, onPaneReady, onNodeDragStop, dimensions } = useVueFlow()

const addRandomNode = (source,target) => {
  const nodeId = (nodes.value.length + 1).toString()
  console.log(nodes.value[0])
  console.log(edges.value[0])
  const newNode = {
    id: nodeId,
    label: `Node: ${nodeId}`,
    position: { x: Math.random() * dimensions.value.width, y: Math.random() * dimensions.value.height },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  }

  addNodes([newNode])
  edges.value[0].target = nodeId

  // const newEdge = {
  //  id: 'e3-2',
  //  source: '3',
  //   target: '2',
  //    animated: false,
  //    events: {
  //     click: () => {
  //       let source = 3
  //       let target = 2
  //       addRandomNode(source,target)
  //     },
  //    }
  // }

  // addEdges([newEdge])
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
        let source = "1"
        let target = "2"
        addRandomNode(source,target)
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