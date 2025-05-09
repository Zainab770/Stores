import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faLock, faHeadset, faUndo, faCogs } from "@fortawesome/free-solid-svg-icons";
import Home3 from "./Home3";
const Home1=()=>{
    return(
        <>
        <div className="containers">
        <div class="feature-card">
        <div class="feature-icon">
        <FontAwesomeIcon icon={faTruck} /> 
        </div>
        <div class="feature-text">
            <h3>Free Shipping</h3>
            <p>Free shipping on orders above 1600</p>
        </div>
    </div>
    <div class="feature-card">
        <div class="feature-icon">
        <FontAwesomeIcon icon={faLock} /> 
        </div>
        <div class="feature-text">
            <h3>Secure Payment</h3>
            <p>Your payments are protected with SSL encryption.</p>
        </div>
    </div>
    <div class="feature-card">
        <div class="feature-icon">
        <FontAwesomeIcon icon={faHeadset} />  
        </div>
        <div class="feature-text">
            <h3>Customer Support</h3>
            <p>Customer support 24h a day</p>
        </div>
    </div>
    <div class="feature-card">
        <div class="feature-icon">
        <FontAwesomeIcon icon={faUndo} /> 
        </div>
        <div class="feature-text">
            <h3>Easy Returns</h3>
            <p>Return your items easily within 30 days.</p>
        </div>
    </div>
    <div class="feature-card">
        <div class="feature-icon">
        <FontAwesomeIcon icon={faCogs} /> 
        </div>
        <div class="feature-text">
            <h3>Top Quality</h3>
            <p>Only the best products for our customers.</p>
        </div>
    </div>
</div>
<Home3/>
        </>
    )
}
export default Home1