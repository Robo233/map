import html2canvas from "html2canvas";
import { remove_alert_text } from "./remove_alert_text";

let remove_alert_text_timeout;

export function download_map_image(time_until_alert_text_is_hidden){
    if((document.getElementById("image-name-input") as HTMLInputElement).value.length>0){
    var container = document.getElementById("map-container")!; 
                html2canvas(container, { allowTaint: true }).then(function (canvas) {
                    var link = document.createElement("a");
                    document.body.appendChild(link);
                    link.download = (document.getElementById("image-name-input") as HTMLInputElement).value + (document.getElementById("image-types-menu") as HTMLInputElement).value ; 
                    link.href = canvas.toDataURL();
                    link.target = '_blank';
                    link.click();
                });
            }else{
                document.getElementById("alert-text")!.innerHTML = "Select a name!";
                window.clearTimeout(remove_alert_text_timeout);
                remove_alert_text_timeout = window.setTimeout(remove_alert_text,time_until_alert_text_is_hidden);
            }
}