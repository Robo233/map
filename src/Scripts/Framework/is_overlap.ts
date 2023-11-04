import { remove_last_n_characters } from "../Algorithms/remove_last_n_characters"

export function is_overlap(rect1, rect2, distance){
    if(!distance) distance = 0 
    var rect1_width = Number(remove_last_n_characters(rect1.style.width,2)) + 2*distance;
    var rect1_height = Number(remove_last_n_characters(rect1.style.height,2)) + 2*distance;
    var rect1_left = rect1.getBoundingClientRect().left - distance;
    var rect1_top = rect1.getBoundingClientRect().top - distance;

    var rect2_width = Number(remove_last_n_characters(rect2.style.width,2))
    var rect2_height = Number(remove_last_n_characters(rect2.style.height,2))
    var rect2_left = rect2.getBoundingClientRect().left;
    var rect2_top = rect2.getBoundingClientRect().top;

    if( (( rect2_left + rect2_width > rect1_left) &&  rect2_left-rect1_width<rect1_left) &&  ((rect2_top + rect2_height  >rect1_top) &&  rect2_top - rect1_height<rect1_top)){
        return true;
    }

}
