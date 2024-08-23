// CardComponent.tsx
import React from "react";

interface CardProps {
  title: string;
  description: string;
  status: string;
  priority: string;
  category: string;
  dueDate: Date;
}

export const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  status,
  priority,
  category,
  dueDate,
}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Status: {status}</p>
      <p>Priority: {priority}</p>
      <p>Category: {category}</p>
      <p>Due Date: {dueDate.toDateString()}</p>
    </div>
  );
};
