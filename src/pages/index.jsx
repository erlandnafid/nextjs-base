import { Formik } from 'formik'
import * as yup from 'yup'
import { Form } from 'react-bootstrap'
import Button from '@comps/commons/Button'
import Input from '@comps/commons/Input'
import http from '@services/endpoints/http'
import classes from './index.module.scss'
import React from 'react'
import TodoList from '@comps/pages/home/TodoList'

export default function Home() {
  const [todos, set_todos] = React.useState([])

  const onAddToDo = async (values) => {
    set_todos((prev) => [...prev, { name: values.name }])

    if (!todos) {
      const addTodo = await http.todoPost(values)

      if (addTodo.status === 'OK') {
        // Do something
      }
    }
  }

  return (
    <div className={classes.container}>
      <h1 className="fs-20 fs-lg-30">Todos</h1>
      <div className="mt-20 mt-lg-30">
        <Formik
          initialValues={{
            name: '',
          }}
          validationSchema={yup.object().shape({
            name: yup.string().required('Field is required'),
          })}
          onSubmit={onAddToDo}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                label="Name"
                value={values.name}
                onChange={handleChange}
                touched={touched}
                errors={errors}
                aria-label="input-name"
              />

              <Button 
              
                  type="submit" label="Submit" 
                  
                  
                  
                  
                  className="mt-20" aria-label="submit-todo" />
            </Form>
          )}
        </Formik>
      </div>

      <ul className="mt-50">
        <TodoList todos={todos} />
      </ul>
    </div>
  )
}
