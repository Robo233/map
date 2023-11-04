import { open_map } from "../Scripts/Menu openers/open_map"
import { remove_alert_text } from "../Scripts/remove_alert_text";
let remove_alert_text_timeout;
type Empty_menu_props = {
  time_until_alert_text_is_hidden:number
}

export const Empty_menu = (props: Empty_menu_props) => {

      return (
        <div id="empty-menu" className="hidden absolute z-[11] w-full h-full bg-zinc-800" >
          <a className="absolute left-1/2 transform -translate-x-1/2 top-[100px]  text-lime-400 text-[30px]" >Map width:</a>
          <input className="absolute left-1/2 transform -translate-x-1/2 top-[150px] h-[40px] w-[215px] bg-lime-200 text-zinc-800" id="map-width-input-empty"  />
          <a className="absolute left-1/2 transform -translate-x-1/2 top-[200px]  text-lime-400 text-[30px] " >Map height:</a>
          <input className="absolute left-1/2 transform -translate-x-1/2 top-[250px] h-[40px] w-[215px] bg-lime-200 text-zinc-800" id="map-height-input-empty"  />
          <button className="absolute w-[300px] h-[90px] top-[550px] left-1/2 transform -translate-x-1/2 bg-lime-400 hover:bg-lime-600 rounded text-[30px]  text-zinc-800" onMouseDown={() => { check_if_input_values_are_valid(props.time_until_alert_text_is_hidden) } } >Generate map</button>
          <div id="empty-menu-footer" className="absolute w-[1px] h-[1px] top-[690px]"></div>
        </div>
          
      )
  }

  function check_if_input_values_are_valid(time_until_alert_text_is_hidden){
    if(+Number((document.getElementById("map-width-input-empty") as HTMLInputElement).value) && +Number((document.getElementById("map-height-input-empty") as HTMLInputElement).value))  {
      open_map("empty")
    }else{
      document.getElementById("alert-text")!.innerHTML = "Enter valid values!";
      window.clearTimeout(remove_alert_text_timeout);
      remove_alert_text_timeout = window.setTimeout(remove_alert_text,time_until_alert_text_is_hidden);
      
    }
    

  }