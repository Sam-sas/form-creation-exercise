import { useNavigate } from "react-router";
import parse from 'html-react-parser';
import Button from "./Button";
import { readableDate } from "../utils/Common";

export default function Card({ band }) {
  let navigate = useNavigate();

  return (
    <div className="card flex flex-col justify-between rounded-sm bg-white shadow-xl shadow-dark-blue/10 md:w-96 lg:h-150 m-6 mb-12">
      <div className="flex justify-center">
        <img
          className="rounded-sm"
          src={band.imgUrl}
          alt={`${band.name}'s band poster`}
        />
      </div>
      <div className="p-4">
        <div className="py-2">
          <h3 className="text-xl md:text-2xl">{band.name}</h3>
        </div>
        <div className="px-4 pb-2 description">
          <p>{readableDate(band.date)}</p>
          <p>{band.location}</p>
          {parse(band.description_blurb)}
        </div>
        <div className="flex w-full justify-end">
          <Button btnTitle="Get Tickets" btnFunction={() => navigate(`/checkout/${band.id}`)} />
        </div>
      </div>
    </div>
  );
}
