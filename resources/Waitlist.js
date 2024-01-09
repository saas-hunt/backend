import {Joi} from "@kratosbase/kratos"

const commonValidations = {
    email: Joi.string().trim().required(),
}

const waitlist = {
    schema: {
        email: { type: String, required: true, unique: true },
        joined_on: { type: Date, default: Date.now }
    },

    validationRules: {
        post: {
            rules: commonValidations
        },

        patch: {
            rules: commonValidations
        },

        get: {
            roles: ['admin']
        }
    }
}

export default waitlist