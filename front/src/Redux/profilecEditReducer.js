const CONFIRM = 'CONFIRM'
const UPDATE_NAME_TEXT = 'UPDATE-NAME-TEXT'
const UPDATE_CITY_TEXT = 'UPDATE-CITY-TEXT'
const UPDATE_AGE_TEXT = 'UPDATE-AGE-TEXT'
const UPDATE_GENDER_TEXT = 'UPDATE-GENDER-TEXT'


let initialState ={
    id: 5,
    name:'Dio Brando',
    gender: 'Male',
    age: '19',
    city: 'Cairo',
    url: 'https://i.pinimg.com/736x/f9/83/18/f98318a9e1266c62d984d9ffb462cf05.jpg',
    EditNameText:'Dio Brando',
    EditCityText:'Cairo',
    EditGenderText: 'Male',
    EditAgeText: '19',
}

export {initialState}



export const profileEditReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case 'UPDATE-NAME-TEXT':
            stateCopy.EditNameText = action.text;
            return stateCopy;
        case 'UPDATE-CITY-TEXT':
            stateCopy.EditCityText = action.text;
            return stateCopy;
        case 'UPDATE-AGE-TEXT':
            stateCopy.EditAgeText = action.text;
            return stateCopy;
        case 'UPDATE-GENDER-TEXT':
            stateCopy.EditGenderText = action.text;
            return stateCopy;
        case 'CONFIRM':
            stateCopy.name = stateCopy.EditNameText

            stateCopy.age = stateCopy.EditAgeText

            stateCopy.city = stateCopy.EditCityText

            stateCopy.gender = stateCopy.EditGenderText


            return stateCopy;
        default:
            return state;
    }
}


export const Confirm = () => ({type: CONFIRM})
export const updateCity = (text) => ({type: UPDATE_CITY_TEXT, text})
export const updateAge = (text) => ({type: UPDATE_AGE_TEXT, text})
export const updateName = (text) => ({type: UPDATE_NAME_TEXT, text})
export const updateGender = (text) => ({type: UPDATE_GENDER_TEXT, text})

