import { useMemo, useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || '{{input}}'
  );

  // detect variables like {{name}}
  const variables = useMemo(() => {
    const matches = currText.match(/{{(.*?)}}/g) || [];

    return matches.map((match) =>
      match.replace('{{', '').replace('}}', '').trim()
    );
  }, [currText]);

  // dynamically create handles
  const handles = [
    ...variables.map((variable, index) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-${variable}`,
      style: {
        top: `${(index + 1) * 20}px`,
      },
    })),
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`,
    },
  ];

  return (
    <BaseNode
      title="Text"
      handles={handles}
      style={{
        minHeight: Math.max(120, variables.length * 40),
      }}
    >
      <label>
        Text:
        <textarea
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          rows={Math.max(3, variables.length + 1)}
          style={{ width: '100%' }}
        />
      </label>

      <div style={{ marginTop: 10 }}>
        <strong>Variables:</strong>

        <ul>
          {variables.map((variable) => (
            <li key={variable}>{variable}</li>
          ))}
        </ul>
      </div>
    </BaseNode>
  );
};