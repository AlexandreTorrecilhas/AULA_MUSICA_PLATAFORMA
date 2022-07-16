let result = 1;

function plusSlides(value){
    result += value;
    let slides = document.getElementsByClassName('mySlides');

    if(result < 0){
        result = 0;
        for(let contator = 0; contator < slides.length; contator++){
            slides[contator].style.display = "none";
        }
        build_slide_style(result)
    }
    else if(result >= slides.length){
        result = slides.length - 1;
        for(let contator = 0; contator < slides.length; contator++){
            slides[contator].style.display = "none";
        }
        build_slide_style(result)
    }
    else{
        for(let contator = 0; contator < slides.length; contator++){
            slides[contator].style.display = "none";
        }
        build_slide_style(result)
    }
}
function build_slide_style(result){
    let slides = document.getElementsByClassName('mySlides');
    slides[result].style.display = "flex";
    slides[result].style.flexDirection = "Column";
    slides[result].style.alignItems = "center";
    slides[result].style.justifyContent = "space-around";
    slides[result].style.height = "60vh";
    slides[result].style.border = "1px solid red";
}
function testFunction(value){
    let answer = document.getElementsByClassName("question_answer");
    answer[value].checked = true;
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