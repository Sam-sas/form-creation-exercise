import { useState } from "react";
import Button from "../Button";
import TotalSection from "./TotalSection";
import { currencyFormat } from "../../utils/Common";
import Input from "./Input";

function BandForm({ band }) {
  const [amountTotal, setAmountTotal] = useState({});

  if (band) {
    const sendData = (e) => {
      e.preventDefault();

      const paymentData = new FormData(e.target);
      console.log("sending data now...");
      for (let [key, value] of paymentData.entries()) {
        console.log(`${key}: ${value}`);
      }
    };

    const updateTotal = (type, quantity) => {
      setAmountTotal((prev) => {
        const newQuantities = { ...prev, [type]: quantity };
        return newQuantities;
      });
    };

    const totalCents = band.ticketTypes.reduce((sum, ticket) => {
      const quantity = amountTotal[ticket.type] || 0;
      return sum + quantity * ticket.cost;
    }, 0);

    return (
      <div className="max-w-[600px]">
        <form onSubmit={sendData}>
          {band?.ticketTypes.map((ticketType, index) => {
            return (
              <TotalSection
                key={index}
                ticketType={ticketType}
                calculateQuantity={updateTotal}
              />
            );
          })}
          <hr className="border-medium-blue" />
          <div>
            <div className="flex justify-between mt-8">
              <h3 className="text-2xl">Total</h3>
              <p className="text-2xl">{currencyFormat(totalCents)}</p>
            </div>
            <div className="mt-8">
              <div className="flex justify-between">
                <Input placeholder="First Name" name="first_name" size="w-auto md:w-40 lg:w-auto" />
                <Input placeholder="last Name" name="last_name" size="w-auto md:w-40 lg:w-auto" />
              </div>
              <div className="mt-4">
                <Input placeholder="Address" name="address" size="w-full" />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl">Payment Details</h3>
                <div className="my-4">
                  <Input placeholder="0000 0000 0000 0000" name="card_number" size="w-full" />
                </div>
                <div className="flex justify-between">
                  <Input placeholder="MM/YY" name="expiration_date" size="w-auto md:w-40 lg:w-auto" />
                  <Input placeholder="CVV" name="security" size="w-auto md:w-40 lg:w-auto" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Button btnTitle="Get Tickets" btnType="submit" />
          </div>
        </form>
      </div>
    );
  }

  if (!band) {
    return <div>Missing Band</div>;
  }
}

export default BandForm;
