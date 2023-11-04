
type Map_props = {
    border_size: number
  
  }

export const Map_container = (props: Map_props) => {
  
    return (
        
        <div id="map-container" style={{ left:(props.border_size+'px') as string,  top:(props.border_size+'px') as string }  } className=" bg-lime-400 absolute z-[0]">
            <div className="pin1 hidden" id="beneath"  ></div>
        </div>

    )
}