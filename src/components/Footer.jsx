import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer id="footer" class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row gy-4">
              <div
                class="col-lg-5 col-md-12 footer-info"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a href="#" class="logo d-flex align-items-center">
                  <span>Nafsy Make Up Site</span>
                </a>
                <p>
                  I'm Miss Nafisa from U/Nazai a make up artist popularly known
                  as Nafsy baby. <br />
                  I use alot of knowlegde in other to come up with a beautify styles such as;<br />
                  Yar Kano antama styles. <br /> <br />
                  Shops use: Visual Studio Code Purpulary known as VS Code
                  Technologies: Node JS, React JS , Github and Vercel as mention
                  ealier.
                </p>
                <div class="social-links mt-3">
                  <a href="#" class="twitter">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="#" class="facebook">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="#" class="instagram">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="#" class="linkedin">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>

              <div
                class="col-lg-2 col-6 footer-links"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <a href="/">Home</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <a href="/about">About us</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>{" "}
                    <a href="/levels">Services</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div
                class="col-lg-2 col-6 footer-links"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h4>My Services</h4>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <a href="#">UI Design</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <a href="#">REST API</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <a href="#">FullStack Web</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <a href="#">Git and Github</a>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i>
                    <a href="#">Deployment on Vercel</a>
                  </li>
                </ul>
              </div>

              <div
                class="col-lg-3 col-md-12 footer-contact text-center text-md-start"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <h4>Contact Us</h4>
                <p>
                  Rimi Kamanzou <br />
                  Chikun, Kaduna
                  <br />
                  Nigeria <br />
                  <br />
                  <strong>Phone:</strong> +234 701 228 016
                  <br />
                  <strong>Email:</strong> jimiyaks3@gmail.com
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container" data-aos="fade-up" data-aos-delay="600">
          <div class="copyright">
            &copy; Copyright
            <strong>
              <span> Sir Jimmy</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits">
            Designed by
            <a href="/" className=" mx-1">
              Bala Jimmy Yakubu
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
