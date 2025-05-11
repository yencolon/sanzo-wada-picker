import { useCopyToClipboard } from "@uidotdev/usehooks";
import type { Color } from "../store/colorStore";
import { isColorLight } from "../utils/color-utils";
import { useState } from "react";

interface ColorTileProps {
  color: Color;
}

const ColorTileComponent = ({ color }: ColorTileProps) => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
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
    <div
      className="flex flex-1 justify-center items-center p-2 md:min-h-dvh group relative cursor-pointer"
      style={{ backgroundColor: color.hex }}
      onClick={handleCopy}
    >
      <span className={`md:invisible md:group-hover:visible ${textColorClass}`}>
        {color?.name}
      </span>
      <span
        className={`absolute bottom-0 right-0 p-5 text-xl ${textColorClass} `}
      >
        {color.hex}
      </span>
      {showCopied && (
        <span
          className={`absolute top-0 text-center text-xl ${textColorClass}`}
        >
          Copied
        </span>
      )}
    </div>
  );
};

export { ColorTileComponent };
