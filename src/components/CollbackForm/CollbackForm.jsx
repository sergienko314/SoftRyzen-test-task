import { schema } from './Validation';
import {
  Button,
  Img,
  Input,
  Wrapper,
  Title,
  Form,
  Validation,
  Lable,
  Placeholder,
} from './CollbackForm.styled';
import icons from '../../images/sprite.svg';

import { useFormik } from 'formik';

const CollbackForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
    },
    validationSchema: schema,

    onSubmit: values => { console.log(formik.values)},
  });

  return (
    <Wrapper>
      <Img></Img>
      <Title>Request Callback</Title>
      <Form name="contact" action="/contact" method="POST" data-netlify="true" noValidate netlify>
        <input  type="hidden" name="form-name" value="contact"></input>
        <input type="hidden" name="bot-field"></input>
        <Lable>
          <Input
            required
            placeholder="value"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          ></Input>
          <Placeholder>Enter your name</Placeholder>
        </Lable>
        <Lable>
          <Input
            
            placeholder="value"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          ></Input>
          <Placeholder>Enter email*</Placeholder>
          {formik.errors.email && formik.touched.email ? (
            <Validation>
              <svg>
                <use href={`${icons}#worning`}></use>
              </svg>
              <span>{formik.errors.email}</span>
            </Validation>
          ) : null}
        </Lable>

        <Button type='submit' > Send</Button>
      </Form>
    </Wrapper>
  );
};

export default CollbackForm;
