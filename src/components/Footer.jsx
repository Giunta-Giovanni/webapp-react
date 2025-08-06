// importiamo parte di link del modulo react-router
import BoxLink from "./BoxLinks";
import categorylinks from "../data/categorylinks";

const { categorylinks1, categorylinks2, categorylinks3 } = categorylinks
export default function Footer() {
    return (
        <footer>
            < div className="container" >

                {/* social link */}
                <div className="social-links">

                    <ul className="channel p-0">
                        <li className="single-channel">
                            <a href="#">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>

                        </li>
                        <li className="single-channel">
                            <a href="">
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                        </li>
                        <li className="single-channel">
                            <a href="">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>

                        </li>
                        <li className="single-channel">
                            <a href="">
                                <i className="fa-brands fa-youtube"></i>
                            </a>

                        </li>

                    </ul>
                </div>

                {/* member footer links */}
                <div className="member-footer-links">
                    <div className="link-col">
                        <BoxLink linkCategory={categorylinks1} />
                    </div>
                    <div className="link-col">
                        <BoxLink linkCategory={categorylinks2} />
                    </div>
                    <div className="link-col">
                        <BoxLink linkCategory={categorylinks3} />
                    </div>
                    {/* <div className="link-col">
                        <BoxLink linkCategory={categorylinks4} />
                    </div> */}
                </div>



                {/* member footer service */}
                <div className="member-footer-service">
                    <button className="service-code"> Codice di servizio</button>
                </div>

                {/* member footer copyright */}
                <div className="member-footer-copyright">
                    <span>© 1997-2025 L/brary Film, Inc.</span>
                </div>


            </div >
        </footer >

    )
}