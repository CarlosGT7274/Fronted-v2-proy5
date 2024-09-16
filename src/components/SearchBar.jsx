import React, { useContext } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { ProductContext } from '../context/ProductContext';

const SearchBar = () => {
  const { busqueda, setBusqueda } = useContext(ProductContext);

  return (
    <div className="relative">
      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Buscar productos..."
        className="pl-8"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
