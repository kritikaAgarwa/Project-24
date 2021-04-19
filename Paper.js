class Paper
 {
    constructor() 
    {
      var options = {
          isStatic:false,
          friction:0.5,
          density:1.2,
          restitution:-1
      }
      
      this.r=25;
      this.body=Bodies.circle(100,100,25,options);
      World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("violet");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y,this.r);
        
    }
}

