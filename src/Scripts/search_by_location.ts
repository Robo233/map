import { remove_alert_text } from "./remove_alert_text";
import { remove_last_n_characters } from "./Algorithms/remove_last_n_characters";
import { convert_rgb_to_hexadecimal } from "./Framework/convert_rgb_to_hexadecimal";
import { negative_color } from "./Framework/negative_color";

let remove_alert_text_timeout;
let searched_location;
let location_marker;
let scroll_bar_position_left;

export function search_by_location(time_until_alert_text_is_hidden){
    let input_value = ((document.getElementById("search-input")! as HTMLInputElement).value).replace(" ","-");
    (document.getElementById("search-input")! as HTMLInputElement).value = "";
    if(document.getElementById("location_"+input_value) || document.getElementById("road_"+input_value) ){
        location_marker = document.querySelector(".pin1");
        location_marker.style.display = "block";
        if(document.getElementById("location_"+input_value)){
            searched_location = document.getElementById("location_"+input_value);
            location_marker.id = input_value;
            location_marker.style.left = Number(remove_last_n_characters(searched_location.style.left,2)) + (Number(remove_last_n_characters(searched_location.style.width,2))/2) - (location_marker.clientWidth/2) + "px";
            location_marker.style.top = Number(remove_last_n_characters(searched_location.style.top,2)) + (Number(remove_last_n_characters(searched_location.style.height,2))/2) - (location_marker.clientHeight) + "px";
          
        }else{
            searched_location = document.getElementById("road_"+input_value);
            location_marker.style.left = searched_location.style.left;
            location_marker.style.top = searched_location.style.top;
        }

        location_marker.style.display = "block";
        location_marker.style.backgroundColor = negative_color(convert_rgb_to_hexadecimal(searched_location.style.backgroundColor));

        if(Number(remove_last_n_characters(searched_location.style.left,2))<Number(((window.screen.width)/2))-Number(remove_last_n_characters(searched_location.style.width,2))){
            scroll_bar_position_left = 0;
        }
           document.getElementById("is_searching")!.innerHTML = "true";
           document.getElementById("side_bar_left")!.innerHTML = (String) (Number(remove_last_n_characters(searched_location.style.left,2)) - Number( (window.screen.width)/2 ) + Number(remove_last_n_characters(searched_location.style.width,2)/2));
           document.getElementById("side_bar_top")!.innerHTML = (String) (Number(remove_last_n_characters(searched_location.style.top,2)) - Number( (window.screen.height)/4 ) - Number(remove_last_n_characters(searched_location.style.height,2)/2));
           
           window.setTimeout(function(){   document.getElementById("is_searching")!.innerHTML = "false"; },10);

            window.scroll({
                left: Number(remove_last_n_characters(searched_location.style.left,2)) - Number( (window.screen.width)/2 ) + Number(remove_last_n_characters(searched_location.style.width,2)/2) ,
                top: Number(remove_last_n_characters(searched_location.style.top,2)) - Number( (window.screen.height)/4 ) - Number(remove_last_n_characters(searched_location.style.height,2)/2) ,
              });
            
    }else{
        document.getElementById("alert-text")!.innerHTML = "The location doesn't exist!";
        window.clearTimeout(remove_alert_text_timeout);
        remove_alert_text_timeout = window.setTimeout(remove_alert_text,time_until_alert_text_is_hidden);
    }
   
}