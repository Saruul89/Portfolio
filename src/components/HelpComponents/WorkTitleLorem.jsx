export const WorkTitleLorem = ({ text }) => {
  return (
    <div>
      <p className="text-[20px] text-gray-900 font-semibold pb-6 dark:text-[#F9FAFB]">
        {text}
      </p>
      <div className="text-[16px] text-gray-400 list-disc font-extralight dark:text-[#D1D5DB]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
        laboriosam perferendis exercitationem! Sit temporibus adipisci natus
        error. Deserunt praesentium, quaerat, illum cumque quod reprehenderit et
        suscipit aut omnis dolore provident.
      </div>
    </div>
  );
};
