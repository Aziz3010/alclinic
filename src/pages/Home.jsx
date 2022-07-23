import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet';
import '../styles/home.css';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const Home = () => {
  return (
    <Helmet title='الصفحة الرئيسية'>
      <div className="container">
        
        <div className="row">
          <div className="col-md-8 col-sm-6">
            <div className="right_side_home">
              <div className="about_us item_right_home">
                <h4>الشركة المالكة</h4>
                <p>انشأت شركة <span>أحمد عبدالعزيز</span> تطبيق <span>العيادة</span> و هي شركة ناشئة بمجال السوفت ووير أٌسست سنة 2022 و تخطو بقوة نحو التقدم التكنولوجي بجمهورية مصر العربية و الوطن العربي</p>
              </div>

              <div className="our_goals item_right_home">
                <h4>أهداف التطبيق</h4>
                <ul>
                  <li><h6>المساهمة بالتطور التكنولوجي</h6></li>
                  <li><h6>تقديم حلول مبتكرة لعملائنا</h6></li>
                  <li><h6>تسهيل و تسريع العمل علي عملائنا</h6></li>
                  <li><h6>تقديم أفضل الخدمات بأفضل جودة و أنسب الأسعار</h6></li>
                  <li><h6>تقديم أفضل خدمة عملاء قبل و بعد البيع</h6></li>
                </ul>                
              </div>

              <div className="contact_us item_right_home">
                <h4>تواصل معنا</h4>
                <ul>
                  <li>
                    <span>البريد الإلكتروني</span>
                    <p>a.abdelazizg@gmail.com</p>
                  </li>

                  <li className='phone_number'>
                    <span>الجوال</span>
                    <p>+20 106 9855 288</p>
                  </li>

                  <li>
                    <span>المقر الرئيسي</span>
                    <p>8 شارع التحرير ، الدقي - الجيزة</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">

            <div className="left_side_home">
              
              <div className="ads_head">
                <h5>إعلانات</h5>
              </div>
              
              <div className="ads_content">
                <h6>إعلانات</h6>
              </div>

            </div>
          
          </div>
        </div>

        <h4 className='prices_title'>الباقات</h4>

        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="qouta_item basic">
              <h5>الأساسية</h5>
              <span className='price'>$100/year</span>
              <p>قم بالإشتراك بالباقة الأساسية و أحصل علي</p>

              <ul>
                <li className='yes'><CheckIcon /><h6>شاشة تحكم</h6></li>
                <li className='yes'><CheckIcon /><h6><span>1</span> شاشة طبيب</h6></li>
                <li className='no'><CloseIcon /><h6><span>0</span> شاشة أدمن</h6></li>
                <li className='yes'><CheckIcon /><h6><span>1</span> شاشة إستقبال</h6></li>
                <li className='yes'><CheckIcon /><h6>شاشة للحجوزات</h6></li>
                <li className='no'><CloseIcon /><h6>شاشة للمرضي</h6></li>
                <li className='no'><CloseIcon /><h6>شاشة للمالية</h6></li>
                <li className='no'><CloseIcon /><h6>شاشة للمخازن</h6></li>
              </ul>

              <Link to='/subscribe/basic' className='subscribe_btn'>إشتراك</Link>

            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="qouta_item vip">
              <h5>المميزة</h5>
              <span className='price'>$200/year</span>
              <p>قم بالإشتراك بالباقة المميزة و أحصل علي</p>

              <ul>
                <li className='yes'><CheckIcon /><h6>شاشة تحكم</h6></li>
                <li className='yes'><CheckIcon /><h6><span>10</span> شاشة طبيب</h6></li>
                <li className='yes'><CheckIcon /><h6><span>2</span> شاشة أدمن</h6></li>
                <li className='yes'><CheckIcon /><h6><span>5</span> شاشة إستقبال</h6></li>
                <li className='yes'><CheckIcon /><h6>شاشة للحجوزات</h6></li>
                <li className='yes'><CheckIcon /><h6>شاشة للمرضي</h6></li>
                <li className='yes'><CheckIcon /><h6>شاشة للمالية</h6></li>
                <li className='yes'><CheckIcon /><h6>شاشة للمخازن</h6></li>
              </ul>

              <Link to='/subscribe/vip' className='subscribe_btn'>إشتراك</Link>

            </div>
          </div>
          
          <div className="col-md-4 col-sm-6">
            <div className="qouta_item mediam">
              <h5>المتوسطة</h5>
              <span className='price'>$150/year</span>
              <p>قم بالإشتراك بالباقة المتوسطة و أحصل علي</p>

              <ul>
                <li className='yes'><CheckIcon /><h6>شاشة تحكم</h6></li>
                <li className='yes'><CheckIcon /><h6><span>5</span> شاشة طبيب</h6></li>
                <li className='yes'><CheckIcon /><h6><span>1</span> شاشة أدمن</h6></li>
                <li className='yes'><CheckIcon /><h6><span>2</span> شاشة إستقبال</h6></li>
                <li className='yes'><CheckIcon /><h6>شاشة للحجوزات</h6></li>
                <li className='yes'><CheckIcon /><h6>شاشة للمرضي</h6></li>
                <li className='no'><CloseIcon /><h6>شاشة للمالية</h6></li>
                <li className='no'><CloseIcon /><h6>شاشة للمخازن</h6></li>
              </ul>

              <Link to='/subscribe/mediam' className='subscribe_btn'>إشتراك</Link>

            </div>
          </div>
        </div>

      </div>
    </Helmet>
  )
}

export default Home;