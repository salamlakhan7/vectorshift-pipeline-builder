import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ApiNode = ({ id }) => {
  return (
    <BaseNode
      title="API"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-request`,
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-response`,
        },
      ]}
    >
      <span>Calls an external API.</span>
    </BaseNode>
  );
};