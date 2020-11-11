class Box {
  constructor(x, y, width, height,color) {
    var options = {
        'restitution':1.0,
        'friction':0.7,
        'density':0.4
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color = color;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
   fill(this.color);
    stroke("brown");
    strokeWeight(5);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
