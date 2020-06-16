$(document).ready(function(){

    $('#profile__ripple').ripples({
        resolution:512,
        dropRadius:10
    });

    const bars = document.querySelectorAll('.progress__bar');

    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
        console.log(percentage);
    });

    // counter

    const counters = document.querySelectorAll('.counter');
    console.log(counters);


    function runCounter () {
        counters.forEach(counter => {
            counter.innerText = 0;
            let target = +counter.dataset.count;
            let step = target / 100;          
            let countIt = function() {
                let displayCount = +counter.innerText;
                if(displayCount < target) {
                    counter.innerText = Math.ceil(displayCount + step);
                    setTimeout(countIt, 1);
                }
                else {
                    counter.innerText = target;
                }
            }
            countIt();
        })
    }
    
    
    let counterSection = document.querySelector('.counter__section');
    let Options = {
        rootMargin : '0px 0px -200px 8px'

    }
    let done = 0;
    const sectionObserver = new IntersectionObserver(function(entries){

        if(entries[0].isIntersecting && done!==1) {
            done= 1;
            runCounter();
        }
    },Options)

    sectionObserver.observe(counterSection);



    //image filter

    var $wrapper = $('.portfolio__wrapper');

    // initialize isotope

    $wrapper.isotope({
        filter : '*',
        layoutMode : 'masonry',
        animationOptions : {
            duration: 750,
            easing: 'linear'
        }
    });

    let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {

        let selector = link.dataset.filter;
        link.addEventListener('click', function(e) {
            e.preventDefault();
    
            $wrapper.isotope({
                filter : selector,
                layoutMode : 'masonry',
                animationOptions : {
                    duration: 750,
                    easing: 'linear'
                }
            });

            links.forEach(link => {
                link.classList.remove('active');
            })

            e.target.classList.add('active');

        });
    })


    //magnify popu

    $('.magnify').magnificPopup({
        type: 'image',
        gallery : {
            enabled : true
        },
        zoom : {
            enable :true
        }
    });


    //slider

    $('.slider').slick({
        arrows: false,
        autoplay: true

    });

});