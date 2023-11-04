import { create_new_location } from "../Scripts/create_location";
import { close_new_location_menu } from "../Scripts/Menu closers/close_new_location_menu";

type New_location_props = {
 
  location_corner_dot_width:number
  location_corner_dot_height: number
  border_size: number
  time_until_alert_text_is_hidden: number

}

export const New_location_menu = (props: New_location_props) => {
   
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    create_new_location( props.location_corner_dot_width, props.location_corner_dot_height,props.border_size, props.time_until_alert_text_is_hidden)
  };
  
    return (
        
        <div  id="new-location-menu-container" className="fixed top-1/2  -translate-y-1/2 left-1/2  -translate-x-1/2 w-[400px] h-[250px] bg-lime-800 z-[101] rounded-lg hidden">
            <button type="submit" className="absolute top-[-5px] right-[10px] text-zinc-800 text-[40px]" onMouseDown={() => { close_new_location_menu() } }>X</button>
            <a id="type-name-text" className="absolute top-[5px] text-zinc-800 text-[25px] text-center left-1/2 transform -translate-x-1/2" >Type the name of the location</a>
            <input placeholder="Enter location name" className="input absolute top-[80px] left-1/2 text-zinc-800 bg-lime-200 transform -translate-x-1/2" id="location_name"  />
            <input id="location_color" type="color" className="absolute top-[120px] left-1/2 transform -translate-x-1/2 w-[120px] h-[50px] rounded-md" />
            <button className="absolute top-[180px] left-1/2 transform -translate-x-1/2 w-[150px] h-[50px] rounded-lg bg-lime-400 hover:bg-lime-600 text-zinc-800 text-[25px]" onClick={buttonHandler} >Create location</button>
        </div>

    )
}