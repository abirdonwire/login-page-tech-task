import styles from "./Header.module.css";

interface HeaderProps {
  isSmallScreen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isSmallScreen }) => {
  return (
    <header role="banner" aria-label="DCM Logo Header" className={styles.header}>
      {isSmallScreen ? (
        <img
          src="/DCM logo without text.svg"
          className={styles.mainLogoSmall}
          alt="DCM Logo without text"
          role="presentation"
        />
      ) : (
        <img
          src="/DCM logo.svg"
          className={styles.mainLogo}
          alt="DCM logo with text"
          role="presentation"
        />
      )}
    </header>
  );
};
