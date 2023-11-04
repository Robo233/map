import { is_overlap } from "./is_overlap";

export  function is_element_n_distance_apart_from_all_other_elements(element, distance, elements){
    
    for(let i=0;i<elements.length;i++){

        if( ( is_overlap(element, elements[i],distance) )){
            return false;
        }
    }
    return true;
}