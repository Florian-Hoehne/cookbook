/**
 * @author fho
 *
 * basic recipe model interface
 */
export interface Recipe
{
  name: string
  description: string
  imagePath: string
}

/**
 * bootstraps a recipe instance from any object applying default values if not set
 * @param config provider object to turn into a recipe
 *
 * @return configured recipe
 */
export function create(config: any = {}): Recipe {
  const target = new class implements Recipe {
    description = 'new recipe description'
    imagePath = 'new image path'
    name = 'new recipe'
  }
  Object.assign(target, config)
  return target
}
