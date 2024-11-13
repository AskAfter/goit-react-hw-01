import './App.css';
import Profile from './profile/Profile';
import userData from './profile/userData.json';
import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList';
import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
