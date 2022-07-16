let result = 1;

function plusSlides(value){
    result += value;
    let slides = document.getElementsByClassName('mySlides');

    if(result < 0){
        result = 0;
        for(let contator = 0; contator < slides.length; contator++){
            slides[contator].style.display = "none";
        }
        slides[result].style.display = 'flex';
        slides[result].style.flexDirection = "column";
    }
    else if(result >= slides.length){
        result = slides.length - 1;
        for(let contator = 0; contator < slides.length; contator++){
            slides[contator].style.display = "none";
        }
        slides[result].style.display = 'flex';
        slides[result].style.flexDirection = "column";
    }
    else{
        for(let contator = 0; contator < slides.length; contator++){
            slides[contator].style.display = "none";
        }
        slides[result].style.display = 'flex';
        slides[result].style.flexDirection = "column";
    }
}
function seeResult(answer){
    let result = document.getElementsByName("firstquestion");
    let question = document.getElementsByClassName("slide_question");
    for(let contator = 0; contator < result.length; contator++){
        question[contator].style.backgroundColor = "white";
    }
    for(let contator = 0; contator < result.length; contator++){
        if(result[contator].checked){
            if(result[contator].value == 1){
                question[contator].style.backgroundColor = "green";
                break;
            }
            else{
                question[contator].style.backgroundColor = "red";
                continue;
            }
        }
    }
}