

const one = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
  },
});

one.to(
  "#fanta",
  {
    top: "130%",
    left: "10%",
  },
  "same"
);

one.to(
  "#orange-cut",
  {
    top: "160%",
    left: "25%",
  },
  "same"
);

one.to(
  "#leaf2",
  {
    top: "120%",
    left: "8%",
    rotate: -90,
  },
  "same"
);

one.to(
  "#leaf1",
  {
    top: "120%",
    left: "80%",
    rotate: -90,
  },
  "same"
);

one.to(
  "#orange",
  {
    top: "160%",
    left: "70%",
  },
  "same"
);

const two = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "10% 95%",
    end: "50% 60%",
    scrub: true,
  },
});

two.to(
  "#orange-cut",
  {
    top: "210%",
    left: "42%",
    scale: 1.3,
    filter: "drop-shadow(0 0 10px black)"
  },
  "same"
);

two.to(
  "#fanta",
  {
    top: "218%",
    left: "35%",
    scale: 1.1,
    filter: "drop-shadow(0 0 10px black)",
  },
  "same"
);

two.from(
  "#orange-cocacola",
  {
    left: "-100%",
    top: "110%",
    scale : 0.5
  },
  "same"
)

two.from(
  "#cocacola",
  {
    top: "110%",
    rotate: -45,
  },
  "same"
)

two.from(
  "#orange-pepsi",
  {
    left: "100%",
    top: "110%",
    scale : 0.5,
  },
  "same"
)

two.from(
  "#pepsi",
  {
    top: "110%",
    rotate: 45,
  },
  "same"
)



