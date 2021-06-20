import * as VeeValidate from 'vee-validate';
import {
  required, min, max, alpha_spaces as alphaSpaces, email, min_value as minVal, max_value as maxVal,
  confirmed,
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeValidate.Form);
    app.component('VeeField', VeeValidate.Field);
    app.component('ErrorMessage', VeeValidate.ErrorMessage);

    VeeValidate.defineRule('required', required);
    VeeValidate.defineRule('tos', required);
    VeeValidate.defineRule('min', min);
    VeeValidate.defineRule('max', max);
    VeeValidate.defineRule('alpha_spaces', alphaSpaces);
    VeeValidate.defineRule('email', email);
    VeeValidate.defineRule('min_value', minVal);
    VeeValidate.defineRule('max_value', maxVal);
    VeeValidate.defineRule('passwords_mismatch', confirmed);
    VeeValidate.configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required`,
          min: `The field ${ctx.field} is too short`,
          max: `The field ${ctx.field} is too long`,
          alpha_spaces: `The field ${ctx.field} may only contain alphabetical characters and strings`,
          email: `The field ${ctx.field} must be a valid email`,
          min_value: `The field ${ctx.field} is too low`,
          max_value: `The field ${ctx.field} is too high`,
          passwords_mismatch: 'The passwords do not match',
          tos: 'You must accept the terms of service.',
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
