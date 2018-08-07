class UserConfigSeed {

    constructor() {
        this.user;
    }

    async init() {
        const exists = await this.isApplicationAdminExists();
        if (!exists) {
            this.initiateUser();
        } else {
            //this.updateUser();
        }

    }

    async initiateUser() {
        const SignupHelper = require('../../../helpers/signup.helper');
        const signupHelper = new SignupHelper(null);
        this.user = {
            first_name: "Application",
            last_name: "Administrator",
            email: "diogomunhos@gmail.com",
            username: "application.administrator@projectfa.com",
            born_country: "BR",
            password: signupHelper.encryptPassword("Password#2018"),
            document_number: "35090133875",
            birthdate: new Date("09/30/1986"),
            permissions: this.getAdminPermissions(),
            user_preferences: {
                email_valid: false,
                push_notification: false,
                email_marketing: false
            }
        }
        const userRepository = require('../../../repositories/user.repository');
        this.user = await userRepository.createUser(this.user);
    }

    async isApplicationAdminExists() {
        const userRepository = require('../../../repositories/user.repository');
        this.user = await userRepository.getUserByUsername("application.administrator@projectfa.com");
        this.user = (this.user.length > 0) ? this.user[0] : {};
        return (this.user.id !== undefined);
    }

    getAdminPermissions() {
        return {
            objects: {
                user: {
                    read: true,
                    edit: true,
                    delete_record: true,
                    read_all: true,
                    fields: {
                        first_name: {
                            read: true,
                            edit: true
                        },
                        last_name: {
                            read: true,
                            edit: true
                        },
                        email: {
                            read: true,
                            edit: true
                        },
                        username: {
                            read: true,
                            edit: true
                        },
                        password: {
                            read: true,
                            edit: true
                        },
                        born_country: {
                            read: true,
                            edit: true
                        },
                        document_number: {
                            read: true,
                            edit: true
                        },
                        birthdate: {
                            read: true,
                            edit: true
                        }
                    }
                }
            },
            mutations: {
                signup: true
            }
        }
    }

}

module.exports = new UserConfigSeed();