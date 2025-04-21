/* eslint-disable no-unused-vars */
import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <div style={{ height: 'auto', width: '100%' }} >
            {/* Testimonial Header */}
            <div className="containerS text-center mt-5 testimonial-header" style={{ marginTop: '30px', marginBottom: '30px', background: " linear-gradient(90deg, rgba(2, 0, 25, 1) 19%, rgba(0, 0, 0, 1) 100%, rgba(0, 212, 255, 1) 100%)", borderRadius: '8px', height: '90px', color: 'white' }}>
                <h2 style={{ color: 'white' } }>Client Testimonials</h2>
                <p className="containerS testimonial-description" style={{ height: 'auto', color: 'white' }}>
                    Our clients have experienced incredible success with our services. Here are some of their experiences working with us.
                </p>
            </div>

            <div className="container" style={{ height: 'auto' ,width:'100%' }}>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="face front-face">
                                <img
                                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
                                    alt="Client from India"
                                    className="profile"
                                />
                                <div className="pt-3 text-uppercase name">Rahul Sharma</div>
                                <div className="designation">CEO, Tech Innovators Pvt. Ltd.</div>
                            </div>
                            <div className="face back-face">
                                <span className="fas fa-quote-left"></span>
                                <div className="testimonial">
                                    The team delivered exceptional results! Their dedication and expertise transformed our business processes. We couldn't be happier with the outcome.
                                </div>
                                <span className="fas fa-quote-right"></span>
                            </div>
                        </div>
                    </div>

                    {/* Client from USA */}
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="face front-face">
                                <img
                                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
                                    alt="Client from USA"
                                    className="profile"
                                />
                                <div className="pt-3 text-uppercase name">Emily Johnson</div>
                                <div className="designation">Marketing Director, Creative Solutions Inc.</div>
                            </div>
                            <div className="face back-face">
                                <span className="fas fa-quote-left"></span>
                                <div className="testimonial">
                                    Their service exceeded our expectations. The project was completed on time and within budget. Highly recommend their professional approach!
                                </div>
                                <span className="fas fa-quote-right"></span>
                            </div>
                        </div>
                    </div>

                    {/* Client from UK */}
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="face front-face">
                                <img
                                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                                    alt="Client from UK"
                                    className="profile"
                                />
                                <div className="pt-3 text-uppercase name">James Williams</div>
                                <div className="designation">Founder, Williams Enterprises</div>
                            </div>
                            <div className="face back-face">
                                <span className="fas fa-quote-left"></span>
                                <div className="testimonial">
                                    Outstanding experience! Their innovative solutions and attentive customer service set them apart from the rest. We look forward to future collaborations.
                                </div>
                                <span className="fas fa-quote-right"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
