import '../Styles/loading_bar_style.css'

type Loading_screen_menu_props = {
  loading_bar_width: number

}

export const Loading_screen = (props: Loading_screen_menu_props) => {

      return (
        <div id="loading-screen" className="absolute hidden z-[11] w-full h-full bg-[#222222]">
        <div className="  lds-default left-1/2 transform -translate-x-1/2 top-[200px] "><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <div id="progress" style={{width: props.loading_bar_width + 'px'}} className={"absolute left-1/2 transform -translate-x-1/2 top-[450px] h-[50px] bg-gray-300 "}>
        <div id="bar" className={"h-[50px] w-[4px] bg-lime-500 "}></div>
        </div>
        </div>  
      )
  }