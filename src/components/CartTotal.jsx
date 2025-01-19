import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    return (
        <div className="w-full">
            <div className="text-2xl">
                <Title text1={"CART"} text2={"TOTALS"} />
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{currency} {getCartAmount().toFixed(2)}</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Shipping Fee</p>
                    <p>{currency} {delivery_fee.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                    <b>Total</b>
                    <b>{currency} {(getCartAmount() + (getCartAmount() === 0 ? 0 : delivery_fee)).toFixed(2)}</b>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
