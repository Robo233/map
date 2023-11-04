import { generate_random_map } from "../Scripts/generate_random_map"

type Randomized_menu_props = {
  time_until_alert_text_is_hidden: number,
  min_percentage_of_needed_map_area_permitted: number,
  max_percentage_of_needed_map_area_permitted: number,
  loading_bar_width: number

}

export const Randomized_menu = (props: Randomized_menu_props) => {

      return (
          <div id="randomized-menu" className=" hidden z-[11]  bg-zinc-800  " >
            <div id="column-left" className="pl-[25px] mobile:pl-5" >
              <a className="input-text top-[50px]" >Number of locations:</a>
              <input className="random-input top-[100px]" id="locations-number-input"  />
              <a className="input-text top-[150px] small-mobile:text-[26px]" >Min distance between locations:</a>
              <input className="random-input top-[200px] " id="minimum-distance-between-two-locations-input"  />
              <a className="input-text top-[250px]" >Map width:</a>
              <input className="random-input top-[300px]" id="map-width-input-randomized"  />
              <a className="input-text top-[350px]" >Map height:</a>
              <input className="random-input top-[400px]" id="map-height-input-randomized"  />
            </div>
            <div id="column-right" className=" pl-[550px] mobile:w-[320px] mobile:absolute tablet:pl-[400px] mobile:top-[400px] mobile:pl-5">
              <a className="input-text top-[50px]" >Minimum location width:</a>
              <input className="random-input top-[100px]" id="location-width-lower-limit-input"  />
              <a className="input-text top-[150px]" >Maximum location width:</a>
              <input className="random-input top-[200px]" id="location-width-upper-limit-input"  />
              <a className="input-text top-[250px]" >Minimum location height:</a>
              <input className="random-input top-[300px]" id="location-height-lower-limit-input"  />
              <a className="input-text top-[350px]" >Maximum location height:</a>
              <input className="random-input top-[400px]" id="location-height-upper-limit-input"  />
            </div>  
             
              <button className="absolute w-[300px] h-[90px] top-[500px] left-1/2 transform -translate-x-1/2   bg-lime-400 hover:bg-lime-600 rounded text-[30px] text-zinc-800 mobile:top-[900px]" onMouseDown={() => {   generate_random_map(props.time_until_alert_text_is_hidden, props.min_percentage_of_needed_map_area_permitted, props.max_percentage_of_needed_map_area_permitted, props.loading_bar_width);   } } >Generate map</button>
            <div id="randomized-menu-footer" className="absolute w-[1px] h-[1px] top-[640px] mobile:top-[1020px]"></div>
          </div>
          
      )
  }