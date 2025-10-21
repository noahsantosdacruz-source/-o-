function somme(){

    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    document.getElementById("resultat").value = c;
}
function soustraction(){

    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) - Number(b);
    document.getElementById("resultat").value = c;
}
function multiplication(){

    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);
    document.getElementById("resultat").value = c;
}
function division(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) / Number(b);
    document.getElementById("resultat").value = c;
    if (b == 0){
        document.getElementById("resultat").value = "impossible";
    }
}
function pair()
{
	var x = document.getElementById("t1").value
	if (x % 2 ==0){
    	document.getElementById("pair").value = " Nombre Pair "
	}
	else{
    	document.getElementById("pair").value = " Nombre Impair "
	}
}

function permuter(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = a;
    a = b;
    b = c;
    document.getElementById("t1").value = a;
    document.getElementById("t2").value = b;
}
function reset() {
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "";
    document.getElementById("resultat").value = "";
    document.getElementById("pair").value = "";
}