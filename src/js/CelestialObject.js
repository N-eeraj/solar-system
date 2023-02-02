import { SphereGeometry, TextureLoader, MeshBasicMaterial, MeshStandardMaterial, Mesh } from 'three'

export const CelestialObject = (radius, textureFile, isLightSource = false) => {
    const geometry = new SphereGeometry(radius, 32, 64)
    const texture = new TextureLoader().load(textureFile)
    const material = isLightSource ? new MeshBasicMaterial({ map: texture }) : new MeshStandardMaterial({ map: texture })
    return new Mesh(geometry, material)
}