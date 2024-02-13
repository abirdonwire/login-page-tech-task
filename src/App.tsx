import { useState } from 'react';

import './style.css';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export const App = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const canSubmit = form.username !== '' && form.password !== '';
  const hasError = form.password !== '' && !form.password.match(passwordRegex);

  return (
    <main>
      <details>
        <summary>Bots technical test instructions</summary>
        Below is a form component with two basic inputs and a button. Please
        create components and style them in line with the designs. You can use
        any type of styling tools. All the assets you should need are in the public folder, we've add the fonts to the stylesheet to get you going. Design link:
        <a href="https://www.figma.com/file/cJBFVFmmCgODEdq4s3qekm/Front-end-Design-Task?type=design&node-id=3%3A557&mode=dev">https://www.figma.com/file/cJBFVFmmCgODEdq4s3qekm/Front-end-Design-Task?type=design&node-id=3%3A557&mode=dev</a>
      </details>

      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <p>Please sign in to continue</p>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={form.password}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          {hasError && (
            <ul>
              <li>At least 8 characters</li>
              <li>Contains at least one lowercase letter</li>
              <li>Contains at least one uppercase letter</li>
              <li>Contains at least one digit</li>
            </ul>
          )}
        </label>
        <br />
        <a href="#">Forgot password</a>
        <br />
        <button disabled={!canSubmit || hasError} type="submit">
          Login
        </button>
        <p>
          For access and support please email <a href="#">support@DCM.com</a>
        </p>
        <p>DCM Origination Technologies Ltd 2023</p>
      </form>
    </main>
  );
};
