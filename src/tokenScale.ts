import type { SpacingScale, TypeScale } from './tokens'

export function typeSizeAtStep(typeScale: TypeScale, step: number): number {
  return typeScale.baseSize * typeScale.ratio ** step
}

export function spacingSizeAtStep(spacing: SpacingScale, step: number): number {
  return spacing.base * spacing.scale ** step
}
