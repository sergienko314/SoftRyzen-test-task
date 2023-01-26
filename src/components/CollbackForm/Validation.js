import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email().required('enter your E-mail, please'),
  name: yup
    .string()
    .min(2, 'min Name 2 simvols')
    .max(32, 'max Name 32 simvols')
    .required('enter your Name, please'),
});
