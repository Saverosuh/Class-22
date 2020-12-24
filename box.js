class Box {
    constructor(x,y,w,h) {
        var options = {
            'restitution':1,
            'friction':1,
            'density':0.5,
        }
        this.body = Bodies.rectangle(x,y,w,h,)
        this.w = w 
        this.h = h
        World.add(world,this.body)

    }
    display() {
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()
    }
}