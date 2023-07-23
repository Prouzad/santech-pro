const ButtonItems = ({
  children,
  onClick,
}: {
  children: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`w-[240px] text-black bg-secondary-background active:bg-stroke-background hover:bg-hover-button text-body-14-regular flex justify-center items-center py-[10px] rounded-lg brand-button`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonItems;
