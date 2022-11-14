import { createContext, useContext, useReducer } from "react";


export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {

  
 
  const INITIAL_STATE =   {
   
    post:{}
  }
  const postReducer = (state, action) => {
    switch (action.type) {
      case "SET_POST":
        return {
          ...state,
          post: action.payload.post,
         
        };
        }

      }

      const [state,dispatch] = useReducer(postReducer,INITIAL_STATE)
    
  return(

      <PostContext.Provider value={{data:state,dispatch}}>{children}</PostContext.Provider>
  )
};
