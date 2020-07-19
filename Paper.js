class Paper {

    constructor(x,y){

        var options ={
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:0.5
        }
            this.body=Bodies.circle(x,y,30,options);
            World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        ellipseMode(RADIUS);
        fill("magenta");
        ellipse(pos.x,pos.y,30,30);
    }
}