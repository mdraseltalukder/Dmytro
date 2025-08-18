function loadNavbar() {
  return `
    <section>
      <nav class="navbar">
        <div class="nav-container">
          <!-- Logo -->
          <div class="logo-container">
            <a href="/" class="logo"><img src="img/home/logo.png" alt="logo" /></a>
          </div>

          <!-- Desktop Menu -->
          <ul class="nav-menu">
            <li class="nav-item has-dropdown">
              <a href="#" class="nav-link"> About&nbsp;Us </a>
            </li>

            <li class="nav-item has-dropdown">
              <a href="#" class="nav-link">
                Why&nbsp;BookTix
                <img src="img/home/down-arrow.svg" alt="down-arrow" />
              </a>
            </li>

            <li class="nav-item has-dropdown">
              <a href="#" class="nav-link">
                Customers
                <img src="img/home/down-arrow.svg" alt="down-arrow" />
              </a>
              <ul class="dropdown-menu dropdown-part-1">
                <div class="consumer-part">
                  <div class="customer">
                    <span class="customer-title">Customers</span>
                    <div class="part-one">
                      <a href="#" class="customer-part">
                        <div class="ticket">
                          <img src="img/home/ticket.png" alt="" />
                        </div>
                        <div class="ticket-info">
                          <div class="flex-title">
                            <h3>School Theatre</h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </div>
                          <p>Lorem ipsum dolor sit amet</p>
                        </div>
                      </a>
                      <a href="#" class="customer-part">
                        <div class="ticket">
                          <img src="img/home/headphone.png" alt="" />
                        </div>
                        <div class="ticket-info">
                          <h3>Dance Studio</h3>
                          <p>Lorem ipsum dolor sit amet</p>
                        </div>
                      </a>
                     

                      <a href="#" class="customer-part">
                        <div class="ticket">
                          <img src="img/home/rocket.png" alt="" />
                        </div>
                        <div class="ticket-info">
                          <h3>School Athletics</h3>
                          <p>Lorem ipsum dolor sit amet</p>
                        </div>
                      </a>
                      <a href="#" class="customer-part">
                        <div class="ticket">
                          <img src="img/home/headphone.png" alt="" />
                        </div>
                        <div class="ticket-info">
                          <h3>Dance Studio</h3>
                          <p>Lorem ipsum dolor sit amet</p>
                        </div>
                      </a>
                       <a href="#" class="customer-part">
                        <div class="ticket">
                          <img src="img/home/more.png" alt="" />
                        </div>
                        <div class="ticket-info">
                          <h3>More</h3>
                          <p>Lorem ipsum dolor sit amet</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </ul>
            </li>

            <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
            <li class="nav-item"><a href="resources.html" class="nav-link">Resources</a></li>
          </ul>

          <!-- Desktop Actions -->
          <div class="nav-actions">
            <div>
              <div>
                <li class="nav-item has-dropdown has-dropdown-btn">
                  <a href="#" class="btn-outline btn">
                    <img
                      class="headset"
                      src="img/home/Headset.png"
                      alt="headphone"
                    />
                    Get&nbsp;Help

                    <img src="img/home/down-arrow.svg" alt="down-arrow" />
                  </a>
                  <div class="dropdown-menu dropdown-part-2">
                    <div class="btn-desktop-dropdown">
                      <span class="customer-title">Get Help</span>
                      <div class="btn-drop">
                        <div class="btn-drop-img">
                          <img src="img/home/plus.png" alt="" />
                        </div>
                        <div class="btn-drop-text">
                          <h3>Ticket Buyers Support</h3>
                          <p>Lorem ipsum dolor sit amet</p>
                        </div>
                      </div>
                      <div class="btn-drop">
                        <div class="btn-drop-img">
                          <img src="img/home/apple.png" alt="" />
                        </div>
                        <div class="btn-drop-text">
                          <h3>Knowledge Center</h3>
                          <p>Lorem ipsum dolor sit amet</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            </div>
            <a href="#" class="btn btn-primary">
              Let's&nbsp;Connect
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="arrow-icon" >
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

            </a>
          </div>

          <!-- Mobile Toggle -->
          <button class="mobile-toggle" id="mobileToggle">
            <img class="menu" src="img/home/menu.png" alt="" />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="clear size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Overlay -->
      <div class="mobile-overlay mobile-only" id="mobileOverlay"></div>

        <!-- Mobile Overlay -->
      <div class="mobile-overlay" id="mobileOverlay"></div>
      <!-- Mobile Menu -->
      <div class="mobile-menu" id="mobileMenu">
        <ul class="mobile-nav-list">
          <li class="mobile-nav-item">
            <a href="#" class="mobile-nav-link">About Us</a>
          </li>

          <li class="mobile-nav-item has-dropdown">
            <a href="#" class="mobile-nav-link">
              Why BookTix
              <img
                src="img/home/down-arrow.svg"
                alt="down-arrow"
                class="dropdown-arrow"
              />
            </a>
            <ul class="mobile-dropdown"></ul>
          </li>

          <li class="mobile-nav-item has-dropdown">
            <a href="#" class="mobile-nav-link">
              Customers
              <img
                src="img/home/down-arrow.svg"
                alt="down-arrow"
                class="dropdown-arrow"
              />
            </a>
            <ul class="mobile-dropdown">
              <div class="consumer-part">
                <div class="customer">
                  <div class="part-one">
                    <a href="#" class="customer-part">
                      <div class="ticket">
                        <img
                          src="img/home/mobile-nav1.png"
                          alt=""
                          width="20"
                          height="20"
                        />
                      </div>
                      <div class="ticket-info">
                        <div class="flex-title">
                          <h3>School Theatre</h3>
                        </div>
                      </div>
                    </a>
                    <a href="#" class="customer-part">
                      <div class="ticket">
                        <img
                          src="img/home/mobile-nav2.png"
                          alt=""
                          width="20"
                          height="20"
                        />
                      </div>
                      <div class="ticket-info">
                        <h3>Dance Studio</h3>
                      </div>
                    </a>

                    <a href="#" class="customer-part">
                      <div class="ticket">
                        <img
                          src="img/home/mobile-nav3.png"
                          alt=""
                          width="20"
                          height="20"
                        />
                      </div>
                      <div class="ticket-info">
                        <h3>School Athletics</h3>
                      </div>
                    </a>
                    <a href="#" class="customer-part">
                      <div class="ticket">
                        <img
                          src="img/home/mobile-nav4.png"
                          alt=""
                          width="20"
                          height="20"
                        />
                      </div>
                      <div class="ticket-info">
                        <h3>Dance Studio</h3>
                      </div>
                    </a>
                    <a href="#" class="customer-part">
                      <div class="ticket">
                        <img
                          src="img/home/mobile-nav5.png"
                          alt=""
                          width="20"
                          height="20"
                        />
                      </div>
                      <div class="ticket-info">
                        <h3>More</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </li>

          <li class="mobile-nav-item">
            <a href="#" class="mobile-nav-link">Pricing</a>
          </li>
          <li class="mobile-nav-item">
            <a href="resources.html" class="mobile-nav-link">Resources</a>
          </li>
        </ul>

        <div class="mobile-actions">
          <a href="#" class="btn-outline btn">
            <img src="img/home/Headset.png" alt="headphone" />
            Get Help
          </a>

          <a href="#" class="btn btn-primary">
            Let's Connect
            <svg class="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>`;
}

function renderNavbar(nav) {
  document.getElementById(nav).innerHTML = loadNavbar();
}
