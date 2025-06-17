import { useState } from "react";
import Button from "../Button";
import FormSection from "./FormSection";

function BandForm({ band }) {
  const [amountTotal, setAmountTotal] = useState(null);
  if (band) {
    const sendData = (e) => {
      e.preventDefault();

      const paymentData = new FormData(e.target);
      console.log("sending data now...");
      for (let [key, value] of paymentData.entries()) {
        console.log(`${key}: ${value}`);
      }
    };

    return (
      <div className=" max-w-[600px]">
        <form onSubmit={sendData}>
          {band?.ticketTypes.map((ticketType, index) => {
            return (
              <FormSection key={index} ticketType={ticketType} />
            )
          })}
          <hr />
          <div className="flex justify-between mt-8">
            <h3 className="text-2xl">Total</h3>
            <p className="text-2xl">$100.00</p>
          </div>
          <div className="mt-8 flex justify-end">
            <Button btnTitle="Get Tickets" btnType="submit" />
          </div>
        </form>
      </div>
    );
  }

  if (!band) {
    return (
      <div>
        <h1 className="text-4xl">form form form</h1>
      </div>
    );
  }
}

export default BandForm;
