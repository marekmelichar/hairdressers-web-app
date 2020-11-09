import React, { useEffect, useState } from 'react';

import axios, { AxiosResponse } from 'axios';

const CreateCustomerPage = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        'https://hairdressers.marekmelichar.cz/wp-json/hairdressers/v1/customers'
      )
      .then(function (response: AxiosResponse) {
        // handle success
        console.log(response);
        setData(response.data.customers);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const renderListOfCustomers = () => {
    return data.map((customer) => {
      return <li key={customer.id}>{customer.name}</li>;
    });
  };

  return (
    <div className='App'>
      <ul>{renderListOfCustomers()}</ul>
    </div>
  );
};

export default CreateCustomerPage;
