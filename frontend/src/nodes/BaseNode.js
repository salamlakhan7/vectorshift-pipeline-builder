import { Handle } from 'reactflow';

export const BaseNode = ({ title, children, handles = [], style = {} }) => {
  return (
    <div
      style={{
        width: 240,
        minHeight: 100,
        border: '1px solid #e2e8f0',
        borderRadius: 14,
        background: '#ffffff',
        padding: 14,
        boxSizing: 'border-box',
        boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
        fontSize: 14,
        ...style,
      }}
    >
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}

      <div
        style={{
          fontWeight: 700,
          marginBottom: 10,
          color: '#0f172a',
          fontSize: 15,
        }}
      >
        {title}
      </div>

      <div style={{ color: '#334155' }}>
        {children}
      </div>
    </div>
  );
};

