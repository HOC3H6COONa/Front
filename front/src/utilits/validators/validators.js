export const formHelpers = {
    composeValidators:
        (...validators) =>
            (value) =>
                validators.reduce(
                    (error, validator) => error || validator(value),
                    undefined
                ),

    maxLength: (maxValue) => (text) =>
        text.length > maxValue ? `Max length is ${maxValue}` : undefined,

    minLength: (minValue) => (text) =>
        text.length < minValue ? `Min length is ${minValue}` :undefined,

    required: (value) => (value ? undefined : "Field is required!"),

    emailValidation(email) {
        const regEmail =
            /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/;
        return email.match(regEmail) ? undefined : "The email is invalid";
    },

    dateValidation(date) {
        const regDate =
        /^(((0[1-9]|[12]\d|3[01])-(0[13578]|1[02])-((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)-(0[13456789]|1[012])-((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])-02-((19|[2-9]\d)\d{2}))|(29-02-((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/;
        return date.match(regDate) ? undefined: "The date is invalid, should be DD-MM-YYYY"
    }
};