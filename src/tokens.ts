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

export interface DesignTokens {
  typeScale: TypeScale
  spacing: SpacingScale
  palette: PaletteColors
}

export const defaultTokens: DesignTokens = {
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

export function applyDesignTokensToRoot(tokens: DesignTokens): void {
  const root = document.documentElement.style

  root.setProperty('--type-base-size', `${tokens.typeScale.baseSize}px`)
  root.setProperty('--type-ratio', String(tokens.typeScale.ratio))

  root.setProperty('--spacing-base', `${tokens.spacing.base}px`)
  root.setProperty('--spacing-scale', String(tokens.spacing.scale))

  root.setProperty('--color-primary', tokens.palette.primary)
  root.setProperty('--color-secondary', tokens.palette.secondary)
  root.setProperty('--color-tertiary', tokens.palette.tertiary)
}
