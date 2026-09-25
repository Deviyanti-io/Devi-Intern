document.addEventListener("DOMContentLoaded", () => {
  // Masukkan elemen Sidebar & Overlay langsung ke dalam tag <body>
  const sidebarHTML = `
        <div class="sidebar-overlay" id="sidebarOverlay"></div>
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <h3>BCR</h3>
                <button class="close-sidebar" id="closeSidebar" type="button" aria-label="Close Menu">&times;</button>
            </div>
            <ul class="sidebar-menu">
                <li><a href="index.html#services">Our Services</a></li>
                <li><a href="index.html#why-us">Why Us</a></li>
                <li><a href="index.html#testimonial">Testimonial</a></li>
                <li><a href="index.html#faq">FAQ</a></li>
            </ul>
            <button class="btn-register btn-sidebar" type="button">Register</button>
        </aside>
    `;
  document.body.insertAdjacentHTML("beforeend", sidebarHTML);

  // Pasang event listener buka/tutup
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("closeSidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");

  const toggleMenu = (isOpen) => {
    if (sidebar && sidebarOverlay) {
      sidebar.classList.toggle("active", isOpen);
      sidebarOverlay.classList.toggle("active", isOpen);
    }
  };

  if (menuToggle) menuToggle.addEventListener("click", () => toggleMenu(true));
  if (closeSidebar)
    closeSidebar.addEventListener("click", () => toggleMenu(false));
  if (sidebarOverlay)
    sidebarOverlay.addEventListener("click", () => toggleMenu(false));
});