import CheckoutCard from "../component/CheckoutCard";
import TopHeader from "../component/TopHeader";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <>
      <TopHeader />
      <main className="px-[24px] xl:px-[160px] pb-[64px]]">
        <h1 className="text-[20px] font-[700] py-[16px] leading-[24px]">
          Congratualations, your purchase is successful.
        </h1>
        <div className="xl:flex xl:flex-row-reverse xl:justify-between">
          <CheckoutCard />
          <p className="text-[16px] text-[#8A8685] leading-[18px] xl:w-[1468px] xl:pr-[44px] mt-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="xl:flex xl:flex-row-reverse xl:justify-between xl:pt-[176px]">
          <p className="text-[20px] font-[700] text-center py-[16px]">
            Total with shipping $49
          </p>
          <Link to="/">
            <button className="text-[16px] text-[#3E75CB] border border-[#3E75CB] rounded-[5px] w-full xl:w-auto xl:px-[8px] h-[48px]">
              Go to homepage
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};
export default SuccessPage;
