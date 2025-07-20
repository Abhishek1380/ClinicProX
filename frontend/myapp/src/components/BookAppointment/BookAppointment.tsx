import React, { useState } from 'react';
import './BookAppointment.css';

const BookAppointment: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [mobile, setMobile] = useState<string>('');
    const [date, setDate] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValidMobile = /^\d{10}$/.test(mobile);
        const isValidDate = Boolean(date);
        const isValidName = name.trim().length > 0;

        if (isValidName && isValidMobile && isValidDate) {
            alert(`Appointment booked successfully for ${name} on ${date}`);
            setName('');
            setMobile('');
            setDate('');
        } else {
            alert('Please fill in all fields correctly.');
        }
    };

    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 7);

    const formatDate = (date: Date): string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="book-appointment ">
            <section className="hero-section text-center py-5 " style={{ marginBottom: "0" }}>
                <div className="container" style={{ marginTop: "2rem" }}>
                    <h1 className="text-primaryy mb-3">Book Your Appointment</h1>
                    <p className="text-muted">
                        Schedule your visit with ease and convenience. We’re here to provide you the best healthcare services.
                    </p>
                </div>
            </section >

            <section className="form-section py-5">
                <div className="container containerr">
                    <div className="row justify-content-center align-items-center" style={{ width: "100%" }}>
                        <div className="col-md-4 mb-4 slide-from-left">
                            <div className="card shadow p-4 contact-sidebar">
                                <h4 className="text-primaryy">Want to know more ?</h4>
                                <p className="text-muted mb-3">
                                    Contact us for assistance for further queries.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="mb-2">
                                        <strong className="text-primaryy">Phone:</strong> +91-9766830294
                                    </li>
                                    {/* <li className="mb-2">
                                        <strong className="text-primaryy">Email:</strong> support@clinic.com
                                    </li> */}
                                    <li>
                                        <strong className="text-primaryy">Address:</strong> Shop no 20, Sukhwani Heritage, Chikhali Akurdi Rd, near Bhalerao ENT hospital, panchatara Nagar, Bijali Nagar, Ganga Nagar, Akurdi, Pune, Pimpri-Chinchwad, Maharashtra 411035
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-6 slide-from-right">
                        <div className="card shadow-lg p-4" >
                            <h2 className="text-center text-primaryy mb-4">Appointment Form</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="form-label text-primaryy">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter your full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="mobile" className="form-label text-primaryy">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="mobile"
                                        placeholder="Enter your 10-digit mobile number"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        required
                                        pattern="[0-9]{10}"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="date" className="form-label text-primaryy">
                                        Appointment Date
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        required
                                        min={formatDate(today)}
                                        max={formatDate(maxDate)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primaryy w-100">
                                    Confirm Appointment
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>




            <footer className="text-center  text-muted" style={{ marginBottom: "0" }}>
                © 2024 ClinicName. All rights reserved.
            </footer>
        </div >
    );
};

export default BookAppointment;
