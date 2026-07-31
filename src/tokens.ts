import type { CSSProperties } from 'react'

export interface TypeScale {
  baseSize: number
  ratio: number
}

export interface SpacingScale {
  base: number
  scale: number
}

export interface PaletteColors {
  primary: string
  secondary: string
  tertiary: string
}

export interface PlaygroundTokens {
  typeScale: TypeScale
  spacing: SpacingScale
  palette: PaletteColors
}

/** @deprecated Use PlaygroundTokens */
export type DesignTokens = PlaygroundTokens

export const defaultPlaygroundTokens: PlaygroundTokens = {
  typeScale: {
    baseSize: 16,
    ratio: 1.25,
  },
  spacing: {
    base: 4,
    scale: 2,
  },
  palette: {
    primary: '#2563eb',
    secondary: '#059669',
    tertiary: '#d97706',
  },
}

/** @deprecated Use defaultPlaygroundTokens */
export const defaultTokens = defaultPlaygroundTokens

export function playgroundTokensToStyle(tokens: PlaygroundTokens): CSSProperties {
  return {
    '--token-type-base-size': `${tokens.typeScale.baseSize}px`,
    '--token-type-ratio': String(tokens.typeScale.ratio),
    '--token-spacing-base': `${tokens.spacing.base}px`,
    '--token-spacing-scale': String(tokens.spacing.scale),
    '--token-color-primary': tokens.palette.primary,
    '--token-color-secondary': tokens.palette.secondary,
    '--token-color-tertiary': tokens.palette.tertiary,
  } as CSSProperties
}
