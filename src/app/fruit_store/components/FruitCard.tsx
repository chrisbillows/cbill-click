import type { Fruit } from "@/types/types";

export default function FruitCard({ fruit, addToCart }: { fruit: Fruit, addToCart: (fruit: Fruit) => void }){
    return (
        <div
            key={fruit.name}
            className="flex flex-col items-center bg-white p-4 rounded-3xl shadow border"
          >
            <span className="text-5xl">{fruit.emoji}</span>
            <span className="mt-2 font-semibold">{fruit.name}</span>
            <span className="text-sm text-gray-500">£{fruit.price.toFixed(2)}</span>
            <button className="mt-3 inline-flex items-center justify-center rounded bg-green-600 px-3 py-1 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => addToCart(fruit)}
            >
              Add to cart
            </button>
        </div>
    );
}