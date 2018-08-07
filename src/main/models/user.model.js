const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    document_number: {
        type: String,
        required: true
    },
    born_country: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean
    },
    addresses: [{
        name: String,
        address_type: String,
        postal_code: String,
        street: String,
        number: String,
        complement: String,
        neighborhood: String
    }],
    user_preferences: {
        email_valid: {
            type: Boolean,
            required: true
        },
        push_notification: {
            type: Boolean,
            required: true
        },
        email_marketing: {
            type: Boolean,
            required: true
        }
    },
    permissions: {
        objects: {
            user: {
                read: {
                    type: Boolean,
                    required: true
                },
                edit: {
                    type: Boolean,
                    required: true
                },
                read_all: {
                    type: Boolean,
                    required: true
                },
                delete_record: {
                    type: Boolean,
                    required: true
                },
                fields: {
                    first_name: {
                        read: {
                            type: Boolean,
                            required: true
                        },
                        edit: {
                            type: Boolean,
                            required: true
                        }
                    },
                    last_name: {
                        read: {
                            type: Boolean,
                            required: true
                        },
                        edit: {
                            type: Boolean,
                            required: true
                        }
                    },
                    email: {
                        read: {
                            type: Boolean,
                            required: true
                        },
                        edit: {
                            type: Boolean,
                            required: true
                        }
                    },
                    username: {
                        read: {
                            type: Boolean,
                            required: true
                        },
                        edit: {
                            type: Boolean,
                            required: true
                        }
                    },
                    password: {
                        read: {
                            type: Boolean,
                            required: true
                        },
                        edit: {
                            type: Boolean,
                            required: true
                        }
                    },
                    born_country: {
                        read: {
                            type: Boolean,
                            required: true
                        },
                        edit: {
                            type: Boolean,
                            required: true
                        }
                    },
                    birthdate: {
                        read: {
                            type: Boolean,
                            required: true
                        },
                        edit: {
                            type: Boolean,
                            required: true
                        }
                    },
                    document_number: {
                        read: {
                            type: Boolean,
                            required: true
                        },
                        edit: {
                            type: Boolean,
                            required: true
                        }
                    }
                }
            }
        },
        mutations: {
            signup: {
                type: Boolean,
                required: true
            }
        }
    }

});

const Model = mongoose.model('user', userSchema);
module.exports = Model;