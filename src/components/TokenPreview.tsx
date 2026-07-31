import { spacingSizeAtStep, typeSizeAtStep } from '../tokenScale'
import {
  playgroundTokensToStyle,
  type PlaygroundTokens,
} from '../tokens'

interface TokenPreviewProps {
  tokens: PlaygroundTokens
}

const TYPE_STEPS = [-1, 0, 1, 2] as const
const SPACING_STEPS = [0, 1, 2, 3] as const

function TokenPreview({ tokens }: TokenPreviewProps) {
  const previewStyle = playgroundTokensToStyle(tokens)

  return (
    <section
      aria-label="Playground token preview"
      className="rounded border border-border bg-surface p-gutter shadow-elevation"
    >
      <h2 className="mb-inset text-lg text-foreground">Token preview</h2>

      <div style={previewStyle} className="flex flex-col gap-gutter">
        <div>
          <p className="mb-inset text-sm text-muted">Palette</p>
          <ul className="flex flex-wrap gap-inset">
            {(
              [
                ['Primary', 'var(--token-color-primary)'],
                ['Secondary', 'var(--token-color-secondary)'],
                ['Tertiary', 'var(--token-color-tertiary)'],
              ] as const
            ).map(([label, colorVar]) => (
              <li key={label} className="flex flex-col gap-1">
                <span
                  className="block size-14 rounded border border-border"
                  style={{ backgroundColor: colorVar }}
                  aria-hidden
                />
                <span
                  className="text-muted"
                  style={{
                    fontSize: typeSizeAtStep(tokens.typeScale, -1),
                  }}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-inset text-sm text-muted">Type scale</p>
          <ul className="flex flex-col gap-inset">
            {TYPE_STEPS.map((step) => {
              const sizePx = typeSizeAtStep(tokens.typeScale, step)
              return (
                <li key={step} className="text-foreground">
                  <span
                    style={{
                      fontSize: sizePx,
                      lineHeight: tokens.typeScale.ratio,
                    }}
                  >
                    Step {step >= 0 ? `+${step}` : step} — {sizePx.toFixed(2)}
                    px
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <p className="mb-inset text-sm text-muted">Spacing scale</p>
          <ul className="flex flex-wrap items-end gap-inset">
            {SPACING_STEPS.map((step) => {
              const sizePx = spacingSizeAtStep(tokens.spacing, step)
              return (
                <li key={step} className="flex flex-col items-center gap-1">
                  <span
                    className="rounded bg-[var(--token-color-primary)]"
                    style={{
                      width: sizePx,
                      height: sizePx,
                    }}
                    aria-hidden
                  />
                  <span className="text-xs text-muted">
                    {step}: {sizePx}px
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TokenPreview
