
const Footer = () => {
    return (
        <div>
            {/* <div className=' h-[700px] md:h-[554px] md:w-[1540px] mx-auto  p-10 md:p-32 flex flex-col md:flex-row '> */}

            <div>
                <footer className="footer p-10 bg-neutral text-neutral-content">

                    <div className="md:container md:mx-auto">
                    </div>

                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Estate View</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Site Map</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav>
                        <p>Copyright © 2024 - All right reserved</p>
                    </nav>
                </footer>

            </div>
        </div>
    );
};

export default Footer;