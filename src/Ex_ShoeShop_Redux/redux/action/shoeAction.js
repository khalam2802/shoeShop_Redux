import { VIEW_DETAIL } from "../constant/shoeConstant"

// action (obj) creator
export let viewDetailAction=(shoe) => { 
    return {
        type: VIEW_DETAIL,
        payload:shoe,
    }
 }
