import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatableSource';
import { Link } from 'react-router-dom';


const Datatable = () => {

  const actionColumns = [
    {
      field :"action" ,
      headerName : "action",
      width:200,
      renderCell : () => {
        return(
          <div className='cellAction'>
            <Link to="/users/test" style={{textDecoration:"none"}}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        )
      }
    }
  ]

    
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add new User
        <Link to="/users/new"  className='link'>
          Add new
        </Link>
      </div>
      <DataGrid
        className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumns)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
