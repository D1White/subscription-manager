import { ChangeEvent, Dispatch, FC } from 'react'
import { useDebouncedCallback } from 'use-debounce'

interface AuthInputProps {
  title: string
  warning: boolean
  warning_text?: string
  type?: string
  setText: Dispatch<string>
}

const AuthInput: FC<AuthInputProps> = ({ title, warning, warning_text, type = 'text', setText }) => {
  const debounced = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }, 500)

  return (
    <div className="auth-input">
      <span className="auth-input__text">{title}</span>
      <input type={type} className="auth-input__field" onChange={debounced} />
      {warning && <span className="auth-input__text_error">{warning_text ? warning_text : 'error'}</span>}
    </div>
  )
}

export default AuthInput
