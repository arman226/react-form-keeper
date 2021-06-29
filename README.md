# React-Form-Keeper

Validate your input fields using this NPM Package. This Library is very useful for any **React JS** developer who wants to make the validation of his/her forms easier!

### INSTALLATION

`npm i react-form-keeper`

### USAGE


First, you need to import the library (including the validators if need be) like this:

``` js
import validator, {isEmailAddress, isMobileNumber} from 'react-form-keeper'
```


After that you need to create an object that will represent each field from your form that you want to validate. Your object should look like this:

``` js
const fields = {
                email:{
                  isRequired: true,
                  validator: isEmailAddress, //from the library
                  errorMessage: 'Invalid Email Address' //the message that you want to be shown if the validator rejects the user input
                },
                mobile:{
                  isRequired: true,
                  validator: isMobileNumber, //from the library
                  errorMessage: 'Invalid mobile Number' //the message that you want to be shown if the validator rejects the user input
                }
               }
        
  ```

Destructure the hook properties as you create an instance of the validator

```js
const { state, updateFieldValue, isDisabled } = validator(fields)

```

### HOOK PROPERTIES AND USAGE

- `state` - it contains all the fields together with the following sub properties:  `value` (The value inserted by the user to the input field), `error` (Error message specific to a field) ,  `isTouched` (A **boolean** that determines as to whether or not an input field has been touched or modified)
- `isDisabled` - it is a **boolean**. It shall serve as your determinant if all required fields are filled-out with proper values.
- `updateFieldValue` - it is a **function** which needs to be called to update the value, as well as the corresponding properties like error message, of the field, This requires two parameters: `fieldName` (the name of the field that you want to update) and `value` (the value to be assignet to the specified field).


 
### VALIDATORS

Some validators are also included in this package:

1. `isEmailAddress` - this validates if a value is a valid email address
2. `isMobileNumber` - this validates if a value is a valid mobile number
3. `isAlphaNumeric` - this validates if a value contains letters and numbers. Minimum of 8 and maximum of 20 characters.
4. `isCharacter` - this validates if a value is a valid character
5. `isObject` - this checks if a value is a valid object
6. `isDefined` - this checks if a value is not undefined


However, you can also make your own validator by creating a function that accepts only one value to be validated and returns a boolean.

***Example:***

```js
const isPositiveInteger = value => {
  return value>=0
}
```

### CONTRIBUTION

If you want to help me improve this library, please feel free to submit a pull request.


###  LICENSE 

This project is licensed under the [MIT License](https://github.com/arman226/react-form-keeper/blob/master/LICENSE)





