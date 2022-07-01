import React from 'react';
import { Outlet } from 'react-router-dom';
import { Select } from 'antd';
import Search from 'antd/lib/input/Search';

const { Option } = Select;

const Home = () => {
  // useEffect(() => {
  //   fetch(`https://www.googleapis.com/books/v1/volumes/?q=harry&startIndex=29&maxResults=30&key=${API_KEY as string}`, {
  //     // headers: {
  //     //   mode: 'no-cors',
  //     //   'Access-Control-Allow-Origin': '*',
  //     //   'Access-Control-Allow-Credentials': 'true',
  //     //   'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //     //   'Access-Control-Allow-Headers':
  //     //     'x-requested-with, Content-Type, Origin, Authorization, accept, X-api-factory-application-id',
  //     //   // key: API_KEY as string,
  //     // }
  //   }).then((data) => {
  //     console.log(data);
  //   }).catch((err) => {
  //     console.log(err);

  //   })
  // }, [])

  return (
    <div>
      <h1>Search for books</h1>
      <Search placeholder="input search text" enterButton />
      {/* <label htmlFor="select">
        Category
        <Select defaultValue="lucy" id="select" style={{ width: 120 }} loading>
          <Option value="lucy">Lucy</Option>
        </Select>
      </label> */}
      <Select defaultValue="lucy" style={{ width: 120 }} loading>
        <Option value="lucy">Lucy</Option>
      </Select>
      <Outlet />
    </div>
  );
};

export default Home;
