import { createContext,  useReducer } from "react";

export const SignUpContext = createContext();

const signUpReducers = (state,action) => {
    console.log("Hello");
    
    switch(action.type){
        case "USER_INFO":
            return {
                ...state,...action.payload
            }

        case "CLEAR_FIELDS":
            return{
                avatar:"",
                allergies:[],
                diseases:[]
            }

        default: 
            return state;
    }
}

export const SignUpProvider = ({children}) => {
    const [state,dispatch] = useReducer(signUpReducers,{
        avatar:"",
        allergies:[],
        diseases:[]
    });

    return (
        <SignUpContext.Provider value={{state,dispatch}}>
            {children}
        </SignUpContext.Provider>
    )
}