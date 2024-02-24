export const initialValue = {
    pos1: {x: 0, y: 0},
    pos2: {x: 0, y: 0},
    pos3: {x: 0, y: 0},
    pos4: {x: 0, y: 0},
    pos5: {x: 0, y: 0},
    pos6: {x: 0, y: 0},
}
export default function reducer(state,action){

    switch(action.type){
        case 'pos1' : return {
            ...state, 
            pos1: {...state.pos1, x : action.payload.e.clientX+10, y : action.payload.e.clientY+action.payload.scrollY+26},  
        }
        case 'pos2' : return {
            ...state, 
            pos2: {...state.pos2, x : action.payload.e.clientX+10, y : action.payload.e.clientY+action.payload.scrollY+30},  
        }
        case 'pos3' : return {
            ...state, 
            pos3: {...state.pos3, x : action.payload.e.clientX+10, y : action.payload.e.clientY+action.payload.scrollY+34},  
        }
        case 'pos4' : return {
            ...state, 
            pos4: {...state.pos4, x : action.payload.e.clientX+10, y : action.payload.e.clientY+action.payload.scrollY+38},  
        }
        case 'pos5' : return {
            ...state, 
            pos5: {...state.pos5, x : action.payload.e.clientX+10, y : action.payload.e.clientY+action.payload.scrollY+42},  
        }
        case 'pos6' : return {
            ...state, 
            pos6: {...state.pos6, x : action.payload.e.clientX+10, y : action.payload.e.clientY+action.payload.scrollY+46},  
        }
        case 'reset' : return {
            ...state,
            pos1: {...state.pos1, x : 0, y : 0},  
            pos2: {...state.pos2, x : 0, y : 0},
            pos3: {...state.pos3, x : 0, y : 0},
            pos4: {...state.pos4, x : 0, y : 0},
            pos5: {...state.pos5, x : 0, y : 0},
            pos6: {...state.pos6, x : 0, y : 0},
        }
    }
}
