import "./Home.css"

function Home() {
    return (<>
        <div className="home">
            <p className="welcome">WELCOME BACK 👋</p>
            <h1>This is your Home Page.</h1>
            <p className="description">
                Explore the website using the sidebar navigation.
            </p>

            <div className="home-card">
                <h2>Getting Started</h2>
                <p>
                    Navigate to the About and Contact pages
                    to explore your website.
                </p>
            </div>
        </div>
        </>
    );
}

export default Home;