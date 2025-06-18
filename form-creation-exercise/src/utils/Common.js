import skaBand from "../band-json/ska-band.json";
import kpopBand from "../band-json/kpop-band.json";
import punkBand from "../band-json/punk-band.json";
import { format } from "date-fns";

const BANDS = [skaBand, kpopBand, punkBand];

export default BANDS;

export const readableDate = (timestamp) => {
    const date = new Date(timestamp);
    const readabbleDate = format(date, "cccc, LLLL eo 'at' ha")
    return readabbleDate;
}

export const currencyFormat = (pennyAmount) => {
   const usCost = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
   });
   
   return usCost.format(pennyAmount / 100);
};

