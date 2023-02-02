import { SphereGeometry, TextureLoader, MeshBasicMaterial, MeshStandardMaterial, Mesh, Object3D } from 'three'

export const CelestialObject = ({ radius, textureFile, position }, isLightSource = false) => {
    const geometry = new SphereGeometry(radius, 32, 64)
    const texture = new TextureLoader().load(textureFile)
    const material = isLightSource ? new MeshBasicMaterial({ map: texture }) : new MeshStandardMaterial({ map: texture })
    const mesh = new Mesh(geometry, material)
    mesh.origin = new Object3D()
    const { x, y, z } = position
    mesh.position.set(x, y, z)
    mesh.origin.add(mesh)
    return mesh
}