import { DataGrid } from '@mui/x-data-grid';
import './users.css';
import { useSelector, useDispatch } from 'react-redux';
import { userdata } from '../../redux/features/usersSlice';
import { Link, useNavigate } from 'react-router-dom';
import { getData, setCurrentUser } from '../../redux/features/usersSlice';

const Users = () => {
  const data = useSelector(userdata);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            <button
              className="btn"
              style={{ width: '80px' }}
              onClick={() => dispatch(setCurrentUser(params.row))}
            >
              View
            </button>
          </Link>
        );
      },
    },
  ];

  const handleView = (id) => {
    navigate(`/profile/${id}`);
  };
  var options = {
    method: 'GET',
    url: 'https://randomuser.me/api/?results=100',
  };

  return (
    <div className="dash-container">
      <div className="btn-wrap">
        <button className="btn" onClick={() => dispatch(getData(options))}>
          Get Users
        </button>
        {data.currentUser.length !== 0 ? (
          <button
            className="btn"
            style={{ width: '125px', fontSize: '0.9rem' }}
            onClick={() => handleView(data.currentUser.id)}
          >
            Recently Viewed User
          </button>
        ) : (
          ''
        )}
      </div>
      <div style={{ flexGrow: 1 }}>
        {data.value && (
          <DataGrid
            rows={data.value}
            columns={columns}
            rowHeight={49}
            pageSize={10}
            rowsPerPageOptions={[10]}
            getRowId={(r) => r.id}
            className="datagrid"
          />
        )}
      </div>
    </div>
  );
};

export default Users;
