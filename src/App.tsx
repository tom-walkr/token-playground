import { useEffect, useState } from 'react'
import { applyAppTokensToRoot, defaultAppTokens } from './appTokens'
import Header from './components/Header'
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
      <div className="px-gutter py-gutter">
        <TokenPreview tokens={playgroundTokens} />
      </div>
    </main>
  )
}

export default App
