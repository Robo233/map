import { remove_last_n_characters } from "./Algorithms/remove_last_n_characters";
import { remove_alert_text } from "./remove_alert_text";

let remove_alert_text_timeout;
let location_marker;

export function search_by_coordinate(time_until_alert_text_is_hidden){
    let map_width = Number((document.getElementById("map_width")!.innerHTML));
    let map_height = Number((document.getElementById("map_height")!.innerHTML));
    let value_x = (document.getElementById("search-input-x")! as HTMLInputElement).value;
    let value_y = (document.getElementById("search-input-y")! as HTMLInputElement).value;
    if( value_x.length>0 && value_y.length>0 && (+value_x) && (+value_y) ){
        if( (+value_x<map_width) && (+value_y<map_height) ){
        location_marker = document.querySelector(".pin1");
        location_marker.style.display = "block";
        location_marker.style.left = value_x + "px";
        location_marker.style.top = value_y + "px";
        document.getElementById("is_searching")!.innerHTML = "true";
        document.getElementById("side_bar_left")!.innerHTML = (String) (Number(remove_last_n_characters(location_marker.style.left,2)) - Number( (window.screen.width)/2 ) + Number(remove_last_n_characters(location_marker.style.width,2)/2));
        document.getElementById("side_bar_top")!.innerHTML = (String) (Number(remove_last_n_characters(location_marker.style.top,2)) - Number( (window.screen.height)/4 ) - Number(remove_last_n_characters(location_marker.style.height,2)/2));
        window.setTimeout(function(){   document.getElementById("is_searching")!.innerHTML = "false"; },10);
        window.scroll({
            left: Number(remove_last_n_characters(location_marker.style.left,2)) - Number( (window.screen.width)/2 ) + Number(remove_last_n_characters(location_marker.style.width,2)/2) ,
            top: Number(remove_last_n_characters(location_marker.style.top,2)) - Number( (window.screen.height)/4 ) - Number(remove_last_n_characters(location_marker.style.height,2)/2) ,
          });
        location_marker.id = "";

        }else{
            document.getElementById("alert-text")!.innerHTML = "The entered coordinate is outside the map!";
            window.clearTimeout(remove_alert_text_timeout);
            remove_alert_text_timeout = window.setTimeout(remove_alert_text,time_until_alert_text_is_hidden);
        }
    
    }else{

        document.getElementById("alert-text")!.innerHTML = "Enter valid coordinates!";
        window.clearTimeout(remove_alert_text_timeout);
        remove_alert_text_timeout = window.setTimeout(remove_alert_text,time_until_alert_text_is_hidden);
    }
}