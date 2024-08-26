export const AboutButton = ({ text }) => {
  return (
    <button
      className="w-auto max-w-max h-[28px] justify-center items-center rounded-xl bg-[#E5E7EB] leading-5
    font-medium text-sm text-gray-600 px-5 py-1 dark:bg-[#374151] dark:text-[#D1D5DB]"
    >
      {text}
    </button>
  );
};
