import { edit_element, remove_element } from "../Scripts/edit_element"
import { close_element_menu } from "../Scripts/Menu closers/close_element_menu"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
type Element_menu_props = {
    time_until_alert_text_is_hidden: number,
  
}

export const Element_menu = (props: Element_menu_props) => {
  
    return (
        
        <div id="element-menu-container" className="fixed top-1/2  -translate-y-1/2 left-1/2  -translate-x-1/2 w-[400px] h-[250px] bg-lime-800 z-[101] rounded-lg hidden ">
            <button type="submit" className="absolute top-[-5px] right-[10px] text-zinc-800 text-[40px]" onMouseDown={() => { close_element_menu() } }>X</button>
            <a id="location-name-carrier" className="hidden"></a>
            <a id="element-name" className="absolute left-[50px] top-[33px] text-[30px] text-zinc-800">Name:</a>    
            <input placeholder="Enter location name" className="absolute top-[40px] left-1/2 transform -translate-x-1/2 w-[150px] h-[30px] bg-lime-200 text-zinc-800" id="change-location-name-input"  />
            <a id="color" className="absolute left-[50px] top-[68px] text-[30px] text-zinc-800">Color:</a> 
            <input type="color" className="absolute top-[75px] left-1/2 transform -translate-x-1/2 w-[150px] h-[30px] rounded-md" id="change-location-color-input" />
            <button onMouseDown={() => {  remove_element()  } } ><FontAwesomeIcon id="search-icon" className="absolute left-1/2 transform -translate-x-1/2 top-[120px] h-[50px] text-zinc-800" icon={faTrash} size={"1x"} /></button>
            <button id="modify_location_button" type="submit" className="absolute top-[185px] left-1/2 transform -translate-x-1/2 w-[200px] h-[50px] rounded-lg text-4xl bg-lime-400 hover:bg-lime-600 text-zinc-800" onMouseDown={() => { edit_element((document.getElementById("change-location-name-input") as HTMLInputElement)!.value, (document.getElementById("change-location-color-input") as HTMLInputElement)!.value, props.time_until_alert_text_is_hidden) } }>Done</button>
        </div>

    )
}