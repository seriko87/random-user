import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './users.css';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';

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
          img: item.picture.large,
          thumbnail: item.picture.thumbnail,
          phone: item.phone,
          mobile: item.cell,
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
      width: 80,
      renderCell: (params) => {
        return (
          <img
            src={params.row.thumbnail}
            alt=""
            style={{ borderRadius: '50%' }}
          />
        );
      },
    },

    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      renderCell: (params) => {
        return (
          <Link to={`/profile/${params.id}`} state={{ user: params.row }}>
            <button className="btn" style={{ width: '80px' }}>
              View
            </button>
          </Link>
        );
      },
    },
  ];

  const handleRowClick = (params, event) => {
    console.log(params);
    console.log(event);
  };

  return (
    <div className="user-container">
      <div style={{ flexGrow: 1 }}>
        {data && (
          <DataGrid
            rows={data}
            columns={columns}
            rowHeight={50}
            pageSize={10}
            rowsPerPageOptions={[10]}
            onRowClick={handleRowClick}
            getRowId={(r) => r.id}
          />
        )}
      </div>
    </div>
  );
};

export default Users;
