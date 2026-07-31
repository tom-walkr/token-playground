import { useEffect, useState } from 'react'
import {
  applyDesignTokensToRoot,
  defaultTokens,
  type DesignTokens,
} from './tokens'

function App() {
  const [tokens] = useState<DesignTokens>(defaultTokens)

  useEffect(() => {
    applyDesignTokensToRoot(tokens)
  }, [tokens])

  return (
    <main className="min-h-screen bg-neutral-100" aria-label="Design token playground" />
  )
}

export default App
