var V = 45
var R = 334.5
var maxOD = 510
var minOD = 410

var torque = R*maxOD/2/1000
console.log(torque)

var rpm = V*1000*60/Math.PI/minOD
console.log(rpm)

var P = torque*rpm*2*Math.PI/60/1000
console.log(P)



var chooseP = 15
var baseT = 142
var baseRpm = 1000
var useRpm = 3000
var useTorque :number
if (useRpm>baseRpm) {
    useTorque = chooseP/2/Math.PI*60/useRpm*1000
}else{
    useTorque = baseT
}

console.log(useTorque)

