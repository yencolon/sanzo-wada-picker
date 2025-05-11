import { Link, useParams } from "react-router";
import { useColor } from "../store/colorStore";

export default function ColorDetail() {
  let { colorSlug } = useParams();
  const color = useColor(colorSlug ?? "");

  return (
    <div
      className="min-h-dvh flex flex-col flex-1 p-3"
      style={{ backgroundColor: color?.hex || "transparent" }}
    >
      <p className="text-5xl">{color?.name}</p>
      {color?.combinations.map((combination) => (
        <Link
          to={`/combination/${combination}`}
          key={combination}
          className="p-2"
        >
          <p className="text-8xl hover:underline leading-none">{combination}</p>
        </Link>
      ))}
    </div>
  );
}
