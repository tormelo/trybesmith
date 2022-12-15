import Joi from 'joi';

export const productBodySchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export const userBodySchema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

export const credentialsBodySchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const orderBodySchema = Joi.object({
  userId: Joi.number(),
  productsIds: Joi.array().items(Joi.number()).min(1).required()
    .messages({
      'array.min': '"productsIds" must include only numbers',
    }),
});
