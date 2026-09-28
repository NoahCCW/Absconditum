const container = document.getElementById('sphere-container');
const width = container.clientWidth;
const height = container.clientHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(width, height);
container.appendChild(renderer.domElement);

const sphereGroup = new THREE.Group();
scene.add(sphereGroup);

const centerWrapper = document.createElement('div');
centerWrapper.className = 'sphere-node-wrapper';

const centerImg = document.createElement('img');
centerImg.src = '../public/gifs/headphonesemoji.gif';
centerImg.className = 'center-emoji-img';
centerWrapper.appendChild(centerImg);

const centerLabel = new THREE.CSS2DObject(centerWrapper);
centerLabel.position.set(0, 0, 0);

sphereGroup.add(centerLabel);

const controls = new THREE.TrackballControls(camera, renderer.domElement);
controls.noZoom = true;
controls.noPan = true;
controls.rotateSpeed = 1.2;
controls.dynamicDampingFactor = 0.04;

const labelRenderer = new THREE.CSS2DRenderer();
labelRenderer.setSize(width, height);
labelRenderer.domElement.className = 'css2d-label-renderer';
container.appendChild(labelRenderer.domElement);

// 1. Generate 36 items automatically 
// (Change the path/names to match your actual files: image1.png, image2.png, etc.)
const totalImages = 36;
const items = [];
for (let i = 1; i <= totalImages; i++) {
  items.push({
    src: `../public/images/image${i}.jpg`,
    url: `https://example.com/page${i}`
  });
}

// 2. Mathematical distribution for 36 points on a sphere (Fibonacci Sphere algorithm)
const r = 2.8; // Sphere radius
const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio

function createImageNode(imageSrc, x, y, z, url) {
  const wrapper = document.createElement('div');
  wrapper.className = 'sphere-node-wrapper';

  const img = document.createElement('img');
  img.src = imageSrc;
  img.className = 'sphere-img';
  img.onclick = (e) => {
    e.stopPropagation();
    window.location.href = url;
  };

  wrapper.appendChild(img);

  const label = new THREE.CSS2DObject(wrapper);
  label.position.set(x, y, z);
  sphereGroup.add(label);
}

// Loop through and position each item evenly in 3D space
items.forEach((item, i) => {
  const theta = 2 * Math.PI * i / phi;
  const y = 1 - (i / (totalImages - 1)) * 2; // goes from 1 to -1
  const radiusAtY = Math.sqrt(1 - y * y);

  const x = Math.cos(theta) * radiusAtY * r;
  const z = Math.sin(theta) * radiusAtY * r;
  const scaledY = y * r;

  createImageNode(item.src, x, scaledY, z, item.url);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  sphereGroup.rotation.x += 0.001;
  sphereGroup.rotation.y += 0.002;

  controls.update();
  renderer.render(scene, camera);
  labelRenderer.render(scene, camera);
}

animate();

let lastRainTime = 0;

window.addEventListener('mousemove', (e) => {
  const now = Date.now();
  // Throttle to every 50ms so it drops a logo smoothly without flooding the browser
  if (now - lastRainTime < 25) return;
  lastRainTime = now;

  // Create the raindrop element
  const drop = document.createElement('div');
  drop.className = 'spotify-rain';
  drop.style.left = `${e.clientX}px`;
  drop.style.top = `${e.clientY}px`;

  // Give each drop a random left/right drift value
  const randomDrift = (Math.random() - 0.5) * 50; // Drifts between -25px and +25px
  drop.style.setProperty('--drift', `${randomDrift}px`);

  // Append to the body
  document.body.appendChild(drop);

  // Remove the element from the DOM after the 0.8s animation completes
  setTimeout(() => {
    drop.remove();
  }, 800);
});