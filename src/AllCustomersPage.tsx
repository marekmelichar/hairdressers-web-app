import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';

const routes = {
  AllCustomersPage: process.env.REACT_APP_ROUTE_ALL_CUSTOMERS,
  CreateCustomerPage: process.env.REACT_APP_ROUTE_CREATE_CUSTOMER,
  EditCustomerPage: process.env.REACT_APP_ROUTE_EDIT_CUSTOMER,
};

const AllCustomersPage = () => {
  const history = useHistory();

  const [data, setData] = useState<any[]>([]);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(
        'https://janamelicharova.cz/wp-json/hairdressers/v1/customers'
      );
      // handle success
      setData(response.data.customers);
    } catch (error) {
      // handle error
      console.log('fetchCustomers', error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleDetailClick = (id: number) => {
    return history.push(`${routes.AllCustomersPage}/${id}`);
  };

  const handleEditClick = (id: number) => {
    return history.push(`${routes.EditCustomerPage}/${id}`);
  };

  const handleDeleteClick = (name: string, id: number) => {
    if (window.confirm(`Opravdu vymazat ${name}?`)) {
      // They clicked Yes
      axios
        .delete(
          'https://janamelicharova.cz/wp-json/hairdressers/v1/customers',
          { data: { id } }
        )
        .then((responseDelete) => {
          if (responseDelete.data.row_deleted) {
            return fetchCustomers();
          }
        });
    } else {
      console.log('They clicked no');
    }
  };

  const renderListOfCustomers = () => {
    return data.map((customer) => {
      return (
        <li key={customer.id} style={{ marginTop: 30 }}>
          {customer.name}
          <button
            onClick={() => handleDetailClick(customer.id)}
            style={{ marginLeft: 30 }}
          >
            Detail
          </button>
          <button
            onClick={() => handleEditClick(customer.id)}
            style={{ marginLeft: 30 }}
          >
            Upravit
          </button>
          <button
            onClick={() => handleDeleteClick(customer.name, customer.id)}
            style={{ marginLeft: 30 }}
          >
            Vymazat
          </button>
        </li>
      );
    });
  };

  return (
    <div className='App'>
      <ul>{renderListOfCustomers()}</ul>
      <div style={{ marginTop: 30, marginLeft: 150, marginBottom: 150 }}>
        <Link to={`${routes.CreateCustomerPage}`}>Vytvořit</Link>
      </div>
    </div>
  );
};

export default AllCustomersPage;
