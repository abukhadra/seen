export const nesting = `struct Student {
    name: str
    age : int
    grade: int
}

@(student : Student) {
    fn print_name    { println('Name: '  ++ student.name ) }
    fn print_age     { println('Age: '   ++ student.age  ) }
    fn print_grade   { println('Grade: ' ++ student.grade) }
}

fn main {
    println('Student Record:')
    const adam = Student(
        'Adam'
        '10'
        '5'
    )
    adam.print_name()
    adam.print_age()
    adam.print_grade()
}`