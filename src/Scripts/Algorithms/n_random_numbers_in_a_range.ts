import { random_int_from_intervals_min_and_max_included } from "./random_int_from_intervals_min_and_max_included";

export const n_random_numbers_in_a_range = (num, range) => {
    const res = [];
    for(let i = 0; i < num; ){
       const random = random_int_from_intervals_min_and_max_included(range[0], range[1]) as never;
       if(!res.includes(random)){
          res.push(random);
          i++;
       };
    };
    return res;
 };