import { useState, type CSSProperties } from 'react'
import heroImg from '../assets/hero.png'
import { spacingSizeAtStep, typeSizeAtStep } from '../tokenScale'
import {
  playgroundTokensToStyle,
  type PlaygroundTokens,
} from '../tokens'

interface TokenPreviewProps {
  tokens: PlaygroundTokens
}

function IconHeart({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 20s-7-4.35-7-9.25A4.25 4.25 0 0 1 12 7.2a4.25 4.25 0 0 1 7 3.55C19 15.65 12 20 12 20Z"
        fill="currentColor"
      />
    </svg>
  )
}

function IconShare({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle cx="18" cy="5" r="2.5" fill="currentColor" />
      <circle cx="6" cy="12" r="2.5" fill="currentColor" />
      <circle cx="18" cy="19" r="2.5" fill="currentColor" />
      <path
        d="M8.2 13.1 15.8 17.4M15.8 6.6 8.2 10.9"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  )
}

function IconSpark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 3.5 13.7 9.3 19.5 11 13.7 12.7 12 18.5 10.3 12.7 4.5 11 10.3 9.3 12 3.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

function TokenPreview({ tokens }: TokenPreviewProps) {
  const [intensity, setIntensity] = useState(62)

  const spaceXs = spacingSizeAtStep(tokens.spacing, 0)
  const spaceSm = spacingSizeAtStep(tokens.spacing, 1)
  const spaceMd = spacingSizeAtStep(tokens.spacing, 2)
  const spaceLg = spacingSizeAtStep(tokens.spacing, 3)

  const typeSm = typeSizeAtStep(tokens.typeScale, -1)
  const typeBase = typeSizeAtStep(tokens.typeScale, 0)
  const typeMd = typeSizeAtStep(tokens.typeScale, 1)
  const typeXl = typeSizeAtStep(tokens.typeScale, 3)
  const iconSize = Math.round(typeMd)

  const rootStyle: CSSProperties = {
    ...playgroundTokensToStyle(tokens),
    width: 420,
    display: 'flex',
    flexDirection: 'column',
    gap: spaceMd,
    padding: spaceMd,
    borderRadius: spaceSm,
    backgroundColor: '#ffffff',
    color: '#1c1c1f',
    boxShadow: '0 12px 28px rgba(20, 20, 30, 0.14)',
    fontFamily: 'Erode, ui-serif, Georgia, serif',
  }

  const titleStyle: CSSProperties = {
    margin: 0,
    fontFamily: 'Satoshi, ui-sans-serif, system-ui, sans-serif',
    fontWeight: 700,
    fontSize: typeXl,
    lineHeight: tokens.typeScale.ratio,
    letterSpacing: '-0.02em',
  }

  const bodyStyle: CSSProperties = {
    margin: 0,
    fontSize: typeBase,
    lineHeight: tokens.typeScale.ratio,
    color: '#6b6b76',
  }

  const labelStyle: CSSProperties = {
    margin: 0,
    fontSize: typeSm,
    lineHeight: tokens.typeScale.ratio,
    color: '#6b6b76',
  }

  const dividerStyle: CSSProperties = {
    height: 1,
    width: '100%',
    backgroundColor: '#e2e2e6',
    border: 0,
  }

  const raisedCardStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: spaceSm,
    padding: spaceMd,
    borderRadius: spaceSm,
    backgroundColor: '#ffffff',
    boxShadow: '0 8px 17px rgba(20, 20, 30, 0.11)',
    border: '1px solid #e2e2e6',
  }

  const softCardStyle: CSSProperties = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: spaceXs,
    padding: spaceSm,
    borderRadius: spaceSm,
    backgroundColor: '#f5f5f7',
    border: '1px solid #e2e2e6',
  }

  const iconButtonStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: spaceLg,
    height: spaceLg,
    padding: 0,
    border: '1px solid #e2e2e6',
    borderRadius: spaceSm,
    backgroundColor: '#ffffff',
    color: 'var(--token-color-secondary)',
    cursor: 'pointer',
  }

  const primaryButtonStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spaceXs,
    padding: `${String(spaceSm)}px ${String(spaceMd)}px`,
    border: 'none',
    borderRadius: spaceSm,
    backgroundColor: 'var(--token-color-primary)',
    color: '#ffffff',
    fontFamily: 'Satoshi, ui-sans-serif, system-ui, sans-serif',
    fontWeight: 700,
    fontSize: typeBase,
    cursor: 'pointer',
  }

  const secondaryButtonStyle: CSSProperties = {
    ...primaryButtonStyle,
    backgroundColor: 'transparent',
    color: 'var(--token-color-primary)',
    border: '1px solid var(--token-color-primary)',
  }

  const imageWrapStyle: CSSProperties = {
    overflow: 'hidden',
    borderRadius: spaceSm,
    backgroundColor: '#f5f5f7',
  }

  const sliderTrackStyle: CSSProperties = {
    width: '100%',
    accentColor: 'var(--token-color-tertiary)',
    cursor: 'pointer',
  }

  const stopCanvasDrag = (event: { stopPropagation: () => void }) => {
    event.stopPropagation()
  }

  return (
    <article
      aria-label="Sample UI preview"
      style={rootStyle}
      className="select-none"
      onPointerDown={stopCanvasDrag}
    >
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: spaceSm,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: spaceSm,
            minWidth: 0,
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: spaceLg,
              height: spaceLg,
              borderRadius: spaceSm,
              backgroundColor: 'var(--token-color-primary)',
              color: '#ffffff',
              flexShrink: 0,
            }}
          >
            <IconSpark size={iconSize} />
          </span>
          <div style={{ minWidth: 0 }}>
            <h2 style={titleStyle}>Aurora Session</h2>
            <p style={{ ...labelStyle, marginTop: spaceXs }}>
              Live preview · token-driven UI
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: spaceXs }}>
          <button type="button" aria-label="Favourite" style={iconButtonStyle}>
            <IconHeart size={iconSize} />
          </button>
          <button type="button" aria-label="Share" style={iconButtonStyle}>
            <IconShare size={iconSize} />
          </button>
        </div>
      </header>

      <hr style={dividerStyle} />

      <div style={imageWrapStyle}>
        <img
          src={heroImg}
          alt="Abstract product preview"
          style={{
            display: 'block',
            width: '100%',
            height: 180,
            objectFit: 'cover',
          }}
          draggable={false}
        />
      </div>

      <p style={bodyStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div style={{ display: 'flex', gap: spaceSm }}>
        <div style={softCardStyle}>
          <p style={{ ...labelStyle, color: 'var(--token-color-secondary)' }}>
            Contrast
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: 'Satoshi, ui-sans-serif, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: typeMd,
            }}
          >
            AA ready
          </p>
        </div>
        <div style={softCardStyle}>
          <p style={{ ...labelStyle, color: 'var(--token-color-tertiary)' }}>
            Density
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: 'Satoshi, ui-sans-serif, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: typeMd,
            }}
          >
            Compact
          </p>
        </div>
      </div>

      <div style={raisedCardStyle}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: spaceSm,
          }}
        >
          <label htmlFor="intensity-slider" style={{ ...bodyStyle, color: '#1c1c1f' }}>
            Intensity
          </label>
          <span
            style={{
              fontFamily: 'Satoshi, ui-sans-serif, system-ui, sans-serif',
              fontWeight: 700,
              fontSize: typeSm,
              color: 'var(--token-color-tertiary)',
            }}
          >
            {intensity}%
          </span>
        </div>
        <input
          id="intensity-slider"
          type="range"
          min={0}
          max={100}
          value={intensity}
          onChange={(event) => {
            setIntensity(Number(event.target.value))
          }}
          style={sliderTrackStyle}
        />
        <p style={labelStyle}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>

      <hr style={dividerStyle} />

      <footer
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: spaceSm,
        }}
      >
        <button type="button" style={secondaryButtonStyle}>
          Reset
        </button>
        <button type="button" style={primaryButtonStyle}>
          <IconSpark size={Math.round(typeBase)} />
          Apply theme
        </button>
      </footer>
    </article>
  )
}

export default TokenPreview
