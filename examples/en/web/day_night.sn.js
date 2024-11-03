export const day_night = `use html

fn main( html_container ) { 
    page()
        .preview( html_contaier )         
}

fn page {
    Html(
        head: Head( style: style() ) 
        body: body()
    ) 
}

{- struct Style { rules: [CSSRule] } -}
{- struct Select { elements: [HTMLElement] ,  properties: [CSSProperty] } -}
@p: Page 
fn style {
    let style = Style()
    style.rules.add (
        p . {
            select            ( el('body') , el('html')  )
            margin            ( 0 )
            padding           ( 0 )
        }

        p . {
            select_all        ( )
            box_sizing        ( border_box )
        }
        
        p . { 
            select            ( el('body') )
            height            ( 100vh )
            background_color  ( none )
            display           ( flex )
            justify_content   ( center )
            align_items       ( center )
        }

        p . { 
            select            ( id('sky') ) 
            width             ( 11rem )
            display           ( flex )
            justify_content   ( end )
            gap               ( 3rem )
            border            ( 0.1rem , ridge )
            padding           ( 0.3rem )
            border_radius     ( 2rem )
            background_color  ( lightskyblue )
        }

        p . { 
            select            ( id('state') )
            webkit_user_select( none )             -- Safari 
            ms_user_select    ( none )             -- IE 10 and IE 11
            user_select       ( none ) 
            position          ( absolute ) 
            display           ( flex )
            justify_content   ( space_between )
            margin            ( 0.8rem )
            width             ( 9rem )
        }

        p . {
            select            ( id('night') ) 
            color             ( lightskyblue )
        }

        p . {
            select            ( cl('center') )
            justify_content   ( center )
            align_items       ( center )
        }

        p . { 
            select            ( cl('circle') )
            width             ( 3rem )
            height            ( 3rem )
            border_radius     ( 3rem )
        }

        p . {
            select            ( id('outer') )
            overflow          ( hidden )
            background_color  ( yellow )
            opacity           ( 58% )
            display           ( flex )
            justify_content   ( end )
        }

        p . { 
            select            ( id('inner') )
            width             ( 0 )
            height            ( 0 )
            margin_right      ( -0.7rem )
            margin_top        ( -0.4rem )
            background_color  ( black )
        }

        p . {
            select            ( id('sky') ) 
            animation         ( light , 7s , infinite )
        }

        p . { 
            select            ( id('sky').id('outer')  )
            animation         ( 'sunset', 7s,  infinite )
        }

        p . { 
            select            ( id('sky').id('state').id('night') )
            animation         ( 'night', 7s,  infinite )
        }

        p . {
            select            ( id('sky').id('outer').id('inner') )
            animation         ( 'moonrise', 7s, infinite )
        }

        keyframes('night') . {
              at(0%)   .color( lightskyblue ) 
              at(50%)  .color( white )   
              at(100%) .color( lightskyblue )
        }

        keyframes('light') . {
              at(0%)   .background_color( lightskyblue )
              at(10%)  .background_color( lightskyblue )
              at(30%)  .background_color( black )
              at(50%)  .background_color( black )
              at(60%)  .background_color( black )
              at(70%)  .background_color( lightskyblue )
              at(100%) .background_color( lightskyblue )
        }

        keyframes('moonrise') . { 
            at(0%)     . { height( 0 )    , width( 0 )    , background_color( lightskyblue ) }
            at(50%)    . { height( 3rem ) , width( 3rem ) , background_color( black )        }
            at(100%)   . { height( 0 )    , width( 0 )    , background_color( lightskyblue ) }
        }
    
        keyframes('sunset') . {
             at(0%)   .transform        ( translateX( 0% ) )
             at(10%)  .background_color ( yellow )
             at(20%)  .background_color ( orange )
             at(30%)  .background_color ( yellow )
             at(50%)  .transform        ( translateX( -235% ) ) 
             at(60%)  .background_color ( yellow )
             at(70%)  .background_color ( orange )
             at(80%)  .background_color ( yellow )
             at(100%) .transform        ( translateX( 0% ) )
         }
    )
    return style
}

{- struct Body { children: [BodyElement] } -}
{- trait BodyElememt {} -}
{- 
    # ( BodyElement )  -- #() is derive
    # ( Debug )
    struct Div { id: str, children: [DivElement]  } 
-}
{- @BodyElement div: Div { .. } -}
fn body {
    return Body().add(
        Div().add(
            Div('sky').add(
                Div('state').add(
                    Div('day')    .add( Text( 'Good Day'   ) )
                    Div('night')  .add( Text( 'Good Night' ) ) 
                )
                Div('outer', cl: ['circle', 'center']).add( 
                    Div('inner', cl: 'circle') 
                )
            )
        )
    )
}`