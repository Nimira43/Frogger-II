class Obstacle {
    constructor(x, y, width, height, speed, type) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
    }
    draw() {
        ctx3.fillStyle = 'blue'
        ctx3.fillRect(this.x, this.y, this.width, this.height);

    }
    update() {
        this.x += this.speed * gameSpeed;
        if (this.speed > 0) {
            if (this.x > canvas.width + this.width) {
                this.x = 0 - this.width;
            }
        } else {
            if (this.x < 0 - this.width) {
                this.x = canvas.width + this.width;
            }
        }
    }
}

function initObstacles() {
    for (let i = 0; i < 2; i++) {       // lane 1
        let x = i * 350;
        carsArray.push(new Obstacle(x, canvas.height - grid * 2 - 20, grid * 2, grid, 1, 'car'));
    }
    for (let i = 0; i < 2; i++) {       // lane 2
        let x = i * 300;
        carsArray.push(new Obstacle(x, canvas.height - grid * 3 - 20, grid * 2, grid, -2, 'car'));
    }
    for (let i = 0; i < 2; i++) {       // lane 3
        let x = i * 400;
        carsArray.push(new Obstacle(x, canvas.height - grid * 4 - 20, grid * 2, grid, 2, 'car'));
    }
    for (let i = 0; i < 2; i++) {       // lane 4
        let x = i * 400;
        logsArray.push(new Obstacle(x, canvas.height - grid * 5 - 20, grid * 2, grid, -2, 'log'));
    }
    for (let i = 0; i < 3; i++) {       // lane 5
        let x = i * 200;
        logsArray.push(new Obstacle(x, canvas.height - grid * 6 - 20, grid, grid, 1, 'turtle'));
    }
}

initObstacles();

function handleObstacles() {
    for (let i = 0; i < carsArray.length; i++) {
        carsArray[i].update();
        carsArray[i].draw();
    }    
    for (let i = 0; i < logsArray.length; i++) {
        logsArray[i].update();
        logsArray[i].draw();
    }
}