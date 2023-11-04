import { open_empty_menu } from "../Scripts/Menu openers/open_empty_menu"
import { open_randomized_menu } from "../Scripts/Menu openers/open_randomized_menu"

export const Start_menu = () => {
  
    return (
        
        <div id="start-menu-container" className="absolute z-[11] w-full h-full bg-zinc-800"  >
            <button  className="absolute w-[300px] h-[90px] top-[200px] left-1/2 transform -translate-x-1/2 bg-lime-400 hover:bg-lime-600 rounded text-[30px] text-zinc-800" onMouseDown={() => {  open_empty_menu()  } }  >Empty map</button>
            <button className="absolute w-[300px] h-[90px] top-[340px] left-1/2 transform -translate-x-1/2 bg-lime-400 hover:bg-lime-600 rounded text-[30px] text-zinc-800" onMouseDown={() => { open_randomized_menu()  } } >Randomized map</button>
            <div id="start-menu-footer" className="absolute w-[1px] h-[1px] top-[490px]"></div>
        </div>
        

    )
}