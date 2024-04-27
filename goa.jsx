import React from 'react';
import './goa.css';
import goaImage from '../Assets/goa1.png';
import goaImage1 from '../Assets/goa-image1.png';
import goaImage2 from '../Assets/goa-image2.png';
import goaImage3 from '../Assets/goa-image3.png';
import goaImage4 from '../Assets/goa-image4.png';
import goaImage5 from '../Assets/goa-image5.png';
import goaImage6 from '../Assets/goa-image6.png';

function Goa() {
    return (
        
       <div class="header1">
        <img src={goaImage} alt="Goa Picture"/> 
        <div class="goa-text">Goa</div>
        <div class="btn-container">
            <div class="overlay-text">
                <p>Goa, coastal bliss, offers sun-soaked beaches and vibrant culture, promising a perfect getaway for relaxation and adventure.</p>
            </div>
            <button class="btn">create a group</button>
            <button class="btn">join a group</button>
        </div>
      
      
        <div class="recommended-title">Recommended Places</div>
     <div class="recommended">
        <div>
            <img src={goaImage1} alt="Goa Image 1"/>
            <div class="place-name">Calangute Beach</div> 
        </div>
        <div>
            <img src={goaImage2} alt="Goa Image 2"/>
            <div class="place-name">Dudhsagar Falls</div> 
        </div>
        <div>
            <img src={goaImage3} alt="Goa Image 3"/>
            <div class="place-name">Basilica of Bom Jesus</div> 
        </div>
    </div>
    <div class="things-to-do">Things to Do</div>

    <div class="recommended">
        <div>
            <img src={goaImage4} alt="Goa Image 4"/>
            <div class="place-name">Scuba Diving</div> 
        </div>
        <div>
            <img src={goaImage5} alt="Goa Image 5"/>
            <div class="place-name">Kayaking</div>
        </div>
        <div>
            <img src={goaImage6} alt="Goa Image 6"/>
            <div class="place-name">Dolphine viewpoint</div>
        </div>
        </div>
    
       </div>
    );
}

export default Goa;
