import React from 'react';
import { Link } from 'react-router-dom';
 const Success = () => {
    return (
        <div className="container text-center mt-5">
            <div className="card shadow-lg p-5">
                <div className="card-body">
                    <div className="mb-4">
                        <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '5rem' }}></i>
                    </div>
                    <h1 className="card-title">Payment Successful!</h1>
                    <p className="card-text" style={{color:"black"}}>Thank you for your purchase. Your transaction was completed successfully.</p>
                    <div className="d-grid gap-2">
                        <Link to="/" className="btn btn-success btn-lg mt-4">
                            Continue Shopping
                        </Link>
                        <Link to="/cart" className="btn btn-outline-success btn-lg mt-2">
                            View Your Orders
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Success
