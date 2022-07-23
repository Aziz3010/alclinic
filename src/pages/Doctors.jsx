import React from 'react';
import Helmet from '../components/Helmet';
import '../styles/doctors.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

const Doctors = () => {

  const handleDelete = (id) => {
    console.log(id);
  }

  return (
    <Helmet title='الأطباء'>
      <div className="container">
        <div className="row">

          <div className="col-12">
            <div className="doctors_doctors_table">
              <h3 className='mb-3'>سجل الأطباء</h3>
              <input type="text" className='form-control mt-4 mb-3 w-100' placeholder='البحث بكود الطبيب' />
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover lh-lg text-nowrap text-center">
                  <thead>
                    <tr>
                      <th scope="col">الكود</th>
                      <th scope="col">الاسم</th>
                      <th scope="col">الجوال</th>
                      <th scope="col">السن</th>
                      <th scope="col">التحكم</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <th>2468</th>
                      <td>احمد علي</td>
                      <td>01000000025</td>
                      <td>35</td>
                      <td className='d-flex justify-content-center align-items-center gap-2 flex-nowrap'>
                        <Link to='/doctors/view/5' className='btn btn-sm btn-success'><VisibilityIcon fontSize='0' /></Link>
                        <Link to='/doctors/edit/5' className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></Link>
                        <button onClick={()=>handleDelete(5)} className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Helmet>
  )
}

export default Doctors;