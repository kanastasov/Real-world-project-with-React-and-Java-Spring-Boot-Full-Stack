import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap'
import Movies from '../components/Movies';
import { useDispatch, useSelector } from 'react-redux';
import Benefits from '../components/Benefits';

const RegisterScreen = () => {


function handleSublitBtn() {
    console.log('RegisterScreen submit')
}

    return (
       <>
       <div className="column-wrapper">
       <Benefits/>
       <div className="register">
       <h1>Sign up for an account</h1>
       <p>Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.</p>
       <form onSubmit={handleSublitBtn}>
         <div class="form-row">
        <div class="col-md-9 mb-3">
        <label for="validationServerUsername">Username</label>
        <div class="input-group">
            <input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required/>
            <div class="invalid-feedback">
            Please choose a username.
            </div>
        </div>
        </div> 

        <div class="col-md-9 mb-3">
        <label for="validationServerPassword">Password</label>
        <div class="input-group">
            <input type="text" class="form-control is-invalid" id="validationServerPassword" placeholder="Password" aria-describedby="inputGroupPrepend3" required/>
            <div class="invalid-feedback">
            Please choose a password.
            </div>
        </div>
        </div> 

        <div class="col-md-9 mb-3">
        <label for="validationServerConfirmPassword">Confirm Password</label>
        <div class="input-group">
            <input type="text" class="form-control is-invalid" id="validationServerConfirmPassword" placeholder="Confirm Password" aria-describedby="inputGroupPrepend3" required/>
            <div class="invalid-feedback">
            Please confirm a password.
            </div>
        </div>
        </div> 


        <div class="col-md-9 mb-3">
        <label for="validationServerEmail">Email</label>
        <div class="input-group">
            <input type="text" class="form-control is-invalid" id="validationServerEmail" placeholder="Email" aria-describedby="inputGroupPrepend3" required/>
            <div class="invalid-feedback">
            Please choose email.
            </div>
        </div>
        </div> 
    </div>

    <Button variant="info" className="me-2">Sign Up</Button>
    <a href ='/api/cancel'>Cancel</a>

    </form>
    </div>
    </div>       
       </>
        
        
        );
}
 
export default RegisterScreen;