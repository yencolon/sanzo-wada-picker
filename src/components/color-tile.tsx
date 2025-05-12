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
    <div className="flex flex-1 group" style={{ backgroundColor: color.hex }}>
      <div className="relative flex flex-1 justify-center items-center ">
        <Link to={`/color/${color.slug}`}>
          <span
            className={`md:invisible md:group-hover:visible hover:underline  ${textColorClass}`}
          >
            {color?.name}
          </span>
        </Link>
        <span
          className={`absolute bottom-0 right-1 text-center text-xl ${textColorClass} `}
        >
          {color.hex}
        </span>
        <button
          onClick={handleCopy}
          className={`absolute 
            top-1
            right-1 
            cursor-pointer 
            font-semibold
            bg-gray-800/30 
            hover:bg-gray-400/50 
            w-11 
            h-8 
            text-xs 
            rounded-sm 
            ${textColorClass} `}
        >
          {showCopied ? "copied" : "copy"}
        </button>
      </div>
    </div>
  );
};

export { ColorTileComponent };
