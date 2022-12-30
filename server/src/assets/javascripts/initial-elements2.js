import { MarkerType, Position, useVueFlow } from '@vue-flow/core'

export const initialElements = [
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
        console.log('Edge clicked')
      },
     }
  },
]
