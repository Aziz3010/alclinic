import React, { useState } from 'react';
import Helmet from '../components/Helmet';
import '../styles/receptionists.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BeenhereIcon from '@mui/icons-material/Beenhere';

const Receptionists = () => {
  const [newPatient, setNewPatient] = useState(false);
  const [oldPatient, setOldPatient] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Done");
  };

  const getoptionsValue = (e) => {
    if (e.target.firstChild.data === 'جديد') {
      setNewPatient(true);
      setOldPatient(false);
      setCurrentPatient(false);
    }
    else if (e.target.firstChild.data === 'مُسجل') {
      setNewPatient(false);
      setOldPatient(true);
      setCurrentPatient(false);
    }
    else {
      setNewPatient(false);
      setOldPatient(false);
      setCurrentPatient(true);
    }
  };

  return (
    <Helmet title='الإستقبال'>
      <div className="container">

        <div className="row mt-1 mb-4">

          <div className="col-md-4 p-1 text-center">
            <div>
              <h5 onClick={getoptionsValue} className='receptionists_item'>جديد</h5>
            </div>
          </div>

          <div className="col-md-4 p-1 text-center">
            <div>
              <h5 onClick={getoptionsValue} className='receptionists_item'>مُسجل</h5>
            </div>
          </div>

          <div className="col-md-4 p-1 text-center">
            <div>
              <h5 onClick={getoptionsValue} className='receptionists_item'>قائمة الإنتظار</h5>
            </div>
          </div>

        </div>

        { newPatient && <div className="row">
            <div className="col-12">
              <div className="receptionists_form">
                <h3 className='mb-3'>تسجيل مريض جديد</h3>
                <form onSubmit={submitHandler}>
                  <input type="text" className="form-control mb-3" placeholder='الاسم الأول' />
                  <input type="text" className="form-control mb-3" placeholder='الاسم الثاني' />
                  <input type="number" className="form-control mb-3" placeholder='الجوال' />
                  <input type="text" className="form-control mb-3" placeholder='سبب الزيارة' />
                  <input type="number" className="form-control mb-4" placeholder='السن' />
                  <button type='submit' className='btn btn-primary'>تسجيل</button>
                </form>
              </div>
            </div>
          </div> }

        { oldPatient && <div className="row">
            <div className="col-12">
              <div className="receptionists_patients_table">
                <h3 className='mb-3'>سجل المرضي</h3>
                <input type="text" className='form-control mt-4 mb-3 w-50' placeholder='البحث بالجوال' />
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
                          <button className='btn btn-sm btn-success'><BeenhereIcon fontSize='0' /></button>
                          <button className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></button>
                          <button className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                        </td>
                      </tr>

                      <tr>
                        <th>2</th>
                        <td>احمد علي</td>
                        <td>01000000025</td>
                        <td>خلع ضرس</td>
                        <td>30</td>
                        <td className='d-flex justify-content-center align-items-center gap-2 flex-nowrap'>
                          <button className='btn btn-sm btn-success'><BeenhereIcon fontSize='0' /></button>
                          <button className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></button>
                          <button className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> }

        {currentPatient && <div className="row">
          <div className="col-12">
            <div className="receptionists_patients_table">
              <h3 className='mb-3'>قائمة الانتظار</h3>
              <input type="text" className='form-control mt-4 mb-3 w-50' placeholder='البحث بالجوال' />
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
                      <td>خلع ضرس</td>
                      <td>30</td>
                      <td className='d-flex justify-content-center align-items-center gap-2 flex-nowrap'>
                        <button className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></button>
                        <button className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                      </td>
                    </tr>

                    <tr>
                      <th>2</th>
                      <td>احمد علي</td>
                      <td>01000000025</td>
                      <td>حشو عصب</td>
                      <td>30</td>
                      <td className='d-flex justify-content-center align-items-center gap-2 flex-nowrap'>
                        <button className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></button>
                        <button className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>}

      </div>
    </Helmet>
  )
}

export default Receptionists;