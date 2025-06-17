export default function FormSection({ticketType}) {
  return (
    <div className="flex flex-row justify-between my-8">
      <div className="mr-8 text-sm font-medium text-gray-900 dark:text-white">
        <label htmlFor="generalAdmin" className="text-2xl">
          {ticketType.name}
        </label>
        <p className="text-lg my-2 max-w-108">{ticketType.description}</p>
        <p className="text-lg my-2">{ticketType.cost}</p>
      </div>
      <input
        type="number"
        name={ticketType.type}
        placeholder="1"
        min="1"
        max="10"
        required
        className="border-2 rounded-full px-4 valid:border-green-500 invalid:border-red-500 px-6 w-48 text-lg max-h-16"
      />
    </div>
  );
}
