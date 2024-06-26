/* import { useState } from 'react'; */
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
  {
    username: 'seerendo',
    name: 'Roddy Andrés Andrade Molina',
    isFollowing: true,
  },
  {
    username: 'darkmyest',
    name: 'Franklin Andreé Cuenca Meza',
    isFollowing: false,
  },
  {
    username: 'jdoe',
    name: 'John Doe',
    isFollowing: true,
  },
];

export function App() {
  /* const [name, setName] = useState('seerendo'); */

  return (
    <section className="App">
      {users.map((user) => {
        const { username, name, isFollowing } = user;
        return (
          // eslint-disable-next-line react/jsx-key
          <TwitterFollowCard
            key={username}
            username={username}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
