const CheckoutCard = () => {
  return (
    <div className="rounded-[2px] w-full bg-[#F6F5F4] flex gap-[8px] mb-[28px]">
      <img
        className="bg-[#E7E6E3] w-[148px] xl:w-[190px] h-[112px] xl:h-[142px]"
        src="/"
        alt="image of checkout item"
      />
      <section className="text-[12px] grid py-[8px]">
        <div>
          <p className="text-[#8A8685] w-[140px] leading-[16px]">
            North Shore, Auckland Closes: 11hrs
          </p>
          <p className="font-[700]">Modern Office Desk</p>
        </div>
        <div className="leading-[16px]">
          <p className="text-[#8A8685]">No reserve, no bid</p>
          <p className="text-[16px] font-[700]">$29</p>
        </div>
      </section>
    </div>
  );
};
export default CheckoutCard;
