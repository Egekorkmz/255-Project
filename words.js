var words = [{id:"02" , value: 'V'}, {id:"03" , value: 'A'}, {id:"04" , value:'T'},
            {id:"12" , value:'O' },{id:"22" , value:'T' },{id:"32", value:'E' },
            {id:"20", value:'A' },{id:"21" , value:'R' },
            {id:"31" , value:'M' },{id:"33" , value:'T' },{id:"34" , value:'A' },{id:"35" , value:'L' },
            {id:"44" , value: 'G'},{id:"54" , value:'E' },
            {id:"50" , value:'P' },{id:"51" ,value: 'A' },{id:"52" , value: 'U' },{id:"53" , value:'S' }];


var word = [{scope: ["02", "04"], value: "VAT",check : true}, {scope: ["12", "32"], value: "VOTE", check : true},{scope: ["31", "35"], value: "METAL", check : true}, {scope: ["20", "22"], value: "ART", check : true}, 
{scope: ["34", "54"], value: "AGE", check : true}, {scope: ["50", "54"], value: "PAUSE", check : true}]

var letter = ["V", "A", "T", "O", "E", "R", "M", "L", "G", "P", "U", "S"];