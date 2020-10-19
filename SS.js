class SS{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.ss = Constraint.create(options);
        World.add(world, this.ss);
    }

    display(){
        if(this.ss.bodyA){
        var pointA = this.ss.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
    this.ss.bodyA= null;
    }
    
}