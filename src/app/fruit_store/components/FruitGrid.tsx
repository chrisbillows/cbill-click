import FruitCard from "./FruitCard";
import type { Fruit } from "@/types/types";

export default function FruitGrid ({ fruits, addToCart }: { fruits: Fruit[], addToCart: (fruit: Fruit) => void }) {
    return (
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-8 p-4 bg-green-100">
            {fruits.map((fruit) => <FruitCard key={fruit.name} fruit={fruit} addToCart={addToCart} />)}
        </div>
    )
}
