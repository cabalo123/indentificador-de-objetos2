Webcam.attach("#camera");
camera=document.getElementById("camera");

Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

function capturar(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML = "<img id='foto' src='"+data_uri+"'>";
    });   
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/m9ymxPdT_/model.json',modeloCarregado);

function modeloCarregado(){
    console.log('modelo carregado!');
}

function identificar(){
    img = document.getElementById("foto");
    classifier.classify(img, pegarResultado);
}

function pegarResultado(error,results){
   if(error){
    console.error(error);
   } else{
    document.getElementById("nomeobjeto").innerHTML=results[0].label;
    document.getElementById("precisaoobjeto").innerHTML=results[0].confidence.toFixed(3);

   }
}