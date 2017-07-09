class baseObject{
    width:number=0;
    length:number=0;
    constructor(  width:number,lenght:number){
        this.length=lenght;
        this.width =width;
    }
  }
class rectangle extends baseObject{
    constructor(){
        super(2,5);
    }
     calcSize():number{
        return this.width*this.length;
    }
     
}
var rect = new rectangle();
console.log(rect.calcSize());