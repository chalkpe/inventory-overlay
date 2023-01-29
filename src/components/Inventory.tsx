import { useMemo } from 'react'

import Bar from './Bar'
import type { OverlayMessage } from '../types/overlay'

interface Props {
    message: OverlayMessage
}

const Inventory: React.FC<Props> = ({ message }) => {
    const storage = useMemo(() => message.storage.slice(9), [message])
    const armor = useMemo(() => Array.from(message.armor).reverse(), [message])

    return (
        <main className="inventory">
            <Bar version={message.version} contents={armor} />
            <Bar version={message.version} contents={storage} />
        </main>
    )
}

export default Inventory
