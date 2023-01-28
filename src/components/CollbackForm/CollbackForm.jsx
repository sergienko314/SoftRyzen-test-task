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
  WrapperForm,
  Div
} from './CollbackForm.styled';
import icons from '../../images/sprite.svg';

import { useFormik } from 'formik';

import formSmX1 from '../../images/form/form-sm@-x1.png';
import formSmX2 from '../../images/form/form-sm@-x2.png';
import formMdX1 from '../../images/form/form-md@-x1.png';
import formMdX2 from '../../images/form/form-md@-x2.png';
import formLgX1 from '../../images/form/form-lg@-x1.png';
import formLgX2 from '../../images/form/form-lg@-x2.png';
import formWebX1 from '../../images/form/contact.webp';
import formWebX2 from '../../images/form/contact@2x.webp';
const CollbackForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
    },
    validationSchema: schema,
  });

  return (
    <Wrapper>
      <Div>
          <picture>
            <source
               media="screen and (min-width: 1360px)"
                            srcset={`
                    ${formWebX1} 1x,
                    ${formWebX2} 2x
                  `}
                            type="image/webp"
                          />
            <source
              type="image/jpeg"
              media="screen and (min-width: 1360px)"
              srcSet={`
                    ${formLgX1} 1x,
                    ${formLgX2} 2x
                  `}
            />
            <source
              type="image/jpeg"
              media="screen and (min-width: 769px)"
              srcSet={`
                    ${formMdX1} 1x,
                    ${formMdX2} 2x
                  `}
            />
            <source
              type="image/jpeg"
              media="screen and (max-width: 767px)"

              srcSet={`
                    ${formSmX1} 1x,
                    ${formSmX2} 2x
                  `}
            />
            <Img
              type="image/web"
              srcSet={`
            ${formWebX1} 2x,
            ${formWebX2} 1x,
            `}
              src={formWebX1}
              alt="фото"
            />
          </picture></Div>
      
      <WrapperForm>
        <Form
          name="contact"
          action="/contact"
          method="POST"
          data-netlify="true"
          noValidate
          netlify
        >
          <input type="hidden" name="form-name" value="contact"></input>
          <input type="hidden" name="bot-field"></input>
          <Title>Request Callback</Title>
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

          <Button type="submit">Send</Button>
        </Form>
      </WrapperForm>
    </Wrapper>
  );
};

export default CollbackForm;
