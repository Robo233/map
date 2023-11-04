import { random_int_from_intervals_min_and_max_included } from "./Algorithms/random_int_from_intervals_min_and_max_included";
import { open_element_menu } from "./edit_element";
import { create_rectangle_knowing_coordinates } from "./Framework/create_rectangle_knowing_coordinates";
import { generate_random_color } from "./Framework/generate_random_color";
import { is_element_n_distance_apart_from_all_other_elements } from "./Framework/is_element_n_distance_apart_from_all_other_elements";
import { open_map } from "./Menu openers/open_map";
import { remove_alert_text } from "./remove_alert_text";

let created_locations = new Array();
let is_generation_running = false;
let remove_alert_text_timeout;
let tries = 0;

export function generate_random_map(time_until_alert_text_is_hidden, min_percentage_of_needed_map_area_permitted ,max_percentage_of_needed_map_area_permitted, loading_bar_width){
if((isNumber((document.getElementById("locations-number-input") as HTMLInputElement).value)) && (isNumber((document.getElementById("minimum-distance-between-two-locations-input") as HTMLInputElement).value)) && (isNumber((document.getElementById("map-width-input-randomized") as HTMLInputElement).value)) && (isNumber((document.getElementById("map-height-input-randomized") as HTMLInputElement).value)) && (isNumber((document.getElementById("location-width-lower-limit-input") as HTMLInputElement).value)) && (isNumber((document.getElementById("location-width-upper-limit-input") as HTMLInputElement).value)) && (isNumber((document.getElementById("location-height-lower-limit-input") as HTMLInputElement).value)) && (isNumber((document.getElementById("location-height-upper-limit-input") as HTMLInputElement).value)) ){
    
console.log(created_locations)
document.body.style.overflow = "hidden";
let location_count = 1;
is_generation_running = true;
let number_of_locations = Number((document.getElementById("locations-number-input") as HTMLInputElement).value);
number_of_locations--;
console.log(number_of_locations);
let original_number_of_locations = number_of_locations;
let minimum_distance_between_two_locations = Number((document.getElementById("minimum-distance-between-two-locations-input") as HTMLInputElement).value);
let location_width_lower_limit = Number((document.getElementById("location-width-lower-limit-input") as HTMLInputElement).value);
let location_width_upper_limit = Number((document.getElementById("location-width-upper-limit-input") as HTMLInputElement).value);
let location_height_lower_limit = Number((document.getElementById("location-height-lower-limit-input") as HTMLInputElement).value);
let location_height_upper_limit = Number((document.getElementById("location-height-upper-limit-input") as HTMLInputElement).value);
let map_width = Number((document.getElementById("map-width-input-randomized") as HTMLInputElement).value);
let map_height = Number((document.getElementById("map-height-input-randomized") as HTMLInputElement).value);
let max_needed_area = number_of_locations*((location_width_upper_limit+(minimum_distance_between_two_locations*2))*(location_height_upper_limit+(minimum_distance_between_two_locations*2)));
let min_needed_area = number_of_locations*((location_width_lower_limit+(minimum_distance_between_two_locations*2))*(location_height_lower_limit+(minimum_distance_between_two_locations*2)));
let map_area = map_width*map_height;
let max_percentage_of_needed_map_area = (100*max_needed_area)/map_area;
let min_percentage_of_needed_map_area = (100*min_needed_area)/map_area;
console.log(max_needed_area);
console.log(max_percentage_of_needed_map_area);
console.log(min_percentage_of_needed_map_area);
if(min_percentage_of_needed_map_area<=min_percentage_of_needed_map_area_permitted && max_percentage_of_needed_map_area<=max_percentage_of_needed_map_area_permitted){
   document.getElementById("loading-screen")!.style.display = "block";

const myTimeout = setTimeout(() => {
  
    var interval = setInterval(function() {
        if (number_of_locations <= 0){
            console.log("over")
            open_map("random");
            clearInterval(interval);
        }
        if (number_of_locations >= 0){
                let location_width = random_int_from_intervals_min_and_max_included(location_width_lower_limit,location_width_upper_limit);
                let location_height = random_int_from_intervals_min_and_max_included(location_height_lower_limit,location_height_upper_limit);
                let x1 = random_int_from_intervals_min_and_max_included(location_width/2, map_width-(1.5*location_width)) as never;
                let y1 = random_int_from_intervals_min_and_max_included(location_height/2, map_height-(2*location_height)) as never;
                let x2 = x1+location_width;
                let y2 = y1+location_height;
                let rectangle =  create_rectangle_knowing_coordinates(x1, y1, x2, y2 , generate_random_color(255,64,255), document.getElementById("map-container")!, "location_" + location_count, "created_location",true  );
                tries++;
                document.getElementById("bar")!.style.width = (loading_bar_width-(loading_bar_width*number_of_locations)/original_number_of_locations) + "px";
                if(is_element_n_distance_apart_from_all_other_elements( rectangle, minimum_distance_between_two_locations, created_locations)){
                created_locations.push(rectangle);
                rectangle.addEventListener("click",function(){
                    open_element_menu(rectangle)
                })
                number_of_locations--;
                
                location_count++;
            }else{
                rectangle.remove();
            }
        
      
        }
      }, 50);
    
     

        if(!is_generation_running){
            for(let i=0;i<created_locations.length;i++){
                created_locations[i].remove();
                
            }
            created_locations = [];
        }

},1);   


}else{
    console.log("Area is too big");
    document.getElementById("alert-text")!.innerHTML = "Needed area is too big!";
    window.clearTimeout(remove_alert_text_timeout);
    remove_alert_text_timeout = window.setTimeout(remove_alert_text,time_until_alert_text_is_hidden);
}

}else{
    document.getElementById("alert-text")!.innerHTML = "Enter valid values!";
    window.clearTimeout(remove_alert_text_timeout);
    remove_alert_text_timeout = window.setTimeout(remove_alert_text,time_until_alert_text_is_hidden);
    
}
}

export function stop_generation(){
    is_generation_running = false;
    console.log("stop")
}

export function home(){
    document.body.style.width = "0px";
    (document.querySelector(".pin1")! as HTMLElement).style.display = "none";
    document.getElementById("start-menu-container")!.style.display = "block";
    document.getElementById("map-container")!.style.width = "0";
    document.getElementById("map-container")!.style.height = "0";
    document.getElementById("fixed-UI")!.style.display = "none";
    document.body.style.height = "0";
    document.body.style.width = "0";
    document.getElementById("bar")!.style.width = 400 + "px";
    let all_locations = document.querySelectorAll(".map, .created_location, .randomly-generated_dot");
    for(let i=0;i<all_locations.length;i++){
        all_locations[i].remove();
    }
    
    created_locations = [];
    
}

function isNumber(value: string | number): boolean
{
   return ((value != null) &&
           (value !== '') &&
           !isNaN(Number(value.toString())));
}