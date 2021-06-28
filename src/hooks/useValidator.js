import { useReducer, useCallback} from 'react'

const CHANGE_STATE_VALUE = "CHANGE_STATE_VALUE"
const REQUIRED_FIELD_MESSAGE = 'this field is required'


const reducer=(state, action)=>{
    switch(action.type){
        case CHANGE_STATE_VALUE:{
            let newState= state
            const {payload, fieldName, isTouched, error} = action
            newState[fieldName]= {value:payload, isTouched, error}
            return {...newState}
        }
        default:{
            return state
        }
    }
}


const useValidator=(values)=>{


    /**each field must contain the following property
     * @property {value} any the value of the text input
     * @property {isRequired} boolean if the field is required, it should not contain an empty value
     * @property {isTouched} boolean whether or not the input field has been touched or edited
     * @property {error} string if the input is invalid, it will contain an error message
     */
    const setInitialValues =()=>{
        let initialState={}
        Object.keys(values).map((i)=>{
            return initialState[i]= {value:'', isTouched:false, isRequired: values[i].isRequired, error:values[i].isRequired? REQUIRED_FIELD_MESSAGE:''}
        })
        return initialState
    }


    const [state, dispatch] = useReducer(reducer,setInitialValues())

    const updateFieldValue=(fieldName, value)=>{
        let error= ''

        if(!value){

            if(values[fieldName].isRequired){
                error = REQUIRED_FIELD_MESSAGE
            }

        }

        else if (!values[fieldName].validator(value)){
            error= 'wrong value'
        }


       
        dispatch({type: CHANGE_STATE_VALUE, payload: value, fieldName, isTouched: true, error})
    }


    const setIsDisabled=useCallback(()=>{
        let errors = 0
 
        Object.keys(state).map(i=>
         {
            return errors = state[i].error ===''? errors:1
         }
            
            
            )


        return errors >0


    
 
    },[state])



    // useEffect(()=>{
    // //    Object.keys(values).map(i=>console.log("test",i))
    // // if(!initialValue){
    // // setInitialValues()}
    
    // },[state])

    return {
        state,
        isDisabled: setIsDisabled(),
        updateFieldValue
    }


}


export default useValidator