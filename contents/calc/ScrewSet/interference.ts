class item {
    //屬性
    ID:number;
    OD:number;
    E:number;
    v:number;
    u:number;

    //建構子
    constructor(ID:number,OD:number,E:number,v:number) {
        this.ID = ID;
        this.OD = OD;
        this.E = E;
        this.v = v;
        this.u = (Math.pow(OD/2,2)+Math.pow(ID/2,2))/(Math.pow(OD/2,2)-Math.pow(ID/2,2))
    }
}

class interference {
    shaft :item;
    cylinder:item;
    length:number;
    u:number;

    constructor(shaft:item,cylinder:item,length:number,u:number) {
        this.shaft = shaft;
        this.cylinder = cylinder;
        this.length = length;
        this.u = u;
    }

    public compressive():number{
        var e1 = (this.shaft.u-this.shaft.v)/this.shaft.E
        var e2 = (this.cylinder.u+this.cylinder.v)/this.cylinder.E;
        return 0.001/(e1+e2)
    }

    public press():number{
        return 2*Math.PI*this.shaft.OD/2*this.length*this.compressive()
    }

    public clamping():number{
        return this.u*this.press()
    }

    public torque():number{
        return this.u*this.shaft.OD/2*this.press()
    }
}

let sha = new item(0,100,21000,0.3)
let cyl = new item(100,200,10000,0.27)

let inter = new interference(sha,cyl,50,0.2)

console.log(inter.compressive())
console.log(inter.press())

console.log(inter.clamping())
console.log(inter.torque())
