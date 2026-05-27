// src/services/api.js
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:7071/api';

export async function sendQuestion(question) {
  const response = await fetch(`${API_BASE_URL}/ask`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question }),
  });

  if (!response.ok) {
    throw new Error('Error al consultar el asistente');
  }

  const data = await response.json();
  return data.answer; // esperamos que el backend devuelva { answer: "..." }
}