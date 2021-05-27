import React, { FC, useState } from 'react'
import hexToRGB from 'services/hexToRGB'
import { ReactComponent as DeleteIco } from 'assets/ico/delete.svg'
import { ReactComponent as EditIco } from 'assets/ico/edit-2.svg'

interface SubscriptionProps {
  service: string;
  price: number;
  date: number;
  color?: string;
  img?: string;
}

const Subscription: FC<SubscriptionProps> = ({ service, price, date, color, img }) => {
  const firstWord = service.slice(0, 1).toUpperCase()

  return (
    <div className="table__line">
      <div className="table__color" style={color ? { backgroundColor: hexToRGB(color, 0.25) } : {}}>
        {img ? <img src={img} alt="service" /> : <span style={{ color: color }}>{firstWord}</span>}
      </div>
      <div className="table__cell">
        <span className="text-m">{service}</span>
      </div>
      <div className="table__cell table__cell_center">
        <span className="text-m text_bold">{`$ ${price}`}</span>
      </div>
      <div className="table__cell table__cell_center">
        <span className="text-m">
          {date}
          <sub>th</sub>
        </span>
      </div>
      <div className="table__cell table__cell_buttons">
        <button className="table__btn">
          <EditIco />
        </button>
        <button className="table__btn">
          <DeleteIco />
        </button>
      </div>
    </div>
  )
}

export default Subscription
