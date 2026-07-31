export interface AppColorTokens {
  primary: string
  background: string
  surface: string
  foreground: string
  border: string
  muted: string
}

export interface AppSpacingTokens {
  base: number
  scale: number
}

export interface AppTypographyTokens {
  baseSize: number
  lineHeight: number
}

export interface AppTokens {
  colors: AppColorTokens
  spacing: AppSpacingTokens
  typography: AppTypographyTokens
  radiusPx: number
  shadowElevation: string
  transitionDurationMs: number
}

export const defaultAppTokens: AppTokens = {
  colors: {
    primary: '#4f46e5',
    background: '#f5f5f7',
    surface: '#ffffff',
    foreground: '#1c1c1f',
    border: '#e2e2e6',
    muted: '#6b6b76',
  },
  spacing: {
    base: 16,
    scale: 1.5,
  },
  typography: {
    baseSize: 15,
    lineHeight: 22 / 15,
  },
  radiusPx: 12,
  shadowElevation: '0 8px 17px rgba(20, 20, 30, 0.11)',
  transitionDurationMs: 200,
}

export function applyAppTokensToRoot(tokens: AppTokens): void {
  const root = document.documentElement.style
  const { colors, spacing, typography } = tokens

  root.setProperty('--app-color-primary', colors.primary)
  root.setProperty('--app-color-background', colors.background)
  root.setProperty('--app-color-surface', colors.surface)
  root.setProperty('--app-color-foreground', colors.foreground)
  root.setProperty('--app-color-border', colors.border)
  root.setProperty('--app-color-muted', colors.muted)

  root.setProperty('--app-spacing-base', `${spacing.base}px`)
  root.setProperty('--app-spacing-scale', String(spacing.scale))

  root.setProperty('--app-text-base', `${typography.baseSize}px`)
  root.setProperty(
    '--app-text-base-line-height',
    String(typography.lineHeight),
  )

  root.setProperty('--app-radius', `${tokens.radiusPx}px`)
  root.setProperty('--app-shadow-elevation', tokens.shadowElevation)
  root.setProperty(
    '--app-transition-duration',
    `${tokens.transitionDurationMs}ms`,
  )
}
