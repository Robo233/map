import { close_new_element_menu } from "../Scripts/Menu closers/close_new_element_menu";
import { open_new_location_menu } from "../Scripts/Menu openers/open_new_location_menu";
import { open_new_road_menu } from "../Scripts/Menu openers/open_new_road_menu";

export const New_element_menu = () => {
  
    return (
        
        <div  id="new-element-menu-container" className="fixed top-1/2  -translate-y-1/2 left-1/2  -translate-x-1/2 w-[400px] h-[250px] bg-lime-800 z-[101] rounded-lg hidden ">
            <button type="submit" className="absolute top-[-5px] right-[10px] text-zinc-800 text-[40px]" onMouseDown={() => { close_new_element_menu() } }>X</button>
            <button id="new-road-button" type="submit" className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 w-[200px] h-[50px] rounded-lg text-4xl bg-lime-400 hover:bg-lime-600 text-zinc-800" onMouseDown={() => { open_new_road_menu() } }>Road</button>
            <button id="new-location-button" type="submit" className="absolute top-[50px] left-1/2 transform -translate-x-1/2 w-[200px] h-[50px] rounded-lg text-4xl bg-lime-400 hover:bg-lime-600 text-zinc-800" onMouseDown={() => { open_new_location_menu() } }>Location</button>
        </div>

    )
}