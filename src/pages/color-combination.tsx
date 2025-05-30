import { useParams } from "react-router";
import { useCombination } from "../store/colorStore";
import { ColorTileComponent } from "../components/color-tile";

export default function ColorCombination() {
  let { colorCombinationId } = useParams();
  const combinations = useCombination(Number(colorCombinationId));
  return (
    <div className="flex flex-col flex-1 md:flex-row">
      {combinations.map((color) => (
        <ColorTileComponent color={color} key={color.slug} />
      ))}
    </div>
  );
}
