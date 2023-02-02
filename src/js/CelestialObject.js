import { SphereGeometry, TextureLoader, MeshBasicMaterial, Mesh } from 'three'

export const CelestialObject = (radius, textureFile) => {
    const geometry = new SphereGeometry(radius, 32, 64)
    const texture = new TextureLoader().load(textureFile)
    const material = new MeshBasicMaterial({ map: texture })
    return new Mesh(geometry, material)
}