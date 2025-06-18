import { useState } from "react";
import { currencyFormat } from "../../utils/Common";

export default function TotalSection({ticketType, calculateQuantity}) {
  const [quantity, setQuantity] = useState('');

  const updateQuantity = (e) => {
    let newQuantity = e.target.value;
    const parsed = parseInt(newQuantity, 10);

    if (newQuantity === '') {
      setQuantity('');
      calculateQuantity(ticketType.type, 0);
      return;
    };

    newQuantity = isNaN(parsed) ? 0 : Math.max(0, Math.min(10, parsed));
    setQuantity(newQuantity);

    calculateQuantity(ticketType.type, newQuantity);
  };

  return (
    <div className="flex flex-row justify-between my-8">
      <div className="mr-8 text-sm font-medium text-gray-900 dark:text-white">
        <label htmlFor="generalAdmin" className="text-2xl md:text-xl lg:text-2xl">
          {ticketType.name}
        </label>
        <p className="text-lg md:text-sm lg:text-lg my-2 max-w-108">{ticketType.description}</p>
        <p className="text-lg my-2">{currencyFormat(ticketType.cost)}</p>
      </div>
      <input
        type="number"
        name={ticketType.type}
        placeholder="0"
        min="0"
        max="10"
        value={quantity}
        onChange={updateQuantity}
        required
        className="border-2 rounded-full px-4 valid:border-green-500 invalid:border-red-500 px-6 w-48 text-lg md:h-12 lg:h-auto max-h-16"
      />
    </div>
  );
}
