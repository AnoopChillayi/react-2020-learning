

export default function ABC(){
    console.log("Implicit export")
}

 function ABCD(){
    console.log("Named export")
}

// function XYZ(a){
//     console.log("XYZ export")
// }

// const XYZ = function(a){
//     console.log("XYZ export")
// }

// const XYZ=(a)=>{
//     console.log("XYZ export")
// }
// const XYZ=(a)=>console.log("XYZ export")

const XYZ=a=>console.log("XYZ export")


export {ABCD,XYZ}
