class ground {
construtor(x,y,width,height){
var options = {
istatic:true
}
this.x = x;
this.y=y;
this.width = width;
this.height = height;
this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
World.add(world,this.body);
}
display(){
var pos = this.body.position;
push ();
translate(pos.x,pos.y);
rectMode(CENTER);
rect(pos.x,pos.y,this.body.width,this.body.height)
pop ();

}

}
