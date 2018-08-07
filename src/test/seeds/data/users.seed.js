class UserSeed {
    constructor() {
        this.permissions = require('./permissions.seed');
    }
    getAdminUser() {
        return {
            user: {
                first_name: "YOUNG",
                last_name: "MACGYVER",
                email: "young.macgyver@unbelievable.com",
                username: "young.macgyver@unbelievable.com",
                password_plain: "SoFuckingCrazy#2018",
                password: "SoFuckingCrazy#2018",
                birthdate: new Date(),
                document_number: "1234567",
                born_country: "BR",
                is_active: true,
                addresses: [],
                permissions: this.permissions.getDefaultPermissions()
            }
        }
    }

    getUserWithoutSignupPermission() {
        const user = {
            first_name: "YOUNG",
            last_name: "MACGYVER",
            email: "young.macgyver@unbelievable.com.permission",
            username: "young.macgyver@unbelievable.com.permission",
            password_plain: "SoFuckingCrazy#2018",
            password: "SoFuckingCrazy#2018",
            birthdate: new Date(),
            document_number: "1234567",
            born_country: "BR",
            is_active: true,
            addresses: [],
            user_preferences: {
                email_valid: false,
                push_notification: false,
                email_marketing: false
            },
            permissions: this.permissions.getDefaultPermissions()
        }

        user.permissions.mutations.signup = false;

        return user;
    }

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
            born_country: "BR",
            is_active: true,
            addresses: [],
            user_preferences: {
                email_valid: false,
                push_notification: false,
                email_marketing: false
            },
            permissions: this.permissions.getDefaultPermissions()
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
            born_country: "BR",
            is_active: false,
            addresses: [],
            user_preferences: {
                email_valid: false,
                push_notification: false,
                email_marketing: false
            },
            permissions: this.permissions.getDefaultPermissions()
        }
    }
}

module.exports = new UserSeed();