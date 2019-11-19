var encodingMatrix = [
	[ 1,  -1,  -1,  1 ], 
	[ 2,  -3,  -5,  4 ], 
    [-2,  -1,  -2,  2 ], 
	[ 3,  -3,  -1,  2 ]
];
var decodingMatrix = [
	[  6,  -1,  0,  -1],
	[ 22,  -4,  1,  -4],
	[ 14,  -3,  1,  -2],
	[ 31,  -6,  2,  -5]
];

function printMatrix(matrix) {
	console.log('Matriz');
	for (x in matrix) {
		console.log(matrix[x]);
	}
}

function getMatrixFromArray(arr, rows) {
	var matrix = new Array();
	for (var i=0; i<rows; i++)
	  	matrix[i] = new Array();

	for (var i=0; i<arr.length; i++)
	  	matrix[i % rows][Math.floor(i/rows)] = arr[i];

	if (arr.length % rows != 0) {
	  	for (var i=arr.length % rows; i<rows; i++)
			matrix[i][Math.floor((arr.length - 1)/rows)] = 0;
	}
	return matrix;
}

function getMatrixFromText(text, rows){
    var arr = new Array();
    for (var i=0; i<text.length; i++)
      arr[i] = text.charCodeAt(i);
    return getMatrixFromArray(arr, rows);
}

function getTextFromMatrix(matrix){
    var text = new String();
    for (var j=0; j<matrix[0].length; j++)
      for (var i=0; i<matrix.length; i++)
        text += matrix[i][j]>0 ? String.fromCharCode(matrix[i][j]) : "";
    return text;
}

function getMatrixFromNumbers(text, rows){
    var i = 0;
    var numbers = text.split(" ");
    while (i<numbers.length){
      if (numbers[i].replace(/s+/g, "") == "")
        numbers.splice(i, 1);
      else i++;
    }
    var arr = new Array();
    for (var i=0; i<numbers.length; i++)
      arr[i] = parseInt(numbers[i]);

    return getMatrixFromArray(arr, rows);
}

function getNumbersFromMatrix(matrix){
    var text = "";
    for (var j=0; j<matrix[0].length; j++)
      for (var i=0; i<matrix.length; i++)
        text += matrix[i][j].toString() + " ";
    return text;
}

function multiplyMatrices(m1, m2){
    var matrix = new Array();
    for (var i=0; i<m1.length; i++)
      matrix[i] = new Array();

    for (var i=0; i<m1.length; i++)
      for (var j=0; j<m2[0].length; j++){
        matrix[i][j] = 0;
        for (var k=0; k<m1[0].length; k++)
          matrix[i][j] += m1[i][k]*m2[k][j];
      }
    return matrix;
}

  function numberToChar(text){
    var result = new String();
    for (var i=0; i<text.length; i++)
      result += String.fromCharCode(text.charCodeAt(i) + (text.charCodeAt(i)==32 ? 33 : 21));
    return result;
  }

  function charToNumber(text){
    var result = new String();
    for (var i=0; i<text.length; i++)
      result += String.fromCharCode(text.charCodeAt(i)-(text.charCodeAt(i)==65 ? 33 : 21));
    return result;
  }

function encryptText(){
var plainText = document.getElementById("plainText").value;
var plainMatrix = getMatrixFromText(plainText, 4);
var cipherMatrix = multiplyMatrices(encodingMatrix,plainMatrix);
var cipherText = getNumbersFromMatrix(cipherMatrix);
//if (document.getElementById("mapNumbers").checked)
cipherText = numberToChar(cipherText);
document.getElementById("cypherText").value = cipherText;
}

function decryptText() {
	printMatrix(encodingMatrix);
	var cipherText = document.getElementById("cypherText").value;
	//if (document.getElementById("mapNumbers").checked)
	var cipherText = charToNumber(cipherText);
	var cipherMatrix = getMatrixFromNumbers(cipherText, 4);
	var plainMatrix = multiplyMatrices(decodingMatrix,cipherMatrix)
	document.getElementById("decryptedText").value = getTextFromMatrix(plainMatrix);
}

window.onload = function(){
	document.getElementById("encrypt").onclick = encryptText;
	document.getElementById("decrypt").onclick = decryptText;
};


function test() {
	var input = $('#param1');
	console.log(isPalindromo(input.val()));
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function deshabilitarGrilla() {
	$("table").find("input,button,textarea,select").attr("disabled", "disabled");
}

function separadorMiles(numero) {
        var res = '';
        var len = numero.length - 1;
        var contador = 1;
        for (var i = len; i >= 0; i--) {
            var c = numero[i];
            if (contador == 3) {
				if (i == 0) res = c + res;
				else res = ',' + c + res;
                contador = 1;
            } else {
                res = c + res;
                contador++;
            }
        }
        return  res;
    }

function isPalindromo(word) {	
	var len = parseInt(word.length / 2);
	var i = 0;
	var j = word.length - 1;
	while (i < len) {
		if (word[i].toLowerCase() != word[j].toLowerCase()) {
			return false;
		}
		i++;
		j--;
	}
	return true;
}

var i = 0;
var flag = true;

$( document ).ready(function() {
    var $left = $("<a>holaaaa</a>");
	//$("#content").append($left);
	$left.on('click', function (e) {
		console.log('hola !!!');
	});
});

/*var autoPlayTimer = null;

autoPlayTimer = setInterval(autoPlay, 5000);

function contandor() {
	clearInterval(autoPlayTimer);
	autoPlayTimer = setInterval(autoPlay, 5000);
	
	
}

function autoPlay() {
	i++;
	console.log('>> ', i);
}*/