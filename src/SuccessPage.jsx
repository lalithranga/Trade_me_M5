import CheckoutCard from "./CheckoutCard";

const SuccessPage = () => {
  return (
    <main className="px-[24px] pb-[64px]">
      <h1 className="text-[20px] font-[700] py-[16px] leading-[24px]">
        Congratualations, your purchase is successful.
      </h1>
      <CheckoutCard />
      <p className="text-[16px] text-[#8A8685] leading-[18px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p className="text-[20px] text-center py-[16px]">
        Total with shipping $49
      </p>
      <button className="text-[16px] text-[#3E75CB] border border-[#3E75CB] rounded-[5px] w-full h-[48px]">
        Go to homepage
      </button>
    </main>
  );
};
export default SuccessPage;
