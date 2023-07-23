const Footer = () => {
  const date = new Date();
  return (
    <div className="w-screen bg-primary flex flex-col justify-center items-center">
      <div className="w-[1104px]">
        <div className="h-[160px] flex justify-between text-[white] text-body-14-regular py-9">
          <div className="h-full flex flex-col justify-between">
            <div className="">Категории</div>
            <div className="">Популярные товары </div>
            <div className="">Бренды</div>
          </div>
          <div className="h-full flex flex-col justify-between">
            <div className="">Новинки</div>
            <div className="">Скидки</div>
            <div className="">Корзина</div>
          </div>
          <div className="h-full flex flex-col justify-between">
            <div className="">Оплата и доставка</div>
            <div className="">Наш адрес</div>
            <div className="">Контакты</div>
          </div>
          <div className="h-full flex flex-col justify-center">
            <div className=" text-inverter-label">Заказать доставку</div>
            <div className=" text-header-20-bold">+998 78 222-33-22</div>
            <div className=""></div>
          </div>
        </div>
        <div className="text-[white] text-body-12-regular py-6">
          © {date.getFullYear()} ООО «SantehPro»
        </div>
      </div>
    </div>
  );
};

export default Footer;
