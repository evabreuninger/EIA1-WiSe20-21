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
console.log('Die Emission von Europa ist: ' + Math.round( Europa18) + 'kg CO2')
console.log ('Relativ zur Gesamtemission der Welt verursacht Europa damit '  + Math.round( Europa18/EmissionG18*100) + '%')
console.log ('Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + Math.round( Europa18/Europa08*100) + '% verändert')
console.log ('2018 im Vergleich zu 2008 sind das ' + Math.round( Europa18-Europa08) + 'kg CO2')

//Nordamerika
console.log('Die Emission von Nordamerika ist: ' + Math.round( NAmerika18) + 'kg CO2')
console.log ('Relativ zur Gesamtemission der Welt verursacht Nordamerika damit '  + Math.round( NAmerika18/EmissionG18*100) + '%')
console.log ('Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + Math.round( NAmerika18/NAmerika08*100) + '% verändert')
console.log ('2018 im Vergleich zu 2008 sind das ' + Math.round( NAmerika18-NAmerika08) + 'kg CO2')

//Südamerika
console.log('Die Emission von Südamerika ist: ' + Math.round( SAmerika18) + 'kg CO2')
console.log ('Relativ zur Gesamtemission der Welt verursacht Südamerika damit '  + Math.round( SAmerika18/EmissionG18*100) + '%')
console.log ('Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + Math.round (SAmerika18/SAmerika08*100) + '% verändert')
console.log ('2018 im Vergleich zu 2008 sind das ' + Math.round( SAmerika18-SAmerika08) + 'kg CO2')

//Afrika
console.log('Die Emission von Afrika ist: ' + Math.round( Afrika18) + 'kg CO2')
console.log ('Relativ zur Gesamtemission der Welt verursacht Afrika damit '  + Math.round( Afrika18/EmissionG18*100) + '%')
console.log ('Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + Math.round( Afrika18/Afrika08*100) + '% verändert')
console.log ('2018 im Vergleich zu 2008 sind das ' + Math.round( Afrika18-Afrika08) + 'kg CO2')

//Asien
console.log('Die Emission von Asien ist: ' + Math.round( Asien18) + 'kg CO2')
console.log ('Relativ zur Gesamtemission der Welt verursacht Asien damit '  + Math.round( Asien18/EmissionG18*100) + '%')
console.log ('Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + Math.round( Asien18/Asien08*100) + '% verändert')
console.log ('2018 im Vergleich zu 2008 sind das ' + Math.round( Asien18-Asien08) + 'kg CO2')

//Australien
console.log('Die Emission von Australien ist: ' + Math.round( Australien18) + 'kg CO2')
console.log ('Relativ zur Gesamtemission der Welt verursacht Australien damit '  + Math.round( Australien18/EmissionG18*100) + '%')
console.log ('Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + Math.round( Australien18/Australien08*100) + '% verändert')
console.log ('2018 im Vergleich zu 2008 sind das ' + Math.round( Australien18-Australien08) + 'kg CO2')