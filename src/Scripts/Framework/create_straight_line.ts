
function create_straight_line(point1, point2, color, parent, height, line_id_name, className) {
    
var p1 = {x: point1.offsetLeft, y: point1.offsetTop};
var p2 = {x: point2.offsetLeft, y: point2.offsetTop};
var a = p1.x - p2.x;
var b = p1.y - p2.y;
var length = Math.sqrt( a*a + b*b );
var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
var pointWidth = point1.clientWidth / 2;
var pointHeight = point1.clientWidth / 2;
let line = document.createElement('div');
line.id = line_id_name;
line.className = className;
line.style.position = 'absolute';
line.style.height = height + 'px';
line.style.transformOrigin = 'left';
line.style.width = length + 'px';
line.style.left = (p1.x + pointWidth)+ 'px';
line.style.top = (p1.y + pointHeight) + 'px';
line.style.backgroundColor = color;
line.style.transform = "rotate(" + angleDeg + "deg)";
line.style.pointerEvents = "auto"; 
line.style.borderRadius = "20%";
parent.appendChild(line);

}

export default create_straight_line;