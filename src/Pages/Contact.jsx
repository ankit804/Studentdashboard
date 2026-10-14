import "./Contact.css";

function Contact() {
    return (
        <div className="contact">
            <p className="contact-label">GET IN TOUCH</p>
            <h1>Contact Us</h1>
            <p className="contact-description">
                Have a question or suggestion? We'd love to hear from you.
            </p>

            <form className="contact-form">
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                />

                <label htmlFor="email">Your Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                />

                <label htmlFor="message">Your Message</label>
                <textarea
                    id="message"
                    placeholder="Write your message..."
                    rows="5"
                />

                <button type="button">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;