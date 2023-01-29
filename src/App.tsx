import './App.css'
import { useEffect, useState } from 'react'
import useWebSocket from 'react-use-websocket'
import Inventory from './components/Inventory'
import type { OverlayMessage } from './types/overlay'

function App() {
  const params = new URLSearchParams(window.location.search)
  const [url, me] = [params.get('ws'), params.get('me')]

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
      {message && <Inventory message={message} />}
      <br />
      {readyState}
      <pre>{message && message.event}</pre>
    </div>
  );
}

export default App;
