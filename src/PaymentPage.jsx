import CheckoutCard from "./CheckoutCard";

const PaymentPage = () => {
  return (
    <main className="px-[24px] xl:px-[160px] pb-[64px]]">
      <h1 className="text-[20px] font-[700] py-[16px] leading-[24px] xl:pb-0">
        Payment
      </h1>
      <div className="xl:flex xl:flex-row-reverse xl:justify-between gap-[300px]">
        <CheckoutCard />
        <form>
          <div className="text-[#8A8685] text-[14px] xl:w-[360px]">
            <section>
              <p className="text-[16px] py-[16px]">
                Please select a payment method.
              </p>
              <div className="xl:flex text-center">
                <label className="flex justify-center items-center p-[28px] border-[0.5px] border-[#9D9996] rounded-t-[4px] cursor-pointer hover:bg-gray-200 h-[48px] xl:rounded-tr-none xl:rounded-l-[4px] xl:py-[8px] xl:px-[4px]">
                  <input
                    type="radio"
                    name="shipping"
                    value="ping"
                    className="hidden peer"
                  />
                  <span className="peer-checked:text-black peer-checked:font-[700] xl:w-[132px]">
                    Ping (Pay instantly by card)
                  </span>
                </label>
                <label className="flex justify-center items-center p-[28px] border-[0.5px] border-[#9D9996] cursor-pointer hover:bg-gray-200 h-[48px] xl:py-[8px] xl:px-[4px]">
                  <input
                    type="radio"
                    name="shipping"
                    value="afterpay"
                    className="hidden peer"
                  />
                  <span className="peer-checked:text-black peer-checked:font-[700] xl:w-[132px]">
                    Afterpay
                  </span>
                </label>
                <label className="flex justify-center items-center p-[28px] rounded-b-[4px] border-[0.5px] border-[#9D9996] cursor-pointer hover:bg-gray-200 h-[48px] xl:py-[8px] xl:px-[4px]">
                  <input
                    type="radio"
                    name="shipping"
                    value="nz-bank-deposit"
                    className="hidden peer"
                  />
                  <span className="peer-checked:text-black peer-checked:font-[700] xl:w-[132px]">
                    NZ Bank Deposit
                  </span>
                </label>
                <label className="flex justify-center items-center p-[28px] rounded-b-[4px] border-[0.5px] border-[#9D9996] cursor-pointer hover:bg-gray-200 h-[48px] xl:py-[8px] xl:px-[4px]">
                  <input
                    type="radio"
                    name="shipping"
                    value="cash"
                    className="hidden peer"
                  />
                  <span className="peer-checked:text-black peer-checked:font-[700] xl:w-[120px] ">
                    Cash
                  </span>
                </label>
              </div>
            </section>
            <section className="my-[20px] flex flex-col gap-[24px] xl:flex-row xl:w-[580px]">
              <div className="leading-[16px] xl:w-[50%]">
                <img src="/ping-logo.png" alt="ping logo" />
                <p className="my-[8px]">
                  Pay instantly by card, Ping balance or saved bank account.
                </p>
                <a className="text-[#3E74CB]" href="/">
                  What’s Ping?
                </a>
              </div>
              <div className="leading-[16px]">
                <img src="/afterpay-logo.png" alt="ping logo" />
                <p className="my-[8px]">
                  Four fortnightly interest-free payments.{" "}
                </p>
                <a className="text-[#3E74CB]" href="/">
                  What’s Afterpay?
                </a>
              </div>
            </section>
            <section>
              <label className="text-[#8A8685] text-[14px] block mt-[16px] ">
                Cardholder name
                <input
                  className="w-full border border-[#D9D9D9] rounded-[4px] h-[48px] mt-[8px] px-[8px]"
                  type="text"
                />
              </label>
              <label className="text-[#8A8685] text-[14px] block mt-[16px] ">
                Card number
                <input
                  className="w-full border border-[#D9D9D9] rounded-[4px] h-[48px] mt-[8px] px-[8px]"
                  type="text"
                />
              </label>
              <label className="text-[#8A8685] text-[14px] block mt-[16px] ">
                Expiry
                <input
                  className="w-full border border-[#D9D9D9] rounded-[4px] h-[48px] mt-[8px] px-[8px]"
                  type="text"
                />
              </label>
              <label className="text-[#8A8685] text-[14px] block mt-[16px] ">
                CSC
                <input
                  className="w-full border border-[#D9D9D9] rounded-[4px] h-[48px] mt-[8px] px-[8px]"
                  type="text"
                />
              </label>
            </section>
          </div>
        </form>
      </div>
      <div className="xl:flex xl:flex-row-reverse xl:justify-between pt-[12px]">
        <div className="py-[16px]">
          <p className="text-[20px] font-[700] text-center ">Total $29</p>
        </div>
        <div className="xl:pt-[16px]">
          <button className="mr-[16px] text-[16px] text-[#FFFFFF] bg-[#3E75CB] rounded-[5px] w-full xl:w-auto xl:px-[12px] h-[38px] mb-[12px] xl:h-[48px]">
            Continue to shipping
          </button>
          <button className="text-[16px] text-[#3E75CB] border border-[#3E75CB] rounded-[5px] w-full xl:w-auto xl:px-[12px] h-[38px] xl:h-[48px]">
            Go back to listing
          </button>
        </div>
      </div>
    </main>
  );
};
export default PaymentPage;
