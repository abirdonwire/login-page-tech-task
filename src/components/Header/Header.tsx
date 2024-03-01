import "./Header.css";

interface HeaderProps {
  isSmallScreen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isSmallScreen }) => {
  return (
    <header role="banner" aria-label="DCM Logo Header">
      {isSmallScreen ? (
        <img
          src="/DCM logo without text.svg"
          className="main-logo-small"
          alt="DCM Logo without text"
          role="presentation"
        />
      ) : (
        <img
          src="/DCM logo.svg"
          className="main-logo"
          alt="DCM logo with text"
          role="presentation"
        />
      )}
    </header>
  );
};
