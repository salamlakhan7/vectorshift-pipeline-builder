// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        padding: '18px 24px',
        background: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
      }}
    >
      <div style={{ marginBottom: 14 }}>
        <h2 style={{ margin: 0, color: '#0f172a', fontSize: 22 }}>
          VectorShift Pipeline Builder
        </h2>
        <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: 14 }}>
          Drag nodes onto the canvas and connect them to build an AI workflow.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="prompt" label="Prompt" />
        <DraggableNode type="api" label="API" />
        <DraggableNode type="transform" label="Transform" />
        <DraggableNode type="filter" label="Filter" />
        <DraggableNode type="database" label="Database" />
      </div>
    </div>
  );
};