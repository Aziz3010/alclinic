import React, { useEffect, useState } from 'react';
import Helmet from '../components/Helmet';
import '../styles/doctors.css';
import Loader from '../components/Loader';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BoyIcon from '@mui/icons-material/Boy';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    getAllDoctorsFromAPI();
  }, [])

  async function getAllDoctorsFromAPI(searchTirm = null) {
    let {data} = await Axios.get("http://localhost/alclinic/getAllUsers.php");
    // search
    if (searchTirm !== null) {
      const doctorsAfterFilter = data.filter(doctor => doctor.first_name.includes(searchTirm));
      if (doctorsAfterFilter !== []) {
        setDoctors(doctorsAfterFilter);
      } else {
        const doctorsAfterFilter = data.filter(doctor => doctor);
        setDoctors(doctorsAfterFilter);
      }
    } else {
      setDoctors(data);
    }
    // loader
    if(data.length > 0) {
      setLoader(false);
    }
    else {
      setLoader(true);
    }
  }

  const handleDelete = (id) => {
    console.log(id);
    // call api to delete row by id
    // delete * from `users` where id = 5id
    // return msg [user deleted]
  }

  return (
    <Helmet title='الأطباء'>
      <div className="container">
        <div className="row">

          <div className="col-12">
            <div className="doctors_doctors_table">
              <h3 className='mb-3'>سجل الأطباء</h3>

              <div className='search_total_box mt-4 mb-3'>
                <input onChange={(e) => getAllDoctorsFromAPI(e.target.value)} type="text" className='form-control' placeholder='البحث بإسم الطبيب' />
                <span><BoyIcon /> إجمالي الأطباء: {doctors.length} </span>
              </div>

              { loader === false ?   
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
                      {doctors.length > 0 ? doctors.map((doctor, index) => (
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
                        :
                        <tr className='text-center'><td colSpan='6'>No doctors in Database</td></tr>
                      }
                    </tbody>
                  </table>
                </div>
              : 
                <Loader />
              }

            </div>
          </div>
        </div>
      </div>
    </Helmet>
  )
}

export default Doctors;