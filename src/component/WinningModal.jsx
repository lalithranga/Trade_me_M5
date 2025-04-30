import React from 'react';
import './WinningModal.css';

const WinningModal = ({ item, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h3 className="modal-title">Place a bid</h3>
                {/* Copy pasted from CheckoutCard */}
                <div className="rounded-[2px] w-full max-h-[142px] bg-[#F6F5F4] flex gap-[8px]">
                    <img className="bg-[#E7E6E3] w-[148px] xl:w-[190px] h-[112px] xl:h-[142px]" src="/" alt="image of checkout item" />
                    <section className="text-[12px] grid py-[8px]">
                        <div>
                            {/* Old hard-coded LOCATION and TIME */}
                            {/* <p className="text-[#8A8685] w-[140px] leading-[16px]">North Shore, Auckland Closes: 11hrs</p> */}
                            <p className="text-[#8A8685] w-[140px] leading-[16px]">
                                {' '}
                                {item.location || 'Unknown location'} Closes: {item.closing_time || 'Unknown time'}{' '}
                            </p>
                            {/* Old hard-coded ITEM NAME */}
                            {/* <p className="font-[700]">Modern Office Desk</p> */}
                            <p className="font-[700]">{item.title || 'Unknown Title'}</p>
                        </div>
                        <div className="leading-[16px]">
                            <p className="text-[#8A8685]">No reserve, no bid</p>
                            {/* Old hard-coded ITEM PRICE */}
                            {/* <p className="text-[16px] font-[700]">$29</p> */}
                            <p className="text-xl font-bold">${item.price || 'Unknown Price'}</p>
                        </div>
                    </section>
                </div>
                {/* Copy pasted from CheckoutCard */}

                <div className="modal-buttons">
                    <button className="yes-bid-btn">Yes, place a bid</button>
                    <button className="go-back-btn" onClick={onClose}>
                        Go back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WinningModal;
