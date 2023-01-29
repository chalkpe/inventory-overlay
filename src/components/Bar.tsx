import Slot from './Slot'
import type { Content } from '../types/overlay'

interface Props {
    version: string,
    contents: Content[]
}

const Bar: React.FC<Props> = ({ version, contents }) => {
    return (
        <nav className="bar">
            {contents.map((c) => <Slot key={c.slot + String(c.type)} version={version} content={c} />)}
        </nav>
    )
}

export default Bar
