import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const PromptNode = ({ id }) => {
  return (
    <BaseNode
      title="Prompt"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-input`,
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-prompt`,
        },
      ]}
    >
      <span>Build or refine an AI prompt.</span>
    </BaseNode>
  );
};