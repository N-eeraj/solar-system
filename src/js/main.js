// imports
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { CelestialObject } from './CelestialObject'

import data from './data'


// functions
const randomPosition = () => {
  let position = Math.random() * 7000 * (Math.random() < 0.5 ? -1 : 1)
  position += (position > 0 ? 5000 : -5000) * Math.random()
  return position
}


// Three JS setup
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000)
camera.position.setZ(500)

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('bg')
})
renderer.setPixelRatio(window.pixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

const light = new THREE.PointLight(0xFFDD99, 3, 1000)
scene.add(light)

const control = new OrbitControls(camera, renderer.domElement)


// textures

// sun
const sun = CelestialObject(data['sun'], true)
scene.add(sun)

// mercury
const mercury = CelestialObject(data['mercury'])
scene.add(mercury.origin)

// venus
const venus = CelestialObject(data['venus'])
scene.add(venus.origin)

// earth
const earth = CelestialObject(data['earth'])
scene.add(earth.origin)

// moon
const moon = CelestialObject(data['moon'])
earth.add(moon)

// mars
const mars = CelestialObject(data['mars'])
scene.add(mars.origin)

// jupiter
const jupiter = CelestialObject(data['jupiter'])
scene.add(jupiter.origin)

// saturn
const saturn = CelestialObject(data['saturn'])
scene.add(saturn.origin)

// uranus
const uranus = CelestialObject(data['uranus'])
scene.add(uranus.origin)

// neptune
const neptune = CelestialObject(data['neptune'])
scene.add(neptune.origin)


// stars
const starGeometry = new THREE.SphereGeometry(20, 3, 3)
const starMaterial = new THREE.MeshBasicMaterial({ color: 'white' })
for (let i=0; i<200; i++) {
  const star = new THREE.Mesh(starGeometry, starMaterial)
  star.position.set(randomPosition(), randomPosition(), randomPosition())
  scene.add(star)
}


// animate
(function animate() {
  requestAnimationFrame(animate)
  control.update()
  sun.rotateY(0.0005)
  mercury.origin.rotateY(0.016)
  mercury.rotateY(0.0004)
  venus.origin.rotateY(0.0065)
  venus.rotateY(0.0001)
  earth.origin.rotateY(0.004)
  earth.rotateY(0.029)
  mars.origin.rotateY(0.008)
  mars.rotateY(0.028)
  jupiter.origin.rotateY(0.0013)
  jupiter.rotateY(0.07)
  saturn.origin.rotateY(0.0005)
  saturn.rotateY(0.064)
  uranus.origin.rotateY(0.0002)
  uranus.rotateY(0.04)
  neptune.origin.rotateY(0.0001)
  neptune.rotateY(0.043)
  renderer.render(scene, camera)
})()