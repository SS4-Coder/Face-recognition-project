Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
    });
    
    camera=document.getElementById('camera');
    
    Webcam.attach("#camera");
    
    function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById('result').innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
    }
    console.log("ml5 version:",ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/TKXt2nuhy/model.json',modal_loaded);
    function modal_loaded(){
    console.log('modal_loaded');
    }
    function check(){
        img=document.getElementById("captured_image");
        classifier.classify(img,got_result);
        }
        function got_result(error,results){
        if(error){
        console.error(error);
        }
        else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
        }
        }
    