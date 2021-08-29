title = "Side Scroller Editor";
document.title = title || "No title";
editClass("b1", "blue");
b1Text = "Play";
editText("b1", "Play");
message = "";
doPause = false;
mode = "builder";
particles = [];

for (i = 0; i < level.length; i++) {
  addButton("header", "L" + i, "init(" + i + ");", orientation);
  editText("L" + i, i);
}

let data = JSON.parse(localStorage.getItem("savedBuilderData"));
if (data) {
  levelNo = data.levelNo;
  init(levelNo, data.tiles);
}

function setup() {
  w = 900;
  h = 600;
  width = w;
  height = h;
}
function init_sub(index, _tiles) {
  doPause = false;
  grid = 50;
  fps = 30;
  levelNo = index;
  // player = new Player(level[levelNo].startX(), level[levelNo].startY());
  friction = 0.9;
  gravity = 1;
  termVel = 20;
  minX = 0;
  tiles = _tiles || level[levelNo].tiles;
  maxX = tiles.length * grid;
  //console.log(maxX);
  rows = maxX / grid;
  cols = maxX / grid;
  camX = data?.camX || 0;
}
function update_sub() {
  maxX = tiles.length * grid;

  particles.forEach(particle => { particle.update(); });
  particles = particles.filter(particle => particle.life > 0);
}
function draw() {
  //clearCanvas(ctx1);

  ctx1.fillStyle = "black";
  //ctx1.globalAlpha = 0.4;
  ctx1.fillRect(0, 0, w, h);
  // player.draw();
  particles.forEach(particle => {
    particle.render()
  });

  for (
    x = camX - (camX % grid);
    x < Math.min(camX - (camX % grid) + w + grid, maxX);
    x += grid
  ) {
    for (y = 0; y < height; y += grid) {
      if (getTile(x, y) > 0) {
        ids[getTile(x, y)].draw(x - camX, y, grid, grid, x / grid, y / grid);
        if (frames == 0 && ids[getTile(x, y)].update != null) {
          ids[getTile(x, y)].update(
            x - camX,
            y,
            grid,
            grid,
            x / grid,
            y / grid
          );
        }
      }
    }
  }

  //player.draw();
}
function exit_sub() { }
function keyPressed(key) {
  if (key == keys.right) {
    camX += grid;
    // if (tiles[(camX + w) / grid] == null) {
    //   temp = [];
    //   for (i = 0; i < h / grid; i++) {
    //     if (i == h / grid - 3) {
    //       temp.push(1);
    //     } else {
    //       temp.push(0);
    //     }
    //   }
    //   //console.log(temp);
    //   maxX = tiles.length * grid;
    //   tiles.push(temp);
    // }
  } else if (key == keys.left) {
    camX = Math.max(camX - 50, 0);
  }
  if (document.activeElement !== document.getElementById("blockID")) {
    if (String.fromCharCode(key) >= 0) {
      document.getElementById("blockID").value = String.fromCharCode(key);
    }
    if (shortcuts[String.fromCharCode(key).toLocaleLowerCase()]) {
      document.getElementById("blockID").value =
        shortcuts[String.fromCharCode(key).toLocaleLowerCase()];
    }
  }
}
const shortcuts = { w: 10, l: 15, v: 20, s: 22 };
function getTile(x, y) {
  //return (((y-(y%grid))/grid)*(width/grid))+(((x-(x%grid))/grid));
  // console.log(x,y,tiles[Math.floor(x/grid)][Math.floor(y/grid)]);
  return tiles[Math.floor(x / grid)][Math.floor(y / grid)];
}
function setTile(x, y, id) {
  //return (((y-(y%grid))/grid)*(width/grid))+(((x-(x%grid))/grid));
  // console.log(x,y,tiles[Math.floor(x/grid)][Math.floor(y/grid)]);
  tiles[Math.floor(x / grid)][Math.floor(y / grid)] = id;
}
function getTileId(x, y) {
  //return (((y-(y%grid))/grid)*(width/grid))+(((x-(x%grid))/grid));
  // console.log(x,y,tiles[Math.floor(x/grid)][Math.floor(y/grid)]);
  if (x < 0 || x > maxX || y < 0 || y > h) {
    return ids[1];
  }
  return ids[tiles[Math.floor(x / grid)][Math.floor(y / grid)]];
}
function mouseClick() {
  mouse.id = parseInt(document.getElementById("blockID").value);
  if (doPause) {
    resume();
  } else {
    if (
      mouse.down == true &&
      mouse.x > 0 &&
      mouse.x < w &&
      mouse.y > 0 &&
      mouse.y < height
    ) {
      if (mouse.button == 0) {
        setTile(mouse.x + camX, mouse.y, mouse.id);
      } else {
        //setTile(mouse.x + camX, mouse.y, 0);
      }
    }
  }
}
function mouseUnClick() {
  if (
    mouse.x > 0 &&
    mouse.x < w &&
    mouse.y > 0 &&
    mouse.y < height
  ) {
    localStorage.setItem("savedBuilderData", JSON.stringify({ levelNo, tiles, camX, mouseID: mouse.id }));
  }
}
function mouseMoved() {
  if (
    mouse.down == true &&
    mouse.x > 0 &&
    mouse.x < w &&
    mouse.y > 0 &&
    mouse.y < height
  ) {
    if (mouse.button == 0) {
      setTile(mouse.x + camX, mouse.y, mouse.id);
    } else {
      //setTile(mouse.x + camX, mouse.y, 0);
    }
  }
}
function outputTiles() {
  temp = "";
  for (i = 0; i < tiles.length; i++) {
    temp += "[" + tiles[i] + "],";
  }
  document.getElementById("out").value =
    "[" + temp.substring(0, temp.length - 1) + "]";
}
