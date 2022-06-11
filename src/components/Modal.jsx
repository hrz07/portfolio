import React from 'react';
import one1 from '../assets/1.1.png'
import one2 from '../assets/1.2.png'
import one3 from '../assets/1.3.png'
import two1 from '../assets/2.1.png'
import two2 from '../assets/2.2.png'
import two3 from '../assets/2.3.png'
import three1 from '../assets/3.1.png'
import three2 from '../assets/3.2.png'
import three3 from '../assets/3.3.png'
const Modal = () => {
    return (
        <div>
            <input type="checkbox" id="one" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative text-black">
                    <label for="one" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                   <img src={one1} alt="screenshot1" />
                   <img src={one2} alt="screenshot2" />
                   <img src={one3} alt="screenshot3" />
                    <p className="py-4 text-black font-bold">Feature :</p>
                    <li>tooLzz is a MERN stack based web application</li>
                    <li>user can order product</li>
                    <li>user can edit/upgrade his/her account</li>
                    <li>user can give review</li>
                    <li>admin can add another admin</li>
                    <li>admin can upload and delete any products</li>
                    <li>admin can see all user list</li>
                    <li>all data stored in mongodb database</li>
                    <li>data protected by JWT</li>
                    <p className="py-4 text-black font-bold">Technologies used :</p>
                    <li>ReactS</li>
                    <li>Firebase</li>
                    <li>React Router</li>
                    <li>React Query</li>
                    <li>React hook form</li>
                    <li>React firebase hook</li>
                    <li>Tostify</li>
                    <li>JWT</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                </div>
            </div>
            <input type="checkbox" id="two" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative text-black">
                    <label for="two" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                   <img src={two1} alt="screenshot1" />
                   <img src={two2} alt="screenshot2" />
                   <img src={two3} alt="screenshot3" />
                    <p className="py-4 text-black font-bold">Feature :</p>
                    <li>seller can upload his/hes product</li>
                    <li>seller can delete products</li>
                    <li>seller can update is products quantity</li>
                    <li>Private Routes</li>
                    <li>seller login/ logout system</li>
                    <p className="py-4 text-black font-bold">Technologies used :</p>
                    <li>ReactS</li>
                    <li>Firebase</li>
                    <li>React Router</li>
                    <li>React firebase hook</li>
                    <li>Tostify</li>
                    <li>JWT</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                </div>
            </div>
            <input type="checkbox" id="three" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative text-black">
                <label for="three" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
               <img src={three1} alt="screenshot1" />
               <img src={three2} alt="screenshot2" />
               <img src={three3} alt="screenshot3" />
                <p className="py-4 text-black font-bold">Feature :</p>
                <li>Private route</li>
                <li>Authentication by email Password or google</li>
                <li>Services</li>
                <li>Checkout</li>
                <li>Blog section</li>
                <li>About me</li>
                <p className="py-4 text-black font-bold">Technologies used :</p>
                <li>ReactS</li>
                <li>Firebase</li>
                <li>React Router</li>
                <li>React firebase hook</li>
                <li>Tostify</li>
            </div>
        </div>
        </div>
    );
};

export default Modal;