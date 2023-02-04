import './App.css'
import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'

import Debug from './components/Debug'
import Inventory from './components/Inventory'
import useSearchParams from './hooks/useSearchParams'

import type { OverlayMessage } from './types/overlay'

const states = ['connecting', '', 'closing', 'closed']

function App() {
  const { url, me } = useSearchParams()
  const [message, setMessage] = useState<OverlayMessage>()
  const { lastJsonMessage, readyState } = useWebSocket(url, { retryOnError: true, shouldReconnect: () => true })

  useEffect(() => {
    if (lastJsonMessage) {
      const msg = lastJsonMessage as unknown as OverlayMessage
      if (msg.player === me) setMessage(msg)
    }
  }, [lastJsonMessage, me])

  return (
    <div className="App">
      <span className="state">{states[readyState]}</span>
      {message && <Inventory message={message} />}
      <Debug message={message} readyState={readyState} />
    </div>
  );
}

export default App;
