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
      <Link key={color.index} to={`/color/${color.slug}`}>
        <div
          className="h-32 flex justify-center items-center grid-item"
          style={{ backgroundColor: color.hex }}
        >
          <span className={textColorClass}>{color.name + color.index}</span>
        </div>
      </Link>
    );
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full m-auto p-5">
      {colors.map((color) => colorTile(color))}
    </div>
  );
}
