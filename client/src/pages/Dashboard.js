import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    if (!token) {
      alert("Please login first");
      return;
    }

    try {
      const res = await API.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(res.data);
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  const createTask = async () => {
    if (!title.trim()) return;

    try {
      await API.post(
        "/tasks",
        { title },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      fetchTasks();
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchTasks();
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    if (token) fetchTasks();
  }, []);

  return (
    <div>
      <div style={headerStyle}>
        <h2>Dashboard</h2>
        <button style={logoutBtn} onClick={logout}>
          Logout
        </button>
      </div>

      <div style={inputRow}>
        <input
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />

        <button style={addBtn} onClick={createTask}>
          Add Task
        </button>
      </div>

      <div style={taskContainer}>
        {tasks.length === 0 ? (
          <p style={{ color: "#777" }}>No tasks yet 👀</p>
        ) : (
          tasks.map((task) => (
            <div key={task._id} style={taskCard}>
              <span>{task.title}</span>

              <button
                style={deleteBtn}
                onClick={() => deleteTask(task._id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* styles */

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "15px",
};

const inputRow = {
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
};

const inputStyle = {
  flex: 1,
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const addBtn = {
  padding: "10px 18px",
  background: "#4a6cf7",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const logoutBtn = {
  padding: "8px 14px",
  background: "#ff4d4f",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const taskContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const taskCard = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px",
  background: "#f9fafc",
  borderRadius: "6px",
  border: "1px solid #eee",
};

const deleteBtn = {
  padding: "6px 12px",
  background: "#ff4d4f",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};