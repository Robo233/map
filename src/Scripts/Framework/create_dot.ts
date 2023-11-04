export function create_dot(id, className, width, height, left, top, color, parent){

    let dot = document.createElement('div');
    dot.id = id;
    dot.className = className; 
    dot.style.width = width  +"px";
    dot.style.height = height +"px";
    dot.style.position = "absolute";
    dot.style.zIndex = "1";
    dot.style.backgroundColor = color;
    dot.style.borderRadius = "100%";
    dot.style.left = left - width/2 + "px"; 
    dot.style.top = top - height/2 + "px";
    parent.appendChild(dot);

}