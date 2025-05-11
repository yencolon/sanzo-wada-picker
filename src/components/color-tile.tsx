import { useCopyToClipboard } from "@uidotdev/usehooks";
import type { Color } from "../store/colorStore";
import { isColorLight } from "../utils/color-utils";
import { useState } from "react";
import { Link } from "react-router";

interface ColorTileProps {
  color: Color;
}

const ColorTileComponent = ({ color }: ColorTileProps) => {
  const [_, copyToClipboard] = useCopyToClipboard();
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(color.hex);
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 3000);
  };

  const textColorClass = isColorLight(color.hex)
    ? "text-gray-800"
    : "text-gray-50";

  return (
    <Link to={`/color/${color.slug}`} className="flex flex-1">
      <div className="flex flex-1 group" style={{ backgroundColor: color.hex }}>
        <div className="relative flex flex-1 justify-center items-center ">
          <span
            className={`md:invisible md:group-hover:visible  ${textColorClass}`}
          >
            {color?.name}
          </span>
          <span
            className={`absolute bottom-0 right-1 text-center text-xl${textColorClass} `}
          >
            {color.hex}
          </span>
          <button
            onClick={handleCopy}
            className="absolute top-1 right-1 cursor-pointer border font-semibold border-gray-400 bg-gray-200 w-11 h-11 text-xs rounded-sm hover:bg-gray-50"
          >
            {showCopied ? "copied" : "copy"}
          </button>
        </div>
      </div>
    </Link>
  );
};

export { ColorTileComponent };
