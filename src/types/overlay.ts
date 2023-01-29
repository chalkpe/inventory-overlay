export type NullContent = { slot: number, type: null }
export type ItemContent = { slot: number, type: string, amount: number; damage: number; maxDurability: number }
export type Content = NullContent | ItemContent

export type OverlayMessage = {
    event: string
    version: string
    player: String
    armor: Content[]
    storage: Content[]
}