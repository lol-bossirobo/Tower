class Stand {

    constructor (x,y,width,height) {

        var options = {

            isStatic:true
        }

        this.stand = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.stand);


    }


    display() {

        var stanpos = this.stand.position;
        rectMode(CENTER);
        rect(stanpos.x,stanpos.y,this.width,this.height);


    }





}