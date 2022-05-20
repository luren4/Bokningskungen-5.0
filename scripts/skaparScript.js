
function myFunction() 
{
    console.log("klickade")
    const params = (new URL(document.location)).searchParams
    const paramFöretagsnamn = params.get('Företagsnamn')
    const paramBeskrivning = params.get('Beskrivning')
    const paramTider = params.get('Tider')

    let nyurl = "Kundsida.html?Företagsnamn=" + paramFöretagsnamn + "&Beskrivning=" + paramBeskrivning + "&Tider=" + paramTider

    location.replace(nyurl)
}


let varRGB1 = 127
let varRGB2 = 127
let varRGB3 = 127
let transRGB = 50
let secondvarRGB1 = 127
let secondvarRGB2 = 127
let secondvarRGB3 = 127
let secondtransRGB = 100


var sliderRGB1 = document.getElementById("rgbvar1");
var outpudRGB1 = document.getElementById("rgb1");
outpudRGB1.innerHTML = sliderRGB1.value; 

sliderRGB1.oninput = function() 
{
    outpudRGB1.innerHTML = this.value;
    varRGB1 = this.value
    makeColorUpdate()
}


var sliderRGB2 = document.getElementById("rgbvar2");
var outputRGB2 = document.getElementById("rgb2");
outputRGB2.innerHTML = sliderRGB2.value; 

sliderRGB2.oninput = function() 
{
    outputRGB2.innerHTML = this.value;
    varRGB2 = this.value
    makeColorUpdate()
}

var sliderRGB3 = document.getElementById("rgbvar3");
var outputRGB3 = document.getElementById("rgb3");
outputRGB3.innerHTML = sliderRGB3.value; 

sliderRGB3.oninput = function() 
{
    outputRGB3.innerHTML = this.value;
    varRGB3 = this.value
    makeColorUpdate()
}


var sliderRGBtrans = document.getElementById("rgbtransparency");
var outputRGBtrans = document.getElementById("rgb4");
outputRGBtrans.innerHTML = sliderRGBtrans.value; 

sliderRGBtrans.oninput = function() 
{
    outputRGBtrans.innerHTML = this.value;
    transRGB = this.value
    makeColorUpdate()
}



var slidersecondRGB1 = document.getElementById("secondrgbvar1");
var outputsecondRGB1 = document.getElementById("rgb5");
outputsecondRGB1.innerHTML = slidersecondRGB1.value; 

slidersecondRGB1.oninput = function() 
{
    outputsecondRGB1.innerHTML = this.value;
    secondvarRGB1 = this.value
    makeColorUpdate()
}


var slidersecondRGB2 = document.getElementById("secondrgbvar2");
var outputsecondRGB2 = document.getElementById("rgb6");
outputsecondRGB2.innerHTML = slidersecondRGB2.value; 

slidersecondRGB2.oninput = function() 
{
    outputsecondRGB2.innerHTML = this.value;
    secondvarRGB2 = this.value
    makeColorUpdate()
}


var slidersecondRGB3 = document.getElementById("secondrgbvar3");
var outputsecondRGB3 = document.getElementById("rgb7");
outputsecondRGB3.innerHTML = slidersecondRGB3.value; 

slidersecondRGB3.oninput = function() 
{
    outputsecondRGB3.innerHTML = this.value;
    secondvarRGB3 = this.value
    makeColorUpdate()
}


var slidersecondRGBtrans = document.getElementById("secondrgbtransparency");
var outputsecondRGBtrans = document.getElementById("rgb8");
outputsecondRGBtrans.innerHTML = slidersecondRGBtrans.value; 

slidersecondRGBtrans.oninput = function() 
{
    outputsecondRGBtrans.innerHTML = this.value;
    secondtransRGB = this.value
    makeColorUpdate()
}



function makeColorUpdate() 
{
    let c = document.getElementById("bakgrund");

    c.style.backgroundImage = "linear-gradient(rgba(" + varRGB1 + "," + varRGB2 + "," + varRGB3 + "," + transRGB / 100 + "),rgba(" + secondvarRGB1 + "," + secondvarRGB2 + "," + secondvarRGB3 + "," +  secondtransRGB / 100 + "))"

}

window.onload = function() {
    makeColorUpdate()
}
