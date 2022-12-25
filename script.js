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


    $("#widget").mousedown(function(e){
        if(e.which === 3){
            for(let i = 0; i < word.length; i++){
                if($("#word").text() === word[i].value){
                    if(word[i].check){
                        word[i].check = false
                        let size = parseInt(word[i].scope[1]) - parseInt(word[i].scope[0]) + 1;
                        let start = parseInt(word[i].scope[0]);
                        let str = "#";
                        if(start < 10){
                            str += "0";
                        }
                        let char = "c";
                        if(size > 9){ 
                            size = size % 10
                            char = "r";
                        } 

                        for(let k = 0; k < size; k++){
                            if(char === "c"){
                                $(str + (start + k)).css("content-visibility", "visible")
                            }
                            else{
                                $(str + (start + k*10)).css("content-visibility", "visible")
                            }
                        }
                    }else{
                        let size = parseInt(word[i].scope[1]) - parseInt(word[i].scope[0]) + 1;
                        let start = parseInt(word[i].scope[0]);
                        let str = "#";
                        if(start < 10){
                            str += "0";
                        }
                        let char = "c";
                        if(size > 9){ 
                            size = size % 10
                            char = "r";
                        } 

                        for(let k = 0; k < size; k++){
                            if(char === "c"){
                                $(str + (start + k)).animate({backgroundColor: "black"},{color:"white"}).animate({backgroundColor: "AF7AC5"},{color:"white"}).animate({backgroundColor: "black"},{color:"white"}).animate({backgroundColor: "AF7AC5"},{color:"white"})
                            }
                            else{
                                $(str + (start + k*10)).animate({backgroundColor: "black"},{color:"white"}).animate({backgroundColor: "AF7AC5"},{color:"white"}).animate({backgroundColor: "black"},{color:"white"}).animate({backgroundColor: "AF7AC5"},{color:"white"})
                            }
                        }
                    }
                    
                }
            }
            let number = Math.floor(Math.random()*letter.length);
                    let arr = new Array();
                    for(let i = 0; i < 6; i++){
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
        }
    })

    function wiggle(obj){
        for(let i = 0; i < 3; i++){
            $(obj).animate({left:"+=" + 3},50)
            .animate({left:"-=" + 6},50)
            .animate({left:"+=" + 3},50);
        }  
    }

    function breath(obj){
        for(let i = 0; i < 3; i++){
            $(obj).animate( {width : "+=" + 3},200)
            .animate({width : "+=" + 6*-1},200)
            .animate({width : "+=" + 3},200);
        } 
    }
})