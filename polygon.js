class Polygon{
    constructor(x,y,radius){
        var options={
            density:0.2,
            restitution:0.8,
            friction:0.2
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        World.add(world,this.body)
        this.image=loadImage("polygon.png")
    }
    display(){
      var posx=this.body.position.x
      var posy=this.body.position.y

      imageMode(CENTER)
      image(this.image,posx,posy,this.radius,this.radius)
    }
}