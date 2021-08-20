title = "Side Scroller";
document.title = title || "No title";
editClass("b1", "blue");
b1Text = "Play";
editText("b1", "Play");
doPause = false;
message = "";
mode = "play";

for (i = 1; i < level.length; i++) {
  addButton("header", "L" + i, "init(" + i + ");", orientation);
  editText("L" + i, i);
}
LevelCompleted = false;

function setup() {
  // w = document.documentElement.clientWidth - 30;
  // h = document.documentElement.clientHeight - 30;
  w = document.documentElement.clientWidth - 30;
  h = document.documentElement.clientHeight - 30;
  width = w;
  height = h;
  if (h < 600) {
    zoom = 0.75;
  }
  LevelCompleted = false;
}

let levelNo;

function init_sub(index, gr) {
  document.getElementById("name").style = "display: none;";
  LevelCompleted = false;
  if (keyBankIndex !== null) keyBank = JSON.parse(keyBanks[keyBankIndex]);
  keyLog = [];
  message = "";
  mode = "player";
  grid = gr || 50;
  fps = 50;
  levelNo = index;
  console.log(levelNo);

  player = new Player(level[levelNo].startX(), level[levelNo].startY());
  if (levelNo === 0 || level[levelNo].tiles === null) {
    let input = window.prompt("Custom level data:");
    level[levelNo].tiles = JSON.parse(input);
  }

  //player2 = new Player(level[levelNo].startX(), level[levelNo].startY());
  friction = 0.9;
  gravity = 1 * (30 / fps);
  termVel = 20;
  minX = 0;
  tiles = level[levelNo].tiles;
  maxX = tiles.length * grid;
  // maxX = 1900;
  //console.log(maxX);
  rows = maxX / grid;
  cols = maxX / grid;
  camX = 0;
  camsXd = 0;
  camsX = camsXd; //4
  camaX = 0.0; //0.01
  doPause = false;
}
function update_sub() {
  if (keyBank) {
    while (keyBank[0]?.frameCount === frameCount) {
      let e = keyBank.shift();
      keys.active[e.keyCode] = e.event === "keyup" ? false : true;
    }
  }

  camsX = Math.min(camsX + camaX, player.sCapx * 0.8);
  player.updateNew();
  camX = Math.floor(
    Math.max(Math.min(player.x + player.w / 2 - w / 2, maxX - w), camX + camsX)
  );
}
let zoom = 1;

function draw() {
  ctx1.save();
  // ctx1.translate(w / 2, h / 2);
  ctx1.scale(zoom, zoom);
  // ctx1.translate(-w / 2, -h / 2);
  w = w / zoom;
  h = h / zoom;
  width = w;
  height = h;

  ctx1.fillStyle = "black";
  ctx1.fillRect(0, 0, w, h);

  if (
    player.hp <= player.maxHP / 2 ||
    player.x - w / 4 <= camX ||
    level[levelNo].time - player.timeAlive / fps <= 10
  ) {
    ctx1.globalAlpha = Math.max(
      Math.max(0, 0.5 - player.hp / 50),
      Math.max(0, 0.5 - (player.x - camX) / 500),
      Math.max(0, 0.5 - (level[levelNo].time - player.timeAlive / fps) / 20)
    );
    ctx1.fillStyle = "red";
    ctx1.fillRect(0, 0, w, h);
    ctx1.globalAlpha = 1;
  }

  for (
    x = camX - (camX % grid);
    x < Math.min(camX - (camX % grid) + w + grid, maxX);
    x += grid
  ) {
    for (y = 0; y < height; y += grid) {
      if (getTile(x, y) > 0) {
        //code for drawing the actual boxes is in another file
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

  ctx1.fillStyle = level[levelNo].colorA;
  ctx1.fillRect(w / 2 - 250, 20, 500, 15);
  ctx1.fillStyle = "white";
  ctx1.fillRect(
    w / 2 - 245,
    25,
    ((player.x + player.w) / maxX) * (500 - 10),
    5
  );

  ctx1.fillStyle = "white";
  ctx1.fillRect(w / 2 - 250, 40, 500, 15);
  ctx1.fillStyle = "#B10000";
  ctx1.fillRect(w / 2 - 245, 45, (player.hp / player.maxHP) * (500 - 10), 5);

  player.draw();

  seconds = level[levelNo].time - Math.floor(player.timeAlive / fps);
  size = 35;
  sx = w / 2 - 250 - (10 + size / 2);
  sy = 20 + size / 2;
  ctx1.fillStyle = level[levelNo].colorC;
  ctx1.beginPath();
  ctx1.arc(
    sx,
    sy,
    size / 2,
    0 - Math.PI / 2,
    (level[levelNo].time - player.timeAlive / fps - seconds) * 2 * Math.PI -
      Math.PI / 2
  );
  ctx1.lineTo(sx, sy);
  ctx1.fill();

  ctx1.fillStyle = "white";
  ctx1.textAlign = "center";
  ctx1.textBaseline = "middle";
  ctx1.font = "25px Arial";
  ctx1.fillText(seconds, sx, sy);

  w = w * zoom;
  h = h * zoom;
  width = w;
  height = h;
  ctx1.restore();
}
function exit_sub() {
  document.getElementById("name").style = "display: inline;";
}
function keyPressed(key) {}
function getTile(x, y) {
  return tiles[Math.floor(x / grid)][Math.floor(y / grid)];
}
function getTileId(x, y) {
  if (y > h / zoom || y/grid > tiles[0].length) {
    return ids[16];
  }
  if (x < 0 || x > maxX || y < 0 || y > h / zoom) {
    return ids[1];
  }
  return ids[tiles[Math.floor(x / grid)][Math.floor(y / grid)]];
}
function dot(u, v) {
  return u[0] * v[0] + u[1] * v[1];
}

function vec(from, to) {
  return [to[0] - from[0], to[1] - from[1]];
}

function colTri(P, A, B, C) {
  // Compute vectors
  var v0 = vec(A, C);
  var v1 = vec(A, B);
  var v2 = vec(A, P);
  // Compute dot products
  var dot00 = dot(v0, v0);
  var dot01 = dot(v0, v1);
  var dot02 = dot(v0, v2);
  var dot11 = dot(v1, v1);
  var dot12 = dot(v1, v2);
  // Compute barycentric coordinates
  var invDenom = 1.0 / (dot00 * dot11 - dot01 * dot01);
  var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
  var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
  // Check if point is in triangle
  return u >= 0 && v >= 0 && u + v < 1;
}

async function PublishBestScore(time, name) {
  if (levelNo !== 0 && !levelNo) return console.log("Do not cheat, man");
  let lastScore = null;
  let docRef = db
    .collection("bestscores")
    .doc("level" + levelNo)
    .collection("scores")
    .doc(name);
  docSnapshot = await docRef.get();
  if (docSnapshot.exists) {
    lastScore = docSnapshot.data().time;
  }
  if (lastScore && time > lastScore) {
    message =
      "You, " +
      name +
      ", took " +
      time +
      "s! Your best is " +
      lastScore +
      "s.";
  } else {
    docRef.set({
      name,
      time,
      timestamp: new Date().toUTCString(),
      fps,
      frames0,
      keyLog: JSON.stringify(keyLog),
      v: "2.05",
      player: JSON.stringify(player),
    });
    message =
      "You, " + name + ", took " + time + "s! This is your new best.";
  }
  setMessage();
}

function PublishScore(time, name) {
  let confirm = null;
  count = 0;
  while (confirm !== "NO" && confirm !== "YES" && count < 5) {
    count++;
    confirm = window.prompt(
      "Type YES if you wish to publish your score " +
        time +
        "s, otherwise type NO"
    );
  }
  if (confirm === "YES") {
    db.collection("highscores")
      .doc("level" + levelNo)
      .collection("scores")
      .doc(name)
      .set({
        name,
        time,
        timestamp: new Date().toUTCString(),
        fps,
        frames0,
        keyLog: JSON.stringify(keyLog),
        v: "2.05",
        player: JSON.stringify(player),
      });
  }
}
