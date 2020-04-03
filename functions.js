// whitespace 

function whitespace(test){
    var noWhiteSpace = test.replace(/ /g, '');
    return noWhiteSpace;
}

function ASCII(text){ 
    var array_code = new Array(text.length);
    for(var i=0;i<text.length;i++){
        array_code[i]=text.charCodeAt(i);
    } 
    return array_code;   
} 

function splitArray(x){
    var array_gesplit = new Array;
    const res = x.flatMap(x => x.toString().split('').map(Number));
    array_gesplit.push(res);
    array_gesplit = array_gesplit[0];
    return array_gesplit;
} 

function arraysDividedInto10(array_gesplit){

    var lengte = array_gesplit.length;
    aanvul_array = [0,1,2,3,4,5,6,7,8,9]
    
    // controleren of het veelvoud is van 10
    if (lengte%10 == 0 ){
        //console.log("array is een veelvoud van 10");
    }

    // TOO SMALL
    else if (lengte < 10 ){
        //console.log("kleiner dan veelvoud van 10");
        ontbrekende_getallen = 10 - lengte;
        var extra_getallen = aanvul_array.slice(0,ontbrekende_getallen);
        array_gesplit = array_gesplit.concat(extra_getallen);
    }

    // TOO LARGE 
    else {
        //console.log("groter dan veelvoud van 10");
        var aantal_rijen = lengte/10;
        aantal_rijen = Math.floor(aantal_rijen);
        var verschillende_arrays = new Array;

        for(var i = 0; i < aantal_rijen; i++){
            var begin_getal = 0;
            var eind_getal = 10; 
            nieuwe_array = array_gesplit.splice(begin_getal, eind_getal);
            //console.log(nieuwe_array);
            verschillende_arrays.push(nieuwe_array);
            var eind_getal = eind_getal + 10;
        }

        //laatste getallen blijven over, dit is de rest: 
        ontbrekende_getallen = 10 - array_gesplit.length;
        var extra_getallen = aanvul_array.slice(0,ontbrekende_getallen);
        array_gesplit = array_gesplit.concat(extra_getallen);
        verschillende_arrays.push(array_gesplit);
    
        return verschillende_arrays;
    }
} 

var sumOfArrays = [];

function totalOfArrays(y) {

    if(sumOfArrays.length == 10){
        //console.log("klaar met uitvoeren van recursive function");
        return sumOfArrays;
    }  
        sumOfArrays = y.reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), []);
        var lenghtArraySum = sumOfArrays.length;
        //console.log("lengte is " + lenghtArraySum);
        return totalOfArrays(sumOfArrays)   
}

function mod10(arrays_opgeteld){
    var arrays_opgeteld_mod10 = new Array; 
    for(var i = 0 ; i < arrays_opgeteld.length; i ++){
        var newvar = arrays_opgeteld[i]%10; 
        arrays_opgeteld_mod10.push(newvar);
    }
    return arrays_opgeteld_mod10;
}

function arrayToSha256(arrays_opgeteld_mod10){
    array_als_string = arrays_opgeteld_mod10.join('');
    var sha256 = require('js-sha256');
    var mijn_antwoord = sha256(array_als_string);
    return mijn_antwoord;
}

module.exports = {
    whitespace,
    ASCII,
    splitArray,
    arraysDividedInto10,
    totalOfArrays,
    mod10,
    arrayToSha256
} 