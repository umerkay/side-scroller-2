function Player(x, y) {
  this.timeAlive = 0;
  this.w = grid;
  this.h = grid;
  this.hp = 50;
  this.maxHP = this.hp;
  this.x = x + this.w / 2;
  this.maxBreath = 120;
  this.breath = this.maxBreath;
  // this.y = h/2 - this.h/2;
  this.y = y + this.h / 2;
  this.velx = 0;
  this.vely = 0;
  this.color = "#4171f4";
  //this.color = "red";
  this.sx = 2;
  this.sCapx = 10;
  this.sy = 9;
  this.grounded = false;
  this.angle = 0;
  this.stroke = this.w / 10;
  this.color2 = "#34ff2d";
  this.name = document.getElementById("name")?.value;

  //this.sCapy = 10;
  this.draw = function () {
    ctx1.save();
    ctx1.lineWidth = this.stroke;
    rotate(ctx1, this.x - camX, this.y, this.w, this.h, this.angle);
    ctx1.strokeStyle = this.color;
    ctx1.strokeRect(
      this.x - camX + this.stroke / 2 + this.stroke,
      this.y + this.stroke / 2 + this.stroke,
      this.w - this.stroke - 2 * this.stroke,
      this.h - this.stroke - 2 * this.stroke
    );
    ctx1.strokeStyle = "white";
    ctx1.strokeRect(
      this.x - camX + this.stroke / 2,
      this.y + this.stroke / 2,
      this.w - this.stroke,
      this.h - this.stroke
    );
    ctx1.fillStyle = this.color2;
    ctx1.fillRect(
      this.x - camX + this.w / 2 - this.stroke,
      this.y + this.h / 2 - this.stroke,
      2 * this.stroke,
      2 * this.stroke
    );
    ctx1.restore();
  };

  this.respawn = function () {
    // return;
    camsX = camsXd;
    player = "";
    player = new Player(level[levelNo].startX(), level[levelNo].startY());
    camX = 0;
    frameCount = 0;
    if (keyBank) keys.active = [];
    keyLog = [];
    if (keys.active[keys.up])
      keyLog.push({ frameCount: 0, keyCode: keys.up, event: "keydown" });
    if (keys.active[keys.down])
      keyLog.push({ frameCount: 0, keyCode: keys.down, event: "keydown" });
    if (keys.active[keys.right])
      keyLog.push({ frameCount: 0, keyCode: keys.right, event: "keydown" });
    if (keys.active[keys.left])
      keyLog.push({ frameCount: 0, keyCode: keys.left, event: "keydown" });

    keyBank = null;
    LevelCompleted = false;
  };

  this.updateNew = function () {
    //UPDATE VELOCITIES
    this.timeAlive++;

    if (this.vely == 0) {
      this.velx *= friction;
    }

    //KEY FUNCTIONS

    if (keys.active[keys.left]) {
      this.velx = Math.max(this.velx - this.sx, -this.sCapx);
    }

    if (keys.active[keys.right]) {
      this.velx = Math.min(this.velx + this.sx, this.sCapx);
    }

    if (keys.active[keys.up]) {
      if (this.grounded) {
        this.vely = -this.sy * 2;
        this.grounded = false;
      }
    }
    if (keys.active[keys.down]) {
      this.vely = Math.min(this.vely + this.sy, this.sCapx);
    }

    //KILL IF BEHIND CAMERA

    if (this.x + this.velx + this.w <= camX) {
      this.respawn();
    }

    //COLLISION DETECTION

    x = this.x + this.velx * (30 / fps);
    y = this.y;

    if (this.x + this.w + this.velx >= maxX) {
      let time = Math.floor((this.timeAlive / fps) * 1000) / 1000;
      let name = this.name || "Guest#" + ("" + Math.random()).slice(2);

      doPause = true;
      message = keyBank
        ? "Walkthrough Complete"
        : "You, " + this.name + ", took " + time + "s! Click to play again";
      editClick("pause", resume);
      editText("pause", "►");

      if (!keyBank) {
        LevelCompleted = true;
        PublishScore(time, name);
      }
      return;
    }

    if (
      getTileId(x, y).doesCollide(x % grid, y % grid) ||
      getTileId(x, y + this.h - 1).doesCollide(
        x % grid,
        (y + this.h - 1) % grid
      ) ||
      getTileId(x, y + this.h / 2).doesCollide(
        x % grid,
        (y + this.h / 2) % grid
      ) ||
      getTileId(x + this.w, y).doesCollide((x + this.w) % grid, y % grid) ||
      getTileId(x + this.w, y + this.h - 1).doesCollide(
        (x + this.w) % grid,
        (y + this.h - 1) % grid
      ) ||
      getTileId(x + this.w, y + this.h / 2).doesCollide(
        (x + this.w) % grid,
        (y + this.h / 2) % grid
      )
    ) {
      this.velx *= -0.6;
    }

    x = this.x;
    y = this.y + this.vely * (30 / fps);
    if (
      getTileId(x, y).doesCollide(x % grid, y % grid) ||
      getTileId(x + this.w, y).doesCollide((x + this.w) % grid, y % grid) ||
      getTileId(x + this.w / 2, y).doesCollide(
        (x + this.w / 2) % grid,
        y % grid
      )
    ) {
      this.vely = 0;
      // this.y = y - (y % grid) + grid;
    }
    let bottom = [
      getTileId(x, y + this.h).doesCollide(x % grid, (y + this.h) % grid),
      getTileId(x + this.w, y + this.h).doesCollide(
        (x + this.w) % grid,
        (y + this.h) % grid
      ),
      getTileId(x + this.w / 2, y + this.h).doesCollide(
        (x + this.w / 2) % grid,
        (y + this.h) % grid
      ),
    ];
    if (bottom[0] || bottom[1] || bottom[2]) {
      // let slimey = !!bottom.filter((b) => tiles[b].slimey).length;
      this.vely = false ? -this.sCapx : 0;
      this.grounded = true;
      this.angle = Math.ceil(this.angle / 90) * 90;
      this.y = y - ((y + this.h) % grid);
    } else {
      this.grounded = false;
    }

    if (
      getTileId(this.x, this.y + this.h + this.vely).doFloat ||
      getTileId(this.x + this.w, this.y + this.h - 1 + this.vely).doFloat
    ) {
      this.vely *= 0.5;
      this.vely -= 0.5;
      this.grounded = true;
      this.velx *= 0.7;
      this.breath--;
      if (this.breath <= 0) {
        this.breath = 0;
        this.hp--;
      }
    } else {
      this.breath = Math.min(this.breath + 1, this.maxBreath);
    }
    if (this.grounded == false) {
      this.vely = Math.min(termVel, this.vely + gravity);
    }

    //UPDATE X AND Y VALUES

    this.x += this.velx * (30 / fps);
    this.y += this.vely * (30 / fps);

    //UPDATE ANGLE

    if (this.vely != 0) {
      this.angle += this.velx * (30 / fps);
    }

    if (this.hp <= 0 || level[levelNo].time - this.timeAlive / fps <= 0) {
      this.respawn();
    } else if (this.hp > 0) {
      this.hp = Math.min(this.hp + 0.05, this.maxHP);
    }
  };
}
