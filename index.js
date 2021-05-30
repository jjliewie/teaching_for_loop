const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Container{

  constructor(x, y, width, length){
    this.x = x;
    this.y = y;
    this.length = length;
    this.width = width;
  }

  draw(){
    ctx.fillStyle = "grey"
    ctx.beginPath()
    ctx.rect(this.x, this.y, this.width, this.length)
    ctx.fillStyle = "grey"
    ctx.fill()
  }

}

const container1 = new Container(100, 200, 200, 300);
const container2 = new Container(350, 200, 200, 300);
const container3 = new Container(600, 200, 200, 300);
const container4 = new Container(850, 200, 200, 300);
const container5 = new Container(1100, 200, 200, 300)

var containers = [container1, container2, container3, container4, container5]

let animationId
function animate(){
  animationId = requestAnimationFrame(animate);
  ctx.fillStyle = 'rgba(0, 0, 0, 1)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.font = "25px Courier"
  ctx.fillStyle = "white"
  ctx.fillText("Why couldn't we delete and print properly using the FOR loop?", (canvas.width/2)-450, 100)

  containers.forEach((container, idx) => {
    container.draw();
    ctx.fillStyle = "black"
    ctx.fillText("index:" + idx, (container.x + 50), (container.y + (container.y + container.length))/2)

  });

}
window.addEventListener('click', (e)=> {

  containers.forEach((container, idx) => {
    if((e.clientX > container.x) && (e.clientX < (container.x + container.width))){
      containers.splice(idx, 1);
  }
})
})


animate()
