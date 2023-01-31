import Slot from './Slot'
import type { Content } from '../types/overlay'

interface Props {
    version: string,
    contents: Content[]
}

const Bar: React.FC<Props> = ({ version, contents }) => {
    return (
        <nav className="bar">
            {contents.map((c, i) => <Slot key={i} version={version} content={c} />)}
        </nav>
    )
}

export default Bar
