import Image from 'next/image'
import React from 'react'
import { Form } from 'react-bootstrap'

const InputPassword = (props) => {
  const [is_visible, set_is_visible] = React.useState(false)

  const visibilityHandler = () => {
    set_is_visible(!is_visible)
  }

  return (
    <Form.Group className={props.classNameFormGroup} controlId={props.name}>
      <Form.Label>
        {props.label} {props.required && <span className="c-ff4a4a">*</span>}
      </Form.Label>

      <div className="position-relative">
        <Form.Control
          type={is_visible ? 'text' : 'password'}
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
        <div
          role="button"
          onClick={visibilityHandler}
          style={{
            position: 'absolute',
            top: 10,
            height: 20,
            right: props.errors[props.name] ? 34 : 12,
            cursor: 'pointer',
          }}
        >
          <Image
            src={`/icons/eye-${is_visible ? 'on' : 'off'}.png`}
            alt="eye-on"
            width={20}
            height={20}
          />
        </div>
        <Form.Control.Feedback type={`invalid`}>{props.errors[props.name]}</Form.Control.Feedback>
      </div>
    </Form.Group>
  )
}

export default InputPassword
