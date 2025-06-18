import Card from "../components/Card";
import BANDS from "../utils/Common";

export default function BandSelection() {
  return (
    <div id="band-seleciton" className="flex flex-col flex-wrap md:flex-row justify-center items-start">
      {BANDS?.map((band) => {
        return <Card key={band.id} band={band} />;
      })}
    </div>
  );
}
