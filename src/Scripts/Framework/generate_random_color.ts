import { random_int_from_intervals_min_and_max_included } from "../Algorithms/random_int_from_intervals_min_and_max_included";

export function generate_random_color(r_max, g_max, b_max){
    return "rgb(" + random_int_from_intervals_min_and_max_included(0,r_max) + "," + random_int_from_intervals_min_and_max_included(0,g_max) + "," + random_int_from_intervals_min_and_max_included(0,b_max) + ")";
}