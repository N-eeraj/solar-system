import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

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

const earthGeometry = new THREE.SphereGeometry(5, 64, 32)
const earthTexture = new THREE.TextureLoader().load('/assets/earth.jpg')
const earthMaterial = new THREE.MeshBasicMaterial({ map: earthTexture })
const earth = new THREE.Mesh(earthGeometry, earthMaterial)
earth.rotateX(-0.01)
scene.add(earth)

const moonGeometry = new THREE.SphereGeometry(1.5, 64, 32)
const moonTexture = new THREE.TextureLoader().load('/assets/moon.jpg')
const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture })
const moon = new THREE.Mesh(moonGeometry, moonMaterial)
moon.position.set(7, 4, 7)
scene.add(moon)

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