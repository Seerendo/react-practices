import { useState } from 'react';

export function TwitterFollowCard({ children, username, initialIsFollowing }) {
  // Estado de la luz (ejemplo), interruptor
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing
    ? 'sdo-followCard-button is-following'
    : 'sdo-followCard-button';

  const handlerClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="sdo-followCard">
      <header className="sdo-followCard-header">
        <img
          className="sdo-followCard-avatar"
          src="https://unavatar.io/dribbble/omidnikrah"
          alt="Avatar random"
        />
        <div className="sdo-followCard-info">
          <strong>{children}</strong>
          <span className="sdo-followCard-infoUserName">@{username}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handlerClick}>
          <span className="sdo-followCard-text">{text}</span>
          <span className="sdo-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
