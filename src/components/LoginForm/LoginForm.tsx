import { useState } from "react";
import styles from "./LoginForm.module.css";

type userCredentials = {
  emailAddress: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const [form, setForm] = useState<userCredentials>({
    emailAddress: "",
    password: "",
  });
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const canSubmit = form.emailAddress !== "" && form.password !== "";
  const hasError = form.password !== "" && !form.password.match(passwordRegex);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.formContainer}>
      <form
        onSubmit={handleLogin}
        className={hasError ? `${styles.loginFormError}` : `${styles.loginForm}`}
        noValidate
      >
        <div className={styles.loginFormHeading}>
          <h1>Log in</h1>
          <p>Please sign in to continue.</p>
        </div>

        <label htmlFor="email address">
          Email address:
          <input
            id="email address"
            type="text"
            name="email address"
            value={form.emailAddress}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, username: e.target.value }))
            }
            placeholder="email@address.com"
            aria-invalid={hasError ? "true" : "false"}
            aria-required="true"
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, password: e.target.value }))
            }
            aria-invalid={hasError ? "true" : "false"}
            aria-required="true"
            aria-describedby="minimumCharacterHint lowercaseLetterHint uppercaseLetterHint minimumDigitHint"
          />
          {hasError && (
            <ul className={styles.loginFormErrorText}>
              <li id="minimumCharacterHint">At least 8 characters</li>
              <li id="lowercaseLetterHint">
                Contains at least one lowercase letter
              </li>
              <li id="uppercaseLetterHint">
                Contains at least one uppercase letter
              </li>
              <li id="minimumDigitHint">Contains at least one digit</li>
            </ul>
          )}
        </label>
        <br />
        <a href="#" className={styles.forgotPasswordLink}>
          Forgot password
        </a>
        <br />
        <button
          disabled={!canSubmit || hasError}
          type="submit"
          className={styles.loginFormSubmitButton}
        >
          Log in
        </button>
      </form>
    </div>
  );
};
