import axios from 'axios'

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }
  return response.json();
};

const apiRequest = async (endpoint, method = 'GET', data = null, token = null) => {
  const url = `${import.meta.env.VITE_APP_API_URL}${endpoint}`;
  
  const config = {
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }) 
    },
    ...(data && { data }) 
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    // Manejo de errores
    console.error('API request error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Obtener el usuario actual (puedes implementar esto si tu backend lo soporta)
export const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token found');
  return token;
};

export const loginUser = (username, password) => {
  return apiRequest("/auth/login", "POST", { username, password });
};

// Cerrar sesión (puedes implementar esto si tu backend lo soporta)
export const logoutUser = () => {
  return apiRequest("/auth/logout", "POST");
};

export const getProducts = () => {
  return apiRequest("/product");
};
