import { faDesktop, faHome, faSave, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fullscreen } from "../Scripts/Framework/fullscreen"
import { finish_location } from "../Scripts/create_location"
import { finish_road } from "../Scripts/create_road"
import { open_new_element_menu } from "../Scripts/Menu openers/open_new_element_menu"
import { search_by_coordinate } from "../Scripts/search_by_coordinate"
import { search_by_location } from "../Scripts/search_by_location"
import { open_download_menu } from "../Scripts/Menu openers/open_download_menu"
import { home } from "../Scripts/generate_random_map"

type Fixed_UI_props = {
    time_until_alert_text_is_hidden: number,
  
}

export const Fixed_UI = (props: Fixed_UI_props) => {
  
    return (
        <>
        <a id="alert-text" className="fixed max-w-[400px] top-[30px] left-1/2 transform -translate-x-1/2 text-[50px] z-[12] text-red-500 font-bold " ></a>
        
        <div id="fixed-UI" className="hidden">

            <div className="fixed left-[80px] w-[265px] mobile:left-[10px]  mid-mobile:left-1/2 mid-mobile:right-[unset] mid-mobile:-translate-x-1/2 z-[11]" >
            <input placeholder="Search" className="absolute left-[50px] h-[60px] w-[215px] bg-lime-200 border-4 border-lime-800 rounded-r-md text-zinc-800 outline-none" id="search-input"  />
            <button className="absolute w-[50px] h-[60px] bg-lime-800 z-[11] rounded-l-md" onMouseDown={() => {  search_by_location(props.time_until_alert_text_is_hidden)  } } ><FontAwesomeIcon id="search-icon" className="w-[30px] h-[30px] text-zinc-800" icon={faSearch} size={"1x"} /></button>
            </div>

            <div className="fixed left-[425px] w-[250px] mobile:right-[10px] mobile:left-[unset] mid-mobile:left-1/2 mid-mobile:-translate-x-1/2 mid-mobile:top-[60px] z-[11]" >
            <input placeholder="X" className="absolute left-[50px] h-[60px] w-[100px] bg-lime-200 border-4 border-lime-800 text-zinc-800 outline-none" id="search-input-x"  />
            <input placeholder="Y" className="absolute left-[150px] h-[60px] w-[100px] bg-lime-200 border-4 border-lime-800 rounded-r-md text-zinc-800 outline-none" id="search-input-y"  />
            <button className="absolute  w-[50px] h-[60px] bg-lime-800 z-[11] rounded-l-md" onMouseDown={() => {  search_by_coordinate(props.time_until_alert_text_is_hidden)  } } ><FontAwesomeIcon id="search-icon" className="w-[30px] h-[30px] text-zinc-800asd" icon={faSearch} size={"2x"} /></button>
            </div>
           
            <div className="fixed left-[755px] top-0 w-[300px] h-[60px] bg-lime-200 border-lime-800 border-4 rounded-md z-[11] tablet-lg:left-1/2 tablet-lg:transform tablet-lg:-translate-x-1/2 tablet-lg:top-[unset] bottom-0">
            <button id="new-element-button"  className="absolute top-[1px] left-[20px] w-[50px] h-[50px] rounded-full text-6xl bg-lime-800  z-[110]" onMouseDown={() => { open_new_element_menu() } }><a className="absolute bottom-[2px] left-1/2 transform -translate-x-1/2 text-zinc-800">+</a></button>
            <button id="fullscreen-button" className="absolute top-[-8px] left-[90px] text-6xl border-none" onMouseDown={() => { fullscreen() } }  ><FontAwesomeIcon id="desktop-icon" className="w-[50px] h-[50px] text-lime-800" icon={faDesktop}  /></button>
            <button id="save-button" className="absolute top-[-8px] left-[160px] text-6xl border-none" onMouseDown={() => { open_download_menu() } }  ><FontAwesomeIcon id="save-icon" className="w-[50px] h-[50px] text-lime-800" icon={faSave}  /></button>
            <button id="home-button" className="absolute top-[-8px] left-[230px] text-6xl border-none"  onMouseDown={() => {  home()  } }  ><FontAwesomeIcon id="search-icon" className="w-[50px] h-[50px] text-lime-800" icon={faHome}  /></button>
            </div>

            <button id="finish-road-button"  className="fixed top-[30px] right-[30px] w-[300px] h-[60px] rounded-lg text-6xl bg-slate-600 hidden z-[11]" onMouseDown={() => {  finish_road()  } }><a className="absolute bottom-[2px] left-1/2 transform -translate-x-1/2">Finish</a></button>
            <button id="finish-location-button"  className="fixed top-[30px] right-[30px] w-[300px] h-[60px] rounded-lg text-6xl bg-slate-600 hidden z-[11]" onMouseDown={() => { finish_location() } }><a className="absolute bottom-[2px] left-1/2 transform -translate-x-1/2">Finish</a></button>
            
            <a id="location-name" className="fixed right-[40px] bottom-[20px] text-[50px] z-[11]"></a>
            
        </div>
        </>

    )
}