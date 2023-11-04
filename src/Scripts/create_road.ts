import { remove_alert_text } from "./remove_alert_text";
import { open_element_menu } from "./edit_element";
import { create_dot } from "./Framework/create_dot";
import create_straight_line from "./Framework/create_straight_line";

let road_index = 0;
let current_road_index = 0;
let current_road_id;
let created_nodes = new Array();
let is_road_in_making = false;
let map_container;
let remove_alert_text_timeout;
let used_roads_names = new Array();

export function create_road(node_color, node_width, node_height, road_height, border_size, time_until_alert_text_is_hidden){

    if((document.getElementById("road_name")! as HTMLInputElement).value.length>0){
        used_roads_names = document.getElementById("used_roads_names")!.innerHTML.split(" ");
        if(true){

    window.setTimeout(function(){
        let map_width = Number((document.getElementById("map_width")!).innerHTML);
        let map_height = Number((document.getElementById("map_height")!).innerHTML);
        document.getElementById("new-road-menu-container")!.style.display = "none";
        document.getElementById("finish-road-button")!.style.display = "block";
        is_road_in_making = true;
        document.getElementById("is_location_in_making")!.innerHTML = "true";
        document.addEventListener("click", create_road);
        function create_road(event){
            if(is_road_in_making){
            if(event.pageX>border_size && event.pageY>border_size && event.pageX<border_size+map_width && event.pageY<border_size+map_height  ){
                event.stopImmediatePropagation();
                map_container = document.getElementById("map-container")!; 
                create_dot("street-node-"+road_index,"",node_width,node_height,event.pageX-border_size,event.pageY-border_size,node_color,document.getElementById("map-container")!);
                let node = document.getElementById("street-node-"+road_index)!;
                node.style.visibility = "hidden";
                node!.className = current_road_index as unknown as string
                created_nodes.push(node);
                road_index++;
                current_road_index++;
                current_road_id = (document.getElementById("road_name")! as HTMLInputElement).value;
                create_straight_line(created_nodes[current_road_index-2],created_nodes[current_road_index-1],(document.getElementById("road_color")! as HTMLInputElement).value,map_container,road_height,("road_"+(document.getElementById("road_name")! as HTMLInputElement).value).replace(" ","-"), "map");
                console.log(document.getElementById(("road_"+(document.getElementById("road_name")! as HTMLInputElement).value).replace(" ","-"))!.getBoundingClientRect().left);
            } else {
                document.getElementById("alert-text")!.innerHTML = "Select a region inside the map!";
                window.clearTimeout(remove_alert_text_timeout);
                remove_alert_text_timeout = window.setTimeout(remove_alert_text,time_until_alert_text_is_hidden);
            }
        }else{
            document.removeEventListener("click", create_road);
        }
        }

    },1)
    }else{
        document.getElementById("alert-text")!.innerHTML = "Road already exists!";
        window.clearTimeout(remove_alert_text_timeout);
        remove_alert_text_timeout = window.setTimeout(remove_alert_text,time_until_alert_text_is_hidden);
    }
}else{
        document.getElementById("alert-text")!.innerHTML = "Choose a name!";
        window.clearTimeout(remove_alert_text_timeout);
        remove_alert_text_timeout = window.setTimeout(remove_alert_text,time_until_alert_text_is_hidden);
}
   
}

export function finish_road(){
    is_road_in_making = false;
    document.getElementById("is_location_in_making")!.innerHTML = "false";
    document.getElementById("new-element-button")!.style.display = "block";
    document.getElementById("finish-road-button")!.style.display = "none";
    created_nodes= [];
    current_road_index = 0;
    (document.getElementById("road_name")! as HTMLInputElement).value = "";
    let current_roads = document.querySelectorAll("#"+"road_"+ current_road_id.replace(" ","-") );
    for(let i = 0;i<current_roads.length;i++){
        current_roads[i].addEventListener("click",function(){
            open_element_menu(current_roads[i])
        })
        
    }
    used_roads_names.push(current_road_id.replace(" ","-")); 
    document.getElementById("used_roads_names")!.innerHTML = document.getElementById("used_roads_names")!.innerHTML + " " + current_road_id;
   
}

