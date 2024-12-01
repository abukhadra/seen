export const struct_init=
`type Point ( a : int, b : int )
  
main = 
    let x = Point(3,3)
	'Point.a = '
		.concat(x.a)
		.println
`