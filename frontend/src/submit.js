import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges }),
      });

      const result = await response.json();

      alert(
        `Pipeline Summary:\n\nNodes: ${result.num_nodes}\nEdges: ${result.num_edges}\nIs DAG: ${result.is_dag ? 'Yes' : 'No'}`
      );
    } catch (error) {
      alert('Failed to submit pipeline. Please check if backend is running.');
      console.error(error);
    }
  };

  
  return (
  <div
    style={{
      position: 'absolute',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 10,
    }}
  >
    <button
      type="button"
      onClick={handleSubmit}
      style={{
        padding: '12px 28px',
        borderRadius: 999,
        background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
        color: '#fff',
        fontWeight: 700,
        fontSize: 15,
        boxShadow: '0 8px 24px rgba(79, 70, 229, 0.3)',
      }}
    >
      Submit Pipeline
    </button>
  </div>
);
};