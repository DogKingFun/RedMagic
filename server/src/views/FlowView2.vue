<script setup>
import { Background, Controls, MiniMap, Panel, PanelPosition } from '@vue-flow/additional-components'
import { VueFlow, isNode, useVueFlow } from '@vue-flow/core'
import { ref } from 'vue'
import { initialElements } from '../assets/javascripts/initial-elements2.js'

const { onConnect, addEdges } = useVueFlow()

const elements = ref(initialElements)

onConnect((params) => addEdges([params]))
</script>

<template>
  <VueFlow
    v-model="elements"
    class="basicflow"
    :default-edge-options="{ type: 'smoothstep' }"
    :default-zoom="1.5"
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