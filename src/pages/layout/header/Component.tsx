import { Link, useLocation } from 'react-router-dom';
import MobileHeader from '../mobile-header/Component';
import styles from './Component.module.css';

interface User {
  fullName: string;
  userName: string;
  hasPhoto: boolean;
  id: string;
}

const Header = () => {
  const location = useLocation();

  const user: User = {
    fullName: 'Kadir Kuzu',
    userName: 'kadirk',
    hasPhoto: true,
    id: '1',
  };

  const logout = () => {
    console.log('logout');
  };

  return (
    <div className={styles.headerWrapper}>
      <div className="container">
        <header className={styles.appHeader}>
          <Link to="/" className={styles.logo}>
            <img src="/logo192.png" alt="logo" />
            Message Safely
          </Link>

          <div className={`d-flex justify-content-between align-items-center w-100 ${styles.desktopHeader}`}>
            <div className={styles.routes}>
              <Link to="/blogs" className={`${styles.route} ${location.pathname === '/blogs' ? styles.activeLink : ''}`}>
                Bloglar
              </Link>
              <Link to="/create" className={`${styles.route} ${location.pathname === '/create' ? styles.activeLink : ''}`}>
                Yeni Gönderi
              </Link>
            </div>
            <div className={`d-flex align-items-center ${styles.userInfoWrapper}`}>
              <div className={`${styles.userInfo} text-white`}>
                <div>{user.fullName}</div>
                <div>@{user.userName}</div>
              </div>
              <div className="dropdown">
                <span className="c-pointer" data-bs-toggle="dropdown" aria-expanded="false">
                  <img
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.fullName}`}
                    height="50"
                    alt="profile"
                    className="rounded-circle"
                  />
                </span>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item text-danger" onClick={logout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.mobileHeader}>
            <MobileHeader />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;