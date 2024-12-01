import {السلام_عليكم} from './ar/السلام_عليكم.س.js'
import {hello_world} from './en/hello_world.js'

import {فيبوناتشي} from './ar/فيبوناتشي.س.js'
import {fibonacci} from './en/fibonacci.sn.js'

import {تجهيز_تركيبة} from './ar/تجهيز_تركيبة.س.js'
import {struct_init} from './en/struct_init.sn.js'

import {تمرير} from './ar/تمرير.س.js'
import {piping} from './en/piping.sn.js'

import {تداخل} from './ar/تداخل.س.js'
import {nesting} from './en/nesting.sn.js'

import { تعاقب_الليل_والنهار } from './ar/عنكبوتية/تعاقب_الليل_والنهار.س.js'
import { day_night } from './en/web/day_night.sn.js'

// import {بيانات_من_القرآن} from './ar/اسلامية/قرآن/بيانات_من_القرآن.س.js'

import {رسم_صفحة_قرآن} from './ar/اسلامية/قرآن/رسم_صفحة_قرآن.س.js'

const EXAMPLES_AR = {
  'السلام_عليكم'             : ['السلام عليكم!', السلام_عليكم ],
  'فيبوناتشي'               : ['فيبوناتشي' , فيبوناتشي],
  'تجهيز_تركيبة'            : ['تجهيز تركيبة', تجهيز_تركيبة],
  'تمرير'                   : ['تمرير', تمرير],
  'تداخل'                   : ['تداخل', تداخل],
  'تعاقب_الليل_والنهار'     : ['تعاقب الليل والنهار', تعاقب_الليل_والنهار],
  // 'بيانات_من_القرآن'        : ['بيانات_من_القرآن', بيانات_من_القرآن],
  'رسم_صفحة_قرآن'           : ['رسم صفحة قرآن', رسم_صفحة_قرآن]
}

const EXAMPLES_EN = {
  'hello_world'     : ['Hello World!', hello_world],
  'fibonacci'       : ['Fibonacci' , fibonacci],
  'struct_init'     : ['Struct init', struct_init],
  'piping'          : ['Piping', piping],
  'nesting'         : ['Nesting', nesting],
  'day_night'       : ['Day & Night', day_night],
}

export { EXAMPLES_AR, EXAMPLES_EN }