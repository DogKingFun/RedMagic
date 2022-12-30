import { MarkerType, Position } from '@vue-flow/core'

export const initialElements = [
  {
    id: '1',
    type: 'input',
    label: 'Node 1',
    position: { x: 0, y: 50 },
    sourcePosition: Position.Right,
  },
  {
    id: '2',
    type: 'output',
    label: 'Node 2',
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
