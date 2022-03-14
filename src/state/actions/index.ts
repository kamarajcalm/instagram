import {ActionType} from '../action-types'


interface searchRepositoriesAction{
   type:ActionType.SEARCH_REPOSITORIES
}
interface searchRepositoriesSuccessAction{
   type:ActionType.SEARCH_REPOSITORIES_SUCCESS,
   payload:string[]
}
interface searchRepositoriesErrorAction{
    type:ActionType.SEARCH__REPOSITORIES_ERROR,
   payload:string
}
interface testAction{
    type:ActionType.TEST_ACTION,
   payload:boolean
}
export type Action = searchRepositoriesAction|searchRepositoriesSuccessAction|searchRepositoriesErrorAction|testAction