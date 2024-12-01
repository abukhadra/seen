export const fibonacci = 
`main =
    let x = 10
    println('fibonacci(%{x}) = %{fib(x)}')

fib n =
    when n :
        0 -> 0
        1 -> 1
        _ -> fib(n - 1) + fib( n - 2)
    
`