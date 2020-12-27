class Building {
    constructor(x,y,width,height) {
      var options = {
          'isStatic': false, 
          'restitution':0.1,
          'friction':10,
          'density':4
      }
      this.Building= Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.veiw=255
      this.score=0
      World.add(world, this.Building);
    }
    display(){
      var posi =this.Building.position;
      var pos = this.Building.position;
      var angle = this.Building.angle;
      
      push()
      rotate(angle);
      translate(pos.x,pos.y)
      rectMode(CENTER);
      fill(186,14,28);
      rect(0, 0, 40, 30);
      pop()
      
    }
  };