import React, { useEffect, useState } from 'react';
import Helmet from '../components/Helmet';
import '../styles/doctors.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BoyIcon from '@mui/icons-material/Boy';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getAllDoctorsFromAPI();
  },[])

  async function getAllDoctorsFromAPI() {
    let { data } = await Axios.get("http://localhost/alclinic/getAllUsers.php");
    setDoctors(data);
    console.log("done");
  }

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

              <div className='search_total_box mt-4 mb-3'>
                <input type="text" className='form-control' placeholder='البحث بكود الطبيب' />
                <span><BoyIcon /> إجمالي الأطباء: {doctors.length} </span>
              </div>

              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover text-nowrap text-center">
                  <thead>
                    <tr>
                      <th scope="col">صورة</th>
                      <th scope="col">الإسم</th>
                      <th scope="col">هاتف</th>
                      <th scope="col">عمر</th>
                      <th scope="col">كود</th>
                      <th scope="col">التحكم</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      doctors.map((doctor, index) => (
                        <tr key={index}>
                          <td className='table_td_image'><img className='table_images' src={`http://localhost/alclinic/uploads/${doctor.image}`} alt={doctor.first_name} /></td>
                          <th>{doctor.first_name} {doctor.last_name}</th>
                          <td>{doctor.phone}</td>
                          <td>{doctor.age}</td>
                          <td>{doctor.user_code}</td>
                          <td className='d-flex justify-content-center align-items-center gap-3 flex-nowrap'>
                            <Link to={`/doctors/view/${doctor.id}`} className='btn btn-sm btn-success'><VisibilityIcon fontSize='0' /></Link>
                            <Link to={`/doctors/edit/${doctor.id}`} className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></Link>
                            <button onClick={() => handleDelete(doctor.id)} className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                          </td>
                        </tr>
                      ))
                    }

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