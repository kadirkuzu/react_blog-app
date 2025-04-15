import { Link, useLocation } from 'react-router-dom';
import MobileHeader from '../mobile-header/Component';
import styles from './Component.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state';
import { AuthService } from '../../../services/auth-service';

const Header = () => {
  const location = useLocation();
  const user = useSelector((state: RootState) => state.auth.user);

  const logout = () => {
    AuthService.logout()
  };

  return (
    <div className={styles.headerWrapper}>
      <div className="container">
        <header className={styles.appHeader}>
          <Link to="/" className={styles.logo}>
            <img src="/logo192.png" alt="logo" />
            <span>Blogs App</span>
          </Link>

          <div className={`d-flex justify-content-between align-items-center w-100 ${styles.desktopHeader}`}>
          <div className={styles.routes}>
              <Link to="/blogs" className={`${styles.route} ${location.pathname === '/blogs' ? styles.activeLink : ''}`}>
                Bloglar
              </Link>
              {
                !!user && (
                  <Link to="/create" className={`${styles.route} ${location.pathname === '/create' ? styles.activeLink : ''}`}>
                    Yeni Blog
                  </Link>
                )
              }
            </div>

            {user ? (
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
            ) : (
              <div>
                <Link to="/login" className="btn btn-outline-light">
                  Giriş Yap
                </Link>
              </div>
            )}
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