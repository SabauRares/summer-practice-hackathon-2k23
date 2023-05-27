import { useState } from 'react';
//This hook function takes the email from a form and displays it
export default function Submit() {
  const [email, setemail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(`${email}`);
    setemail('');

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="email"
        name="email"
        value={firstName}
        placeholder="Email"
        onChange={(event) =>
          setemail(event.target.value)
        }
      />
      <br />
      <br />
      <h2>{message}</h2>
    </form>
  );
}