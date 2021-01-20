class Ground {

    constructor() {
        var options = {

            isStatic:true
            
        }
        
       this.ground = Bodies.rectangle(450,375,900,10,options);
       World.add(world,this.ground);



    }

    display () {

        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,10);




    }


















}