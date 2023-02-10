var portfolio = [{src:"https://olhauzhykova.com/assets/images/portfolio/1.webp",project:"Space Needle",post:"Design Direction, UI/UX Design"},
{src:"https://olhauzhykova.com/assets/images/portfolio/2.webp",project:"Crisis Cleanup",post:"Lead UI/UX Design"},
{src:"https://olhauzhykova.com/assets/images/portfolio/3.webp",project:"Tough Built",post:"Design Direction, UI/UX Design"},
{src:"https://olhauzhykova.com/assets/images/portfolio/5.webp",project:"ITG.Digital",post:"Product Owner,Design Direction"},
{src:"https://olhauzhykova.com/assets/images/portfolio/6.webp",project:"Netrix",post:"Product Owner, Design Direction"},
{src:"https://olhauzhykova.com/assets/images/portfolio/7.webp",project:"Life House",post:"Lead Product Designer"},
]

function portfolios() {
    var clutter = `<h3>Portfolio</h3>`;
    portfolio.forEach((elem,idx) => {
        clutter +=`<div class="portfolio">
        <h1>${elem.project} <span>${elem.post}</span></h1>
        <div class="img">
            <img id="A${idx+1}" src="${elem.src}" alt="">
        </div>
    </div>`
    });
    
    document.querySelector("#sectionC").innerHTML = clutter;
}

 portfolios();

var design = [{project:"Interview for ADC*E",img:"https://olhauzhykova.com/assets/images/teacher-and-speaker/1.webp",desc:"ADC Winners talk"},
{project:"Awwwards Academy Course",img:"https://olhauzhykova.com/assets/images/teacher-and-speaker/2.webp",desc:"Building better user experiences with a product thinking approach"},
{project:"Dribble",img:"https://olhauzhykova.com/assets/images/teacher-and-speaker/3.webp",desc:"Building a design agency"},
{project:"Awwwards",img:"https://olhauzhykova.com/assets/images/teacher-and-speaker/4.webp",desc:"Live design website reviews"},
{project:"Adobe",img:"https://olhauzhykova.com/assets/images/teacher-and-speaker/5.webp",desc:"3 days live stream about UI/UX design"},
{project:"Zajno design Meetup",img:"https://olhauzhykova.com/assets/images/teacher-and-speaker/6.webp",desc:"Communication with client and building relationships"},
{project:"Ukrainian creative week",img:"https://olhauzhykova.com/assets/images/teacher-and-speaker/7.webp",desc:"Developing own product in a design agency"},
{project:"Projector",img:"https://olhauzhykova.com/assets/images/teacher-and-speaker/8.webp",desc:"What do you need to do to receive an award?"},
]

function designs() {
    var clutter2 = `<div class="circle"></div>`;
    design.forEach((elem,idx) => {
        clutter2 +=`<div class="cards d${idx}" data-scroll data-scroll-speed="5">
        <h1>${elem.project}</h1>
        <img src="${elem.img}" alt="image not found">
        <h3>${elem.desc}</h3>
    </div>`
    });
    
    document.querySelector("#sectionG").innerHTML = clutter2;
}

designs();

var bars = [{name:"Muzly",img:"https://olhauzhykova.com/assets/images/books/star.webp",desc:"How to make the most of your corporate website? Creative ideas in details",date:"2021"},
{name:"Muzly",img:"https://olhauzhykova.com/assets/images/books/check.webp",desc:"The ultimate guide to remote usability testing",date:"2021"},
{name:"Muzly",img:"https://olhauzhykova.com/assets/images/books/drop.webp",desc:"Designing treatment plan in behavioral healthcare",date:"2021"},
{name:"UX Planet",img:"https://olhauzhykova.com/assets/images/books/levels.webp",desc:"10 Useful tools to grow your business",date:"2020"},
{name:"Dribble",img:"https://olhauzhykova.com/assets/images/books/lock.webp",desc:"An interview with user interface designer Olha Uzhykova",date:"2018"},
{name:"Medium",img:"https://olhauzhykova.com/assets/images/books/plus.webp",desc:"More articles on Medium",date:"2020-Now"},
]

function bar() {
    var clutter3 = `<div class="content">
    <h3><span>Articles</span> & <br> Publications</h3>
</div>`;
    bars.forEach((elem) => {
        clutter3 +=`<div class="bars">
        <h4>${elem.name}</h4>
        <img src="${elem.img}" alt="">
        <p class="description">${elem.desc}</p>
        <h4>${elem.date}</h4>
    </div>`
    });
    
    document.querySelector("#sectionH").innerHTML = clutter3;
}
bar();

//gsap animation

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});

gsap.set("#semicircle",{
  rotate:0
})
var tl = gsap.timeline({
  scrollTrigger:{
      trigger:"#sectionB #semicircle",
      scroller:"[data-scroll-container]",
      scrub:true,
      // pin:true,
      // markers:true,
      start:"top 85%",
      end:"center 50%",
  },
});

gsap.from("#sectionB>img",{
  top:"-200%",
  scale:0,
  opacity:0,
  ease:Expo.easeIn,
});

tl
  .to("#sectionB>img",{
      x:950,
      y:200,
      rotate:360,
  })
  .to("#sectionB #semicircle",{
      rotate:20,
      delay:"-0.6",
  });
  gsap.to("#semicircle",{
    scrollTrigger:{
      trigger:"#sectionB #semicircle",
      scroller:"[data-scroll-container]",
      scrub:true,
      // pin:true,
      // markers:true,
      start:"top 30%",
    },
    rotate:"0",
})
  
gsap.to("footer>h4 .overlay",{
  scale:1,
  duration:1,
  ease:Expo.easeInOut,
  yoyo:true,
  repeat:"-1"
})

gsap.from("#sectionD .content>img",{
  scrollTrigger:{
      trigger:"#sectionD",
      start:"center top",
      // end:"50% 50%",
      // markers:true,
  },
  duration:1.5,
  x:800,
  rotate:1000,
  y:"-800"
})
gsap.to("#sectionG .circle",{
  scrollTrigger:{
      trigger:"#sectionG",
      scroller:"[data-scroll-container]",
      start:"top top",
      end:"50% 50%",
      scrub:true,
      // markers:true,
  },
  scale:18.2,
  // backgroundColor:"#ffffff",
})

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
