class Plinko {
    constructor(x,y,r){
        var options={
            isStatic: true,
        }
        this.r=15;
        
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        strokeWeight(3);
        fill(225,0,225);
        ellipse(0,0,this.r,this.r);
        pop();

        
        
        
   }
   
  }
  


