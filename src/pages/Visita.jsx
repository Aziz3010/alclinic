import React from 'react';
import '../styles/visita.css';
import { useParams } from 'react-router-dom';

const Visita = () => {
    const { patientID } = useParams();

    const handleSaveAndPrint = (e) => {
        e.preventDefault();
        console.log("Print");
        // const body = document.querySelector("body");
        // const visitaText = document.querySelector(".visita_doctor_notes textarea").value;
        // body.innerHTML = visitaText;
        // window.print();
        // body.innerHTML = body;
    }

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

            <div className="row mt-4 mb-4">
                <div className="col-12">
                    <div className="visita_doctor_notes">
                        <h5>الروشتة</h5>
                        <form>
                            <textarea></textarea>
                            <div className="mt-4 mb-4">
                                <label htmlFor="patient_scan"><h5 className='m-0'>إرفاق الأشعة</h5></label>
                                <input className="form-control mt-2" type="file" id="patient_scan" />
                            </div>
                            <button onClick={(e) => handleSaveAndPrint(e)} className='btn btn-primary mt-3'>حفظ و طباعة الروشتة</button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Visita