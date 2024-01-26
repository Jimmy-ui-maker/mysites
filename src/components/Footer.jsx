import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer id="footer" class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row gy-4">
              <div class="col-lg-5 col-md-12 footer-info">
                <Link href="#" class="logo d-flex align-items-center">
                  <span>Nafsy Make Up Site</span>
                </Link>
                <p>
                  I'm Miss Nafisa from U/Bazai a make up artist popularly known
                  as Nafsy baby. <br />
                  I use alot of knowlegde in other to come up with a beautify
                  styles such as;
                  <br />
                  Yar Kano antama styles. <br /> <br />
                  Shops location: Zaria kongo, Ikara U/Bazai, and Kaduna Central
                  Market.
                </p>
              </div>

              <div class="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <Link href="/">Home</Link>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <Link href="#about">About us</Link>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <Link href="#team">Team Members</Link>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <Link href="#features">Services Feautures</Link>
                  </li>

                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <Link href="">Privacy policy</Link>
                  </li>
                </ul>
              </div>

              <div class="col-lg-2 col-6 footer-links">
                <h4>My Services</h4>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <Link href="">Hair Dredlug</Link>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <Link href="">Saloon</Link>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <Link href="">Fingers Stuffs</Link>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <Link href="">Eye things</Link>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <Link href="">Hair Sewing</Link>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  Kongo Zaria <br />
                  Kaduna State
                  <br />
                  Nigeria <br />
                  <br />
                  <strong>Phone:</strong> +234 906 183 9480
                  <br />
                  <strong>Email:</strong> yarbaba@gmail.com
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            &copy; Copyright
            <strong>
              <span> Sir Jimmy</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits">
            Designed by
            <Link href="/" className=" mx-1">
              Bala Jimmy Yakubu
            </Link>
          </div>
          <div className="d-flex justify-content-end fixed-bottom">
            <Link href="" className="scroll-back ">
              <i className=" bi bi-arrow-up btn  rounded-5"></i>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
