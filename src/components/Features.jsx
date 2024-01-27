import Link from "next/link";
import React from "react";

export default function Features() {
  return (
    <section id="features" class="features">
      <div class="container" data-aos="fade-up">
        <header class="section-title">
          <h2>My Services and Features</h2>
          <p>Check bellow to see my work experience.</p>
        </header>

        <div class="row row1">
          <div class="col-lg-6">
            <img src="/img/face1.jpg" class="img-fluid" alt="" />
          </div>

          <div class="col-lg-6 mt-5 mt-lg-0 d-flex">
            <div class="row align-self-center gy-4">
              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <Link className=" text-decoration-none" href={"/nails"}>
                    <h3>Fixing of nails</h3>
                  </Link>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Fixing of eye lashes</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Bridal make up</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Birthay make up</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Casual make up</h3>
                </div>
              </div>

              <div class="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                <div class="feature-box d-flex align-items-center">
                  <i class="bi bi-check"></i>
                  <h3>Lips painting</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row row3 feature-icons" data-aos="fade-up">
          <h3>What people say about my work.</h3>

          <div class="row ">
            <div
              class="col-xl-4 text-center"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img src="/img/face2.jpg" class="img-fluid " alt="" />
            </div>

            <div class="col-xl-8 d-flex content">
              <div class="row align-self-center gy-4">
                <div class="col-md-6 icon-box" data-aos="fade-up">
                  <i class="ri-line-chart-line"></i>
                  <div>
                    <h4>Jimmy Yakubu</h4>
                    <p>
                      Keep pushing, this is wow, just wow, i love the services
                      i'm recieing in kaduna central branch, really awesome.
                    </p>
                  </div>
                </div>

                <div
                  class="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i class="ri-stack-line"></i>
                  <div>
                    <h4>Hanne Maisamari.</h4>
                    <p>
                      Gaskiya abin na yi ne, sai kin je ko ka je ka tabbatar da
                      kanka, yadda aikinta ke da ban sha'awa, aikin yayi ne
                      kawai, turawa suka ce Very fafet.
                    </p>
                  </div>
                </div>

                <div
                  class="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i class="ri-brush-4-line"></i>
                  <div>
                    <h4>Abdul Mohammad</h4>
                    <p>
                      Alhamdulilla, Yarbaba kennan, iye, abin ba cewa komai.
                      Allah bada more wisdom.
                    </p>
                  </div>
                </div>

                <div
                  class="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i class="ri-magic-line"></i>
                  <div>
                    <h4>Ynayna</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>

                <div
                  class="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i class="ri-command-line"></i>
                  <div>
                    <h4>James Zamani</h4>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      A, sed!
                    </p>
                  </div>
                </div>

                <div
                  class="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <i class="ri-radar-line"></i>
                  <div>
                    <h4>Yarbaba</h4>
                    <p>
                      I myself will love to appreciate you all for all the good
                      comments, godiya nike, Allah bar mu tare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
