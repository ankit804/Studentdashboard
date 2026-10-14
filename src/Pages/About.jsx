import "./About.css";

function About() {
    return (
        <div className="about">
            <p className="about-label">ABOUT US</p>
            <h1>Getting to Know Us</h1>
            <p className="about-description">
                This website is a simple project built with React
                to practise routing and reusable layouts.
            </p>

            <div className="about-card">
                <h2>Our Purpose</h2>
                <p>
                    To learn React step by step by building practical
                    projects and exploring different pages with
                    React Router.
                </p>
            </div>

            <div className="about-card">
                <h2>What We're Learning</h2>
                <p>
                    React components, navigation, nested routes,
                    and the Outlet component.
                </p>
            </div>
        </div>
    );
}

export default About;