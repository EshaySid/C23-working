class Tower {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };
    this.image = loadImage("assets/tower.png");
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
  
    World.add(world, this.body);
  }


  
  display() {
    var pos = this.body.position;
    
    
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
   
  }
}
