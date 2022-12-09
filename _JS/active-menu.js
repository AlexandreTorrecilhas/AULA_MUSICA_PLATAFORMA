{
    let menuStatus = false;

    function activeMenu(){
    
        if(menuStatus == false){
            document.getElementById("header-links").style.display = "flex";
            document.getElementById("header-links").style.transform = "translateY(0%)";
            document.getElementById("header-links").style.transition = "0.5s";
            
            menuStatus = true;
        }
        else{
            document.getElementById("header-links").style.transform = "translateY(-110%)";;
            menuStatus = false;
        }
    }
}