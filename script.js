$(function(){
    //create letter boxes
    var str = "";
    for(let i = 0; i < 6; i++){
        str += `<div class = "row">`
        for(let k = 0; k < 6; k++){
            str += `<div id = "${i}${k}"></div>`
        }
        str += "</div>";
    }
    $("#words").html(str);
   

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
            while(number === arr[i]){
                number = Math.floor(Math.random()*letter.length);
                i = 0;
            }   
        }
        arr.push(number);
        str += `<div id = "${i}">${letter[number]}</div>`
        number = Math.floor(Math.random()*letter.length);  
    }
    $("#widget").append(str);
    
    //positionings
    for(var i = 0; i < 6; i++){
        $(`#${i}`).css({"left" : `${145+ Math.cos(convert(60-60*i))*100}px`, "bottom" : `${145 +Math.sin(convert(60-60*i))*100}px`});
    }

    //widget and word display
    $("#widget").children().each(function(){
        $(this).click(function(){
            let temp = $(this).text();
            let flag = true;
            for (let i = 0; i <  $("#word").text().length; i++)
                    if(temp === $("#word").text().charAt(i)){
                        flag = false;
                        wiggle(this);
                    } 
            if(flag){
                $("#word").append(temp).css("visibility", "visible");
                $(this).animate({backgroundColor: "aliceblue"});
            }
        })
    })
    
    //shuffle letters
    $("#shuffle").click(function(){
        if($("#word").text() === ""){
            let number = Math.floor(Math.random()*letter.length);
            let arr = new Array();
            for(var i = 0; i < 6; i++){
                for(let i = 0; i < arr.length; i++){
                    while(number === arr[i]){
                        number = Math.floor(Math.random()*letter.length);
                        i = 0;
                    }   
                }
                arr.push(number);
                $(`#${i}`).text(`${letter[number]}`)
                number = Math.floor(Math.random()*letter.length)
            }
            $("#widget").children().not("#shuffle").each(function(){$(this).animate({backgroundColor: "#AF7AC5"})})
            $("#word").text("").css("visibility", "hidden")
        }else{
            $("#widget").children().not(this).each(function(){
                wiggle(this);   
            })
        }
        
    })

    //take word and check
    $("#widget").mousedown(function(e){
        if(e.which === 3){
            for(let i = 0; i < word.length; i++){
                if($("#word").text() === word[i].value){
                    if(word[i].check){
                        word[i].check = false
                        let size = parseInt(word[i].scope[1]) - parseInt(word[i].scope[0]);
                        let start = parseInt(word[i].scope[0]);
                        let str = "#";
                        if(start < 10){
                            str = "#0";
                        }
                        let char = "c";
                        if(size > 9){ 
                            size = Math.floor(size / 10);
                            char = "r";
                        }

                        for(let k = 0; k < size + 1; k++){
                            if(char === "c"){ start =  parseInt(word[i].scope[0]) + k}
                            else{start = parseInt(word[i].scope[0]) + k * 10}
                            
                            if(start < 10){
                                str = "#0";
                            }
                            $(str + start).css({"content-visibility": "visible"}).animate({backgroundColor: "white"})
                            
                            str = "#";
                            $("#word").text("").css("visibility", "hidden")
                        }
                    }else{
                        let size = parseInt(word[i].scope[1]) - parseInt(word[i].scope[0]);
                        let start = parseInt(word[i].scope[0]);
                        let str = "#";
                        if(start < 10){
                            str = "#0";
                        }
                        let char = "c";
                        if(size > 9){ 
                            size = Math.floor(size / 10);
                            char = "r";
                        }

                        for(let k = 0; k < size + 1; k++){
                            if(char === "c"){ start =  parseInt(word[i].scope[0]) + k}
                            else{start = parseInt(word[i].scope[0]) + k * 10}
                            
                            if(start < 10){
                                str = "#0";
                            }
                            $(str + start).animate({backgroundColor: "black"},{color:"white"}).animate({backgroundColor: "AF7AC5"},{color:"white"}).animate({backgroundColor: "black"},{color:"white"}).animate({backgroundColor: "AF7AC5"},{color:"white"})
                            
                            str = "#";
                            $("#word").text("").css("visibility", "hidden")
                        }
                    }
                    
                }else{
                    breath($("#word"));
                    $("#word").queue(function(){$(this).text("").css("visibility", "hidden").clearQueue()})
                }
            }

            $("#widget").children().not("#shuffle").each(function(){$(this).animate({backgroundColor: "#AF7AC5"})})
        }
    })

    var flag = true;
    $("#hint").click(function(){
        if(flag){
            for(let i = 0; i < words.length; i++){
                if($(`#${words[i].id}`).css("background-color")!== $(`#shuffle`).css("background-color")){
                    $(`#${words[i].id}`).css({"content-visibility":"visible", "color" : "rgba(255,255,255,0)"}).animate({color: "rgba(255,255,255,1)"});
                }
            }
            flag = false;
        }
        else{
            for(let i = 0; i < words.length; i++){
                if($(`#${words[i].id}`).css("background-color")!== $(`#shuffle`).css("background-color")){
                    $(`#${words[i].id}`).animate({color: "rgba(0,0,0,0)"}).queue(function(){$(this).css({"content-visibility":"hidden","color":"black"}).clearQueue();});
                }
            }
            flag = true;
        }
        
    })

    //functions

    //convertion degree to radiant
    function convert (degree){
        return(Math.PI/ (180/degree));
    }

    //animation functions
    function wiggle(obj){
        for(let i = 0; i < 3; i++){
            $(obj).animate({left:"+=" + 3},50)
            .animate({left:"-=" + 6},50)
            .animate({left:"+=" + 3},50);
        }  
    }

    function breath(obj){
         $(obj).animate({backgroundColor: "black"},{color:"white"}).animate({backgroundColor: "#AF7AC5"},{color:"black"}).animate({backgroundColor: "black"},{color:"white"}).animate({backgroundColor: "#AF7AC5"},{color:"black"})
    }

    console.log($("#widget").css("background-color"));
    
})