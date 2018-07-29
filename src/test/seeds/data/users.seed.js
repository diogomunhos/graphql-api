class UserSeed {

    getActiveUser() {
        return {
            first_name: "YOUNG",
            last_name: "MACGYVER",
            email: "young.macgyver@unbelievable.com",
            username: "young.macgyver@unbelievable.com",
            password_plain: "SoFuckingCrazy#2018",
            password: "SoFuckingCrazy#2018",
            birthdate: new Date(),
            document_number: "1234567",
            born_country: "Brazil",
            is_active: true,
            addresses: [],
            user_preferences: {
                email_valid: false,
                push_notification: false,
                email_marketing: false
            }
        }
    }

    getInactiveUser() {
        return {
            first_name: "INACTIVE YOUNG",
            last_name: "MACGYVER",
            email: "inactive.young.macgyver@unbelievable.com",
            username: "inactive.young.macgyver@unbelievable.com",
            password_plain: "SoFuckingCrazy#2018",
            password: "SoFuckingCrazy#2018",
            birthdate: new Date(),
            document_number: "1234567",
            born_country: "Brazil",
            is_active: false,
            addresses: [],
            user_preferences: {
                email_valid: false,
                push_notification: false,
                email_marketing: false
            }
        }
    }
}

module.exports = new UserSeed();