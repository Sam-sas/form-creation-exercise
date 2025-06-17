function BandForm({ band }) {
  return (
    <div>
      <h1 className="text-4xl">{band.name}</h1>
      {band.ticketTypes.map((ticket) => (
        <p>
          {ticket.name} - {ticket.description}
        </p>
      ))}
    </div>
  );
}

export default BandForm;
