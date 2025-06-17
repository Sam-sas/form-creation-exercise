export default function Button({ btnTitle, btnFunction, btnType }) {
  return (
    <button
      type={btnType}
      onClick={btnFunction}
      className="cursor-pointer text-xl lg:text-2xl rounded-full px-6 py-2 m-2 border-4 flex items-center border-dark-blue bg-dark-blue text-white"
    >
      {btnTitle}
    </button>
  );
}
