import {Recipe} from '../recipe-book/model/recipe'

export interface Ingredient {
  name: string
  amount: number
  unit: string
}

/**
 * bootstraps a recipe instance from any object applying default values if not set
 * @param config provider object to turn into a recipe
 *
 * @return configured recipe
 */
export function create(config: any = {}): Ingredient {
  const target = new class implements Ingredient {
    amount = 0
    unit: 'ME'
    name = 'new recipe'
  }
  Object.assign(target, config)
  return target
}
