import {Joi} from "@kratosbase/kratos"

const commonValidations = {
    email: Joi.string().trim().required(),
}

const Waitlist = {
    schema: {
        email: { type: String, required: true, unique: true },
        joined_on: { type: Date, default: Date.now }
    },

    validationRules: {
        post: commonValidations,
        patch: commonValidations
    }
}

export default Waitlist