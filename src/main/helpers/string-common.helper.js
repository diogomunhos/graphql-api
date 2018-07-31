class StringCommonHelper {

    isEmailValid(email) {
        const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regex.test(String(email).toLowerCase());
    }

    isPasswordStrong(password) {
        const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return regex.test(password);
    }

    isInvalid(string) {
        return (string === undefined || string === "" || string === null || string === "null");
    }

    isDateValid(stringDate) {
        return !(new Date(stringDate) == "Invalid Date")
    }

}

module.exports = new StringCommonHelper();