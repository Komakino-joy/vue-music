import * as VeeValidate from 'vee-validate';
import {
  required, min, max, alpha_spaces as alphaSpaces, email, min_value as minVal, max_value as maxVal,
  confirmed, not_one_of as excluded,
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeValidate.Form);
    app.component('VeeField', VeeValidate.Field);
    app.component('ErrorMessage', VeeValidate.ErrorMessage);

    VeeValidate.defineRule('required', required);
    VeeValidate.defineRule('min', min);
    VeeValidate.defineRule('max', max);
    VeeValidate.defineRule('alpha_spaces', alphaSpaces);
    VeeValidate.defineRule('email', email);
    VeeValidate.defineRule('min_value', minVal);
    VeeValidate.defineRule('max_value', maxVal);
    VeeValidate.defineRule('confirmed', confirmed);
    VeeValidate.defineRule('not_one_of', excluded);
  },
};
