import { Link } from "react-router";
import { useColors, type Color } from "../store/colorStore";
import { isColorLight } from "../utils/color-utils";

export default function ColorList() {
  const colors = useColors();

  const colorTile = (color: Color) => {
    const textColorClass = isColorLight(color.hex)
      ? "text-gray-800"
      : "text-gray-50";

    return (
      <Link
        key={color.slug}
        to={`/color/${color.slug}`}
        className="block aspect-square"
      >
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ backgroundColor: color.hex }}
        >
          <span className={`text-xl font-semibold ${textColorClass}`}>
            {color.name}
          </span>
        </div>
      </Link>
    );
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 w-full m-auto">
      {colors.map((color) => colorTile(color))}
    </div>
  );
}
