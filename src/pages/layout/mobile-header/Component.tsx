import { useNavigate } from 'react-router-dom';
import styles from './Component.module.css';

declare const bootstrap: any;

const MobileHeader = () => {
  const navigate = useNavigate();

  const user = {
    fullName: 'Kadir Kuzu',
    userName: 'kadirk',
  };

  const logout = () => {
    console.log('logout');
  };

  const closeMenu = () => {
    const offcanvasEl = document.getElementById('sideBarCanvas');
    if (offcanvasEl) {
      bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl).hide();
    }
  };

  const handleNavigate = (path: string) => {
    closeMenu();
    navigate(path);
  };

  return (
    <>
      <div
        className={`${styles.bar}`}
        data-bs-toggle="offcanvas"
        data-bs-target="#sideBarCanvas"
        aria-controls="sideBarCanvas"
      >
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>

      {/* Bootstrap class'ları ayrı, module stilini ekliyoruz */}
      <div className={`offcanvas offcanvas-start ${styles.offcanvas}`} id="sideBarCanvas" tabIndex={-1}>
        <div className="offcanvas-header">
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

          <button className={`btn-close text-reset ${styles.iconClose}`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body d-flex flex-column">
          <div className="sidebar-link">
            <div className={`${styles.offcanvasRoute}`} onClick={() => handleNavigate('/chats')}>Chats</div>
            <div className={`${styles.offcanvasRoute}`} onClick={() => handleNavigate('/friends')}>Friends</div>
            <div className={`${styles.offcanvasRoute} borderless`} onClick={() => handleNavigate('/profile')}>Profile</div>
          </div>

          <div className="mt-auto text-end">
            <button className="btn btn-danger" onClick={() => { closeMenu(); logout(); }}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;