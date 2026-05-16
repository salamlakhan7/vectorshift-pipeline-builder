
---

# 🚀 VectorShift Pipeline Builder

<div align="center">

![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge\&logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-ModernAPI-green?style=for-the-badge\&logo=fastapi)
![ReactFlow](https://img.shields.io/badge/ReactFlow-Interactive-orange?style=for-the-badge)

**A modern visual AI workflow pipeline builder inspired by no-code orchestration systems.**

</div>

---

# ✨ Features

* 🎯 Drag-and-drop pipeline editor
* 🔗 Dynamic node connections
* 🧠 DAG validation
* ⚡ FastAPI backend integration
* 🧩 Reusable node architecture
* 🎨 Modern responsive UI
* 📊 Pipeline parsing summary
* 🔄 Real-time visual workflow building

---

# 🛠️ Tech Stack

## Frontend

* React
* ReactFlow
* Zustand
* CSS3

## Backend

* FastAPI
* Python

---

# 🧩 Supported Nodes

| Node      | Purpose                   |
| --------- | ------------------------- |
| Input     | User input source         |
| Prompt    | AI prompt engineering     |
| LLM       | Language model processing |
| Transform | Data transformation       |
| Filter    | Conditional filtering     |
| API       | External API integration  |
| Database  | Data persistence          |
| Output    | Final output              |
| Text      | Dynamic text templating   |

---

# 🧠 DAG Validation

The backend validates whether the submitted workflow forms a Directed Acyclic Graph (DAG).

Example response:

```json
{
  "num_nodes": 5,
  "num_edges": 4,
  "is_dag": true
}
```

---

# 📸 Screenshots

### Multi Input Flow
![Multi Input Flow](./Screenshots/multi-input-flow.png.JPG)

### Home UI
![Home UI](./Screenshots/home-ui.png.JPG)

### DAG Validation
![DAG Validation](./Screenshots/dag-validation.png.JPG)

### Pipeline Connected
![Pipeline Connected](./Screenshots/pipeline-connected.png.JPG)


---

# 🚀 Running the Project

## Frontend

```bash
cd frontend
npm install
npm start
```

## Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

---

# 🎥 Demo Workflow

```text
Input → Prompt → LLM → Transform → Output
```

---

# 👨‍💻 Author

**Abdul Salam**
Python | Django | AI Workflow Systems

GitHub:
`github.com/salamlakhan7`

LinkedIn:
`linkedin.com/in/abdul-salam-501b2025b`

---




