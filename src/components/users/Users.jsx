import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './users.css';
import { useSelector } from 'react-redux';
import { userdata } from '../../redux/features/usersSlice';

import { Link, Outlet } from 'react-router-dom';

const Users = () => {
  const data = useSelector(userdata);

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
            className="datagrid"
          />
        )}
      </div>
    </div>
  );
};

export default Users;
