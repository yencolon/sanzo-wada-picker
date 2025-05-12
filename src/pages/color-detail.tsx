import { Link, useParams } from "react-router";
import { useColor } from "../store/colorStore";
import { isColorLight } from "../utils/color-utils";

export default function ColorDetail() {
  let { colorSlug } = useParams();
  const color = useColor(colorSlug ?? "");
  const textColorClass = isColorLight(color?.hex ?? "")
    ? "text-gray-800"
    : "text-gray-50";

  return (
    <div
      className="flex flex-col flex-1 p-2"
      style={{ backgroundColor: color?.hex || "transparent" }}
    >
      <p className={`text-5xl  ${textColorClass}`}>{color?.name}</p>
      {color?.combinations.map((combination) => (
        <Link
          to={`/combination/${combination}`}
          key={combination}
          className="p-2"
        >
          <p
            className={`text-8xl hover:underline leading-none ${textColorClass}`}
          >
            {combination}
          </p>
        </Link>
      ))}
    </div>
  );
}
