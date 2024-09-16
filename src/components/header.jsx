import React from 'react';
// import Link from 'next/link';
import { Link } from "react-router-dom";
import { ShoppingCart, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SearchBar from './SearchBar';
import useAuth from '../hooks/useAuth';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-10 bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold">ecommerce</h1>
        </Link>
        <div className="flex items-center space-x-4">
          <SearchBar />
          <Link to="/checkout">
            <Button variant="outline" size="icon">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Carrito de compras</span>
            </Button>
          </Link>
          {user ? (
            <Button onClick={logout}>Logout</Button>
          ) : (
            <Link to="/login">
              <Button variant="outline" size="icon">
                <User className="h-4 w-4" />
                <span className="sr-only">Login</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
