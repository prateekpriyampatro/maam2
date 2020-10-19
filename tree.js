class tree {
constructor(x,y,width,height){
var options ={
isStatic:true
}
this.x = x;
this.y=y;
this.width=width;
this.height=height;
this.image= loadImage("sprites/tree.png");
this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
World.add(world,this.body);
}
display(){
var pos = this.body.position;
push ();
rectMode(CENTER);
rect(pos.x,pos.y,this.body.width,this.body.height);
imageMode (CENTER);
image(this.image,0,0,this.width,this.height);
}
}