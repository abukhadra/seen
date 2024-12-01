export const nesting = `type Degree (
    name          : str
)

type Department (
    name          : str
    degrees       : [Degree]    
)

type University (
    name          : str
    departments   : [Department]
)

main =
    University =>
        name        : 'Seen University'
        departments : [
            Department => 
                name    : 'Science'
                degrees : [
                    Degree('Physics') 
                    Degree('Biology') 
                    Degree('Chemistry') 
                ]
            Department =>
                name    : 'Engineering'
                degrees : [
                    Degree('Computer')
                    Degree('Electrical')
                ]
        ]
        me.pprint
`

