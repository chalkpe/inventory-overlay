import type { CSSProperties } from 'react'
import type { ItemContent } from '../types/overlay'

interface Props {
    content: ItemContent
}

const colors = ['#FF3300', '#FF3C00', '#FF5F00', '#FF8100', '#FFA400', '#FFC600', '#FFFA00', '#E9FF00', '#BEFF00', '#92FF00', '#79FF00', '#45FF00', '#08FF00']

const Damage: React.FC<Props> = ({ content }) => {
    if (content.damage === 0 || content.maxDurability === 0) {
        return null
    }

    const percentage = (content.maxDurability - content.damage) / content.maxDurability
    const styles: CSSProperties = {
        width: `${(percentage * 100).toFixed(1)}%`,
        backgroundColor: colors[Math.floor(percentage * colors.length)]
    }

    return (
        <>
            <div className="damage gauge" style={styles} />
            <div className="damage bar" />
        </>
    )
}

export default Damage
