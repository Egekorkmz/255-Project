$(function(){

    function convert (degree){
        return(Math.PI/ (180/degree));
    }

    

    //create letter boxes
    var str = "";
    for(let i = 0; i < 6; i++){
        str += `<div class = "row">`
        for(let k = 0; k < 6; k++){
            str += `<div id = "${i}${k}"></div>`
        }
        str += "</div>";
    }
    $("#word").html(str);
   

    //display only vanted boxes
    for(var i = 0; i < words.length; i++){
        $(`#${words[i].id}`).text(`${words[i].value}`).css("visibility","visible");
    }

    str = "";
    var char;

    for(var i = 0; i < 6; i++){
        
        do{
            char = letter[Math.floor(Math.random()*letter.length)]
        }while(isExist(char));

        str += `<div id = "${i}">${char}</div>`
    }
    $("#widget").html(str);
    
    for(var i = 0; i < 6; i++){
        $(`#${i}`).css({"left" : `${145+ Math.cos(convert(60-60*i))*100}px`, "bottom" : `${145 +Math.sin(convert(60-60*i))*100}px`});
    }
    
    function isExist(char){
        $("#widget").children().each(function(){
            console.log($(this));
        });
        console.log(index);
        for(var i = 0; i < index.length; i++){
            if(char === index[i].text()){
                console.log("lel");
                return true;
            }   
        }
        return false;
    }
})