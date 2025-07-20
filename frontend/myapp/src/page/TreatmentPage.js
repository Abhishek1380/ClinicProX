import React from 'react';
import Treatments from '../components/Treatments/Treatments';
import TreatmentDetails from '../components/Treatments/TreatmentDetails';
import Cards from '../components/Cards/Cards';
import HomeopathyTreatments from '../components/TreatmentComponent/HomeopathyTreatments';
const TreatmentPage = () => {
    return (
        <>
            <Treatments />
            <Cards />
            <HomeopathyTreatments />
        </>
    )
}

export default TreatmentPage;