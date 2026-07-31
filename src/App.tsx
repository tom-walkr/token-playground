import { useEffect, useState } from 'react'
import { applyAppTokensToRoot, defaultAppTokens } from './appTokens'
import ControlCard from './components/ControlCard'
import ControlGroup from './components/ControlGroup'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import TokenPreview from './components/TokenPreview'
import { defaultPlaygroundTokens, type PlaygroundTokens } from './tokens'

function App() {
  const [appTokens] = useState(defaultAppTokens)
  const [playgroundTokens] = useState<PlaygroundTokens>(defaultPlaygroundTokens)

  useEffect(() => {
    applyAppTokensToRoot(appTokens)
  }, [appTokens])

  return (
    <main className="min-h-screen bg-background" aria-label="Design token playground">
      <Header />
      <div className="flex min-h-[calc(100svh-4rem)]">
        <Sidebar
          title="Controls"
          description="Adjust playground tokens and see the preview update."
        >
          <ControlCard
            title="Type scale"
            description="Base size and modular ratio."
          >
            <ControlGroup
              label="Base size"
              description="Root font size for the type scale."
            >
              {/* control slot */}
            </ControlGroup>
            <ControlGroup
              label="Ratio"
              description="Multiplier between type steps."
            >
              {/* control slot */}
            </ControlGroup>
          </ControlCard>

          <ControlCard
            title="Spacing"
            description="Base unit and scale factor."
          >
            <ControlGroup
              label="Base"
              description="Smallest spacing unit in pixels."
            >
              {/* control slot */}
            </ControlGroup>
            <ControlGroup
              label="Scale"
              description="Multiplier between spacing steps."
            >
              {/* control slot */}
            </ControlGroup>
          </ControlCard>

          <ControlCard
            title="Palette"
            description="Primary, secondary, and tertiary colours."
          >
            <ControlGroup label="Primary" description="Main accent colour.">
              {/* control slot */}
            </ControlGroup>
            <ControlGroup label="Secondary" description="Supporting accent.">
              {/* control slot */}
            </ControlGroup>
            <ControlGroup label="Tertiary" description="Third accent colour.">
              {/* control slot */}
            </ControlGroup>
          </ControlCard>
        </Sidebar>

        <div className="flex-1 px-gutter py-gutter">
          <TokenPreview tokens={playgroundTokens} />
        </div>
      </div>
    </main>
  )
}

export default App
