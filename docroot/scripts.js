(function ($) {
  document.addEventListener('DOMContentLoaded', () => {
    function menuDropdown(parentClassName) {
      closeOpenDropdown(parentClassName);

      const menuLinksWithDropdowns = document
        .querySelector(parentClassName)
        .querySelectorAll('.nav-item.dropdown');
      menuLinksWithDropdowns.forEach((menuLink) => {
        menuLink.addEventListener('click', (e) => {
          e.preventDefault();
          menuLink.classList.toggle('show');
          const link = menuLink.querySelector('a');
          const ariaExpandedState = link.getAttribute('aria-expanded');
          if (ariaExpandedState === 'true') {
            link.setAttribute('aria-expanded', 'false');
          } else {
            link.setAttribute('aria-expanded', 'true');
          }
        });
      });
    }

    function closeOpenDropdown(parentClassName) {
      document.body.addEventListener('click', (event) => {
        if (event.target.closest(parentClassName)) {
          return;
        }
        Array.from(
          document
            .querySelector(parentClassName)
            .querySelectorAll('.nav-item.dropdown'),
        ).forEach((link) => {
          link.classList.remove('show');
          link.querySelector('a').setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Sticky Sidebar
    $(window).on('scroll', function () {
      if ($('.publication-listing-container').length) {
        var targetScrollTop =
          $('.publication-listing-container').position().top + 50;
        var targetScrollBot = $('footer').position().top - 100;
        var footerHeight = $('footer').outerHeight() + 200;

        if (
          $(window).scrollTop() > targetScrollTop &&
          $(window).scrollTop() + footerHeight < targetScrollBot
        ) {
          $('.filters').addClass('filters-fixed-top');
          $('.filters').removeClass('filters-fixed-bot');
        } else if ($(window).scrollTop() + footerHeight > targetScrollBot) {
          $('.filters').removeClass('filters-fixed-top');
          $('.filters').addClass('filters-fixed-bot');
        } else {
          $('.filters').removeClass('filters-fixed-top');
          $('.filters').removeClass('filters-fixed-bot');
        }
      }
    });
    menuDropdown('.utility-nav');
    menuDropdown('.main-nav');
  });
})(jQuery);
