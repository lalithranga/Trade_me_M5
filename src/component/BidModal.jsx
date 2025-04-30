import React, { useState } from 'react';
import './BidModal.css';

const BidModal = ({ item, onClose }) => {
    const [confirming, setConfirming] = useState(false);
    const [bidAmount, setBidAmount] = useState('');

    const handlePlaceBidClick = () => {
        if (!bidAmount || parseFloat(bidAmount) <= 0) {
            alert('Please enter a valid bid amount.');
            return;
        }
        setConfirming(true);
    };

    const handleConfirmBid = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/items/${item._id}/bid`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    bidAmount: parseFloat(bidAmount),
                }),
            });

            const contentType = response.headers.get('content-type');
            const isJson = contentType && contentType.includes('application/json');
            const data = isJson ? await response.json() : await response.text();

            if (!response.ok) {
                console.error('Backend error:', data);
                alert('Error placing bid: ' + (data.error || data || 'Unknown error'));
                return;
            }

            alert(`Bid of $${bidAmount} placed successfully!`);
            onClose();
        } catch (error) {
            console.error('Error placing bid:', error);
            alert('Something went wrong while placing the bid.');
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className={`modal-content ${confirming ? 'py-6 max-h-[350px] min-h-[unset]' : ''}`} onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>
                    &times;
                </span>

                {confirming ? (
                    <>
                        <h3 className="modal-title">Confirm your bid</h3>
                        <div className="rounded-[2px] w-full max-h-[142px] bg-[#F6F5F4] flex gap-[8px]">
                            <img className="bg-[#E7E6E3] w-[148px] xl:w-[190px] h-[112px] xl:h-[142px]" src={item.image || '/api/placeholder/400/320'} alt={item.title} />
                            <section className="text-[12px] grid py-[8px]">
                                <div>
                                    <p className="text-[#8A8685] w-[200px] leading-[16px]">
                                        {item.location || 'Unknown location'} | Closes: {item.closing_date || 'Unknown time'}
                                    </p>
                                    <p className="font-[700]">{item.title || 'Unknown Title'}</p>
                                </div>
                                <div className="leading-[16px]">
                                    <p className="text-[#8A8685]">Your bid</p>
                                    <p className="text-xl font-bold">${bidAmount}</p>
                                </div>
                            </section>
                        </div>

                        <div className="text-center mt-4 px-4">
                            <p className="text-base font-normal mb-4">
                                Do you want to make a bid for <span className="text-base font-bold">${bidAmount}</span>?
                            </p>
                            <div className="flex justify-center gap-4 mt-2">
                                <button className="place-bid-btn px-4 py-2" onClick={handleConfirmBid}>
                                    Yes, place bid
                                </button>
                                <button className="go-back-btn px-4 py-2" onClick={() => setConfirming(false)}>
                                    Go back
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h3 className="modal-title">Place a bid</h3>
                        <div className="rounded-[2px] w-full max-h-[142px] bg-[#F6F5F4] flex gap-[8px]">
                            <img className="bg-[#E7E6E3] w-[148px] xl:w-[190px] h-[112px] xl:h-[142px]" src={item.image || '/api/placeholder/400/320'} alt={item.title} />
                            <section className="text-[12px] grid py-[8px]">
                                <div>
                                    <p className="text-[#8A8685] w-[200px] leading-[16px]">
                                        {item.location || 'Unknown location'} | Closes: {item.closing_date || 'Unknown time'}
                                    </p>
                                    <p className="font-[700]">{item.title || 'Unknown Title'}</p>
                                </div>
                                <div className="leading-[16px]">
                                    <p className="text-[#8A8685]">No reserve, no bid</p>
                                    <p className="text-xl font-bold">${item.price || 'Unknown Price'}</p>
                                </div>
                            </section>
                        </div>

                        <p className="your-bid-label">Your bid</p>
                        <div className="bid-input-row">
                            <input type="number" className="bid-input" placeholder="$0.00" min="0" value={bidAmount} onChange={(e) => setBidAmount(e.target.value)} />
                            <div className="toggle-wrapper">
                                <label className="toggle-switch">
                                    <input type="checkbox" className="toggle-checkbox" />
                                    <span className="toggle-slider"></span>
                                </label>
                                <span className="auto-bid-label">Auto-bid</span>
                                <div className="more-info">
                                    <span className="more-info-label">More info</span>
                                    <img src="/public/arrow-down-blue.svg" alt="Down Arrow" />
                                </div>
                            </div>
                        </div>

                        <p className="shipping-label">Shipping</p>
                        <div className="shipping-options">
                            <label className="radio-option">
                                <input type="radio" name="shipping" value="urban" />
                                <span className="custom-radio"></span>
                                Nationalwide (urban)
                            </label>
                            <label className="radio-option">
                                <input type="radio" name="shipping" value="rural" />
                                <span className="custom-radio"></span>
                                Nationalwide (rural)
                            </label>
                            <label className="radio-option">
                                <input type="radio" name="shipping" value="pickup" />
                                <span className="custom-radio"></span>
                                Pick-up from seller
                            </label>
                        </div>

                        <div className="payment-card">
                            <p className="payment-title">Seller accepts payment by</p>
                            <p className="payment-options">Ping, Afterpay, NZ Bank Deposit</p>
                            <p className="payment-legal">If you win, you are legally obligated to complete your purchase</p>
                        </div>

                        <div className="reminders-card">
                            <p className="reminders-title">Reminders</p>
                            <label className="custom-checkbox-wrapper">
                                <input type="checkbox" className="custom-checkbox" />
                                <span className="checkmark"></span>Email me if I’m outbid
                            </label>
                        </div>

                        <div className="modal-buttons">
                            <button className="place-bid-btn" onClick={handlePlaceBidClick}>
                                Place a bid
                            </button>
                            <button className="go-back-btn" onClick={onClose}>
                                Go back to listing
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default BidModal;
