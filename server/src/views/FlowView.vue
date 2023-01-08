<script setup>
import { Background, Controls, MiniMap, Panel, PanelPosition } from '@vue-flow/additional-components'
import { VueFlow, isNode, useVueFlow, Position } from '@vue-flow/core'
import { ref } from 'vue'
import Events from '../assets/javascripts/Events'

const { nodes, addNodes, edges, addEdges, removeEdges, onConnect, onPaneReady, onNodeDragStop, dimensions } = useVueFlow()

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
        console.log(1)
        const events = new Events('e1-2',nodes,edges,addNodes,addEdges,removeEdges,dimensions,Position)
        console.log(2)
        events.edge_click()
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
  @import '../assets/stylesheets/main.css';
</style>