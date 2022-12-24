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
    var number = Math.floor(Math.random()*letter.length);
    var arr = new Array();
    //create letters
    for(var i = 0; i < 6; i++){
        
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i] + " " + number);
            while(number === arr[i]){
                number = Math.floor(Math.random()*letter.length);
                i = 0;
                console.log("its working")
            }   
        }
        arr.push(number);
        str += `<div id = "${i}">${letter[number]}</div>`
        number = Math.floor(Math.random()*letter.length);
        
        
    }
    $("#widget").html(str); 1
    
    //positionings
    for(var i = 0; i < 6; i++){
        $(`#${i}`).css({"left" : `${145+ Math.cos(convert(60-60*i))*100}px`, "bottom" : `${145 +Math.sin(convert(60-60*i))*100}px`});
    }
    
})