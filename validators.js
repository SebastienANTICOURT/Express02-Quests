const Joi = require('joi');

const movieSchema = Joi.object({
    title: Joi.string().max(100).required(),
    director: Joi.string().max(100).required(),
    year:Joi.number().integer().max(4).required(),
    color: Joi.number().integer().valid(0, 1).required(),
    duration:Joi.number().integer().min(1).required(),
})

const validateMovie = (req, res, next) => {
    const { title, director, year, color, duration } = req.body;
    const { error } = movieSchema.validate(
        { title, director, year, color, duration },
        { abortEarly: false }
      );
      if (error) {
        res.status(422).json({ validationErrors: error.details });
      } else {
        next();
      }
    };

    const userSchema = Joi.object ({
        firstname: Joi.string().max(100).required(),
        lastname: Joi.string().max(100).required(),
        email: Joi.string().max(100).required(),
        city: Joi.string().max(100).required(),
        language: Joi.string().max(100).required(),
    })

    const validateUser = (req, res, next) => {
        const { firstname, lastname, email, city, language } = req.body;
      
        const { error } = userSchema.validate(
          { firstname, lastname, email, city, language },
          { abortEarly: false }
        );

        if (error) {
          res.status(422).json({ validationErrors: error.details });
        } else {
          next();
        }
      };
  

  module.exports = {
    validateMovie,
    validateUser,
  };