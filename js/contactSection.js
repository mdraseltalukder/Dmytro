function loadContactSection() {
  return ` <section class="contact-section">
      <!-- Left Content -->
      <div class="contact container">
        <div class="content">
          <div class="header-text section-label">Start Today</div>
          <h2 class="main-heading-contact" style="color: white">
            Affordable Pricing, No Hidden Fees
          </h2>
          <p class="description">
            Experience seamless ticketing with no upfront costs. Only pay when
            you sell your tickets.
          </p>
        </div>

        <!-- Center Illustration -->
        <div class="illustration-placeholder">ILLUSTRATION</div>

        <!-- Right Contact Form -->
        <div class="contact-form">
          <form>
            <div class="form-group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="input-icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clip-rule="evenodd"
                />
              </svg>

              <input
                type="text"
                class="form-input"
                placeholder="Name *"
                required
              />
            </div>

            <div class="form-group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="input-icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clip-rule="evenodd"
                />
              </svg>

              <input type="tel" class="form-input" placeholder="Phone" />
            </div>

            <div class="form-group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="input-icon"
              >
                <path
                  d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"
                />
                <path
                  d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"
                />
              </svg>

              <input
                type="email"
                class="form-input"
                placeholder="Email *"
                required
              />
            </div>

            <button type="submit" class="submit-btn">Contact our Team</button>
          </form>
        </div>
      </div>
    </section>`;
}
function renderContactSection(contactSec) {
  document.getElementById(contactSec).innerHTML = loadContactSection();
}
