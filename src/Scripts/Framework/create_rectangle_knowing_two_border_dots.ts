import { remove_last_n_characters } from "../Algorithms/remove_last_n_characters";

export function create_rectangle_knowing_two_border_dots(id_1, id_2, color, parent, id, className){
                let rectangle = document.createElement('div');
                rectangle.id = id;
                rectangle.className = className;
                rectangle.style.position = 'absolute';
                rectangle.style.backgroundColor = color; 
                let offset = Number(remove_last_n_characters(document.getElementById(id_1)?.style.width,2))/2;

                let distance_from_top_first_dot = Number(remove_last_n_characters(document.getElementById(id_1)?.style.top,2));
                let distance_from_left_first_dot = Number(remove_last_n_characters(document.getElementById(id_1)?.style.left,2))
                let distance_from_top_second_dot = Number(remove_last_n_characters(document.getElementById(id_2)?.style.top,2));
                let distance_from_left_second_dot = Number(remove_last_n_characters(document.getElementById(id_2)?.style.left,2))
                
                if(distance_from_top_first_dot<distance_from_top_second_dot){
                    rectangle.style.top =  distance_from_top_first_dot + offset + "px";
                    rectangle.style.height = distance_from_top_second_dot  - distance_from_top_first_dot   + "px";
                }
                else{
                    rectangle.style.top =  distance_from_top_second_dot + offset + "px";
                    rectangle.style.height = distance_from_top_first_dot  - distance_from_top_second_dot   + "px";
                }

                if(distance_from_left_first_dot<distance_from_left_second_dot){
                    rectangle.style.left =  distance_from_left_first_dot + offset + "px";
                    rectangle.style.width = distance_from_left_second_dot  - distance_from_left_first_dot  + "px";
                }
                else{
                    rectangle.style.left =  distance_from_left_second_dot + offset + "px";
                    rectangle.style.width = distance_from_left_first_dot  - distance_from_left_second_dot  + "px";
                }

                parent.appendChild(rectangle);
                return  rectangle;
               
}