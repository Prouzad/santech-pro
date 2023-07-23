const ButtonPrimary = ({
  children,
  onClick,
}: {
  children: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`w-[198px] text-[white] bg-primary active:bg-secondary-label text-body-14-regular flex justify-center items-center py-[16px] px-[24px] rounded-lg brand-button`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
