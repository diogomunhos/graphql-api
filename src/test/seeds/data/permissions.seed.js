class PermissionSeed {
    getDefaultPermissions() {
        return {
            objects: {
                user: {
                    read: true,
                    edit: true,
                    read_all: true,
                    delete_record: true,
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
                        born_country: {
                            read: true,
                            edit: true
                        },
                        birthdate: {
                            read: true,
                            edit: true
                        },
                        password: {
                            read: true,
                            edit: true
                        },
                        document_number: {
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
module.exports = new PermissionSeed();