import { GIAM, TANG } from "../constant/numberConstant";

let intialState={
    soLuong:1,
};

export const numberReducer=(state=intialState,action)=>{
    switch(action.type){
        case GIAM:{
          state.soLuong=state.soLuong - action.payload;
            return{...state};
        }
        case TANG:{
            console.log("yes");
            state.soLuong++;
            return{...state}
        }
        default:
            return state;
    }
    
}