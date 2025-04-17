const DesktopFooter = () => {
  return (
    <footer className="text-[12px] hidden xl:block ">
      <section className="py-[20px] max-w-screen-xl mx-auto flex">
        <p className="text-[14px] pr-[40px] text-[#8A8685] flex self-center">
          We’re upgrading some of our systems
        </p>
        <div className="flex gap-[20px]">
          <a
            className="text-[14px] pr-[20px] text-[#3E75CB] flex self-center gap-[8px]"
            href="/"
          >
            <img
              className="inline pr-[3px]"
              src="/info-other.svg"
              alt="i/info image"
            />{" "}
            Learn more
          </a>
          <a className="text-[14px] text-[#3E75CB] flex gap-[8px]" href="/">
            <img
              className="inline pr-[3px]"
              src="/chat-other.svg"
              alt="chat image"
            />{" "}
            <span>Tell us what you think</span>
          </a>
        </div>
      </section>
      <div className="bg-[#FFAC00] h-[9px]"></div>
      <section className="text-[#9D9996] pb-[88px] ">
        <div className="grid grid-cols-[160px_1fr_auto] items-center pt-[20px] border-b-[0.5px] border-[#8A8685] pb-[32px] mb-[36px] pr-[160px] max-w-screen-xl mx-auto">
          <img src="/trademe-logo.png" alt="" />
          <nav className="flex justify-evenly">
            <a href="/">List an item</a>
            <a href="/">Watchlist</a>
            <a href="/">Favourite</a>
            <a href="/">My Trade Me</a>
            <a href="/">My Trade Me</a>
          </nav>
          <div className="flex gap-[22px]">
            <button>Register</button>
            <button>Log in</button>
          </div>
        </div>

        <div className="text-[#9D9996] display flex justify-between pr-[160px] max-w-screen-xl mx-auto">
          <div>
            <h3 className="text-[14px] pb-[5px] text-[#C64C3D]">Marketplace</h3>
            <nav className="grid gap-[5px] text-[12px]">
              <a href="/">Latest Deals</a>
              <a href="/">Stores</a>
              <a href="/">Closing Soon</a>
              <a href="/">$1 reserve</a>
            </nav>
          </div>
          <div>
            <h3 className="text-[14px] pb-[5px] text-[#DF702E]">Jobs</h3>
            <nav className="grid gap-[5px] text-[12px]">
              <a href="/">Browse categories</a>
              <a href="/">Careers advice</a>
              <a href="/">JobSmart</a>
              <a href="/">Advertisers advice</a>
            </nav>
          </div>
          <div>
            <h3 className="text-[14px] pb-[5px] text-[#626E86]">Motors</h3>
            <nav className="grid gap-[5px] text-[12px]">
              <a href="/">Browse all cars</a>
              <a href="/">Other vehicles</a>
              <a href="/">Buying & Selling</a>
              <a href="/">Dealer news & info</a>
            </nav>
          </div>
          <div>
            <h3 className="text-[14px] pb-[5px] text-[#52A45A]">Property</h3>
            <nav className="grid gap-[5px] text-[12px]">
              <a href="/">International Property</a>
              <a href="/">News & guides</a>
              <a href="/">Homes.co.nz</a>
              <a href="/">OneHub for agents</a>
            </nav>
          </div>
          <div>
            <h3 className="text-[14px] pb-[5px] text-[#555555]">Services</h3>
            <nav className="grid gap-[5px] text-[12px]">
              <a href="/">Trades</a>
              <a href="/">Domestic Services</a>
              <a href="/">Events & entertainment</a>
              <a href="/">Health & wellbeing</a>
            </nav>
          </div>
          <div>
            <h3 className="text-[14px] pb-[5px] text-[#528EE1]">Community</h3>
            <nav className="grid gap-[5px] text-[12px]">
              <a href="/">Help</a>
              <a href="/">Announcements</a>
              <a href="/">Trust & safety</a>
              <a href="/">Seller information</a>
            </nav>
          </div>
        </div>
      </section>
      <section className="py-[20px] px-[160px] bg-[#F5F5F5]">
        <div className="flex w-full justify-between items-center max-w-screen-xl mx-auto">
          <div className="flex pr-[52px]">
            <img
              className="pr-[2px]"
              src="/copyright-small.png"
              alt="copyright image"
            />
            <p className="text-[#9D9996]">2024 Trade Me Limited</p>
          </div>
          <nav className="text-[#9D9996] flex gap-[10px]">
            <a href="/">Desktop site</a>
            <a href="/">About us</a>
            <a href="/">Careers</a>
            <a href="/">Advertise</a>
            <a href="/">Privacy policy</a>
            <a href="/">Terms & Conditions</a>
            <a href="/">Contact us</a>
          </nav>
          <img className="h-[24px] pr-[108px]" src="/shield-small.png" alt="" />
          <div className="flex gap-[12px] items-center ">
            <img src="/facebook.png" alt="facebook social" />
            <img src="/twitter.png" alt="twitter social" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default DesktopFooter;
