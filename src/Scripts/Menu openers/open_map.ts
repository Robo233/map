import { remove_last_n_characters } from "../Algorithms/remove_last_n_characters";

export function open_map(mod){
    document.body.style.overflow = "auto";
    document.getElementById("loading-screen")!.style.display = "none";
    document.documentElement.requestFullscreen().catch(console.log);
    let map_width;
    let map_height;
    document.getElementById("map-container")!.style.display = "block";
    document.getElementById("fixed-UI")!.style.display = "block";
    document.getElementById("empty-menu")!.style.display = "none";
    document.getElementById("randomized-menu")!.style.display = "none";
    if(mod == "random"){
        map_width = Number((document.getElementById("map-width-input-randomized") as HTMLInputElement).value);
        map_height = Number((document.getElementById("map-height-input-randomized") as HTMLInputElement).value);
    }else{
        map_width = Number((document.getElementById("map-width-input-empty") as HTMLInputElement).value);
        map_height = Number((document.getElementById("map-height-input-empty") as HTMLInputElement).value);   
    }
    document.body.style.height = (Number(map_height) + 2 * Number(remove_last_n_characters(document.getElementById("map-container")!.style.top,2))) + "px";
    document.body.style.width = (Number(map_width) + 2 * Number(remove_last_n_characters(document.getElementById("map-container")!.style.left,2))) + "px";
    document.getElementById("map_width")!.innerHTML = String(map_width);
    document.getElementById("map_height")!.innerHTML = String(map_height);
    document.getElementById("map-container")!.style.height = map_height + "px";
    document.getElementById("map-container")!.style.width = map_width + "px";
}