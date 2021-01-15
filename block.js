class Block {
  constructor(x, y, width, height){
        var r={
          density:0.8,
          restitution:0.2,
          isStatic:false
        }
        this.visibility=255;
        this.body=Bodies.rectangle(x,y,width,height,r)
        this.width=width
        this.height=height
        World.add(world,this.body)
        
      }
      display(){
       var posx = this.body.position.x
       var posy = this.body.position.y
       if(this.body.speed<3){
       push()
       rectMode(CENTER)
       translate(posx,posy)
       rotate(this.body.angle)
       fill("blue")
       rect(0,0,this.width,this.height)
       pop()
       }
      //console.log(this.body.speed)
        else{
          push()
           World.remove(world,this.body)
           this.visibility=this.visibility-5
          // tint(255,this.visibility)
          //rect(posx,posy,30,50)
          pop()
       }
     }

     score(){
      if(this.visibility<0 && this.visibility>-105){
         score++
      }

    }
  }

