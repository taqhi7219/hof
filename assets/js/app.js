const cl = console.log;

const fpara= document.getElementById("fpara");
const spara= document.getElementById("spara");
const tpara= document.getElementById("tpara");
const fopara= document.getElementById("fopara");
const fipara= document.getElementById("fipara");
const sipara= document.getElementById("sipara");
const separa= document.getElementById("separa");
const epara= document.getElementById("epara");
const npara= document.getElementById("npara");

let noary = [1,2,3,4,5,6,7,8,9,10];

let doublenoary = [];

for( a = 0; a < noary.length; a++){
	doublenoary.push(noary[a] * 2)
}

fpara.innerHTML = doublenoary;




let triplenoary = [];

for( a = 0; a < noary.length; a++){
	triplenoary.push(noary[a] * 3)
}

spara.innerHTML = triplenoary;




let quadruplenoary = [];

for( a = 0; a < noary.length; a++){
	quadruplenoary.push(noary[a] * 4)
}

tpara.innerHTML = quadruplenoary;




let quintuplenoary = [];

for( a = 0; a < noary.length; a++){
	quintuplenoary.push(noary[a] * 5)
}

fopara.innerHTML = quintuplenoary;




let sextuplenoary = [];

for( a = 0; a < noary.length; a++){
	sextuplenoary.push(noary[a] * 6)
}

sipara.innerHTML = sextuplenoary;




let septuplenoary = [];

for( a = 0; a < noary.length; a++){
	septuplenoary.push(noary[a] * 7)
}

fipara.innerHTML = septuplenoary;




let octuplenoary = [];

for( a = 0; a < noary.length; a++){
	octuplenoary.push(noary[a] * 8)
}

separa.innerHTML = octuplenoary;




let nontuplenoary = [];

for( a = 0; a < noary.length; a++){
	nontuplenoary.push(noary[a] * 9)
}

npara.innerHTML = nontuplenoary;