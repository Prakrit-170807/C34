class String {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 2,
            length : 300
    
        }
        this.pointB = pointB
        this.string = Constraint.create(options)

        World.add(world,this.string)
    }

    display(){
        if(this.string.bodyA!=null){
        var pointA = this.string.bodyA.position
        var pointB = this.pointB
        push()
        strokeWeight(5)
        stroke("#434343")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
        } 
    }

    fly() { 
       this.string.bodyA=null 
    }
    attach(body){
        this.string.bodyA=body
    }
    
}