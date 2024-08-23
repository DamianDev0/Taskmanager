// Task.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TaskCards } from "./card.task"; // Asegúrate de la ruta correcta

export const Task: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = sessionStorage.getItem("token");
    if (!getToken) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="bg-gradient-to-tr from-slate-900 to-fuchsia-900 h-screen">
      <TaskCards />
    </div>
  );
};
