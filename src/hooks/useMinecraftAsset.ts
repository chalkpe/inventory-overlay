import { useCallback } from 'react'

const useMinecraftAsset = (version: string) =>
    useCallback((item: string) => `https://mc.nerothe.com/img/${version === '1.19' ? '1.20.1' : version}/${item}.png`, [version])
    // useCallback((path: string) => `https://assets.mcasset.cloud/${version}/assets/${path}`, [version])

export default useMinecraftAsset
