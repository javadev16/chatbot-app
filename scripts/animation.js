

gsap.from("#chatbot-face", {duration: 13, rotate: -15, scale: 0.6,  y: -10});
gsap.to("#chatbot-face", {duration: 13,  scale: 1, ease: "sine.out", rotate: 15, y: 10, repeat: -1});

gsap.from("#chatbot-body", {duration: 15,  scale: 0.8});
gsap.to("#chatbot-body", {duration: 15, scale: 1,  ease: "bounce", x: 10, y: 20, repeat: -1});

gsap.from("#female-avatar", {duration: 10,  scale: 0.4, rotation: 90,  y: 300, opacity: 0, repeat: -1});
gsap.to("#female-avatar", {duration: 12, scale: 0.8,  ease: "bounce", repeat: -1});

var typed = new Typed('.text-animated', {
    strings: [
        "Hello Kio", 
        "how are you?",
        "who are you?",
        "where to learn Javascript.",
        "where to learn HTML & CSS.",
        "Where to learn Reat JS.",
        "Junior dev journey to follow.",
        "Where to learn web development?",
        "How to learn Data structures and alogarithms?",
        "Web dev roadmap to follow"
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});
console.log(typed)
  