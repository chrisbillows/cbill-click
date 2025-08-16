import { Fruit } from "@/types/types";

interface FruitSummary {
  name: string;
  emoji: string;
  quantity: number;
}

export default function Cart({ cart, onClear }: { cart: Fruit[]; onClear: () => void }) {
  if (cart.length === 0) {
    return <div className="text-center mt-4">Your cart is empty</div>;
  }

  const totalPrice = cart.reduce((total, fruit) => total + fruit.price, 0).toFixed(2);

  const cartSummary = cart.reduce<Record<string, FruitSummary>>((acc, fruit) => {
    const key = fruit.name;
    if (!acc[key]) {
      acc[key] = { name: fruit.name, emoji: fruit.emoji, quantity: 0 };
    }
    acc[key].quantity += 1;
    return acc; 
  }, {});

  return (
    <div className="h-full">
      <div className="mt-4 font-bold text-center">
        Total: £{totalPrice}
      </div>
      <div className="text-center mt-6"> 
        <button
          onClick={onClear}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
      </div>
      <ul className="mt-4">
        {Object.values(cartSummary).map((fruit, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span className="font-bold">{fruit.emoji} x {fruit.quantity}</span>
            <span>£{(fruit.quantity * cart.find(f => f.name === fruit.name)!.price).toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
 