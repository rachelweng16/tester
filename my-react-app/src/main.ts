import './style.css'

// another branch test
// Simple router
type Page = 'home' | 'about' | 'menu' | 'locations';
let currentPage: Page = 'home';

function navigate(page: Page) {
  currentPage = page;
  render();
  
  // Update active nav links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
  });
  document.querySelector(`[data-page="${page}"]`)?.classList.add('active');
}

function render() {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  
  const navbar = `
    <nav class="navbar">
      <div class="container">
        <h1 class="logo">Sweet Dreams Bakery</h1>
        <ul class="nav-links">
          <li><a href="#" data-page="home" class="${currentPage === 'home' ? 'active' : ''}">Home</a></li>
          <li><a href="#" data-page="about" class="${currentPage === 'about' ? 'active' : ''}">About</a></li>
          <li><a href="#" data-page="menu" class="${currentPage === 'menu' ? 'active' : ''}">Menu</a></li>
          <li><a href="#" data-page="locations" class="${currentPage === 'locations' ? 'active' : ''}">Locations</a></li>
        </ul>
      </div>
    </nav>
  `;

  const footer = `
    <footer>
      <div class="container">
        <p>&copy; 2026 Sweet Dreams Bakery. All rights reserved.</p>
      </div>
    </footer>
  `;

  let content = '';

  switch (currentPage) {
    case 'home':
      content = `
        <section class="hero">
          <div class="hero-content">
            <h1>Freshly Baked Happiness</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <a href="#" data-page="menu" class="btn">View Our Menu</a>
          </div>
        </section>

        <section class="intro">
          <div class="container">
            <h2>Welcome to Sweet Dreams Bakery</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </section>

        <section class="features">
          <div class="container">
            <div class="feature-grid">
              <div class="feature-card">
                <h3>Fresh Daily</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
              </div>
              <div class="feature-card">
                <h3>Quality Ingredients</h3>
                <p>Cras pulvinar mattis nunc sed blandit libero. Sed cursus, augue a faucibus condimentum.</p>
              </div>
              <div class="feature-card">
                <h3>Traditional Recipes</h3>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
              </div>
            </div>
          </div>
        </section>
      `;
      break;

    case 'about':
      content = `
        <section class="page-hero">
          <div class="container">
            <h1>About Our Bakery</h1>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </section>

        <section class="content-section">
          <div class="container">
            <h2>Our Story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
          </div>
        </section>

        <section class="content-section gray-bg">
          <div class="container">
            <h2>Meet Our Team</h2>
            <div class="team-grid">
              <div class="team-member">
                <h3>Jane Doe</h3>
                <p class="role">Head Baker</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam.</p>
              </div>
              <div class="team-member">
                <h3>John Smith</h3>
                <p class="role">Pastry Chef</p>
                <p>Sed nisi lectus viverra pulvinar facilisis bibendum at felis. Donec vulputate mauris vitae nisi cursus.</p>
              </div>
              <div class="team-member">
                <h3>Maria Garcia</h3>
                <p class="role">Cake Designer</p>
                <p>Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Vivamus magna justo lacinia eget.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="content-section">
          <div class="container">
            <h2>Our Values</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            <ul class="values-list">
              <li><strong>Quality:</strong> Mauris blandit aliquet elit eget tincidunt nibh pulvinar a proin sagittis nisl rhoncus.</li>
              <li><strong>Tradition:</strong> Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui curabitur non nulla.</li>
              <li><strong>Community:</strong> Pellentesque in ipsum id orci porta dapibus vestibulum ante ipsum primis in faucibus.</li>
              <li><strong>Sustainability:</strong> Donec sollicitudin molestie malesuada nulla porttitor massa id neque aliquam vestibulum.</li>
            </ul>
          </div>
        </section>
      `;
      break;

    case 'menu':
      content = `
        <section class="page-hero">
          <div class="container">
            <h1>Our Menu</h1>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </section>

        <section class="content-section">
          <div class="container">
            <h2>Breads</h2>
            <div class="menu-grid">
              <div class="menu-item">
                <h3>Sourdough Loaf</h3>
                <p class="price">$6.50</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta.</p>
              </div>
              <div class="menu-item">
                <h3>Whole Wheat Bread</h3>
                <p class="price">$5.50</p>
                <p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus.</p>
              </div>
              <div class="menu-item">
                <h3>Baguette</h3>
                <p class="price">$4.00</p>
                <p>Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit eget tincidunt.</p>
              </div>
              <div class="menu-item">
                <h3>Ciabatta</h3>
                <p class="price">$5.00</p>
                <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt cras ultricies ligula.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="content-section gray-bg">
          <div class="container">
            <h2>Pastries</h2>
            <div class="menu-grid">
              <div class="menu-item">
                <h3>Croissant</h3>
                <p class="price">$3.50</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa convallis a pellentesque.</p>
              </div>
              <div class="menu-item">
                <h3>Pain au Chocolat</h3>
                <p class="price">$4.00</p>
                <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui curabitur arcu erat.</p>
              </div>
              <div class="menu-item">
                <h3>Danish Pastry</h3>
                <p class="price">$4.50</p>
                <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo lacinia eget consectetur.</p>
              </div>
              <div class="menu-item">
                <h3>Almond Croissant</h3>
                <p class="price">$4.75</p>
                <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus sed porttitor lectus nibh.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="content-section">
          <div class="container">
            <h2>Cakes & Desserts</h2>
            <div class="menu-grid">
              <div class="menu-item">
                <h3>Chocolate Cake</h3>
                <p class="price">$28.00</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus.</p>
              </div>
              <div class="menu-item">
                <h3>Red Velvet Cake</h3>
                <p class="price">$30.00</p>
                <p>Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit eget tincidunt nibh.</p>
              </div>
              <div class="menu-item">
                <h3>Lemon Tart</h3>
                <p class="price">$22.00</p>
                <p>Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
              </div>
              <div class="menu-item">
                <h3>Tiramisu</h3>
                <p class="price">$8.50</p>
                <p>Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat mauris.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="content-section gray-bg">
          <div class="container">
            <h2>Cookies & Treats</h2>
            <div class="menu-grid">
              <div class="menu-item">
                <h3>Chocolate Chip Cookies</h3>
                <p class="price">$2.50</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus donec rutrum.</p>
              </div>
              <div class="menu-item">
                <h3>Macarons (Box of 6)</h3>
                <p class="price">$12.00</p>
                <p>Vivamus magna justo lacinia eget consectetur sed convallis at tellus praesent sapien massa.</p>
              </div>
              <div class="menu-item">
                <h3>Brownies</h3>
                <p class="price">$3.50</p>
                <p>Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Donec sollicitudin molestie.</p>
              </div>
              <div class="menu-item">
                <h3>Scones</h3>
                <p class="price">$3.00</p>
                <p>Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta lorem ipsum.</p>
              </div>
            </div>
          </div>
        </section>
      `;
      break;

    case 'locations':
      content = `
        <section class="page-hero">
          <div class="container">
            <h1>Our Locations</h1>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </section>

        <section class="content-section">
          <div class="container">
            <h2>Visit Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
            
            <div class="locations-grid">
              <div class="location-card">
                <h3>Downtown Location</h3>
                <div class="location-info">
                  <p><strong>Address:</strong><br>
                  123 Lorem Street<br>
                  City, State 12345</p>
                  
                  <p><strong>Phone:</strong><br>
                  (555) 123-4567</p>
                  
                  <p><strong>Hours:</strong><br>
                  Monday - Friday: 7:00 AM - 7:00 PM<br>
                  Saturday: 8:00 AM - 6:00 PM<br>
                  Sunday: 9:00 AM - 5:00 PM</p>
                </div>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
              </div>

              <div class="location-card">
                <h3>Westside Location</h3>
                <div class="location-info">
                  <p><strong>Address:</strong><br>
                  456 Ipsum Avenue<br>
                  City, State 12346</p>
                  
                  <p><strong>Phone:</strong><br>
                  (555) 234-5678</p>
                  
                  <p><strong>Hours:</strong><br>
                  Monday - Friday: 6:30 AM - 8:00 PM<br>
                  Saturday: 7:00 AM - 8:00 PM<br>
                  Sunday: 8:00 AM - 6:00 PM</p>
                </div>
                <p class="description">Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
              </div>

              <div class="location-card">
                <h3>Eastside Location</h3>
                <div class="location-info">
                  <p><strong>Address:</strong><br>
                  789 Dolor Boulevard<br>
                  City, State 12347</p>
                  
                  <p><strong>Phone:</strong><br>
                  (555) 345-6789</p>
                  
                  <p><strong>Hours:</strong><br>
                  Monday - Friday: 7:00 AM - 6:00 PM<br>
                  Saturday: 8:00 AM - 5:00 PM<br>
                  Sunday: 9:00 AM - 4:00 PM</p>
                </div>
                <p class="description">Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="content-section gray-bg">
          <div class="container">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <div class="contact-info">
              <div class="contact-item">
                <h3>General Inquiries</h3>
                <p>Email: info@sweetdreamsbakery.com<br>
                Phone: (555) 100-0000</p>
              </div>
              
              <div class="contact-item">
                <h3>Catering & Events</h3>
                <p>Email: catering@sweetdreamsbakery.com<br>
                Phone: (555) 200-0000</p>
              </div>
              
              <div class="contact-item">
                <h3>Custom Orders</h3>
                <p>Email: orders@sweetdreamsbakery.com<br>
                Phone: (555) 300-0000</p>
              </div>
            </div>
            
            <p style="margin-top: 2rem;">Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </section>
      `;
      break;
  }

  app.innerHTML = navbar + content + footer;

  // Add click handlers for navigation
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = (e.target as HTMLElement).getAttribute('data-page') as Page;
      navigate(page);
    });
  });
}

// Initial render
render();
