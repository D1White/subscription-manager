import { ChangeEvent, Dispatch, FC } from 'react'
import { useDebouncedCallback } from 'use-debounce'

interface PopupInputProps {
  title: string
  warning: boolean
  warning_text?: string
  type?: string
  setText: Dispatch<string>
}

const PopupInput: FC<PopupInputProps> = ({ title, warning, warning_text, type = 'text', setText }) => {
  const debounced = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }, 300)

  return (
    <div className="popup-input">
      <span className="popup-input__text">{title}</span>
      <input
        type={type}
        className={`popup-input__field ${warning ? 'popup-input__field_error' : ''}`}
        onChange={debounced}
      />
      {warning && <span className="popup-input__text_error">{warning_text ? warning_text : 'error'}</span>}
    </div>
  )
}

export default PopupInput
