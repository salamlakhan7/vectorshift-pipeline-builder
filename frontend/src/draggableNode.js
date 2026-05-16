// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };

    event.target.style.cursor = 'grabbing';

    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(appData)
    );

    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
      style={{
        cursor: 'grab',
        minWidth: '95px',
        height: '58px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
        color: 'white',
        fontWeight: 600,
        fontSize: '14px',
        boxShadow: '0 6px 18px rgba(79, 70, 229, 0.25)',
        transition: 'all 0.2s ease',
        userSelect: 'none',
      }}
    >
      {label}
    </div>
  );
};