const ButtonBrand = ({
  children,
  onClick,
}: {
  children: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`w-[240px] text-black bg-brand-controls active:bg-brand-interaction text-body-14-regular flex justify-center items-center py-[10px] rounded-lg brand-button`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonBrand;
