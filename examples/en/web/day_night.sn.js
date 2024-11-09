export const day_night = `use html

fn main( container ) { 
    page => {  preview( contaier )  }
}

fn page {
    html => {
        head => {
            style => {
                select( tag(body) ,  tag(html) ) => { 
                    margin            : 0 
                    padding           : 0 
                }

                select( tag('*') ) => { 
                    box_sizing        : border_box 
                }

                select( body )=> {                     
                    height            : 100vh 
                    background_color  : none 
                    display           : flex 
                    justify_content   : center 
                    align_items       : center 
                }

                select( id(sky) ) => {  
                    width             : 11rem 
                    display           : flex 
                    justify_content   : end 
                    gap               : 3rem 
                    border            : ( 0.1rem , ridge )
                    padding           : 0.3rem 
                    border_radius     : 2rem 
                    background_color  : lightskyblue 
                }

                select( id('state') )=> { 
                    webkit_user_select: none              -- Safari 
                    ms_user_select    : none              -- IE 10 and IE 11
                    user_select       : none  
                    position          : absolute 
                    display           : flex 
                    justify_content   : space_between 
                    margin            : 0.8rem 
                    width             : 9rem 
                }

                select( id('night') )  => {
                    color             : lightskyblue 
                }

                select( cl('center') ) => {
                    justify_content   : center 
                    align_items       : center 
                }

                select( cl('circle') ) => { 
                    width             : 3rem 
                    height            : 3rem 
                    border_radius     : 3rem 
                }

                select( id('outer') ) => {
                    overflow          : hidden 
                    background_color  : yellow 
                    opacity           : 58% 
                    display           : flex 
                    justify_content   : end 
                }

                select( id('inner') ) => { 
                    width             : 0 
                    height            : 0 
                    margin_right      : -0.7rem 
                    margin_top        : -0.4rem 
                    background_color  : black 
                }

                select( id('sky') ) => {
                    animation         : ( light , 7s , infinite )
                }

                select(
                     id( 'sky' )
                         .id( 'outer' ) 
                )=> { 
                    animation : ( 'sunset', 7s,  infinite )
                }

                select(
                    id('sky')
                        .id('state')
                            .id('night')
                )=> { 
                    animation : ( 'night', 7s,  infinite )
                }

                select(
                    id('sky')
                        .id('outer')
                            .id('inner') 
                )=> {
                    animation : ( 'moonrise', 7s, infinite )
                }

                keyframes('night') => {                      
                      at(0%)   => { color    : lightskyblue }
                      at(50%)  => { color    : white        }
                      at(100%) => { color    : lightskyblue }
                }

                keyframes('light') => {
                      at(0%)   => { background_color : lightskyblue }
                      at(10%)  => { background_color : lightskyblue }
                      at(30%)  => { background_color : black        }
                      at(50%)  => { background_color : black        }
                      at(60%)  => { background_color : black        }
                      at(70%)  => { background_color : lightskyblue }
                      at(100%) => { background_color : lightskyblue }
                }

                keyframes('moonrise') => { 
                    at(0%)     => { height( 0 )    ; width( 0 )    ; background_color( lightskyblue ) }
                    at(50%)    => { height( 3rem ) ; width( 3rem ) ; background_color( black )        }
                    at(100%)   => { height( 0 )    ; width( 0 )    ; background_color( lightskyblue ) }
                }

                keyframes('sunset') => {
                     at(0%)   => { transform        : translateX( 0% )    }
                     at(10%)  => { background_color : yellow              }
                     at(20%)  => { background_color : orange              }
                     at(30%)  => { background_color : yellow              }
                     at(50%)  => { transform        : translateX( -235% ) }
                     at(60%)  => { background_color : yellow              }
                     at(70%)  => { background_color : orange              }
                     at(80%)  => { background_color : yellow              }
                     at(100%) => { transform        : translateX( 0% )    }
                 }
            }
        }
        body => {
            div => {
                div('sky') => {
                    div('state') => {
                        div('day')    => { text( 'Good Day'   ) }
                        div('night')  => { text( 'Good Night' ) } 
                    }
                    div('outer') => { 
                        cl('circle')
                        cl('center')
                        div('inner') => { cl('circle') }
                    }
                }
            }
        }
    }
}


fn id    ( v: str ) { CSSPath.new( '#' ++ v )    }
fn cl    ( v: str ) { CSSPath.new( '.' ++ v )    }
fn tag   ( v: str ) { CSSPath.new( v )           }
fn html             { Html.new()                 }

enum HtmlTag                        { html , body , head }
enum AlignItems                     { center }
enum AnimationIterationCount        { infinite }
enum BorderStyle                    { ridge }
enum Color                          { lightskyblue , yellow , black }
enum Dispaly                        { flex }
enum JustifyContent                 { center , end , space_between }
enum Overflow                       { hidden }
enum Position                       { absolute }
enum CSSRule                        { Select(_) , KeyFrame(_) }

struct Html      { _head : Head  , _body : Body       } 
struct Head      { styles : [Style]                   }
struct Style     { rules : [ CSSRule ]                }  
struct CSSPath   { path: str                          } 
struct Animation { 
    name                        : str
    animation_duration          : num{s}
    animation_iteration_count   : AnimationIterationCount
}

struct Border { 
    border_width: num 
    border_style: BorderStyle 
}

struct Select             { paths : [ CSSPath ] , ...CSSProperties                  }
struct KeyFrameOffset     { offset : num , ...CSSProperties                         }
struct KeyFrame           { id : str , offsets : [KeyFrameOffset]                   } 
struct Body               { els: [HtmlElement]                                      } 
struct Text               { v: str                                                  }
struct Div                { id: str , classes : [str] , children: [HtmlElement]     }

struct CSSProperties {
    align_items        : AlignItems? 
    animation          : AnimationIterationCount?
    background_color   : Color? 
    border             : Border?
    border_radius      : num 
    color              : Color?
    display            : Display?
    gap                : num  
    height             : num 
    justify_content    : JustifyContent 
    margin             : num 
    margin_right       : num 
    margin_top         : num 
    ms_user_select     : none              -- IE 10 and IE 11
    opacity            : num 
    overflow           : Overflow 
    padding            : num
    position           : Position 
    user_select        : none  
    webkit_user_select : none              -- Safari 
    width              : num 
}



@ Html {
    [+] fn head { _head = .new() ; _head }
    [+] fn body { _body = .new() ; _body }
}


@ Head 
[+] fn style { 
    let s = Style.new() 
    styles ++ s 
    s  
}

@ Style {
    [+] fn select( paths: CSSPath... ) { 
            let s = Select.new( path )
            rules ++ Select( s )
            return s
        }
    [+] fn keyframes ( id ) {
             let k = KeyFrame.{id} 
             rules ++ KeyFrame(k)
             return k  
        }
}


@ CSSPath {
    [+] fn id        ( v: str ) { append( '#' ++ v ) }
    [+] fn cl        ( v: str ) { append( '.' ++ v ) }
    [+] fn tag       ( v: str ) { append( v )        }

    fn append    ( v : str ){ path ++= '>' ++ v  }
}

@ KeyFrame 
[+] fn at(offset) { 
    KeyFrameOffset.new( offset )
}

@ Body  
[+] fn div(id) { 
    let _div = Div.new(id)
    children ++ Div(_div)
    el 
} 

@ Div {
    [+] fn cl    (name)     { classes ++ name }
    [+] fn text  (v)        { children ++ Text.new(v) }
}
`