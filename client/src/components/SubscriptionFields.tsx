import { useState, useEffect, FC } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { HexColorPicker } from 'react-colorful'

import Popover from 'components/HOCs/Popover'
import colorTone from 'services/colorTone'
import checkWarnings from 'services/checkWarnings'
import { useRootStore } from 'store/RootStateContext'

import { ReactComponent as SubmitIco } from 'assets/ico/submit.svg'
import { ReactComponent as CloseIco } from 'assets/ico/close-2.svg'
import { ReactComponent as ColorLensIco } from 'assets/ico/color-lens.svg'

interface SubscriptionFieldsProps {
  hide: Function
}

const SubscriptionFields: FC<SubscriptionFieldsProps> = ({ hide }) => {
  const { subscriptionStore } = useRootStore()

  const [color, setColor] = useState('#EEEEEE')
  const [popoverOpen, setPopoverOpen] = useState(false)

  const [service, setService] = useState('')
  const [price, setPrice] = useState(0)
  const [paymentDay, setPaymentDay] = useState(0)
  const [warning, setWarning] = useState({
    service: false,
    price: false,
    paymentDay: false,
  })

  const [referenceRef, setReferenceRef] = useState<HTMLButtonElement | null>(null)

  const openPopover = () => {
    setPopoverOpen(true)
  }

  const closePopover = () => {
    setPopoverOpen(false)
  }

  const debounce = useDebouncedCallback((value: string, field: string) => {
    switch (field) {
      case 'color':
        setColor(value)
        break
      case 'service':
        setService(value)
        break
      case 'price':
        setPrice(parseFloat(value))
        break
      case 'paymentDay':
        setPaymentDay(parseInt(value))
        break
      default:
        break
    }
  }, 300)

  useEffect(() => {
    if (service && (service.length < 3 || service.length > 20)) {
      setWarning({ ...warning, service: true })
    } else {
      setWarning({ ...warning, service: false })
    }
  }, [service]) // eslint-disable-line

  useEffect(() => {
    if (price < 0) {
      setWarning({ ...warning, price: true })
    } else {
      setWarning({ ...warning, price: false })
    }
  }, [price]) // eslint-disable-line

  useEffect(() => {
    if (paymentDay < 1 && paymentDay > 31) {
      setWarning({ ...warning, paymentDay: true })
    } else {
      setWarning({ ...warning, paymentDay: false })
    }
  }, [paymentDay]) // eslint-disable-line

  const submit = () => {
    if (!checkWarnings(warning) && service && price && paymentDay) {
      subscriptionStore.create({ name: service, price, payment_day: paymentDay, color })
      hide()
    }
  }

  return (
    <div className="table__line table__line_fields">
      <button
        className="table__color table__color_input"
        style={{ backgroundColor: color }}
        onClick={openPopover}
        ref={setReferenceRef}
      >
        <ColorLensIco className={colorTone(color) ? 'icon_light' : ''} />
      </button>
      {popoverOpen && (
        <Popover reference={referenceRef} onClose={closePopover}>
          <HexColorPicker color={color} onChange={(e) => debounce(e, 'color')} />
        </Popover>
      )}
      <div className="table__cell table__cell_column">
        <input
          type="text"
          className={`table__input ${warning.service ? 'table__input_error' : ''}`}
          onChange={(e) => debounce(e.target.value, 'service')}
        />
        {warning.service && <span className="popup-input__text_error">error</span>}
      </div>
      <div className="table__cell table__cell_column-center">
        <input
          type="number"
          min={0.1}
          onChange={(e) => debounce(e.target.value, 'price')}
          className={`table__input table__input_small ${warning.price ? 'table__input_error' : ''}`}
        />
        {warning.price && <span className="popup-input__text_error">error</span>}
      </div>
      <div className="table__cell table__cell_column-center">
        <input
          type="number"
          min={1}
          max={31}
          onChange={(e) => debounce(e.target.value, 'paymentDay')}
          className={`table__input table__input_small ${warning.paymentDay ? 'table__input_error' : ''}`}
        />
        {warning.paymentDay && <span className="popup-input__text_error">error</span>}
      </div>
      <div className="table__cell table__cell_buttons table__cell_buttons_visible">
        <button className="table__btn" onClick={submit}>
          <SubmitIco />
        </button>
        <button className="table__btn" onClick={() => hide()}>
          <CloseIco />
        </button>
      </div>
    </div>
  )
}

export default SubscriptionFields
