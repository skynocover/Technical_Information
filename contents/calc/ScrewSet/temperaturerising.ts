let a = 7
let b = 20.4
let v = 0.7
let p = 870
let cp = 0.45
let li = 25
let ri = 24.4

let stable = 1

let q :number

if (stable) {
    q = (a*b*v*p*cp)/(b-li+ri)
}else{
    q = a*v*p*cp
}
console.log(q)