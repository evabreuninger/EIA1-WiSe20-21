//Werte
    var Europa08:number= 4965.7;
    var Europa18:number= 4209.3;

    var NAmerika08:number= 6600.4;
    var NAmerika18:number= 6035.6;

    var SAmerika08:number= 1132.6;
    var SAmerika18:number= 1261.5;

    var Afrika08:number= 1028;
    var Afrika18:number= 1235.5;

    var Asien08:number= 12954.72;
    var Asien18:number= 16274.1;

    var Australien08:number= 1993;
    var Australien18:number= 2100.5;

    var EmissionG18:number= Afrika18 + SAmerika18 + Europa18 + NAmerika18 + Asien18 + Australien18;

//Europa
function europa(){
    document.querySelector("h1").innerHTML="Carbon Dioxide Emissions in Europe";
    document.querySelector("#absolute").innerHTML= Europa18 + " Kg CO2";
    document.querySelector("#relative").innerHTML= Math.round(Europa18/EmissionG18*100) + " %";
    document.querySelector("#growth").innerHTML= -Math.round((1-Europa18/Europa08)*100) + "% verändert";
    document.querySelector("#absoluteGrowth").innerHTML= -Math.round(Europa08-Europa18) + "kg CO2";
    document.querySelector("#chart").style.height= "86px";
}
//Nordamerika
function namerika(){
    document.querySelector("h1").innerHTML="Carbon Dioxide Emissions in North America";
    document.querySelector("#absolute").innerHTML= NAmerika18 + " Kg CO2";
    document.querySelector("#relative").innerHTML= Math.round(NAmerika18/EmissionG18*100) + " %";
    document.querySelector("#growth").innerHTML= -Math.round((1-NAmerika18/NAmerika08)*100) + "% verändert";
    document.querySelector("#absoluteGrowth").innerHTML= -Math.round(NAmerika08-NAmerika18) + "kg CO2";
    document.querySelector("#chart").style.height= "81px";
}
//Südamerika
function samerika(){
    document.querySelector("h1").innerHTML="Carbon Dioxide Emissions in South America";
    document.querySelector("#absolute").innerHTML= SAmerika18 + " Kg CO2";
    document.querySelector("#relative").innerHTML= Math.round(SAmerika18/EmissionG18*100) + " %";
    document.querySelector("#growth").innerHTML= -Math.round((1-SAmerika18/SAmerika08)*100) + "% verändert";
    document.querySelector("#absoluteGrowth").innerHTML= -Math.round(SAmerika08-SAmerika18) + "kg CO2";
    document.querySelector("#chart").style.height= "96px";
}
//Afrika
function afrika(){
    document.querySelector("h1").innerHTML="Carbon Dioxide Emissions in Africa";
    document.querySelector("#absolute").innerHTML= Afrika18 + " Kg CO2";
    document.querySelector("#relative").innerHTML= Math.round(Afrika18/EmissionG18*100) + " %";
    document.querySelector("#growth").innerHTML= -Math.round((1-Afrika18/Afrika08)*100) + "% verändert";
    document.querySelector("#absoluteGrowth").innerHTML= -Math.round(Afrika08-Afrika18) + "kg CO2";
    document.querySelector("#chart").style.height= "96px";
}
//Asien
function asien(){
    document.querySelector("h1").innerHTML="Carbon Dioxide Emissions in Asia";
    document.querySelector("#absolute").innerHTML= Asien18 + " Kg CO2";
    document.querySelector("#relative").innerHTML= Math.round(Asien18/EmissionG18*100) + " %";
    document.querySelector("#growth").innerHTML= -Math.round((1-Asien18/Asien08)*100) + "% verändert";
    document.querySelector("#absoluteGrowth").innerHTML= -Math.round(Asien08-Asien18) + "kg CO2";
    document.querySelector("#chart").style.height= "48px";
}
//Australien
function australien(){
    document.querySelector("h1").innerHTML="Carbon Dioxide Emissions in Australia";
    document.querySelector("#absolute").innerHTML= Australien18 + " Kg CO2";
    document.querySelector("#relative").innerHTML= Math.round(Australien18/EmissionG18*100) + " %";
    document.querySelector("#growth").innerHTML= -Math.round((1-Australien18/Australien08)*100) + "% verändert";
    document.querySelector("#absoluteGrowth").innerHTML= -Math.round(Australien08-Australien18) + "kg CO2";
    document.querySelector("#chart").style.height= "93px";
