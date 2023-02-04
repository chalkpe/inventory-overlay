import { FC } from 'react'
import useSearchParams from '../hooks/useSearchParams'
import type { OverlayMessage } from '../types/overlay'

const states = ['connecting', 'open', 'closing', 'closed']

interface Props {
    readyState: number
    message: OverlayMessage | undefined
}

const Debug: FC<Props> = ({ readyState, message }) => {
    const { url, me, debug } = useSearchParams()

    if (message && !debug) return null
    return (
        <dl className="debug">
            <dt>event</dt>
            <dd>{message?.event}</dd>
            <dt>state</dt>
            <dd>{states[readyState]}</dd>
            <dt>me</dt>
            <dd>{me}</dd>
            <dt>url</dt>
            <dd>{url}</dd>
        </dl>
    )
}

export default Debug
