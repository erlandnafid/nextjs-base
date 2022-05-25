import Image from 'next/image'
import React from 'react'
import { Button as Btn, Spinner } from 'react-bootstrap'

const Button = (props) => {
  return (
    <Btn
      type={props.type || 'button'}
      variant={props.variant || 'primary'}
      className={props.className}
      onClick={props.onClick}
      ref={props.custom_ref}
      disabled={props.disable || false}
      size={props.size}
      aria-label={props['aria-label']}
    >
      {props.loading ? (
        <Spinner as={`span`} animation={`border`} size={`sm`} role={`status`} variant={`light`} />
      ) : (
        <div className="d-flex-middle-center">
          {props.iconStart && (
            <>
              <Image src={props.iconStart} alt={props.iconStart} width={28} height={28} />
              <div className="ms-16"></div>
            </>
          )}
          {props.label}
          {props.iconEnd && (
            <>
              <div className="ms-16"></div>
              <Image src={props.iconEnd} alt={props.iconEnd} />
            </>
          )}
        </div>
      )}
    </Btn>
  )
}

export default Button
