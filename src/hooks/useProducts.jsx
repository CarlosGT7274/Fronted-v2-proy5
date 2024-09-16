import { useState, useEffect } from 'react';
import { getProducts } from '../api/api';

const useProducts = () => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [precioMax, setPrecioMax] = useState(100);
  const [precioFiltro, setPrecioFiltro] = useState(100);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProducts();
        setProductos(data);
        const maxPrecio = Math.max(...data.map(p => p.price));
        setPrecioMax(maxPrecio);
        setPrecioFiltro(maxPrecio);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProductos();
  }, []);

const productosFiltrados = productos.filter(producto => 
    producto.name.toLowerCase().includes(busqueda.toLowerCase()) &&
    producto.price <= precioFiltro
  );

  return {
    productos,
    busqueda,
    setBusqueda,
    precioMax,
    precioFiltro,
    setPrecioFiltro,
    productosFiltrados
  };
};

export default useProducts;

