
export function get_streetname_by_cursor(){
 
  document.addEventListener('mousemove', e => {
    try{
   if(document.elementFromPoint(e.clientX, e.clientY)?.className! == "map" || document.elementFromPoint(e.clientX, e.clientY)?.className! == "created_location" ){
    if((document.elementFromPoint(e.clientX, e.clientY)?.id!).slice(0,8)=="location"){
    document.getElementById("location-name")!.innerHTML = ((document.elementFromPoint(e.clientX, e.clientY)?.id!).slice(9)).replace("-"," ");
    }else{
      document.getElementById("location-name")!.innerHTML = ((document.elementFromPoint(e.clientX, e.clientY)?.id!).slice(5)).replace("-"," ");
    }

    document.getElementById("location-name")!.style.color = (document.elementFromPoint(e.clientX, e.clientY) as HTMLElement).style.backgroundColor;
   }
   else if((((document.elementFromPoint(e.clientX, e.clientY))!).className.split(" ")[0]!)=="pin1"){
    document.getElementById("location-name")!.innerHTML = (document.elementFromPoint(e.clientX, e.clientY)!).id;
  }
   else {
    document.getElementById("location-name")!.innerHTML = "";
   }
  } catch(e){}
      })
    
}