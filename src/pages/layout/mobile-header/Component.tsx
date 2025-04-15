import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state';
import { AuthService } from '../../../services/auth-service';
import styles from './Component.module.css';
import * as bootstrap from 'bootstrap';


const MobileHeader = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const closeMenu = () => {
    const el = document.getElementById('sideBarCanvas');
    if (el) {
      bootstrap.Offcanvas.getOrCreateInstance(el).hide();
    }
  
    document.querySelectorAll('.offcanvas-backdrop')?.forEach(el => el.remove());
    document.body.classList.remove('offcanvas-backdrop', 'modal-open');
  };

  const handleNavigate = (path: string) => {
    closeMenu();
    navigate(path);
  };

  const logout = () => {
    closeMenu();
    AuthService.logout();
  };

  return (
    <>
      <div
        className={styles.bar}
        data-bs-toggle="offcanvas"
        data-bs-target="#sideBarCanvas"
        aria-controls="sideBarCanvas"
      >
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>

      <div className={`offcanvas offcanvas-start ${styles.offcanvas}`} id="sideBarCanvas" tabIndex={-1}>
        <div className="offcanvas-header">
          {user ? (
            <div className={`d-flex align-items-center ${styles.userInfoWrapper}`}>
              <img
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.fullName}`}
                height="50"
                alt="profile"
                className="rounded-circle"
              />
              <div className={`${styles.userInfo} text-white ms-3`}>
                <div>{user.fullName}</div>
                <div>@{user.userName}</div>
              </div>
            </div>
          ) : (
            <div className="text-white fw-bold">Hoş Geldiniz</div>
          )}

          <button
            className={`btn-close text-reset ${styles.iconClose}`}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column">
          <div className="sidebar-link">
            <div className={styles.offcanvasRoute} onClick={() => handleNavigate('/blogs')}>
              Bloglar
            </div>
            {user && (
              <div className={styles.offcanvasRoute} onClick={() => handleNavigate('/create')}>
                Yeni Blog
              </div>
            )}
          </div>

          <div className="mt-auto text-end">
            {user ? (
              <button className="btn btn-danger" onClick={logout}>
                Çıkış Yap
              </button>
            ) : (
              <button className="btn btn-outline-light" onClick={() => handleNavigate('/login')}>
                Giriş Yap
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;