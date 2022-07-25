import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet';
import '../styles/bookings.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import AirlineSeatReclineExtraOutlinedIcon from '@mui/icons-material/AirlineSeatReclineExtraOutlined';
import { Link } from 'react-router-dom';

const Bookings = () => {
  const { type } = useParams();
  const patientsNowNumber = 1;
  const patientsPastNumber = 1;
  const patientsFutureNumber = 2;

  const [showNow, setShowNow] = useState(false);
  const [showPast, setShowPast] = useState(false);
  const [showFuture, setShowFuture] = useState(false);

  useEffect(() => {
    if (type === "now") {
      setShowNow(true);
      setShowPast(false);
      setShowFuture(false);
    } else if (type === "past") {
      setShowNow(false);
      setShowPast(true);
      setShowFuture(false);
    } else if (type === "future") {
      setShowNow(false);
      setShowPast(false);
      setShowFuture(true);
    }
  }, [setShowNow, setShowPast, setShowFuture, type]);

  const handleDelete = (id) => {
    console.log(id);
  }

  return (
    <Helmet title='الحجوزات'>
      <div className="container">
        <div className="row">
          <div className="col-12">

            {showNow && <div className="doctors_doctors_table">
              <h3>سجل الحجوزات الحالية</h3>

              <div className='search_total_box mt-4 mb-3'>
                <input type="text" className='form-control' placeholder='البحث بالجوال' />
                <span><AirlineSeatReclineExtraOutlinedIcon /> إجمالي المرضي: {patientsNowNumber} </span>
              </div>

              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover lh-lg text-nowrap text-center">
                  <thead>
                    <tr>
                      <th scope="col">التسلسل</th>
                      <th scope="col">الاسم</th>
                      <th scope="col">الجوال</th>
                      <th scope="col">سبب الزيارة</th>
                      <th scope="col">السن</th>
                      <th scope="col">التحكم</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>محمد علي</td>
                      <td>01000000025</td>
                      <td>تنظيف اسنان</td>
                      <td>31</td>
                      <td className='d-flex justify-content-center align-items-center gap-2 flex-nowrap'>
                        <Link to='/doctors/visita/4' className='btn btn-sm btn-success'><BeenhereIcon fontSize='0' /></Link>
                        <Link to='/doctors/edit/5' className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></Link>
                        <button onClick={() => handleDelete(5)} className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>}

            {showPast && <div className="doctors_doctors_table">
              <h3>سجل الحجوزات السابقة</h3>

              <div className='search_total_box mt-4 mb-3'>
                <input type="text" className='form-control' placeholder='البحث بالجوال' />
                <span><AirlineSeatReclineExtraOutlinedIcon /> إجمالي المرضي: {patientsPastNumber} </span>
              </div>

              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover lh-lg text-nowrap text-center">
                  <thead>
                    <tr>
                      <th scope="col">التسلسل</th>
                      <th scope="col">الاسم</th>
                      <th scope="col">الجوال</th>
                      <th scope="col">سبب الزيارة</th>
                      <th scope="col">السن</th>
                      <th scope="col">التحكم</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>محمد علي</td>
                      <td>01000000025</td>
                      <td>تنظيف اسنان</td>
                      <td>30</td>
                      <td className='d-flex justify-content-center align-items-center gap-2 flex-nowrap'>
                        <Link to='/doctors/view/5' className='btn btn-sm btn-success'><BeenhereIcon fontSize='0' /></Link>
                        <Link to='/doctors/edit/5' className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></Link>
                        <button onClick={() => handleDelete(5)} className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>}

            {showFuture && <div className="doctors_doctors_table">
              <h3>سجل الحجوزات القادمة</h3>
              
              <div className='search_total_box mt-4 mb-3'>
                <input type="text" className='form-control' placeholder='البحث بالجوال' />
                <span><AirlineSeatReclineExtraOutlinedIcon /> إجمالي المرضي: {patientsFutureNumber} </span>
              </div>

              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover lh-lg text-nowrap text-center">
                  <thead>
                    <tr>
                      <th scope="col">التسلسل</th>
                      <th scope="col">الاسم</th>
                      <th scope="col">الجوال</th>
                      <th scope="col">سبب الزيارة</th>
                      <th scope="col">السن</th>
                      <th scope="col">التحكم</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>محمد علي</td>
                      <td>01000000025</td>
                      <td>تنظيف اسنان</td>
                      <td>30</td>
                      <td className='d-flex justify-content-center align-items-center gap-2 flex-nowrap'>
                        <Link to='/doctors/view/5' className='btn btn-sm btn-success'><BeenhereIcon fontSize='0' /></Link>
                        <Link to='/doctors/edit/5' className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></Link>
                        <button onClick={() => handleDelete(5)} className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                      </td>
                    </tr>

                    <tr>
                      <th>2</th>
                      <td>علي محمد</td>
                      <td>01000000025</td>
                      <td>تنظيف اسنان</td>
                      <td>30</td>
                      <td className='d-flex justify-content-center align-items-center gap-2 flex-nowrap'>
                        <Link to='/doctors/view/5' className='btn btn-sm btn-success'><BeenhereIcon fontSize='0' /></Link>
                        <Link to='/doctors/edit/5' className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></Link>
                        <button onClick={() => handleDelete(5)} className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>}

          </div>
        </div>
      </div>
    </Helmet>
  )
}

export default Bookings;