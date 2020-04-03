const assert = require('chai').assert; 
const functions = require('../functions');

//TEST STRING 
var text = "text"

describe('FUNCTION TESTS:', function(){

    it('Delete whitespace', function(){
        var newText = functions.whitespace("t e x t");
        var result = "text";
        assert.deepEqual(newText, result);
    });

    it('Converting text to ASCII', function(){
        var array_ASCII = functions.ASCII(text); 
        var result = [ 116, 101, 120, 116 ]; 
        assert.deepEqual(array_ASCII, result);
        //return array_ASCII;
    }); 

    it('Splitting array into individual numbers', function(){
        var split_array = functions.splitArray([ 116, 101, 120, 116 ]); 
        var result = [ 1, 1, 6, 1, 0, 1, 1, 2, 0, 1, 1, 6 ] ; 
        assert.deepEqual(split_array, result);
    }); 

    it('Splitting array into arrays of 10', function(){
        var arrayInto10 = functions.arraysDividedInto10( [ 1, 1, 6, 1, 0, 1, 1, 2, 0, 1, 1, 6 ] );
        var result = [
            [ 1, 1, 6, 1, 0, 1, 1, 2, 0, 1 ], [ 1, 6, 0, 1, 2, 3, 4, 5, 6, 7]
          ];
        assert.deepEqual(result, arrayInto10);
    })

    it('Sum of arrays', function(){
        var name = functions.totalOfArrays( [ [ 1, 1, 6, 1, 0, 1, 1, 2, 0, 1 ], [ 1, 6, 0, 1, 2, 3, 4, 5, 6, 7]] );
        var result = [ 2, 7, 6, 2, 2, 4, 5, 7, 6, 8 ]; 
        assert.deepEqual(name, result);
    })

    it('Array with Mod10', function(){
        var arrayMod10 = functions.totalOfArrays( [ 2, 7, 6, 2, 2, 4, 5, 7, 6, 8 ]  );
        var result = [ 2, 7, 6, 2, 2, 4, 5, 7, 6, 8 ]; 
        assert.deepEqual(arrayMod10, result);
    })

    it('Array to sha256', function(){
        var arrayMod10 = functions.arrayToSha256( [ 2, 7, 6, 2, 2, 4, 5, 7, 6, 8 ]  );
        var result = "d0b3cb0cc9100ef243a1023b2a129d15c28489e387d3f8b687a7299afb4b5079" ; 
        assert.deepEqual(arrayMod10, result);
    })

    

  


});
