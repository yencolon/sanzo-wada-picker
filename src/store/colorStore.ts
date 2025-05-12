import jsonColors from "../assets/colors.json";

export interface Color {
  name: string;
  slug: string;
  cmyk: number[];
  rgb: number[];
  hex: string;
  combinations: number[];
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

export const useColors = () => jsonColors.colors
export const useColor = (colorSlug: string) => colorsBySlug.get(colorSlug)
export const useCombination = (combinationId: number) => colorCombinations.get(combinationId) ?? []
export const useCombinations = () => colorCombinations