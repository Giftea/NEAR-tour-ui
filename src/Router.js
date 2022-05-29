import React, { useEffect, useCallback, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { login, logout as destroy, accountBalance } from './utils/near';
import HomePage from './pages/HomePage';
import Home from './pages/Home';
import Tour from './pages/Tour';
import AddTour from './pages/AddTour';

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
      <HashRouter>
        <Switch>
          <Route exact path="/">
            {account.accountId ? (
              <HomePage
                address={account.accountId}
                amount={balance}
                symbol="NEAR"
                destroy={destroy}
              />
            ) : (
              <Home login={login} />
            )}
          </Route>
          <Route
            path="/tour/:id"
            render={(props) => <Tour {...props} address={account.accountId} />}
          />
          <Route
            path="/addtour"
            render={(props) => (
              <AddTour
                address={account.accountId}
                amount={balance}
                symbol="NEAR"
                destroy={destroy}
                {...props}
              />
            )}
          />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Router;
