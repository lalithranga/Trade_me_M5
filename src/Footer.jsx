const Footer = () => {
  return (
    <footer className="text-[12px]">
      <section className="p-[20px] h-[99px]">
        <p className="pb-[9px] text-[#00000080]">
          We’re upgrading some of our systems
        </p>
        <a className="pb-[3px] block text-[#007ACD]" href="">
          <img className="inline pr-[3px]" src="/info.png" alt="" /> Learn more
        </a>
        <a className="block text-[#007ACD]" href="">
          <img className="inline pr-[3px]" src="/chat.png" alt="" /> Tell us
          what you think
        </a>
      </section>
      <div className="bg-[#FFAC00] h-[9px]"></div>
      <section className="pt-[9px] px-[20px] bg-[#F5F5F5] h-[127px]">
        <nav className="pb-[12px] text-[#65605DB2]  w-full flex justify-between">
          <a href="">Desktop site</a>
          <a href="">Help</a>
          <a href="">Contact us</a>
          <a href="">Terms & Conditions</a>
        </nav>
        <div className="flex w-full justify-between items-center ">
          <div className="text-[#65605D]">
            <p className="w-[127px]">2024 Trade Me Limited</p>
            <div className="pt-[5px] flex gap-[22px]">
              <button>Register</button>
              <button>Log in</button>
            </div>
          </div>
          <img
            className="h-[32px] pr-[88px] self-start"
            src="/shield.png"
            alt=""
          />
          <div className="flex gap-[12px] pt-[9px] self-start items-center ">
            <img src="/facebook.png" alt="facebook social" />
            <img src="/twitter.png" alt="twitter social" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
