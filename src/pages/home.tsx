import { useCombinations } from "../store/colorStore";

export default function Home() {
  const combinations = useCombinations();
  return (
    <div className="grid grid-cols-1 gap-4 mx-auto p-2">
      {Array.from(combinations.entries())
        //.sort()
        .map(([key, value]) => (
          <div
            key={key}
            className="flex justify-center items-center border p-1"
          >
            <div>{key}</div>
            {value.map((color) => (
              <div
                className="aspect-square h-60 p-1 m-1"
                style={{ backgroundColor: color.hex }}
              >
                {color.name}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
