class Block {
  constructor(x,y,width,height){
      var options={
          friction:0.4,
         restitution:1.2,
      }
     

      this.body=Bodies.rectangle(x,y,width,height,options)
      this.width=width
      this.height= height
      World.add(world,this.body);
  }
  display(){
      var pos = this.body.position;
      push ()
      translate(pos.x,pos.y);
      rotate (this.body.angle)
      

      rectMode(CENTER);
      rect(0,0,this.width,this.height)
      pop ()
  }
}