import React, { useEffect, useCallback, useState } from 'react';
// import { HashRouter, Switch } from 'react-router-dom';
import { login, logout as destroy, accountBalance } from '../utils/near';
import HomePage from './HomePage';
import Home from './Home';

const Router = () => {
  const account = window.walletConnection.account();
  const [balance, setBalance] = useState('0');
  const getBalance = useCallback(async () => {
    if (account.accountId) {
      setBalance(await accountBalance());
    }
  });

  useEffect(() => {
    getBalance();
  }, [getBalance]);
  return (
    <div>
      {/* <HashRouter>*/}
      {/*   <Switch>*/}
      {account.accountId ? (
        <HomePage address={account.accountId} amount={balance} symbol="NEAR" destroy={destroy} />
      ) : (
        <Home login={login} />
      )}
      {/*   </Switch>*/}
      {/* </HashRouter>*/}
    </div>
  );
};

export default Router;
