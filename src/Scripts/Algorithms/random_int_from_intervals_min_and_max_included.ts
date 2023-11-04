export function random_int_from_intervals_min_and_max_included(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }