import './contact.scoped.css';


function Contact() {
    return (
        <div className="main-container-contact">
            <div className="header-container">
                <div className="header-wrapper">
                    <h1>Contact Us</h1>
                </div>
                <div className="content-card">
                    <h3>Have any questions?   We'd love to hear from you.</h3>
                </div>
            </div>

            <div className="content-container">
                <div className="content-wrap">
                    <div className="title-wrapper">
                        <h2>Support Team</h2>
                    </div>
                    <div className="text-wrapper">
                        <p>
                            Are you interestead in working on our customer service team? Email
                            us.
                        </p>
                    </div>
                    <div className="button">
                        <button>
                            <a href="/#">
                                Contact Us!
                            </a>
                        </button>
                    </div>
                </div>
                <div className="content-wrap">
                    <div className="title-wrapper">
                        <h2>Help & Support</h2>
                    </div>
                    <div className="text-wrapper">
                        <p>
                            Our support team is spread across the globe to give you answers
                            fast.
                        </p>
                    </div>
                    <div className="button">
                        <button>
                            <a href="/#">
                                Vist Suport Page
                            </a>
                        </button>

                    </div>

                    <div className="bottom-title-wrapper">
                        <a href="/#">
                            <h6>SUBMIT A REQUEST</h6>
                        </a>
                    </div>

                </div>
                <div className="content-wrap">
                    <div className="title-wrapper">
                        <h2>Sales</h2>
                    </div>
                    <div className="text-wrapper">
                        <p>
                            Get in touch with our sales team to see how we can work together.
                        </p>
                    </div>
                    <div className="button">
                        <button>
                            <a href="/#">
                                Contact Sales
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Contact;
