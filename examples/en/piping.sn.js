export const piping = 
`fn f { 3 * 4 + 7}
fn g(x) { x + 3 }
fn h(x) { x |> println }

fn main { f() |> g |> h }
`    
