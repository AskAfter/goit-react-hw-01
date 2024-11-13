import './App.css';
import Profile from './profileasdf/Profile';
import userData from './profileasdf/userData.json';
import friends from './friendListasdf/friends.json';
import FriendList from './friendListasdf/FriendList';
import transactions from './transactionHistory/transactions.json';
import TransactionHistory from './transactionHistory/TransactionHistory';
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
