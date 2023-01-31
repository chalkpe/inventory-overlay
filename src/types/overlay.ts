export type NullContent = { type: null }
export type ItemContent = { type: string, amount: number; damage: number; maxDurability: number }
export type Content = NullContent | ItemContent

export type OverlayMessage = {
    event: string
    version: string
    player: String
    armor: Content[]
    storage: Content[]
}