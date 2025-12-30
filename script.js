/**
 * Variables Landing Page - Vanilla JavaScript
 * Minimal interactions, no dependencies
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        setupSmoothScroll();
    }

    /**
     * Setup smooth scrolling for anchor links
     */
    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                // Skip if href is just "#"
                if (href === '#') return;

                const targetId = href.substring(1);
                const targetEl = document.getElementById(targetId);

                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Optional: Add scroll reveal animations
     * Uncomment if you want elements to fade in on scroll
     */
    /*
    function setupScrollReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.problem-card, .solution-item').forEach(el => {
            observer.observe(el);
        });
    }
    */

})();
