import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id }) => {
  return (
    <BaseNode
      title="Filter"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-input`,
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-filtered`,
        },
      ]}
    >
      <span>Filters data by condition.</span>
    </BaseNode>
  );
};