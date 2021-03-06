import { useRef, FC, useState, useEffect } from 'react'

import { Portal, PopupInput, PopupColorInput } from 'components'
import { useRootStore } from 'store/RootStateContext'
import checkWarnings from 'services/checkWarnings'

import { ReactComponent as CloseIco } from 'assets/ico/close.svg'
import { PopupProps } from 'types/IPopup'

interface SubscriptionPopupProps extends PopupProps {
  id?: string
  roleCreate?: boolean
}

const SubscriptionPopup: FC<SubscriptionPopupProps> = ({ setPopupVisible, id, roleCreate }) => {
  const { subscriptionStore } = useRootStore()

  const popupRef = useRef<HTMLDivElement>(null)
  const popupBgRef = useRef<HTMLDivElement>(null)

  const [color, setColor] = useState('#f5f7f9')
  const [service, setService] = useState('')
  const [price, setPrice] = useState('')
  const [paymentDay, setPaymentDay] = useState('')
  const [warning, setWarning] = useState({
    service: false,
    price: false,
    paymentDay: false,
  })

  const closePopup = () => {
    setPopupVisible(false)
  }

  const popupOutsideClick = (e: any) => {
    if (e.target === popupBgRef.current && !document.querySelector('.popover')) {
      closePopup()
    }
  }

  useEffect(() => {
    if (service && (service.length < 3 || service.length > 20)) {
      setWarning({ ...warning, service: true })
    } else {
      setWarning({ ...warning, service: false })
    }
  }, [service])

  useEffect(() => {
    const priceFloat = parseFloat(price)

    if (priceFloat < 0) {
      setWarning({ ...warning, price: true })
    } else {
      setWarning({ ...warning, price: false })
    }
  }, [price])

  useEffect(() => {
    const paymentDayInt = parseInt(paymentDay)

    if (paymentDayInt < 1 && paymentDayInt > 31) {
      setWarning({ ...warning, paymentDay: true })
    } else {
      setWarning({ ...warning, paymentDay: false })
    }
  }, [paymentDay])

  const submit = () => {
    const priceFloat = parseFloat(price)
    const paymentDayInt = parseInt(paymentDay)

    if (!checkWarnings(warning) && service && priceFloat && paymentDayInt) {
      if (!roleCreate && id) {
        subscriptionStore.update(id, {
          name: service,
          price: priceFloat,
          payment_day: paymentDayInt,
          color: color,
        })
      } else {
        subscriptionStore.create({
          name: service,
          price: priceFloat,
          payment_day: paymentDayInt,
          color: color,
        })
      }
      setPopupVisible(false)
    }
  }

  return (
    <Portal>
      <div className="popup" onClick={popupOutsideClick} ref={popupBgRef}>
        <div className="popup__content" ref={popupRef}>
          <div className="popup__header">
            <span className="text-xs text_medium">{`${roleCreate ? 'Create' : 'Edit'} subscription`}</span>
            <button className="popup__btn_icon" aria-label="close" onClick={closePopup}>
              <CloseIco />
            </button>
          </div>

          <PopupColorInput color={color} setColor={setColor} />
          <PopupInput
            title="Service name"
            setText={setService}
            warning={warning.service}
            warning_text="Min 3 characters, max 20"
          />
          <PopupInput
            type="number"
            title="Price (USD/month)"
            setText={setPrice}
            warning={warning.price}
            warning_text="More than zero"
          />
          <PopupInput
            type="number"
            title="Payment day"
            setText={setPaymentDay}
            warning={warning.paymentDay}
            warning_text="Incorrect day"
          />

          <button className="popup__btn" onClick={submit}>
            {roleCreate ? 'Create' : 'Save'}
          </button>
        </div>
      </div>
    </Portal>
  )
}

export default SubscriptionPopup
