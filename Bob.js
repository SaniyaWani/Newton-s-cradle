class Bob{
constructor(x){

   
    this.body = Bodies.circle(x,300,40);
    World.add(world,this.body);
}
display(){
    ellipse(this.body.position.x,300,40,40);
   
}
}