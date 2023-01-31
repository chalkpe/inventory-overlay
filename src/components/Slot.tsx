import { memo } from 'react'
import Damage from './Damage'
import useMinecraftAsset from '../hooks/useMinecraftAsset'
import type { Content } from '../types/overlay'

interface Props {
    version: string
    content: Content
}

const Slot: React.FC<Props> = ({ version, content }) => {
    const mc = useMinecraftAsset(version)

    if (content.type === null) {
        return <div className="slot"></div>
    }

    return (
        <figure className="slot">
            <img src={mc(content.type)} alt={content.type} />
            <figcaption>{content.amount > 1 ? content.amount : ''}</figcaption>
            <Damage content={content} />
        </figure>
    )
}

const fieldsAreEqual = <T extends object>(prev: T, next: T) =>
    Object.keys(prev).every((key) => prev[key as keyof T] === next[key as keyof T])

export default memo(Slot, (prev, next) => fieldsAreEqual(prev.content, next.content))
