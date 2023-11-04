import { remove_last_n_characters } from "../Algorithms/remove_last_n_characters"

export function isOverlapping(rect1, rect2){
/*
  var x1 = box1.left
  var y1 = box1.top;
  var h1 = box1.height;
  var w1 = box1.width;
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = box2.left;
  var y2 = box2.top;
  var h2 = box2.height;
  var w2 = box2.width;
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  var buf = 24;

  if (b1 + buf < y2 || y1 > b2 + buf || r1 + buf < x2 || x1 > r2 + buf) return false;
  return true;
*/
    /*
    var el1 = rect1.getBoundingClientRect();
    var el2 = rect2.getBoundingClientRect();

    console.log(el1.right)
   return  !(el1.right < el2.left || 
        el1.left > el2.right || 
        el1.bottom < el2.top || 
        el1.top > el2.bottom)
*/
    

    let rect1_width = Number(remove_last_n_characters(rect1.style.width,2))
    let rect1_height = Number(remove_last_n_characters(rect1.style.height,2))

    var rect2_width = Number(remove_last_n_characters(rect2.style.width,2))
    var rect2_height = Number(remove_last_n_characters(rect2.style.height,2))

    var rect1_distance_from_left = Number(remove_last_n_characters(rect1.style.left,2))
    var rect1_distance_from_top = Number(remove_last_n_characters(rect1.style.top,2))

    var rect2_distance_from_left = Number(remove_last_n_characters(rect2.style.left,2))
    var rect2_distance_from_top = Number(remove_last_n_characters(rect2.style.top,2))

    if( (( rect2_distance_from_left + rect2_width > rect1_distance_from_left) &&  rect2_distance_from_left-rect1_width<rect1_distance_from_left) &&  ((rect2_distance_from_top + rect2_height  >rect1_distance_from_top) &&  rect2_distance_from_top - rect1_height<rect1_distance_from_top)){
        return true;
    }
    

}

