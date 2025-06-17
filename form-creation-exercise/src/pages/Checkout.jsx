import { useParams } from "react-router";
import BandForm from "../components/form/BandForm";
import { useEffect, useState } from "react";
import BANDS from "../utils/Common";
import parse from 'html-react-parser';


export default function Checkout() {
  const [band, setBand] = useState(null);
  const [loading, setLoading] = useState(true);
  const { bandId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (bandId) {
      const selectedBand = BANDS.find((band) => band.id === bandId);
      setBand(selectedBand || null);
    }
    setLoading(false);
  }, [bandId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-8">
      <div className="heading">
        <h2 className="text-4xl">{band.name}</h2>
        <h3 className="text-lg">{band.date}</h3>
        <h4 className="text-lg">{band.location}</h4>
      </div>
      <div className="flex my-4 md:justify-center flex-col md:flex-row">
        <div className="checkout-description w-full md:w-1/2 flex">
          <div className="flex flex-col max-w-[600px]">
            <img
              className=""
              src="https://placehold.co/600x400/54176f/ffffff"
              alt={`Cindy and The Scintillators's band poster`}
            />
            <div className="p-4">
              <div className="px-4 pb-2 text-2xl description">
                {parse(band.description_blurb)}
              </div>
            </div>
          </div>
        </div>
        <div className="w-px h-[50vh] bg-medium-blue mx-4 hidden md:flex"></div>
        <div className="checkout-form w-full md:w-1/2 flex md:ml-6 flex-col">
          <h3 className="text-xl md:text-4xl">Select Tickets</h3>
          <BandForm band={band} />
        </div>
      </div>
    </div>
  );
}
