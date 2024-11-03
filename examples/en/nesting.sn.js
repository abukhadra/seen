export const nesting = `struct Degree {
    name          : str
}

struct Department {
    name          : str
    degrees       : [Degree]    
}

struct University {
    name          : str
    departments   : [Department]
}  

fn main {
    University( 'Seen University') . {
        departments.add(
            Department('Science') . {
                degrees.add(
                    Degree('Physics') 
                    Degree('Biology') 
                    Degree('Chemistry') 
                )
            }
            Department('Engineering') . { 
                degrees.add(
                    Degree('Computer')
                    Degree('Electrical')
                )
            }
        )
    }.pprint()
}`