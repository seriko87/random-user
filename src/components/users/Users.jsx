import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './users.css';
import axios from 'axios';

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  var options = {
    method: 'GET',
    url: 'https://randomuser.me/api/?results=100',
  };

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios(options);
      const newData = res.data.results.map((item, index) => {
        return {
          id: index + 1,
          name: item.name.first + ' ' + item.name.last,
          username: item.login.username,
          email: item.email,
          dob: item.dob.date,
          age: item.dob.age,
          gender: item.gender,
          location: item.location,
          img: item.picture.medium,
          thumbnail: item.picture.thumbnail,
        };
      });
      setData(newData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      field: 'id',
      headerName: 'No',
      width: 60,
    },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    {
      field: 'dob',
      headerName: 'Date of Birth',
      width: 220,
      renderCell: (params) => {
        let date_param = new Date(params.row.dob);
        var options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };
        return <span>{date_param.toLocaleDateString('en-US', options)}</span>;
      },
    },

    {
      field: 'thumbnail',
      headerName: 'Image',
      width: 60,
      renderCell: (params) => {
        return <img src={params.row.thumbnail} alt="" />;
      },
    },
  ];

  console.log(data);
  return (
    <div className="user-container">
      <div style={{ flexGrow: 1 }}>
        {data && (
          <DataGrid
            rows={data}
            columns={columns}
            rowHeight={40}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        )}
      </div>
    </div>
  );
};

export default Users;
