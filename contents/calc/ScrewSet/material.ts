var characteristic:string[] = [ "antioxidant", //抗氧化
                                "abrasion_resistance", //耐磨
                                "fatigue_resistance", //疲勞強度
                                "deoxidizer", //脫氧
                                "anti_grain",//抑制晶粒成長
                                "strength", //強度
                                "toughness", //韌性
                                "brittleness", //脆性
                                "plasticity",//可塑性
                                "welding", //可焊接性
                                "preservative", //耐腐蝕性
                            ]
class material{
    name:string
    goodat:string[]
    badat:string[]
    constructor(name:string,goodat:string[],badat:string[]) {
        this.name = name
        this.goodat = goodat
        this.badat = badat
    }  
}

var Al = new material("Al",["antioxidant","abrasion_resistance","fatigue_resistance","deoxidizer","anti_grain"],["strength", "toughness"])
var C  = new material("C",[],["anti_grain","toughness","plasticity","welding","preservative"])
var Co= new material("Co",["anti_grain","strength"],[])
var Cr= new material("Cr",["antioxidant","abrasion_resistance", "anti_grain","preservative"],["toughness","plasticity"])
var Cu= new material("Cu",["strength", "toughness", "brittleness","preservative"],["plasticity"])
var H = new material("H",["brittleness"],[])
var Mn= new material("Mn",["deoxidizer","strength","toughness","plasticity"],[ "anti_grain","welding"])
var Mo= new material("Mo",["anti_grain","strength","preservative"],["brittleness"])
var N = new material("N",["abrasion_resistance","fatigue_resistance", "strength","toughness","welding"],["plasticity"])
var Ni= new material("Ni",["fatigue_resistance","anti_grain","strength","toughness", "preservative"],["antioxidant"])
var O = new material("O",[],["strength","plasticity"])
var P = new material("P",[ "preservative"],["anti_grain", "toughness","plasticity","welding"])
var S = new material("S",["brittleness"],["toughness","plasticity","welding"])
var Si= new material("Si",["antioxidant","fatigue_resistance","strength","preservative"],["toughness","plasticity","welding"])
var Ti= new material("Ti",[ "deoxidizer","anti_grain","welding","preservative"],["toughness"])
var V = new material("V",["abrasion_resistance", "deoxidizer","strength","toughness","welding"],[])
var W = new material("W",["abrasion_resistance","anti_grain","strength"],[])

var materials = [Al,C,Co,Cr,Cu,H,Mn,Mo,N,Ni,O,P,S,Si,Ti,V,W]

var check1 = "preservative"
var check2 = "fatigue_resistance"

materials.forEach(function (value) { //使用函數處理每個元素
    /*
    value.goodat.forEach(function (char){
        if (characteristic[check]==char) {
            console.log(value.name)
        }
    })
    */
   if (value.goodat.indexOf(check1)!=-1 && value.goodat.indexOf(check2)!=-1) {
    console.log(value.name)
   }
    
});


