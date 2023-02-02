import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { CelestialObject } from './CelestialObject'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.setZ(25)

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('bg')
})
renderer.setPixelRatio(window.pixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

const light = new THREE.PointLight(0xfff)
light.position.set(20, 20, 10)
scene.add(light)

const control = new OrbitControls(camera, renderer.domElement)

const earth = CelestialObject(5, '/assets/earth.jpg')
earth.rotateX(-0.01)
scene.add(earth)

const moon = CelestialObject(1.5, '/assets/moon.jpg')
moon.position.set(7, 4, 7)
earth.add(moon)

const randomPosition = () => Math.random() * 1000 * (Math.random() < 0.5 ? -1 : 1)

const starGeometry = new THREE.SphereGeometry(1, 3, 3)
const starMaterial = new THREE.MeshBasicMaterial({ color: 'white' })
for (let i=0; i<200; i++) {
  const star = new THREE.Mesh(starGeometry, starMaterial)
  star.position.set(randomPosition(), randomPosition(), randomPosition())
  scene.add(star)
}

(function animate() {
  requestAnimationFrame(animate)
  earth.rotateY(0.005)
  moon.rotateY(0.005)
  control.update()
  renderer.render(scene, camera)
})()