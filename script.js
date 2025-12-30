/**
 * Variables Landing Page - Vanilla JavaScript
 * Minimal interactions, no dependencies
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        setupWaitlistForm();
        setupSmoothScroll();
    }

    /**
     * Handle waitlist form submission
     */
    function setupWaitlistForm() {
        const form = document.getElementById('waitlist-form');
        const emailInput = document.getElementById('email-input');
        const messageEl = document.getElementById('form-message');

        if (!form || !emailInput || !messageEl) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = emailInput.value.trim();

            if (!email || !isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Disable form during submission
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Joining...';

            try {
                // For now, just simulate success
                // In production, you'd send this to your backend
                await simulateApiCall();

                showMessage('Thanks! You\'re on the waitlist. Check your email.', 'success');
                emailInput.value = '';
            } catch (error) {
                showMessage('Something went wrong. Please try again.', 'error');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }
        });

        function showMessage(text, type) {
            messageEl.textContent = text;
            messageEl.className = `form-message ${type}`;

            // Clear message after 5 seconds
            setTimeout(() => {
                messageEl.textContent = '';
                messageEl.className = 'form-message';
            }, 5000);
        }
    }

    /**
     * Validate email format
     */
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    /**
     * Simulate API call (replace with actual endpoint in production)
     */
    function simulateApiCall() {
        return new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
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
