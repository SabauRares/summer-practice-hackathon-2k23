import {useEffect, useState} from 'react';

const index = () => {
  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const interval = setInterval(() => {

      setNum(randomNumberInRange(100000, 999999));
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>{num}</h2>
    </div>
  );
};


export default index;
