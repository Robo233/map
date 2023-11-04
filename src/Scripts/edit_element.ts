import { remove_alert_text } from "./remove_alert_text";
import { removeLastWord } from "./Algorithms/remove_last_word";
import { convert_rgb_to_hexadecimal } from "./Framework/convert_rgb_to_hexadecimal";

let current_location;
let remove_alert_text_timeout;

export function open_element_menu(element){
    if(document.getElementById("is_location_in_making")!.innerHTML == "false"){
    current_location = element;
    document.getElementById("element-menu-container")!.style.display = "block";
    let final_name;
    if(element.id.slice(0,8)=="location"){
        final_name = (element.id).slice(9);
    }else{
        final_name = (element.id).slice(5);
    }
    final_name = final_name.replace("-"," ");
    (document.getElementById("change-location-name-input")! as HTMLInputElement).value = final_name;

    document.getElementById("location-name-carrier")!.innerHTML = element.id;
    (document.getElementById("change-location-color-input")! as HTMLInputElement).value = convert_rgb_to_hexadecimal(element.style.backgroundColor);
}
} 

export function edit_element( new_name, new_color, time_until_alert_text_is_hidden){
   
    if((document.getElementById("change-location-name-input")! as HTMLInputElement).value.length>0){
        new_name = (new_name).replace(" ","-");
        if(current_location.id.slice(0,8) == "location"){
        current_location.id = "location_"+new_name;
        (current_location as HTMLElement).style.backgroundColor = new_color;
        document.getElementById("element-menu-container")!.style.display = "none";
        }else{
            if( !((document.getElementById("used_roads_names")!.innerHTML).split(" ").includes(new_name)) || (document.getElementById("change-location-name-input")! as HTMLInputElement).value == (current_location.id).slice(5) ){

            let roads = document.querySelectorAll("#" + current_location.id );
            for(let i=0;i<roads.length;i++){
                (roads[i] as HTMLElement).style.backgroundColor = new_color;
                roads[i].id = "road_"+new_name;
            }
            document.getElementById("element-menu-container")!.style.display = "none";
        }else{
            document.getElementById("alert-text")!.innerHTML = "Road already exists!";
            window.clearTimeout(remove_alert_text_timeout);
            remove_alert_text_timeout = window.setTimeout(remove_alert_text,time_until_alert_text_is_hidden); 
        }
            
        }
        
    }else{
        document.getElementById("alert-text")!.innerHTML = "Choose a name!";
        window.clearTimeout(remove_alert_text_timeout);
        remove_alert_text_timeout = window.setTimeout(remove_alert_text,time_until_alert_text_is_hidden);
    }
}

export function remove_element(){
    if(current_location.id.slice(0,8) != "location"){
        console.log("was road");
        let roads = document.querySelectorAll("#"+current_location.id);
        document.getElementById("used_roads_names")!.innerHTML = removeLastWord(document.getElementById("used_roads_names")!.innerHTML);
        for(let i = 0; i<roads.length; i++){
            roads[i].remove();
        }

    }else{
    current_location.remove();
    }
    document.getElementById("element-menu-container")!.style.display = "none";
    (document.querySelector(".pin1") as HTMLElement)!.style.display = "none";
}