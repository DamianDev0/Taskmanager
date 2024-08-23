import  { useEffect, useState } from "react";
import { CardComponent } from "./card"; // Asegúrate de la ruta correcta

interface TaskData {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  category: string;
  dueDate: string; 
}

interface ApiResponse {
  status: string;
  message: string;
  data: TaskData[];
}

export const TaskCards = () => {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = sessionStorage.getItem("token");

      if (!token) {
        setError("No token found in session storage");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:3000/api/tasks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const data: ApiResponse = await response.json();

        if (Array.isArray(data.data)) {
          setTasks(data.data)
          console.log(setTasks);
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div>
      {tasks.map((task) => (
        <CardComponent
          key={task.id}
          title={task.title}
          description={task.description}
          status={task.status}
          priority={task.priority}
          category={task.category}
          dueDate={new Date(task.dueDate)}
        />
      ))}
    </div>
  );
};
