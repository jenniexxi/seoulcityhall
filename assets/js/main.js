(function () {
  document.addEventListener('DOMContentLoaded', function() {
      
    // top main slide
    const slide01 = new Swiper(".slide01 .swiper", {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: ".slide01 .fraction",
        type: "fraction",
      },
      navigation: {
        nextEl: ".slide01 .next",
        prevEl: ".slide01 .prev",
      },
    });

    const slide02 = new Swiper(".slide02 .swiper", {
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: ".slide02 .fraction",
        type: "fraction",
      },
      navigation: {
        nextEl: ".slide02 .next",
        prevEl: ".slide02 .prev",
      },
    });

    slide02.autoplay.stop();

    // bottom banner slide
    const banner_slide = new Swiper(".banner_slide", {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".banner_slide .fraction",
        type: "fraction",
      },
      navigation: {
        nextEl: ".banner_slide .next",
        prevEl: ".banner_slide .prev",
      },
    });

    const dept1Elements = document.querySelectorAll('.dept1');
    const subElements = document.querySelectorAll('.sub');

    dept1Elements.forEach(function(dept1Element) {
      dept1Element.addEventListener('click', function(event) {
        event.preventDefault();

        if (this.classList.contains('on')) {
          dept1Elements.forEach(function(elem) {
            elem.classList.remove('on');
          });
          subElements.forEach(function(elem) {
            elem.style.display = 'none';
          });
        } else {
          dept1Elements.forEach(function(elem) {
            elem.classList.remove('on');
          });
          this.classList.add('on');
          subElements.forEach(function(elem) {
            elem.style.display = 'none';
          });
          this.nextElementSibling.style.display = 'block';
        }
      });
    });

    const slide01PlayBtn = document.querySelectorAll('.slide01 .play_btn .btn');
    const slide02PlayBtn = document.querySelectorAll('.slide02 .play_btn .btn');
    const bannerSlidePlayBtn = document.querySelectorAll('.banner_slide .play_btn .btn');

    slide01PlayBtn.forEach(function(slide01btn) {
      slide01btn.addEventListener('click', function(event) {
        event.preventDefault();
        if (this.classList.contains('play')) {
          slide01.autoplay.start();
          document.querySelector('.slide01 .pause').style.display = 'block';
          document.querySelector('.slide01 .play').style.display = 'none';
        } else {
          slide01.autoplay.stop();
          document.querySelector('.slide01 .pause').style.display = 'none';
          document.querySelector('.slide01 .play').style.display = 'block';
        }
      });
    });

    slide02PlayBtn.forEach(function(slide02btn) {
      slide02btn.addEventListener('click', function(event) {
        event.preventDefault();

        if (this.classList.contains('play')) {
          slide02.autoplay.start();
          document.querySelector('.slide02 .pause').style.display = 'block';
          document.querySelector('.slide02 .play').style.display = 'none';
        } else {
          slide02.autoplay.stop();
          document.querySelector('.slide02 .pause').style.display = 'none';
          document.querySelector('.slide02 .play').style.display = 'block';
        }
      });
    });
    
    bannerSlidePlayBtn.forEach(function(bannerbtn) {
      bannerbtn.addEventListener('click', function(event) {
        event.preventDefault();

        if (this.classList.contains('play')) {
          banner_slide.autoplay.start();
          document.querySelector('.banner_slide .play_btn .pause').style.display = 'block';
          document.querySelector('.banner_slide .play_btn .play').style.display = 'none';
        } else {
          banner_slide.autoplay.stop();
          document.querySelector('.banner_slide .play_btn .pause').style.display = 'none';
          document.querySelector('.banner_slide .play_btn .play').style.display = 'block';
        }
      });
    });
    
    // top main slide - h3 click
    const slideHeaders = document.querySelectorAll('.sc_slide h3');

    slideHeaders.forEach(function(slideHeader) {
      slideHeader.addEventListener('click', function(event) {
        event.preventDefault();

        const slideCont = this.parentNode;

        slideCont.classList.add('on');

        const siblings = getSiblings(slideCont);
        siblings.forEach(function(sibling) {
          sibling.classList.remove('on');
        });

        if (slideCont.classList.contains('slide02')) {
          if (document.querySelector('.slide02 .play').style.display !== 'none') {
            slide01.autoplay.stop();
            slide02.autoplay.start();
          } else {
            slide01.autoplay.stop();
            slide02.autoplay.start();
          }
      } else {
        if (document.querySelector('.slide01 .play').style.display !== 'none') {
          slide01.autoplay.start();
          slide02.autoplay.stop();
        } else {
          slide01.autoplay.start();
          slide02.autoplay.stop();
        }
        }
      });
    });

    function getSiblings(elem) {
      const siblings = [];
      let sibling = elem.parentNode.firstChild;
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
          siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
      }
      return siblings;
    }




    // bottom link
    const lastSubLink = document.querySelectorAll('.sc_link .link .sub li:last-child a');
    const firstSubLink = document.querySelectorAll('.sc_link .link .sub li:first-child a');

    lastSubLink.forEach(function(link) {
      link.addEventListener('keydown', function(event) {
        const keyCode = event.keyCode || event.which;
        if (keyCode === 9 && !event.shiftKey) {
          document.querySelectorAll('.sc_link .link .sub').forEach(function(sub) {
            sub.style.display = 'none';
          });
        }
      });
    });

    firstSubLink.forEach(function(link) {
      link.addEventListener('keydown', function(event) {
        const keyCode = event.keyCode || event.which;
        if (keyCode === 9 && event.shiftKey) {
          document.querySelectorAll('.sc_link .link .sub').forEach(function(sub) {
            sub.style.display = 'none';
          });
        }
      });
    });


    
    // top-btn
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
      const curr = window.pageYOffset || document.documentElement.scrollTop;
      if (curr > lastScroll) {
        document.getElementById('btn-top').classList.add('visible');
      } else {
        document.getElementById('btn-top').classList.remove('visible');
      }
      lastScroll = curr;
    });

    document.getElementById('btn-top').addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
})();
