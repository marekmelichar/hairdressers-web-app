import React from 'react';
import { Link } from 'react-router-dom';

const routes = {
  AllCustomersPage: process.env.REACT_APP_ROUTE_ALL_CUSTOMERS,
};

const HomePage: React.FC = () => {
  return (
    <div>
      <Link to={`${routes.AllCustomersPage}`}>AllCustomersPage</Link>
    </div>
  );
};

export default HomePage;
