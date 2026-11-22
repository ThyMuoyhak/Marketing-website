        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

        function openMenu() {
            // Show overlay
            mobileMenuOverlay.classList.remove('hidden');
            // Small delay to allow display block to apply before opacity transition
            setTimeout(() => {
                mobileMenuOverlay.classList.remove('opacity-0');
                mobileMenuOverlay.classList.add('opacity-100');
            }, 10);
            
            // Slide in menu
            mobileMenu.classList.remove('translate-x-full');
        }

        function closeMenu() {
            // Slide out menu
            mobileMenu.classList.add('translate-x-full');
            
            // Fade out overlay
            mobileMenuOverlay.classList.remove('opacity-100');
            mobileMenuOverlay.classList.add('opacity-0');
            
            // Hide overlay after transition ends
            setTimeout(() => {
                mobileMenuOverlay.classList.add('hidden');
            }, 300);
        }

        // Event Listeners
        mobileMenuBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        
        // Close menu when clicking on the overlay
        mobileMenuOverlay.addEventListener('click', closeMenu);

        // Close menu when a link is clicked (optional, but good for UX)
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });