import React from 'react';
import '../styles/visita.css';
import { useParams } from 'react-router-dom';

const Visita = () => {
    const { patientID } = useParams();

    return (
        <div className="container">

            <div className="row">
                <div className="col-12">
                    <div className="visita_top_details">
                        <h3>الفحص</h3>
                        <h4>كود المريض: {patientID}</h4>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <div className="visita_patient_details">
                        <h5>بيانات المريض</h5>
                        <ul>
                            <li>
                                <h6>إسم:</h6>
                                <span>علي محمد</span>
                            </li>
                            <li>
                                <h6>عمر:</h6>
                                <span>30</span>
                            </li>
                            <li>
                                <h6>نوع الزيارة:</h6>
                                <span>كشف</span>
                            </li>
                            <li>
                                <h6>سبب الزيارة:</h6>
                                <span>حشو عصب</span>
                            </li>
                            <li>
                                <h6>التاريخ المرضي:</h6>
                                <span>مريض قلب</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <div className="visita_doctor_notes">
                        <h5>الروشتة</h5>
                        <form>
                            <textarea></textarea>
                            <button className='btn btn-primary mt-3'>حفظ و طباعة الروشتة</button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Visita