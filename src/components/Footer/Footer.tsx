import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <address>
        <p>
          For access and support please email{" "}
          <a href="#" aria-label="Email DCM support">
            support@DCM.com
          </a>
        </p>
      </address>

      <p>DCM Origination Technologies Ltd 2023</p>
    </footer>
  );
};
