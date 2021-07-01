class Canon{

    constructor(x,y,width,height,angle){
 
this.positionx=x;
this.positiony=y;
this.width=width;
this.height=height;
this.angle=angle;
    }

showMyCanon(){
   rect(this.positionx,this.positiony,this.width,this.height) 
}

}