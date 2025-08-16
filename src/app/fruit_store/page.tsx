"use client";

import FruitGrid from "@/app/fruit_store/components/FruitGrid";
import Cart from "@/app/fruit_store/components/Cart";
import type { Fruit } from "@/types/types";
import { useState } from "react";

const fruits: Fruit[] = [
  { name: "Apple", emoji: "🍎", price: 0.2 },
  { name: "Banana", emoji: "🍌", price: 0.2 },
  { name: "Orange", emoji: "🍊", price: 0.3 },
  { name: "Grapes", emoji: "🍇", price: 1.99 },
  { name: "Strawberry", emoji: "🍓", price: 2.49 },
  { name: "Pineapple", emoji: "🍍", price: 3.0 },
  { name: "Watermelon", emoji: "🍉", price: 3.5 },
  { name: "Peach", emoji: "🍑", price: 0.45 },
  { name: "Kiwi", emoji: "🥝", price: 0.45 },
  { name: "Mango", emoji: "🥭", price: 1.49 },
  { name: "Blueberry", emoji: "🫐", price: 2.99 },
  { name: "Lemon", emoji: "🍋", price: 0.1 },
  // { name: "Cherry", emoji: "🍒", price: 3.99 },
  { name: "Mama", emoji: "👩️", price: 0.01 },
  { name: "Stuey", emoji: "👦️", price: 99.99 },
  { name: "Andreea", emoji: "👧️", price: 199.99 },
];

export default function FruitShop() {
  const [cart, setCart] = useState<Fruit[]>([]);

  const addToCart = (fruit: Fruit) => {
    setCart((prevCart) => [...prevCart, fruit]);
    console.log(`Added ${fruit.name} to cart. Current cart:`, [...cart, fruit]);
  };

  const resetCart = () => {
    setCart([]);
  };

  return (
    <div data-name="App box" className="h-screen max-w-7xl mx-auto p-4">
      <div data-name="Layout for shop and cart" className="flex h-full gap-6">
        <div
          data-name="Shop, flex to fill"
          className="flex-1 rounded-3xl border border-gray-200 bg-white p-6"
        >
          <h1 className="text-center text-3xl italic font-bold">Fruit Shop</h1>
          <FruitGrid fruits={fruits} addToCart={addToCart} />
        </div>
        <aside
          data-name="Cart, fixed width"
          className="w-64 rounded-3xl border border-gray-200 bg-white p-6"
        >
          <h1 className="text-center text-3xl italic font-bold">Cart</h1>
          <Cart cart={cart} onClear={resetCart} />
        </aside>
      </div>
    </div>
  );
}
