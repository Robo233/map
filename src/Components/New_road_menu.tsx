import { useState } from "react";
import { close_new_road_menu } from "../Scripts/Menu closers/close_new_road_menu";
import { create_road } from "../Scripts/create_road";

type New_road_props = {
  road_height: number
  node_color: string
  node_width: number
  node_height: number
  border_size: number
  time_until_alert_text_is_hidden: number

}

export const New_road_menu = (props: New_road_props) => {

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    create_road(props.node_color, props.node_width, props.node_height,  props.road_height, props.border_size, props.time_until_alert_text_is_hidden);
   
  };
      
    return (
        
        <div  id="new-road-menu-container" className="fixed top-1/2  -translate-y-1/2 left-1/2  -translate-x-1/2 w-[400px] h-[250px] bg-lime-800 z-10 rounded-lg hidden">
            <button type="submit" className="absolute top-[-5px] right-[10px] text-zinc-800 text-[40px]" onMouseDown={() => { close_new_road_menu() } }>X</button>
            <a id="type-name-text" className="absolute top-[5px] text-zinc-800 text-[24px] text-center left-1/2 transform -translate-x-1/2" >Type the name of the street</a>
            <input id="road_name" placeholder="Enter road name" className="absolute top-[80px] text-zinc-800 bg-lime-200 left-1/2 transform -translate-x-1/2 outline-none"/>
            <input id="road_color" type="color" className="absolute top-[120px] left-1/2 transform -translate-x-1/2 w-[120px] h-[50px]  rounded-md outline-none" />
          <button type="submit" className="absolute top-[180px] left-1/2 transform -translate-x-1/2 w-[150px] h-[50px] rounded-lg bg-lime-400 hover:bg-lime-600 text-zinc-800 text-[25px]" onClick={buttonHandler} >Create location</button>

        </div>

    )
}