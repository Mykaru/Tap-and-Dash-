const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'img\Track Sketch.jpeg';
img.onload = function() {
  ctx.drawImage(img, 0, 0);
}
