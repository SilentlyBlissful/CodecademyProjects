import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectCard } from './cardsSlice';

export default function Card({ id }) {
  const cards = useSelector(selectCard);
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={ (e) => setFlipped(!flipped) }>
        { flipped ? card.back : card.front }
      </button>
    </li>
  );
}
