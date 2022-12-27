import css from './Сard.module.css';

import Logo from '../../images/Logo.svg';
import Hansel from '../../images/Hansel.png';

const Card = ({ followers, condition, isFollowing, followBtnHandler }) => {
  const followersToDisplay =
    String(followers).slice(0, 3) + ',' + String(followers).slice(3);
  return (
    <div className={css.wrap}>
      <div className={css.logoContainer}>
        <img src={Logo} alt="GO_IT logo" width="88" className={css.logo} />
      </div>

      <div className={css.userInfo}>
        <div className={css.line}></div>
        <div className={css.avatarWrap}>
          <img
            src={Hansel}
            alt="boy-picture"
            width="72"
            className={css.avatar}
          />
        </div>
        <div className={css.userStat}>
          <p className={css.userStat__text}>777 tweets</p>
          <p className={css.userStat__text}>{followersToDisplay} Followers</p>
          <button
            onClick={followBtnHandler}
            className={isFollowing ? css.isFollowing : css.btn}
          >
            {condition}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
