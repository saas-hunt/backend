import { Joi, mongoose } from "@kratosbase/kratos"

const commonValidations = {
    owner: Joi.string().trim().required(),
    name: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    website: Joi.string().trim().required(),
    twitter: Joi.string().trim(),
    github: Joi.string().trim(),
    pitchdeck: Joi.string().trim(),
    funding_goal: Joi.number()
}

const Product = {
    schema: {
        owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        website: { type: String, required: true },
        twitter: { type: String },
        github: { type: String },
        pitchdeck: { type: String },
        funding_goal: { type: Number },
        created_on: { type: Date, default: Date.now },
        updated_on: { type: Date, default: Date.now },
        active: { type: Boolean, default: true }
    },

    validationRules: {
        post: commonValidations,
        patch: commonValidations
    }
}

export default Product