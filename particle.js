const renderSquareParticle = function () {
    ctx1.save();
    ctx1.globalAlpha = (this.life / this.maxLife)
    fillRect(ctx1, this.pos.x, this.pos.y, this.w, this.h, this.color);
    ctx1.restore();
};
const ParticleTypes = {
    Lava: {
        create: (p) => {
            p.movementX = () => Math.random() * 5 * [1, -1][Math.round(Math.random())];
            p.movementY = () => -2;
            p.maxLife = 30;
            p.w = 5;
            p.h = 5;
            p.color = "orange";
            p.render = renderSquareParticle;
            p.doDiminish = true;

        },
    },
    LavaSplash: {
        create: (p) => {
            let px = Math.random() * 5 * [1, -1][Math.round(Math.random())];
            let py = Math.random() * 5 * [1, -1][Math.round(Math.random())];
            p.movementX = () => px;
            p.movementY = () => py;
            p.maxLife = 20;
            p.w = 5;
            p.h = 5;
            p.color = "orange";
            p.render = renderSquareParticle;
            p.doDiminish = true;

        },
    },
    WaterSplash: {
        create: (p) => {
            let px = Math.random() * 5 * [1, -1][Math.round(Math.random())];
            let py = Math.random() * 5 * [1, -1][Math.round(Math.random())];
            p.movementX = () => px;
            p.movementY = () => py;
            p.maxLife = 30;
            p.w = 5;
            p.h = 5;
            p.color = "blue";
            p.render = renderSquareParticle;
            p.doDiminish = true;

        },
    },
    Death: {
        create: (p) => {
            let px = Math.random() * 5 * [1, -1][Math.round(Math.random())];
            let py = Math.random() * 5 * [1, -1][Math.round(Math.random())];
            p.movementX = () => px;
            p.movementY = () => py;
            p.maxLife = fps / 2;
            p.w = Math.random() * 5 + 5;
            p.h = p.w;
            p.color = [player.color, player.color2, "white"][Math.floor(Math.random() * 3)];
            p.render = renderSquareParticle;
            p.doDiminish = true;
            p.gravity = true;

        },
    },
    Grounded: {
        create: (p) => {
            let px = Math.random() * 5 * [1, -1][Math.round(Math.random())];
            let py = Math.random() * 0 * [1, -1][Math.round(Math.random())];
            p.movementX = () => px;
            p.movementY = () => py;
            p.maxLife = fps / 2;
            p.w = Math.random() * 5 + 2;
            p.h = p.w;
            p.color = [level[levelNo].colorA, level[levelNo].colorB, level[levelNo].colorC, "white"][Math.floor(Math.random() * 4)];
            p.render = renderSquareParticle;
            p.doDiminish = true;
            p.gravity = false;

        },
    },
    Ending: {
        create: (p) => {
            let px = Math.random() * 3 * -1;
            let py = Math.random() * 5 * [1, -1][Math.round(Math.random())];
            p.movementX = () => px;
            p.movementY = () => py;
            p.maxLife = 4 * fps;
            p.diminishFactor = 0.98;
            p.w = Math.random() * 5 + 4;
            p.h = p.w;
            p.color = [level[levelNo].colorA, level[levelNo].colorB, level[levelNo].colorC, "white"][Math.floor(Math.random() * 4)];
            p.render = renderSquareParticle;
            p.doDiminish = true;

        },
    },
}

function Particle(x, y, type) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(0, 0);
    this.acc = new Vector(0, 0);

    type.create(this);

    this.life = this.maxLife;

    this.update = () => {
        this.life -= 30 / fps;
        if (this.doDiminish) {
            this.w *= this.diminishFactor || 0.95;
            this.h *= this.diminishFactor || 0.95;
        }
        if (this.movementX) {
            this.acc.x = this.movementX();
        }
        if (this.movementY) {
            this.acc.y = this.movementY();
        }
        if (this.gravity) {
            this.acc.y += gravity * 5;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.vel.mult(0);
    }
}