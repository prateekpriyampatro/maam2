class mango{
constructor(x,y,r){
var options ={
isStatic : true,
}
this.x=x;
this.y=y;
this.r=r;
this.body = Bodies.circle(this.x,this.y,this.r,options);
this.image= loadImage("sprites/mango.png")
World.add(world,this.body);
}
display(){
var pos = this.body.position;
push ();
translate(pos.x,pos.y);
ellipse(pos.x,pos.y,this.body.r);
image(this.image,0,0,50);
}
}