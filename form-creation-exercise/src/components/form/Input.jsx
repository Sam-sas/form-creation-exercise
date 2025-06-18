export default function Input({placeholder, name, size}) {
  return (
    <div className="flex justify-between">
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        required
        className={`border-2 rounded-full px-4 valid:border-green-500 invalid:border-red-500 px-6 ${size} text-lg h-16 md:h-12 lg:h-16`}
      />
    </div>
  );
}
