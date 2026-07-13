import React, { useState } from 'react';
import { useStore } from '@/store';
import { Button } from '@/components/ui/button';
import { Link } from 'next/link';
import { useRouter } from 'next/router';

const LandingPage = () => {
  const { cart, removeFromCart, numberOfItems } = useStore();
  const [isCheckout, setIsCheckout] = useState(false);
  const router = useRouter();

  const handleCheckout = () => {
    // navigasi ke halaman /checkout
    router.push('/checkout');
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}
            <Button onClick={() => removeFromCart(item.id)}>Remove from Cart</Button>
          </li>
        ))}
      </ul>
      <Button onClick={handleCheckout}>Checkout</Button>
      {isCheckout && (
        <div>
          <h2>Modal Pembayaran</h2>
          <p>Silakan melakukan pembayaran</p>
        </div>
      )}
    </div>
  );
};

export default LandingPage;