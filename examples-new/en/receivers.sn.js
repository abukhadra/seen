export const nesting = `type Student (
    name: str
    age : int
    grade: int
)

(Student) print_name    = println( 'Name: '  ++ name  ) 
(Student) print_age     = println( 'Age: '   ++ age   ) 
(Student) print_grade   = println( 'Grade: ' ++ grade ) 


main =
    'Student Record:'.println
    Student => 
        name: 'Adam'
        age: '10'
        grade: '5'
    
        print_name
        print_age
        print_grade
`