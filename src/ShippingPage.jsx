import CheckoutCard from "./CheckoutCard";

const ShippingPage = () => {
  return (
    <main className="px-[24px] xl:px-[160px] pb-[64px]]">
      <h1 className="text-[20px] font-[700] py-[16px] leading-[24px] xl:pb-0">
        Shipping
      </h1>
      <div className="xl:flex xl:flex-row-reverse xl:justify-between gap-[300px]">
        <CheckoutCard />
        <form>
          <label className="text-[#8A8685] text-[14px] block mt-[16px] ">
            Please enter your address to calculate shipping costs
            <input
              className="w-full border border-[#D9D9D9] rounded-[4px] h-[48px] mt-[8px] px-[8px]"
              type="text"
            />
          </label>

          <div className="text-[#8A8685] text-[14px] xl:w-[360px]">
            <p className="text-[16px] py-[16px]">
              Please select a shipping or pick-up option.
            </p>
            <label className="flex justify-between items-center p-[8px] border-[0.5px] border-[#9D9996] rounded-t-[4px] cursor-pointer hover:bg-gray-200 h-[48px] ">
              <input
                type="radio"
                name="shipping"
                value="standard"
                className="hidden peer"
              />
              <span className="peer-checked:text-black peer-checked:font-[700]">
                Courier with NZ (2-3 working days)
              </span>

              <span className="peer-checked:text-black peer-checked:font-[700]">
                $20.00
              </span>
            </label>
            <label className="flex justify-between items-center p-[8px] border-[0.5px] border-[#9D9996] cursor-pointer hover:bg-gray-200 h-[48px]">
              <input
                type="radio"
                name="shipping"
                value="express"
                className="hidden peer"
              />
              <span className="peer-checked:text-black peer-checked:font-[700]">
                Overnight Courier with NZ (2-3 working days)
              </span>

              <span className="peer-checked:text-black peer-checked:font-[700]">
                $50.00
              </span>
            </label>
            <label className="flex justify-between items-center p-[8px] rounded-b-[4px] border-[0.5px] border-[#9D9996] cursor-pointer hover:bg-gray-200 h-[48px]">
              <input
                type="radio"
                name="shipping"
                value="pickup"
                className="hidden peer"
              />
              <span className="peer-checked:text-black peer-checked:font-[700]">
                Pick-up from seller
              </span>

              <span className="peer-checked:text-black peer-checked:font-[700]">
                Free
              </span>
            </label>
          </div>
        </form>
      </div>
      <div className="xl:flex xl:flex-row-reverse xl:justify-between pt-[12px]">
        <div className="py-[16px]">
          <p className="text-[20px] text-center ">Total before shipping $29</p>
          <p className="text-[20px] font-[700] text-center ">
            Total with shipping $49
          </p>
        </div>
        <div className="xl:pt-[16px]">
          <button className="mr-[16px] text-[16px] text-[#FFFFFF] bg-[#3E75CB] rounded-[5px] w-full xl:w-auto xl:px-[12px] h-[38px] mb-[12px] xl:h-[48px]">
            Finalise payment and shipping
          </button>
          <button className="text-[16px] text-[#3E75CB] border border-[#3E75CB] rounded-[5px] w-full xl:w-auto xl:px-[12px] h-[38px] xl:h-[48px]">
            Go back
          </button>
        </div>
      </div>
    </main>
  );
};
export default ShippingPage;
