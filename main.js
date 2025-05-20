
const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('menuToggle');
    const menuIcon = document.getElementById('menuIcon');
    const overlay = document.getElementById('overlay');

    function openSidebar() {
      sidebar.classList.remove('-translate-x-full');
      overlay.classList.remove('hidden');
      menuIcon.classList.remove('ph-list');
      menuIcon.classList.add('ph-x');
    }

    function closeSidebar() {
      sidebar.classList.add('-translate-x-full');
      overlay.classList.add('hidden');
      menuIcon.classList.remove('ph-x');
      menuIcon.classList.add('ph-list');
    }

    toggleBtn?.addEventListener('click', () => {
      if (sidebar.classList.contains('-translate-x-full')) {
        openSidebar();
      } else {
        closeSidebar();
      }
    });

    overlay?.addEventListener('click', () => {
      closeSidebar();
    });