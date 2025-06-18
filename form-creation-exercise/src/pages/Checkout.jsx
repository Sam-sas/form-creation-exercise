import { useParams } from "react-router";
import BandForm from "../components/form/BandForm";
import { useEffect, useState } from "react";
import BANDS, { readableDate } from "../utils/Common";
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
    <div className="lg:max-w-[80vw] xl:mx-8">
      <div className="heading mx-2 flex flex-col md:justify-start">
        <h2 className="text-4xl">{band.name}</h2>
        <h3 className="text-lg">{readableDate(band.date)}</h3>
        <h4 className="text-lg">{band.location}</h4>
      </div>
      <div className="flex my-8 md:my-4 md:justify-center flex-col md:flex-row mx-8">
        <div className="checkout-description w-full md:w-1/2 flex">
          <div className="flex flex-col max-w-[600px]">
            <img
              src={band.imgUrl}
              alt={`${band.name}'s band poster`}
            />
            <div className="py-4">
              <div className="pb-2 text-xl description">
                {parse(band.description_blurb)}
              </div>
            </div>
          </div>
        </div>
        <div className="w-px h-[75vh] bg-medium-blue mx-4 hidden md:flex"></div>
        <hr className="mb-8 border-medium-blue md:hidden" />
        <div className="checkout-form w-full md:w-1/2 flex md:ml-6 flex-col">
          <h3 className="text-2xl lg:text-4xl">Select Tickets</h3>
          <BandForm band={band} />
        </div>
      </div>
    </div>
  );
}
