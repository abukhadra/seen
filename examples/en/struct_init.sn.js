export const struct_init=
`struct Point { a : int, b : int }
  
fn main { 
    let x = Point(3,3)
    println('Point.a = ' ++ x.a)
}`