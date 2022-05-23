import React from 'react'
import { Form } from 'react-bootstrap'

const Input = (props) => {
  return (
    <Form.Group className={props.classNameFormGroup} controlId={props.name}>
      {props.label && (
        <Form.Label>
          {props.label} {props.required && <span className="c-ff4a4a">*</span>}
        </Form.Label>
      )}
      <Form.Control
        type={props.type || 'text'}
        className={props.className}
        size={props.size}
        placeholder={props.placeholder}
        disabled={props.disabled}
        readOnly={props.readOnly}
        value={props.value}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        isInvalid={props.touched[props.name] && Boolean(props.errors[props.name])}
        autoComplete={props.autoComplete || 'off'}
      />
      <Form.Control.Feedback type={`invalid`}>{props.errors[props.name]}</Form.Control.Feedback>
    </Form.Group>
  )
}

export default Input
