import { useRef, FC, useState, useEffect } from 'react'

import { Portal, PopupInput } from 'components'
import { useRootStore } from 'store/RootStateContext'
import checkWarnings from 'services/checkWarnings'

import { ReactComponent as CloseIco } from 'assets/ico/close.svg'
import { PopupProps } from 'types/IPopup'

const UserPopup: FC<PopupProps> = ({ setPopupVisible }) => {
  const { userStore } = useRootStore()

  const popupRef = useRef<HTMLDivElement>(null)
  const popupBgRef = useRef<HTMLDivElement>(null)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [warning, setWarning] = useState({
    username: false,
    email: false,
    password: false,
    password2: false,
  })

  const closePopup = () => {
    setPopupVisible(false)
  }

  const popupOutsideClick = (e: any) => {
    if (e.target === popupBgRef.current && !document.querySelector('.popover')) {
      closePopup()
    }
  }

  const submit = () => {
    if (!checkWarnings(warning) && username && email && password && password2) {
      userStore.updateUser(username, email, password)
      setPopupVisible(false)
    }
  }

  useEffect(() => {
    if (username && (username.length < 3 || username.length > 20)) {
      setWarning({ ...warning, username: true })
    } else {
      setWarning({ ...warning, username: false })
    }
  }, [username])

  useEffect(() => {
    const REGEXP =
      /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm // eslint-disable-line

    if (email && (email.length < 3 || email.length > 50 || !REGEXP.test(email))) {
      setWarning({ ...warning, email: true })
    } else {
      setWarning({ ...warning, email: false })
    }
  }, [email])

  useEffect(() => {
    if (password && (password.length < 3 || password.length > 50)) {
      setWarning({ ...warning, password: true })
    } else {
      setWarning({ ...warning, password: false })
    }
  }, [password])

  useEffect(() => {
    if (password && password2 && password !== password2) {
      setWarning({ ...warning, password2: true })
    } else {
      setWarning({ ...warning, password2: false })
    }
  }, [password, password2])

  return (
    <Portal>
      <div className="popup" onClick={popupOutsideClick} ref={popupBgRef}>
        <div className="popup__content" ref={popupRef}>
          <div className="popup__header">
            <span className="text-xs text_medium">Edit user</span>
            <button className="popup__btn_icon" aria-label="close" onClick={closePopup}>
              <CloseIco />
            </button>
          </div>

          <PopupInput
            title="Username"
            setText={setUsername}
            warning={warning.username}
            warning_text="Min 3 characters, max 20"
          />
          <PopupInput title="Email" warning={warning.email} setText={setEmail} warning_text="Incorrect email" />
          <PopupInput
            title="Password"
            warning={warning.password}
            type="password"
            setText={setPassword}
            warning_text="Min 3 characters"
          />
          <PopupInput
            title="Repeat password"
            type="password"
            setText={setPassword2}
            warning={warning.password2}
            warning_text="Password mismatch"
          />

          <button className="popup__btn" onClick={submit}>
            Save
          </button>
        </div>
      </div>
    </Portal>
  )
}

export default UserPopup
