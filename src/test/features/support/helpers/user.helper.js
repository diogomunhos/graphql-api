class UserHelper {
    constructor() {
        const seed = require('../../../seeds/data/users.seed');
        this.macGyver = seed.getActiveUser();
    }

    generateBaseUser() {
        return {
            first_name: "teste",
            last_name: "name",
            email: "teste@teste.com",
            username: "teste@teste.com",
            password: "Password#2018",
            birthdate: "10/10/2010",
            born_country: "BR",
            document_number: "1234567"
        }
    }

    getValidUser() {
        let user = this.generateBaseUser();
        user = this.createMutation(user);
        return user;
    }

    getSignupUserWithoutFirstName() {
        let user = this.generateBaseUser();
        user.first_name = null;
        user = this.createMutation(user);
        return user;
    }

    getSignupUserWithoutLastName() {
        let user = this.generateBaseUser();
        user.last_name = null;
        user = this.createMutation(user);
        return user;
    }

    getSignupUserWithoutEmail() {
        let user = this.generateBaseUser();
        user.email = null;
        user = this.createMutation(user);
        return user;
    }

    getSignupUserWithoutUsername() {
        let user = this.generateBaseUser();
        user.username = null;
        user = this.createMutation(user);
        return user;
    }

    getSignupUserWithoutBornCountry() {
        let user = this.generateBaseUser();
        user.born_country = null;
        user = this.createMutation(user);
        return user;
    }

    getSignupUserWithoutBirthDate() {
        let user = this.generateBaseUser();
        user.birthdate = null;
        user = this.createMutation(user);
        return user;
    }

    getSignupUserWithoutDocumentNumber() {
        let user = this.generateBaseUser();
        user.document_number = null;
        user = this.createMutation(user);
        return user;
    }

    getSignupUserWithoutPassword() {
        let user = this.generateBaseUser();
        user.password = null;
        user = this.createMutation(user);
        return user;
    }

    getSignupUserWithInvalidBirthDate() {
        let user = this.generateBaseUser();
        user.birthdate = "1231231231312qweqeq12312313";
        user = this.createMutation(user);
        return user;
    }

    getSignupUserWithInvalidEmail() {
        let user = this.generateBaseUser();
        user.email = "teste.teste.com";
        user = this.createMutation(user);
        return user;
    }

    getSignupUserWithWeekPasswordUpperCase() {
        let user = this.generateBaseUser();
        user.password = "password#2018";
        user = this.createMutation(user);
        return user;
    }

    getSignupUserWithWeekPasswordLowerCase() {
        let user = this.generateBaseUser();
        user.password = "PASSWORD#2018";
        user = this.createMutation(user);
        return user;
    }

    getSignupUserWithWeekPasswordSpecialCharacter() {
        let user = this.generateBaseUser();
        user.password = "Password2018";
        user = this.createMutation(user);
        return user;
    }

    getSignupUserWithWeekPasswordLength() {
        let user = this.generateBaseUser();
        user.password = "Pass#20";
        user = this.createMutation(user);
        return user;
    }

    createMutation(request) {
            const mutation = {
                    query: `mutation{ signup(first_name: "${request.first_name}", last_name: "${(request.last_name)}", email: "${(request.email)}", username: "${(request.username)}", password: "${(request.password)}", birthdate: ${((request.birthdate) === null ? null : `"${request.birthdate}"`)}, born_country: ${(request.born_country)}, document_number: "${(request.document_number)}"){id, first_name}}`
        }
        return mutation;
    }

    // 

}

module.exports = new UserHelper();