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
            <img src={mc(content.type)} />
            <figcaption>{content.amount > 1 ? content.amount : ''}</figcaption>
            <Damage content={content} />
        </figure>
    )
}

export default Slot
