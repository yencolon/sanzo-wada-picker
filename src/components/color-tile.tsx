import type { Color } from "../store/colorStore";
import { isColorLight } from "../utils/color-utils";

interface ColorTileProps {
  color: Color;
}

const ColorTileComponent = ({ color }: ColorTileProps) => {
  const textColorClass = isColorLight(color.hex)
    ? "text-gray-800"
    : "text-gray-50";
  return (
    <div
      className="flex flex-1 justify-center items-center md:min-h-dvh  group"
      style={{ backgroundColor: color.hex }}
    >
      <span className={`md:invisible md:group-hover:visible ${textColorClass}`}>
        {color?.name}
      </span>
    </div>
  );
};

export { ColorTileComponent };
