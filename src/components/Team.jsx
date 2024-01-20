import React from "react";

export default function Team() {
  return (
    <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title text-center text-lg-start ">
          <h2 className=" ">My Team Members</h2>
          <p>You're free to contact each one for more information.</p>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <div class="member d-flex align-items-start">
              <div class="pic">
                <img src="/img/abc.jpg" class="img-fluid" alt="" />
              </div>
              <div class="member-info">
                <h4>Yarbaba</h4>
                <span>Chief Executive Officer</span>
                <p>From Ikara, U/Bazai, Kaduna State.</p>
                <div class="social">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i class="bi bi-linkedin"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-lg-6 mt-4 mt-lg-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="member d-flex align-items-start">
              <div class="pic">
                <img src="/img/jimmy.jpg" class="img-fluid" alt="" />
              </div>
              <div class="member-info">
                <h4>Bala Jimmy Yakubu</h4>
                <span>Secretary Manager</span>
                <p>From Giwa Janbaba, Kaduna State.</p>
                <div class="social">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i class="bi bi-linkedin"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="member d-flex align-items-start">
              <div class="pic">
                <img src="/img/nafbby.jpg" class="img-fluid" alt="" />
              </div>
              <div class="member-info">
                <h4>Hadiza Yunusa</h4>
                <span>Treasurer</span>
                <p>
                  From Tudun Wada, Kano State.
                </p>
                <div class="social">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i class="bi bi-linkedin"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
            <div class="member d-flex align-items-start">
              <div class="pic">
                <img src="/img/suzi.jpg" class="img-fluid" alt="" />
              </div>
              <div class="member-info">
                <h4>Suzzie Yakubu Bala</h4>
                <span>Accountant</span>
                <p>
                  From Rimi Kamanzou, Kaduna State.
                </p>
                <div class="social">
                  <a href="">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i class="bi bi-linkedin"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
