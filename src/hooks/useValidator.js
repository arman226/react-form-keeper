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
        if (values[fieldName].isRequired){
            if(value===''){
                error= REQUIRED_FIELD_MESSAGE
            }
        }
        dispatch({type: CHANGE_STATE_VALUE, payload: value, fieldName, isTouched: true, error})
    }


    const setIsDisabled=useCallback(()=>{
        let hasErrors=0

        Object.keys(state).map(i=>{
           if(state[i].error){

             hasErrors+=1

           }
        })
    
        return hasErrors>0
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