export const day_night = `use html

[+] main container = 
	page => 
		preview( contaier ) 

:: (WebPage) 
[+] page =
    Webpage.html => 
        head => 
            style => 
                select( tag(body) , tag(html) ) => 
                    margin            : 0 
                    padding           : 0 

                select( tag('*') ) => 
                    box_sizing        : border_box 
                
                select( body ) => 
                    height            : 100vh 
                    background_color  : none 
                    display           : flex 
                    justify_content   : center 
                    align_items       : center 

                select( id(sky) ) => 
                    width             : 11rem 
                    display           : flex 
                    justify_content   : end 
                    gap               : 3rem 
                    border            : ( 0.1rem , ridge )
                    padding           : 0.3rem 
                    border_radius     : 2rem 
                    background_color  : lightskyblue 

                select( id('state') ) => 
                    webkit_user_select: none              -- Safari 
                    ms_user_select    : none              -- IE 10 and IE 11
                    user_select       : none  
                    position          : absolute 
                    display           : flex 
                    justify_content   : space_between 
                    margin            : 0.8rem 
                    width             : 9rem 

                select( id('night') )  => 
                    color             : lightskyblue 

                select( cl('center') ) => 
                    justify_content   : center 
                    align_items       : center 

                select( cl('circle') ) => 
                    width             : 3rem 
                    height            : 3rem 
                    border_radius     : 3rem 

                select( id('outer') ) => 
                    overflow          : hidden 
                    background_color  : yellow 
                    opacity           : 58% 
                    display           : flex 
                    justify_content   : end 

                select( id('inner') ) => 
                    width             : 0 
                    height            : 0 
                    margin_right      : -0.7rem 
                    margin_top        : -0.4rem 
                    background_color  : black 

                select( id('sky') ) => 
                    animation         : ( light , 7s , infinite )

                select(
                     id( 'sky' )
                         .id( 'outer' ) 
                ) => 
                    animation : ( 'sunset', 7s,  infinite )


                select(
                    id('sky')
                        .id('state')
                            .id('night')
                ) => 
                    animation : ( 'night', 7s,  infinite )

                select(
                    id('sky')
                        .id('outer')
                            .id('inner') 
                ) => 
                    animation : ( 'moonrise', 7s, infinite )

                keyframes('night') =>    
                      at(0%)   => color    : lightskyblue
                      at(50%)  => color    : white        
                      at(100%) => color    : lightskyblue 

                keyframes('light') =>
                      at(0%)   => background_color : lightskyblue 
                      at(10%)  => background_color : lightskyblue 
                      at(30%)  => background_color : black        
                      at(50%)  => background_color : black        
                      at(60%)  => background_color : black        
                      at(70%)  => background_color : lightskyblue 
                      at(100%) => background_color : lightskyblue 

                keyframes('moonrise') => 
                    at(0%)     => height( 0 )    ; width( 0 )    ; background_color( lightskyblue ) 
                    at(50%)    => height( 3rem ) ; width( 3rem ) ; background_color( black )        
                    at(100%)   => height( 0 )    ; width( 0 )    ; background_color( lightskyblue )                

                keyframes('sunset') => 
                     at(0%)   => transform        : translateX( 0% )   
                     at(10%)  => background_color : yellow              
                     at(20%)  => background_color : orange              
                     at(30%)  => background_color : yellow              
                     at(50%)  => transform        : translateX( -235% ) 
                     at(60%)  => background_color : yellow              
                     at(70%)  => background_color : orange              
                     at(80%)  => background_color : yellow              
                     at(100%) => transform        : translateX( 0% ) 
                 --
            --
        --
        body => 
            div => 
                div('sky') => 
                    div('state') => 
                        div('day')    => .text( 'Good Day'   ) 
                        div('night')  => .text( 'Good Night' ) 
                    --
                    div('outer') =>  
                        cl('circle')
                        cl('center')
                        div('inner') => .cl('circle')
                    --
                --
            --
        --
    --
--

type HtmlTag                        :  html | body | head 
type AlignItems                     : center 
type AnimationIterationCount        : infinite 
type BorderStyle                    : ridge 
type Color                          : lightskyblue | yellow | black 
type Dispaly                        : flex 
type JustifyContent                 : center | end | space_between 
type Overflow                       : hidden 
type Position                       : absolute 
type Rule                           : Select(_) | KeyFrame(_) 

type WebPage   (                                 )
type Html      ( _head : Head  , _body : Body    ) 
type Head      ( styles : [Style]                )
type Style     ( rules : [ Rule ]                )  
type Selector  ( v: str                          ) 
type Animation ( 
    name                        : str
    animation_duration          : num{s}
    animation_iteration_count   : AnimationIterationCount
)

type Border (
    border_width: num 
    border_style: BorderStyle 
)

type Select             ( selectors : [ Selector ] , props : ...Properties     )
type KeyFrameOffset     ( offset : num             , props : ...Properties     )
type KeyFrame           ( id : str                 , offsets : [KeyFrameOffset]) 
type Body               ( els: [HtmlElement]                                   ) 
type Text               ( v: str                                               )
type Div                ( id: str , classes : [str] , children: [HtmlElement]  )

type Properties (
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
)

:: (WebPage) str -> Selector
[+] id v = Selector( '#' ++ v )  

:: (WebPage) str -> Selector
[+] cl v = Selector( '.' ++ v )   

:: (WebPage) str -> Selector
[+] tag v = Selector( v )    

:: (WebPage) -> Html
[+] html = Html

:: (WebPage) -> Head
[+] head = 
	_head = Head
	_head 

:: (Html) -> Body
body = 
	_body = Body
	_body 


:: (Head) -> Style
style = 
    let s = Style
    styles ++ s 
    s  

:: (Style) Selector... 
[+] select selectors =   
    let s = Select( selectors )
	rules ++ s 
	return s

:: (Style)
[+] keyframes id  =
	let k = KeyFrame => id : id
	rules ++ KeyFrame(k)
	k  

:: (Selector) str 
[+] id v = append( '#' ++ v ) 

:: (Selector) str 
[+] cl  v = append( '.' ++ v ) 

:: (Selector) str 
[+] tag v = append( v ) 

:: (Selector) str 
append v = path ++= '>' ++ v 
 
:: (KeyFrame)
[+] at offset  = KeyFrameOffset( offset )

:: (Body)
[+] div id =
    let _div = Div(id)
    children ++ Div(_div)
    _div 
 
:: (Div)
[+] cl name = classes ++ name 

:: (Div)
[+] text v = children ++ Text(v)`