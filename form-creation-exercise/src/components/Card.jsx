import { useNavigate } from "react-router";
import parse from 'html-react-parser';
import Button from "./Button";

export default function Card({ band }) {
  let navigate = useNavigate();

  return (
    <div className="card bg-white shadow-xl shadow-dark-blue/15 md:w-96 m-4">
      <div className="flex justify-center">
        <img
          className=""
          src={band.imgUrl}
          alt={`${band.name}'s band poster`}
        />
      </div>
      <div className="p-4">
        <div className="py-2">
          <h3 className="text-xl md:text-2xl">{band.name}</h3>
        </div>
        <div className="px-4 pb-2 description">
          <p>{band.date}</p>
          <p>{band.location}</p>
          {parse(band.description_blurb)}
        </div>
        <div className="flex w-full justify-end">
          <Button btnTitle="button" btnFunction={() => navigate(`/checkout/${band.id}`)} />
        </div>
      </div>
    </div>
  );
}
