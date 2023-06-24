export interface BasicRecipe {
  id: number
  title: string
  description: string
  courses: string[]
  imageURL: string
  isFavourite: any
  isOwned: boolean
}

export interface ExtendedRecipe extends BasicRecipe {
  diets: string[]
  cuisines: string[]
  prepTime: string
  cookTime: string
  ingredients: string[]
  steps: string[]
  sourceURL: string
}
