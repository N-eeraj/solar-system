// imports
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { CelestialObject } from './CelestialObject'


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

const light = new THREE.PointLight(0xffa, 10, 500)
scene.add(light)

const control = new OrbitControls(camera, renderer.domElement)


// textures

// sun
const sun = CelestialObject(100, '/assets/sun.jpg')
scene.add(sun)

// mercury
const mercury = CelestialObject(1.14, '/assets/mercury.jpg')
const mercuryOrigin = new THREE.Object3D()
mercury.position.set(120, 4, 7)
mercuryOrigin.add(mercury)
scene.add(mercuryOrigin)

// venus
const venus = CelestialObject(2.8, '/assets/venus.jpg')
const venusOrigin = new THREE.Object3D()
venus.position.set(160, 4, 7)
venusOrigin.add(venus)
scene.add(venusOrigin)

// earth
const earth = CelestialObject(3, '/assets/earth.jpg')
const earthOrigin = new THREE.Object3D()
earth.position.set(200, 4, 7)
earthOrigin.add(earth)
scene.add(earthOrigin)

// moon
const moon = CelestialObject(1, '/assets/moon.jpg')
moon.position.set(3, 3, 3)
earth.add(moon)

// mars
const mars = CelestialObject(1.6, '/assets/mars.jpg')
const marsOrigin = new THREE.Object3D()
mars.position.set(250, 4, 7)
marsOrigin.add(mars)
scene.add(marsOrigin)

// jupiter
const jupiter = CelestialObject(25, '/assets/jupiter.jpg')
const jupiterOrigin = new THREE.Object3D()
jupiter.position.set(360, 4, 7)
jupiterOrigin.add(jupiter)
scene.add(jupiterOrigin)

// saturn
const saturn = CelestialObject(15, '/assets/saturn.jpg')
const saturnOrigin = new THREE.Object3D()
saturn.position.set(450, 4, 7)
saturnOrigin.add(saturn)
scene.add(saturnOrigin)

// uranus
const uranus = CelestialObject(7.3, '/assets/uranus.jpg')
const uranusOrigin = new THREE.Object3D()
uranus.position.set(520, 4, 7)
uranusOrigin.add(uranus)
scene.add(uranusOrigin)

// neptune
const neptune = CelestialObject(7, '/assets/neptune.jpg')
const neptuneOrigin = new THREE.Object3D()
neptune.position.set(600, 4, 7)
neptuneOrigin.add(neptune)
scene.add(neptuneOrigin)


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
  mercuryOrigin.rotateY(0.016)
  venusOrigin.rotateY(0.0065)
  earthOrigin.rotateY(0.004)
  marsOrigin.rotateY(0.008)
  jupiterOrigin.rotateY(0.0013)
  saturnOrigin.rotateY(0.0005)
  uranusOrigin.rotateY(0.0002)
  neptuneOrigin.rotateY(0.0001)
  renderer.render(scene, camera)
})()