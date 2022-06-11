import React from 'react';
import one1 from '../assets/1.1.png'
import one2 from '../assets/1.2.png'
import one3 from '../assets/1.3.png'
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
        </div>
    );
};

export default Modal;