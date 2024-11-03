export const fibonacci = 
`fn main { 
    let x = 10
    println('fibonacci(%{x}) = %{fib(x)}')
}  

fn fib(n) {
    when (n) {
        0 -> return 0
        1 -> return 1
        _ -> return fib(n - 1) + fib( n - 2)
    }
}`