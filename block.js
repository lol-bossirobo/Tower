class Block {

    constructor (x,y){

        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,20,30);
        World.add(world,this.body);




    }

    display () {

        var blockpos = this.body.position;
        var angle = this.body.angle;

        push();

        translate(blockpos.x,blockpos.y);

        rotate(angle)

        rectMode(CENTER);

        rect(0,0,20,30);

        pop();

            
    }

}