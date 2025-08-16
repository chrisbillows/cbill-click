import Image from "next/image";

export type CharacterProps = {
  name: string;
  image: string;
  age: number;
};

export default function CharacterCard({ name, image, age }: CharacterProps) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md w-64">
      <Image
        src={image}
        alt={name}
        width={200}
        height={300}
        className="rounded"
      />
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-sm">Age: {age}</p>
    </div>
  );
}
