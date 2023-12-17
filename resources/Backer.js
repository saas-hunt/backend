import { Joi, mongoose } from "@kratosbase/kratos"

const commonValidations = {
    user: Joi.string().trim().required(),
    product: Joi.string().trim().required(),
    amount: Joi.number()
}

const Backer = {
    schema: {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        amount: { type: Number, required: true },
        backed_on: { type: Date, default: Date.now }
    },

    validationRules: {
        post: commonValidations,
        patch: commonValidations
    }
}

export default Backer