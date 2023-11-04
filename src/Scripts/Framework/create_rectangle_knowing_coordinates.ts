import { random_int_from_intervals_min_and_max_included } from "../Algorithms/random_int_from_intervals_min_and_max_included";

export function create_rectangle_knowing_coordinates(x1:number, y1:number, x2:number, y2:number, color, parent, id, className, rotate?:boolean){
    let rectangle = document.createElement('div');
                rectangle.id = id;
                rectangle.className = className;
                rectangle.style.position = 'absolute';
                rectangle.style.backgroundColor = color; 
                
                if(y1<y2){
                    rectangle.style.top =  y1 + "px";
                    rectangle.style.height = y2  - y1   + "px";
                }
                else{
                    rectangle.style.top =  y2 + "px";
                    rectangle.style.height = y1  - y2   + "px";
                }

                if(x1<x2){
                    rectangle.style.left =  x1 + "px";
                    rectangle.style.width = x2  - x1  + "px";
                }
                else{
                    rectangle.style.left =  x2 + "px";
                    rectangle.style.width = x1  - x2  + "px";
                }

                if(rotate){
                    rectangle.style.transform = 'rotate('+random_int_from_intervals_min_and_max_included(0,360)+'deg)';
                }

                parent.appendChild(rectangle);
                return  rectangle;
}