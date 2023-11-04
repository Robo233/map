import './Styles/App.css';
import { get_streetname_by_cursor } from './Scripts/get_streetname_by_cursor';
import { New_road_menu } from './Components/New_road_menu';
import { New_element_menu } from './Components/New_element_menu';
import { New_location_menu } from './Components/New_location_menu';
import { Element_menu } from './Components/Element_menu';
import { Fixed_UI } from './Components/Fixed_UI';
import { Map_container } from './Components/Map_container';
import { Variables_menu } from './Components/Variables';
import { Download_menu } from './Components/Download_menu';
import { Start_menu } from './Components/Start_menu';
import { Randomized_menu } from './Components/Randomized_menu';
import { Empty_menu } from './Components/Empty_menu';
import { Loading_screen } from './Components/Loading_screen';

const road_height = 20;
const node_color = "steelblue";
const node_width = 10;
const node_height = 10;
const location_corner_dot_width = 10;
const location_corner_dot_height = 10;
const time_until_alert_text_is_hidden = 2500;
const border_size = 120;
const min_percentage_of_needed_map_area_permitted = 55;
const max_percentage_of_needed_map_area_permitted = 90;
const loading_bar_width = 400;

window.onload = () => {
  get_streetname_by_cursor()

}

const App = () => {

  return (

      <>
        <New_road_menu road_height={road_height} node_color={node_color} node_width={node_width} node_height={node_height} border_size={border_size} time_until_alert_text_is_hidden={time_until_alert_text_is_hidden}/>
        <New_element_menu />
        <New_location_menu  location_corner_dot_width={location_corner_dot_width} location_corner_dot_height={location_corner_dot_height} border_size={border_size} time_until_alert_text_is_hidden={time_until_alert_text_is_hidden} />
        <Element_menu time_until_alert_text_is_hidden={time_until_alert_text_is_hidden}/>
        <Download_menu time_until_alert_text_is_hidden={time_until_alert_text_is_hidden}/>
        <Fixed_UI time_until_alert_text_is_hidden={time_until_alert_text_is_hidden} />
        <Start_menu />
        <Randomized_menu time_until_alert_text_is_hidden={time_until_alert_text_is_hidden} min_percentage_of_needed_map_area_permitted={min_percentage_of_needed_map_area_permitted} max_percentage_of_needed_map_area_permitted={max_percentage_of_needed_map_area_permitted} loading_bar_width={loading_bar_width}/>
        <Empty_menu time_until_alert_text_is_hidden={time_until_alert_text_is_hidden}/>
        <Map_container  border_size={border_size}/>
        <Loading_screen loading_bar_width={loading_bar_width}/>

        < Variables_menu />
      </>
   
  );
};

export default App;