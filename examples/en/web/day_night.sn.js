export const day_night = `use html

fn main(preview_id) {
    page() |> preview (preview_id)
}

fn page {
    html {
      head {
        style {
          select(
            element           : ['body' , 'html']
            margin            : 0
            padding           : 0
          )

          select(
            element           : '*'
            box_sizing        : border_box
          )

          select(
            element           : 'body'
            height            : 100vh
            background_color  : none
            display           : flex
            justify_content   : center
            align_items       : center
          )

          select(
            element           : '#sky'
            width             : 11rem 
            display           : flex
            justify_content   : end
            gap               : 3rem
            border            : (0.1rem , ridge)
            padding           : 0.3rem
            border_radius     : 2rem
            background_color  : lightskyblue
          )

          select(
            element             : '#state'
            _webkit_user_select : none   -- Safari 
            _ms_user_select     : none   -- IE 10 and IE 11
            user_select         : none 
            position            : absolute 
            display             : flex
            justify_content     : space_between
            margin              : 0.8rem
            width               : 9rem
          )
            
          select(
            element            : '#night'
            color              : lightskyblue
          )

          select(
            element            : '.center'
            justify_content    : center
            align_items        : center
          )

          select(
            element            : '.circle' 
            width              : 3rem
            height             : 3rem        
            border_radius      : 3rem
          )

          select(
            element            : '#outer' 
            overflow           : hidden
            background_color   : yellow
            opacity            : 58%
            display            : flex
            justify_content    : end
          )

          select(
            element            : '#inner' 
            width              : 0
            height             : 0
            margin_right       : -0.7rem
            margin_top         : -0.4rem
            background_color   : black            
          )

          select(
            element            : '#sky' 
            animation          : (light , 7s , infinite)
          )

          select(
            element            : '#sky > #outer' 
            animation          : ('sunset', 7s,  infinite)
          )

          select(
            element            : '#sky > #state > #night' 
            animation          : ('night', 7s,  infinite)
          )

          select(
            element            : '#sky > #outer > #inner' 
            animation          : ('moonrise', 7s, infinite)
          )

          keyframes( 'night' ) {
              at(0%   , (color : lightskyblue) )
              at(50%  , (color : white)        )
              at(100% , (color : lightskyblue ))
          }

         keyframes( 'light' ) {
              at( 0%   , (background_color: lightskyblue ))
              at( 10%  , (background_color: lightskyblue ))
              at( 30%  , (background_color: black        ))
              at( 50%  , (background_color: black        ))
              at( 60%  , (background_color: black        ))
              at( 70%  , (background_color: lightskyblue ))
              at( 100% , (background_color: lightskyblue ))
         }

         keyframes( 'moonrise' ) {
            at(0%, [
                (height            : 0)
                (width             : 0)
                (background_color  : lightskyblue)
            ])
            at(50%, [
                (height              : 3rem )  
                (width               : 3rem )
                (background_color    : black)    
            ])
            at(100%, [
                (height              : 0            )
                (width               : 0            )
                ( background_color   : lightskyblue )
            ])
        }
    
         keyframes( 'sunset' ) {
           at(0%    , ( transform : translateX(0%)               ))
           at(10%   , ( background_color : yellow                ))
           at(20%   , ( background_color : orange                ))
           at(30%   , ( background_color : yellow                ))
           at(50%   , ( transform        : translateX(-235%)     ))
           at(60%   , ( background_color : yellow                ))
           at(70%   , ( background_color : orange                ))
           at(80%   , ( background_color : yellow                ))
           at(100%  , ( transform        : translateX(0%)        ))
         }
      }
    }
    body{
      div{
        div('sky') {
         div('state') {
           div('day')   { 'Good Day' }
           div('night') { 'Good Night'  } 
         } 
         div ('outer' , class : 'circle center') {
           div ('inner', class : 'circle')
         }
        } 
      }
    }
  }
}`