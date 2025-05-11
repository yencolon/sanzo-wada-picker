import { create } from 'zustand';
import jsonColors from "../assets/colors.json";

export interface Color {
  index: number;
  name: string;
  slug: string;
  cmyk_array: number[];
  cmyk: string;
  rgb_array: number[];
  rgb: string;
  hex: string;
  combinations: number[];
  use_count: number;
}

export interface ColorState {
  colors: Color[];
  actions: {
    getColor: (colorSlug: string) => Color,
    getCombinations: (combinationId: number) => Color[]
  }
}

const colorsBySlug = new Map<string, Color>;
const colorCombinations = new Map<number, Color[]>;


jsonColors.colors.forEach((color) => {
  colorsBySlug.set(color.slug, color);
  color.combinations.forEach((combinationId) => {
    if (!colorCombinations.has(combinationId)) {
      colorCombinations.set(combinationId, []);
    }
    colorCombinations.get(combinationId)?.push(color)
  })
})

const useColorStore = create<ColorState>()((set, get) => ({
  colors: jsonColors.colors,
  actions: {
    getColor: (colorSlug) => {
      const color = colorsBySlug.get(colorSlug)//get().colors.find(c => c.slug === colorSlug.toLowerCase());
      if (!color) {
        throw new Error(`Color with slug "${colorSlug}" not found.`);
      }
      return color;
    },
    getCombinations: (combinationId) => {
      const colors = colorCombinations.get(combinationId)//get().colors.filter((color) => color.combinations.includes(combinationId))

      return colors ?? []
    }
  }
}));

export const useColors = () => useColorStore((state) => state.colors)
export const useColor = (colorSlug: string) => useColorStore((state) => state.actions.getColor(colorSlug))
export const useCombination = (combinationId: number) => {
  // const colors = useColorStore((state) => state.colors);
  // const combinationColors = useMemo(() => {
  //   return colors.filter((color) => color.combinations.includes(combinationId));
  // }, [colors, combinationId]);
  return useColorStore((state) => state.actions.getCombinations(combinationId));
}
export const useColorsActions = () => useColorStore((state) => state.actions)
