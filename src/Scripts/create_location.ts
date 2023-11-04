import { remove_alert_text } from "./remove_alert_text";
import { open_element_menu } from "./edit_element";
import { create_dot } from "./Framework/create_dot";
import { create_rectangle_knowing_two_border_dots } from "./Framework/create_rectangle_knowing_two_border_dots";

let is_location_in_making = false;
let location_corner_index = 0;
let dots = new Array();
let remove_alert_text_timeout;

export function create_new_location( location_corner_dot_width, location_corner_dot_height, border_size, time_until_alert_text_is_hidden) {
    let map_width = Number((document.getElementById("map_width")!).innerHTML);
    let map_height = Number((document.getElementById("map_height")!).innerHTML);
    if((document.getElementById("location_name")! as HTMLInputElement).value.length>0){
    window.setTimeout(function(){

    document.getElementById("new-location-menu-container")!.style.display = "none";
    document.getElementById("finish-location-button")!.style.display = "block";
    is_location_in_making = true;
    document.getElementById("is_location_in_making")!.innerHTML = "true";
    document.addEventListener("click", create_location);
    function create_location(event){
        if(is_location_in_making){ 
        if(event.pageX>border_size && event.pageY>border_size && event.pageX<border_size+map_width && event.pageY<border_size+map_height  ){
        event.stopImmediatePropagation();
            location_corner_index++;
            create_dot("location-corner-"+location_corner_index,"",location_corner_dot_width,location_corner_dot_height,event.pageX-border_size,event.pageY-border_size,(document.getElementById("location_color")! as HTMLInputElement).value,document.getElementById("map-container")!);
            dots.push(document.getElementById("location-corner-"+(location_corner_index)));
            if(location_corner_index%2==0){

                create_rectangle_knowing_two_border_dots("location-corner-"+(location_corner_index-1), "location-corner-"+(location_corner_index), (document.getElementById("location_color")! as HTMLInputElement).value, document.getElementById("map-container")!, ("location_"+(document.getElementById("location_name")! as HTMLInputElement).value).replace(" ","-"), "map" );
                
                let elements_with_current_name = document.querySelectorAll("#"+"location_"+((document.getElementById("location_name")! as HTMLInputElement).value).replace(" ","-"))!;
                for(let i=0; i<elements_with_current_name.length;i++){
                    elements_with_current_name[i].addEventListener("click",function(){
                        open_element_menu(elements_with_current_name[i])
                    })
                }
               
                (document.getElementById("location_name")! as HTMLInputElement).value = "";
                finish_location();
                
            }
 
        } else {
            document.getElementById("alert-text")!.innerHTML = "Select a region inside the map!";
            window.clearTimeout(remove_alert_text_timeout);
            remove_alert_text_timeout = window.setTimeout(remove_alert_text,time_until_alert_text_is_hidden);
        }
    }else{
        document.removeEventListener("click",create_location);
    }
    }

    },1)
}else{
    
    document.getElementById("alert-text")!.innerHTML = "Choose a name!";
    window.clearTimeout(remove_alert_text_timeout);
    remove_alert_text_timeout = window.setTimeout(remove_alert_text,time_until_alert_text_is_hidden);
    
}
  
  }

export function finish_location(){
    is_location_in_making = false;
    document.getElementById("is_location_in_making")!.innerHTML = "false";
    document.getElementById("new-element-button")!.style.display = "block";
    document.getElementById("finish-location-button")!.style.display = "none";
    for( let i = 0; i <dots.length;i++){
        dots[i].style.display = "none";
    }
    dots = [];

}