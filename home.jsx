import React from 'react';
import './home.css'; // Import CSS file for styling
import goaImage from '../Assets/goa.png'; // Import image files
import manaliImage from '../Assets/manali.png';
import darjeelingImage from '../Assets/darjeeling.png';
import ladakhImage from '../Assets/ladakh.png';
import shillongImage from '../Assets/shillong.png';
import AndamanImage from '../Assets/Andaman.png';
import travelImage from '../Assets/travel.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <header>
                <h1>Make Your Trip</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                      <Link to="/" ><li><a href="#">Login/Signup</a></li></Link>
                    </ul>
                </nav>
            </header>

            <section className="hero" id="home">
                <img src={travelImage} alt="Travel" className="hero-image" />
                <div className="hero-content">
                    <h2>Find Your Perfect Group</h2>
                    <p>Select destination, Join or create group, Chat to make plans and more!!!</p>
                </div>
            </section>

            <section className="destinations">
                <h2>Destinations</h2>
                <div className="destination-container">
                    <div className="destination">
                       <Link to="/goa"> <a href="#">
                            <img src={goaImage} alt="Goa" />
                            <div className="destination-content">
                                <h3>Goa</h3>
                                <p>Description of Goa.</p>
                            </div>
                        </a></Link>
                    </div>
                    <div className="destination">
                        <a href="#">
                            <img src={manaliImage} alt="Manali" />
                            <div className="destination-content">
                                <h3>Manali</h3>
                                <p>Description of Manali.</p>
                            </div>
                        </a>
                    </div>
                    <div className="destination">
                        <a href="#">
                            <img src={darjeelingImage} alt="Darjeeling" />
                            <div className="destination-content">
                                <h3>Darjeeling</h3>
                                <p>Description of Darjeeling.</p>
                            </div>
                        </a>
                    </div>
                    <div className="destination">
                        <a href="#">
                            <img src={ladakhImage} alt="Ladakh" />
                            <div className="destination-content">
                                <h3>Ladakh</h3>
                                <p>Description of Ladakh.</p>
                            </div>
                        </a>
                    </div>
                    <div className="destination">
                        <a href="#">
                            <img src={shillongImage} alt="Shillong" />
                            <div className="destination-content">
                                <h3>Shillong</h3>
                                <p>Description of Shillong.</p>
                            </div>
                        </a>
                    </div>
                    <div className="destination">
                        <a href="#">
                            <img src={AndamanImage} alt="Andaman" />
                            <div className="destination-content">
                                <h3>Andaman</h3>
                                <p>Description of Anndaman.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
    <section id="about" class="about-section">
    <h2>About</h2>
    <div class="about-content">
        <p>Welcome to our travel community! At Make Your Trip, we believe that the best journeys are made together. Whether you're an intrepid explorer or a leisure seeker, our platform is designed to make your travel planning seamless and enjoyable.
            With a simple login, you gain access to a world of possibilities. Begin by selecting your desired destination from our extensive list of breathtaking locales. Once you've chosen your dream destination, you're presented with two exciting options: join an existing group or create your own.
        If you're eager to share the adventure with fellow travelers, explore our vibrant community of existing groups. From solo travelers to families and friends, there's a group waiting for you. Browse through the available groups, discover like-minded individuals, and send a request to join the journey of your choice.</p>
        
        <p>Alternatively, if you're feeling inspired to lead your own expedition, dive into the process of creating your own group. Our platform connects you with other users who share your passion for the destination. Collaborate, communicate, and curate your ideal travel experience by adding at least five members to your group.
        At Make Your Trip, we're committed to fostering connections and facilitating unforgettable experiences. Join us on this journey, where every adventure begins with a click and ends with lifelong memories. Let's explore the world together, one group at a time.</p>
    </div>
</section>

<footer id="contact">
    <p>&copy; 2024 Travel Booking. All rights reserved.</p>
    <div class="footer-contact">
        <p>Contact us: <a href="mailto:info@example.com">info@example.com</a> | Phone: +123456789</p>
    </div>
</footer>
        </div>
    );
}

export default Home;
