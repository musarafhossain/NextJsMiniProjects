"use client"
import { useEffect, useState } from 'react';

function MyComponent() {
  const [isPrime, setIsPrime] = useState(false);
  const bePrime = () => {
    setIsPrime(!isPrime)
  }
  return (
    <div>
      {isPrime ? <p>Thank You For Taking Prime</p> : <p>Please be a prime member</p>}
      <button onClick={bePrime} className='bg-gray-300 p-3 shadow'>Be Prime</button>
    </div>
  );
}

export default MyComponent;