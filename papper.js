class Papper {
constructor(x,y,width,height){

   // var balloptions={
     //   isStatic=false
     // }
      

    this.body=Bodies.circle(200,100,20,)
World.add(world,this.body)
}
  

display(){

    ellipseMode(RADIUS)
    fill ("pink")
    ellipse(this.body.position.x,this.body.position.y,20,20)
    
}
}

