import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AboutMe from '../components/AboutMe/AboutMe';
import Footer from '../components/Footer/Footer';
import FAQ from '../components/FAQ/FAQ';
import QuickDoctorInfo from '../components/QuickDoctorInfo/QuickDoctorInfo';
import MapAndTimings from '../components/MapAndTimings/MapAndTimings';
import Treatments from '../components/Treatments/Treatments';
import Blogs from '../components/Blogs/Blogs';
import BlogsDetail from '../components/Blogs/BlogsDetail';
import TreatmentDetails from '../components/Treatments/TreatmentDetails';
import Review from '../components/Review/Review';


import Videos from '../components/Videos/Videos';
import BookAppointment from '../components/BookAppointment/BookAppointment';
import Services from '../components/Services/Services';
import Why from '../components/Why/Why';
import MockFAQ from '../components/MockFAQ/MockFAQ';
// import SampleFAQ from '../components/SampleFAQ/sampleFAQ';
import LandingPage from '../components/LandingPage/LandingPage';




const HomePage = () => {
    return (
        <>



            <LandingPage />
            <Services />
            <Why />

            <MapAndTimings />
            <div className="text-center" style={{ margin: "50px auto" }}>
                <h3>Reviews</h3>
                <Review />
            </div>
            <Videos />
            <MockFAQ />





            {/* <BookAppointment /> */}







        </>
    )
}

export default HomePage;