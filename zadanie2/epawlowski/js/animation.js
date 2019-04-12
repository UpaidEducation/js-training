var infos = [
    "Trwa strajk nauczycieli!", 
    "Robert Lewandowski pobił się na treningu z kolegą z drużyny!",
    "Ministerstwo finansów zapowiada zmiany podatkowe.", 
    "Już w niedzielę wyścig Paryż - Roubaix"
];
var glue = " *** "   
var text = infos.join(glue) + glue;
var position = 0;
var animation;
move();

function move(type = 'left'){
    clearTimeout(animation);
    animation = setTimeout (function() {
        console.log(position);
        document.getElementById('colouredDiv').innerHTML = specifyNewText(type);
        move(type);
    },
    100);
}

function specifyNewText(type = 'left'){
    specifyNewPosition(type);
    return text.substring(position) + "   "  + text.substring(0, position);
}

function specifyNewPosition(type = 'left'){
    if(type === 'left'){
        if(position === text.length - 1){
            position = 0;
        }
        position++;
    }else{
        if(position === 0){
            position = text.length - 1;
        }
        position--;
    }
}
