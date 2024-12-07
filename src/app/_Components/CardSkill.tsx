type Props = {
  icon: string;
  iconColor: string;
  bgColor: string;
  borderColor: string;
};

const CardSkill = ({ icon, iconColor, bgColor, borderColor }: Props) => {
  return (
    <div
      className={`flex flex-col items-center py-4 px-12 border-2 ${borderColor} rounded-lg ${bgColor} shadow-md shadow-lightgreen transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lightgreen`}
    >
      <i className={`bx ${icon} text-8xl ${iconColor}`}></i>
    </div>
  );
};

export default CardSkill;
