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
    $("#word").html(str);
   

    //display only vanted boxes
    for(var i = 0; i < words.length; i++){
        $(`#${words[i].id}`).text(`${words[i].value}`).css("visibility","visible");
    }

})