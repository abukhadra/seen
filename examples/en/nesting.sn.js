export const nesting = `type Engine (
    size : float
)
  
type Car (
  year   : int
  model  :  str
  engine : Engine 
)

fn main {
  car := Car (
      year : 2006
      model : 'honda'
      engine : Engine(size : 2.5)
  ) 
  car |> pprint
}
`