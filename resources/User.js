import {Joi} from "@kratosbase/kratos"

const commonValidations = {
    user_name: Joi.string().min(2).max(18).trim().required(),
    picture: Joi.string().trim().required(),
    passage_id: Joi.string().trim()
}

const user = {
    schema: {
        user_name: { type: String, required: true, unique: true },
        picture: { type: String, required: true },
        passage_id: { type: String, required: true, unique: true },
        created_on: { type: Date, default: Date.now },
        last_active: { type: Date, default: Date.now },
        status: { type: Boolean, default: true }
    },

    validationRules: {
        post: {
            rules: commonValidations,
            roles: ['developer'],
            single_roles: ['developer']
        },

        patch: {
            rules: commonValidations,
            roles: ['developer'],
            single_roles: ['developer']
        },

        get: {
            rules: commonValidations,
            roles: ['developer'],
            single_roles: ['developer']
        }
    }
}

export default user