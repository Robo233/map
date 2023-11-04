import { download_map_image } from "../Scripts/get_map_image"
import { close_download_menu } from "../Scripts/Menu closers/close_download_menu"

type Download_menu_props = {
    time_until_alert_text_is_hidden: number,
  
}

export const Download_menu = (props: Download_menu_props) => {
  
    return (
        
        <div id="download-menu-container" className="fixed top-1/2  -translate-y-1/2 left-1/2  -translate-x-1/2 w-[400px] h-[250px] bg-amber-100 z-[101] rounded-lg hidden ">
            <button type="submit" className="absolute top-[20px] right-[20px] " onMouseDown={() => { close_download_menu() } }>X</button>
            <a id="image-name" className="absolute left-[60px] top-[35px] text-[20px]">Name:</a> 
            <input placeholder="Enter image name" className="absolute top-[40px] left-1/2 transform -translate-x-1/2 w-[150px] h-[30px]" id="image-name-input"  />
            <a id="image-type" className="absolute left-[60px] top-[85px] text-[20px]">Type:</a> 
            <select name="languages" id="image-types-menu" className="absolute top-[85px] left-1/2 transform -translate-x-1/2 w-[150px] h-[30px]" >
            <option value=".jpg">.jpg</option>
            <option value=".png">.png</option>
            <option value=".webp">.webp</option> 
            </select>
            <button id="" type="submit" className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 w-[200px] h-[50px] rounded-lg text-4xl bg-slate-600 " onMouseDown={() => { download_map_image(props.time_until_alert_text_is_hidden) } }>Download</button>
        </div>

    )
}