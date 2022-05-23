import { Formik } from 'formik'
import * as yup from 'yup'
import { Form } from 'react-bootstrap'
import Button from '@comps/ui/Button'
import Input from '@comps/ui/Input'
import InputPassword from '@comps/ui/InputPassword'

export default function Home() {
  const onLogin = (values) => {
    console.log(values)
  }

  return (
    <div>
      <h1>Login</h1>

      <div style={{ width: 500 }}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={yup.object().shape({
            email: yup.string().email().required('Field is required'),
            password: yup.string().min(8).required('Field is required'),
          })}
          onSubmit={onLogin}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Input
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                touched={touched}
                errors={errors}
              />

              <InputPassword
                name="password"
                label="Password"
                value={values.password}
                onChange={handleChange}
                touched={touched}
                errors={errors}
                classNameFormGroup="mt-20"
              />

              <Button type="submit" text="Simpan" className="mt-20" />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
