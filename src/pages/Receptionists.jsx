import React, { useState } from 'react';
import Helmet from '../components/Helmet';
import '../styles/receptionists.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import AirlineSeatReclineExtraOutlinedIcon from '@mui/icons-material/AirlineSeatReclineExtraOutlined';

const Receptionists = () => {
  const patientsNumber = 8;
  const patientsNowNumber = 6;

  // call api to get all patients
  // call api to get all today booking

  const [newPatient, setNewPatient] = useState(false);
  const [oldPatient, setOldPatient] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Done");
  };

  const getoptionsValue = (e) => {
    if (e.target.firstChild.data === 'مريض جديد') {
      setNewPatient(true);
      setOldPatient(false);
      setCurrentPatient(false);
    }
    else if (e.target.firstChild.data === 'مُسجل من قبل') {
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
              <h6 onClick={getoptionsValue} className='receptionists_item'>مريض جديد</h6>
            </div>
          </div>
          <div className="col-md-4 p-1 text-center">
            <div>
              <h6 onClick={getoptionsValue} className='receptionists_item'>مُسجل من قبل</h6>
            </div>
          </div>
          <div className="col-md-4 p-1 text-center">
            <div>
              <h6 onClick={getoptionsValue} className='receptionists_item'>قائمة الإنتظار الحالية</h6>
            </div>
          </div>
        </div>

        {newPatient && <div className="row">
          <div className="col-12">
            <div className="receptionists_form">
              <h3 className='mb-4'>تسجيل مريض جديد</h3>
              <form onSubmit={submitHandler}>
                <input type="text" className="form-control mb-3" placeholder='الاسم الأول' />
                <input type="text" className="form-control mb-3" placeholder='الاسم الثاني' />
                <input type="number" className="form-control mb-3" placeholder='الهاتف' />
                <input type="number" className="form-control mb-3" placeholder='السن' />
                <input type="text" className="form-control mb-3" placeholder='سبب الزيارة' />
                <input type="text" className="form-control mb-3" placeholder='التاريخ المرضي' />
                <div className="d-flex justify-content-start align-items-center gap-4 mb-4">
                  <div>
                    <input type="radio" name="visit_type" id="firstCheck" />
                    <label htmlFor="firstCheck">كشف</label>
                  </div>
                  <div>
                    <input type="radio" name="visit_type" id="secondCheck" />
                    <label htmlFor="secondCheck">إستشارة</label>
                  </div>
                </div>

                <button type='submit' className='btn btn-primary'>تسجيل</button>
              </form>
            </div>
          </div>
        </div>}

        {oldPatient && <div className="row">
          <div className="col-12">
            <div className="receptionists_patients_table">
              <h3>سجل المرضي</h3>

              <div className='search_total_box mt-4 mb-3'>
                <input type="text" className='form-control' placeholder='البحث بالهاتف' />
                <span><AirlineSeatReclineExtraOutlinedIcon /> إجمالي المرضي: {patientsNumber} </span>
              </div>

              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover lh-lg text-nowrap text-center">
                  <thead>
                    <tr>
                      <th scope="col">التسلسل</th>
                      <th scope="col">الاسم</th>
                      <th scope="col">الهاتف</th>
                      <th scope="col">سبب الزيارة</th>
                      <th scope="col">السن</th>
                      <th scope="col">الكود</th>
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
                      <td>1025</td>
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
                      <td>555</td>
                      <td className='d-flex justify-content-center align-items-center gap-2 flex-nowrap'>
                        <button className='btn btn-sm btn-success'><BeenhereIcon fontSize='0' /></button>
                        <button className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></button>
                        <button className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                      </td>
                    </tr>

                    <tr>
                      <th>3</th>
                      <td>محمد علي</td>
                      <td>01000000025</td>
                      <td>تنظيف اسنان</td>
                      <td>30</td>
                      <td>1025</td>
                      <td className='d-flex justify-content-center align-items-center gap-2 flex-nowrap'>
                        <button className='btn btn-sm btn-success'><BeenhereIcon fontSize='0' /></button>
                        <button className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></button>
                        <button className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                      </td>
                    </tr>

                    <tr>
                      <th>4</th>
                      <td>احمد علي</td>
                      <td>01000000025</td>
                      <td>خلع ضرس</td>
                      <td>30</td>
                      <td>555</td>
                      <td className='d-flex justify-content-center align-items-center gap-2 flex-nowrap'>
                        <button className='btn btn-sm btn-success'><BeenhereIcon fontSize='0' /></button>
                        <button className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></button>
                        <button className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                      </td>
                    </tr>

                    <tr>
                      <th>5</th>
                      <td>محمد علي</td>
                      <td>01000000025</td>
                      <td>تنظيف اسنان</td>
                      <td>30</td>
                      <td>1025</td>
                      <td className='d-flex justify-content-center align-items-center gap-2 flex-nowrap'>
                        <button className='btn btn-sm btn-success'><BeenhereIcon fontSize='0' /></button>
                        <button className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></button>
                        <button className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                      </td>
                    </tr>

                    <tr>
                      <th>6</th>
                      <td>احمد علي</td>
                      <td>01000000025</td>
                      <td>خلع ضرس</td>
                      <td>30</td>
                      <td>555</td>
                      <td className='d-flex justify-content-center align-items-center gap-2 flex-nowrap'>
                        <button className='btn btn-sm btn-success'><BeenhereIcon fontSize='0' /></button>
                        <button className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></button>
                        <button className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                      </td>
                    </tr>

                    <tr>
                      <th>7</th>
                      <td>احمد علي</td>
                      <td>01000000025</td>
                      <td>خلع ضرس</td>
                      <td>30</td>
                      <td>555</td>
                      <td className='d-flex justify-content-center align-items-center gap-2 flex-nowrap'>
                        <button className='btn btn-sm btn-success'><BeenhereIcon fontSize='0' /></button>
                        <button className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></button>
                        <button className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                      </td>
                    </tr>

                    <tr>
                      <th>8</th>
                      <td>احمد علي</td>
                      <td>01000000025</td>
                      <td>خلع ضرس</td>
                      <td>30</td>
                      <td>555</td>
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
        </div>}

        {currentPatient && <div className="row">
          <div className="col-12">
            <div className="receptionists_patients_table">
              <h3>قائمة الانتظار</h3>

              <div className='search_total_box mt-4 mb-3'>
                <input type="text" className='form-control' placeholder='البحث بالهاتف' />
                <span><AirlineSeatReclineExtraOutlinedIcon /> إجمالي المرضي: {patientsNowNumber} </span>
              </div>

              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover lh-lg text-nowrap text-center">
                  <thead>
                    <tr>
                      <th scope="col">التسلسل</th>
                      <th scope="col">الاسم</th>
                      <th scope="col">الهاتف</th>
                      <th scope="col">سبب الزيارة</th>
                      <th scope="col">السن</th>
                      <th scope="col">الكود</th>
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
                      <td>355</td>
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
                      <td>200</td>
                      <td className='d-flex justify-content-center align-items-center gap-2 flex-nowrap'>
                        <button className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></button>
                        <button className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                      </td>
                    </tr>

                    <tr>
                      <th>3</th>
                      <td>محمد محمود</td>
                      <td>01000000025</td>
                      <td>حشو عصب</td>
                      <td>30</td>
                      <td>150</td>
                      <td className='d-flex justify-content-center align-items-center gap-2 flex-nowrap'>
                        <button className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></button>
                        <button className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                      </td>
                    </tr>

                    <tr>
                      <th>4</th>
                      <td>محمد علي</td>
                      <td>01000000025</td>
                      <td>خلع ضرس</td>
                      <td>30</td>
                      <td>355</td>
                      <td className='d-flex justify-content-center align-items-center gap-2 flex-nowrap'>
                        <button className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></button>
                        <button className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                      </td>
                    </tr>

                    <tr>
                      <th>5</th>
                      <td>احمد علي</td>
                      <td>01000000025</td>
                      <td>حشو عصب</td>
                      <td>30</td>
                      <td>200</td>
                      <td className='d-flex justify-content-center align-items-center gap-2 flex-nowrap'>
                        <button className='btn btn-sm btn-warning'><EditIcon fontSize='0' /></button>
                        <button className='btn btn-sm btn-danger'><DeleteIcon fontSize='0' /></button>
                      </td>
                    </tr>

                    <tr>
                      <th>6</th>
                      <td>محمد محمود</td>
                      <td>01000000025</td>
                      <td>حشو عصب</td>
                      <td>30</td>
                      <td>150</td>
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