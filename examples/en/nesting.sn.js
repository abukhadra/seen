export const nesting = `type Engine (
    size : float
)
  
type Car (
  year   : int
  model  :  str
) { Engine }

fn main {

  let car = Car ( 
    year : 2006
    model : 'honda'   
  ) { Engine(size : 2.5) }

  car |> pprint
}
`