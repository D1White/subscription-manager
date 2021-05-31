import { FC } from 'react'

interface PopupInputProps {
  title: string
  warning: boolean
  warning_text?: string
  type?: string
}

const PopupInput: FC<PopupInputProps> = ({ title, warning, warning_text, type = 'text' }) => {
  return (
    <div className="popup-input">
      <span className="popup-input__text">{title}</span>
      <input type={type} className="popup-input__field" />
      {warning && <span className="popup-input__text_error">{warning_text ? warning_text : 'error'}</span>}
    </div>
  )
}

export default PopupInput
