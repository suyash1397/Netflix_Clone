import React, { useEffect, useState } from 'react';
import "./nav.css";

function Nav() {

    const [show, setShow] = useState(false);




    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", () => {
                setShow(false);
                // console.log(show);
            });
        }

    }, []);


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img src="Netflix_2015_logo.svg" alt="Netflix Logo" className="nav__logo" />
            <img src="Netflix-avatar.png" alt="" className="netflix__avatar" />

        </div>
    )
}

export default Nav;