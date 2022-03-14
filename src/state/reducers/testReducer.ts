import  {ActionType} from '../action-types'

import {Action} from '../actions'


const reducer = (state:boolean = false,action:Action):boolean=>{
   switch(action.type) {
       case ActionType.TEST_ACTION:
         return true
      default :
         return state
   }
}

export default reducer;