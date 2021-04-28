import React, {useState, useEffect} from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp0n8ohKuH1K9oE6UzulPLvSDr5sZIH4TFsA&usqp=CAU" alt="Netflix Logo" />
            <img className="nav_avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="Avatar Icon" />
        </div>
    )
}

export default Nav
