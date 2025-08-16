import type { Character } from "@/types/types";
// import type { CharacterProps } from "@/components/CharacterCard";
import CharacterCard from "@/components/CharacterCard";
import Image from "next/image";

const character_1: Character = {
  name: "Sarah Connor",
  image:
    "https://upload.wikimedia.org/wikipedia/en/8/81/Sarah_Connor_%28Linda_Hamilton%29.jpg",
  age: 30,
};

// const character_2: Character = {
//   name: "John Connor",
//   image: "https://en.wikipedia.org/wiki/File:John_Connor_(Edward_Furlong).jpg",
//   age: 10,
// };

// const character_3: Character = {
//   name: "T-800",
//   image: "https://en.wikipedia.org/wiki/File:T-800_(Arnold_Schwarzenegger).jpg",
//   age: 50,
// };

// const character_4: Character = {
//   name: "T-1000",
//   image: "https://en.wikipedia.org/wiki/File:T-1000_(Robert_Patrick).jpg",
//   age: 5,
// };

function sayHello(name: string): string {
  return `Say hello to ${name}!`;
}

export default function JavaScriptPage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">{sayHello(character_1.name)}</h1>
      <p className="mb-4">Congrats on being {character_1.age} years old! 😄️</p>
      <Image
        src={character_1.image}
        alt={character_1.name}
        width={200}
        height={300}
      />
      <CharacterCard {...character_1} />
    </section>
  );
}
