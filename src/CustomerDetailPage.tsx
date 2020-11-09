import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import axios, { AxiosResponse } from 'axios';

const routes = {
  AllCustomersPage: process.env.REACT_APP_ROUTE_ALL_CUSTOMERS,
};

const CustomerDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const [color, setColor] = useState<any>('');
  const [colorCode, setColorCode] = useState<any>('');
  const [comments, setComments] = useState<any>('');
  const [name, setName] = useState<any>('');
  const [price, setPrice] = useState<any>('');

  useEffect(() => {
    axios
      .get(
        `https://hairdressers.marekmelichar.cz/wp-json/hairdressers/v1/customers?id=${id}&timestamp=${new Date().getTime()}`
      )
      .then(function (response: AxiosResponse) {
        setColor(response.data.color || '');
        setColorCode(response.data.colorCode || '');
        setComments(response.data.comments || '');
        setName(response.data.name || '');
        setPrice(response.data.price || '');
      })
      .catch(function (error) {
        console.log('CustomerDetail Error', error);
      });
  }, []);

  const handleColorChange = (e: any) => {
    setColor(e.target.value);
  };

  const handleColorCodeChange = (e: any) => {
    setColorCode(e.target.value);
  };

  const handleCommentsChange = (e: any) => {
    setComments(e.target.value);
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e: any) => {
    setPrice(e.target.value);
  };

  return (
    <div>
      <>
        <div>Jméno :</div>
        <textarea rows={5} cols={50} value={name} onChange={handleNameChange} />
      </>
      <>
        <div>Barva :</div>
        <textarea
          rows={5}
          cols={50}
          value={color}
          onChange={handleColorChange}
        />
      </>
      <>
        <div>Kód barvy :</div>
        <textarea
          rows={5}
          cols={50}
          value={colorCode}
          onChange={handleColorCodeChange}
        />
      </>
      <>
        <div>Cena :</div>
        <textarea
          rows={5}
          cols={50}
          value={price}
          onChange={handlePriceChange}
        />
      </>
      <>
        <div>Poznámky :</div>
        <textarea
          rows={5}
          cols={50}
          value={comments}
          onChange={handleCommentsChange}
        />
      </>
      <div style={{ marginTop: 30, marginLeft: 180 }}>
        <Link to={`${routes.AllCustomersPage}`}>Zpět</Link>
      </div>
    </div>
  );
};

export default CustomerDetailPage;
