// =============================================================
// SMILE WELFARE TRUST — Website Content File
// -------------------------------------------------------------
// Edit this file to update any text shown on the website.
// After editing, save the file and refresh the browser.
//
// Rules for editing:
//   • Keep text inside the quote marks  "like this"
//   • Do not remove commas, brackets or braces
//   • To add a new program/story/stat, copy an existing block
//     and change the values inside
// =============================================================

window.SWT_CONTENT = {

  // ── SITE ───────────────────────────────────────────────────
  // Global info used across the whole site
  site: {
    title:       "Smile Welfare Trust — Every Child Deserves to Smile",
    orgName:     "Smile Welfare Trust",   // First word gets brand-colour highlight
    regNumber:   "SWTI/2012/DEL",
    certLabel:   "80G Certified",
    established: "2005"
  },

  // ── NAVIGATION ─────────────────────────────────────────────
  nav: {
    donateLabel: "Donate Now ♥",
    links: [
      { label: "About",    href: "#about"    },
      { label: "Programs", href: "#programs" },
      { label: "Impact",   href: "#impact"   },
      { label: "Stories",  href: "#stories"  },
      { label: "Contact",  href: "#contact"  }
    ]
  },

  // ── HERO ───────────────────────────────────────────────────
  hero: {
    eyebrow:        "Non-Profit Organization",
    headline:       "Every Child Deserves a",
    headlineAccent: "Brighter Tomorrow",       // Rendered in brand colour
    subtext:        "Smile Welfare Trust is dedicated to nurturing the health, education, and happiness of underprivileged children. Your support gives them a chance to grow, learn, and smile.",
    ctaDonate:      "Donate Now ♥",
    ctaPrograms:    "Our Programs",
    // ── Stats cards (add/remove cards freely) ──
    stats: [
      { emoji: "📚", number: "240+", label: "Children Educated" },
      { emoji: "🏥", number: "950+",   label: "Health Check-ups"  },
      { emoji: "🤝", number: "20+",   label: "Volunteers"        }
    ]
  },

  // ── ABOUT ──────────────────────────────────────────────────
  about: {
    eyebrow:       "Who We Are",
    title:         "Dedicated to Children's Well-Being",
    description:   "Smile Welfare Trust was founded on the belief that every child — regardless of background — deserves access to nutrition, education, and care. We work in underserved communities to remove the barriers that stand between children and their potential.",
    // ── Tick-list items (add/remove freely) ──
    bullets: [
      "Transparent, community-driven non-profit model with published annual reports.",
      "100% of donations directed to child welfare programs — no hidden fees.",
      "Partnerships with local schools, hospitals, and government bodies.",
      "Registered 80G charity — donations are tax-exempt."
    ],
    // ── Coloured visual panel on the left ──
    visualTagline: "Building Futures, One Child at a Time",
    visualSub:     "Registered Non-Profit · Est. 2005 · 20+ Years of Service"
  },

  // ── PROGRAMS ───────────────────────────────────────────────
  programs: {
    eyebrow:  "What We Do",
    title:    "Our Programs for Children",
    subtitle: "Each program is designed with compassion, evidence, and the input of the communities we serve.",
    // ── Program cards (add/remove cards freely) ──
    items: [
      { bg: "#fff7ed", icon: "📚", title: "Education Support",   description: "Free tutoring, school supplies, and scholarships for children from low-income families to keep them in school."                                      },
      { bg: "#f0fdf4", icon: "🍱", title: "Nutrition & Meals",   description: "Daily hot meals and nutrition packs ensuring no child in our programs goes hungry or lacks essential vitamins."                                      },
      { bg: "#f0f9ff", icon: "🏥", title: "Healthcare Access",   description: "Regular health camps, vaccinations, dental check-ups, and mental wellness sessions for children and caregivers."                                    },
      { bg: "#fdf4ff", icon: "🎨", title: "Creative Skills",     description: "Art, music, and sports activities that build confidence, creativity, and emotional resilience in every child."                                       },
      { bg: "#fef9c3", icon: "👨‍👩‍👦", title: "Family Counselling", description: "Guidance and social-work support for families facing hardship — because a stable home builds a stable child."                                    },
      { bg: "#f0fdfa", icon: "💻", title: "Digital Literacy",    description: "Computer labs and coding workshops equipping older children with skills for tomorrow's opportunities."                                              }
    ]
  },

  // ── IMPACT ─────────────────────────────────────────────────
  impact: {
    eyebrow:  "Our Impact",
    title:    "Numbers That Tell a Story",
    subtitle: "Every rupee donated translates into real, measurable change in a child's life.",
    // ── Stat items (add/remove freely) ──
    stats: [
      { number: "20+",    label: "Years of Service"    },
      { number: "240+", label: "Children Supported"  },
      { number: "18",     label: "Community Centers"   },
      { number: "650K+",  label: "Meals Served"        },
      { number: "94%",    label: "Funds to Programs"   },
      { number: "20+",   label: "Active Volunteers"   }
    ]
  },

  // ── DONATE ─────────────────────────────────────────────────
  donate: {
    title:       "Make a Difference Today",
    description: "Your donation directly funds meals, education, and healthcare for children who need it most. Every amount counts.",
    // ── Preset amounts shown as buttons ──
    amounts:    ["₹500", "₹1,000", "₹2,500", "₹5,000"],
    defaultIdx: 1,    // 0 = first button, 1 = second, etc.
    ctaLabel:   "Donate Now — Secure & Tax Exempt",
    // ↓ Replace with your actual payment gateway / Razorpay / PayU link
    donateUrl:  "https://www.payumoney.com",
    // ── Trust badges below the donate button ──
    badges: [
      { icon: "🔒", label: "256-bit SSL Secured" },
      { icon: "✅", label: "80G Tax Benefit"      },
      { icon: "🏛️", label: "Registered NGO"       },
      { icon: "📋", label: "Audited Annually"     }
    ]
  },

  // ── HOW TO HELP ────────────────────────────────────────────
  help: {
    eyebrow:  "Get Involved",
    title:    "Other Ways to Help",
    subtitle: "Not just money — your time, skills, and voice matter too.",
    // ── Help cards (add/remove freely) ──
    // Set href to "#share" to trigger the browser share sheet
    items: [
      { icon: "🙋", title: "Volunteer",         description: "Give a few hours a week to teach, mentor, or organise events with our children.",                                   linkLabel: "Join as Volunteer",  href: "#contact" },
      { icon: "📢", title: "Spread the Word",   description: "Share our mission on social media and help us reach more people who can make a difference.",                        linkLabel: "Share Our Story",    href: "#share"   },
      { icon: "🏢", title: "Corporate CSR",     description: "Partner with us for your corporate social responsibility programs with full compliance support.",                   linkLabel: "Partner With Us",    href: "#contact" },
      { icon: "📦", title: "In-Kind Donations", description: "Donate books, stationery, clothes, or food supplies directly to our community centers.",                           linkLabel: "Arrange a Donation", href: "#contact" }
    ]
  },

  // ── STORIES ────────────────────────────────────────────────
  stories: {
    eyebrow:  "Stories of Hope",
    title:    "Voices from Our Community",
    subtitle: "Real words from the families, volunteers, and children we serve.",
    // ── Testimonial cards (add/remove freely) ──
    items: [
      { quote: "Before joining the Smile Trust program, my daughter had no access to books. Today she is the top student in her class. I cannot thank enough.", name: "Sunita Devi",  role: "Parent, Delhi Center",  avatar: "👩" },
      { quote: "Volunteering here changed my perspective on life. Watching these kids light up during art sessions — it's the most rewarding thing I've done.",  name: "Rahul Sharma", role: "Volunteer, 3 years",    avatar: "👨" },
      { quote: "The health camp discovered my son had an eye problem we couldn't afford to treat. Smile Trust arranged the surgery. He can see clearly now.",    name: "Mohan Lal",   role: "Parent, Jaipur Center", avatar: "🧑" }
    ]
  },

  // ── CONTACT ────────────────────────────────────────────────
  contact: {
    eyebrow:        "Get in Touch",
    title:          "We'd Love to Hear From You",
    subtitle:       "Whether you want to donate, volunteer, or simply ask a question — reach out and our team will respond within 24 hours.",
    address:        "15 Dindigul Rd, Thirupatthur - 630211, India",
    phone:          "+91 98765 43210",
    email:          "smilewelfaretrust@gamil.com",
    hours:          "Mon – Sat, 9 AM – 6 PM IST",
    formSubmitLabel: "Send Message →",
    formSuccessMsg:  "✓ Message Sent! We'll reply soon."
  },

  // ── FOOTER ─────────────────────────────────────────────────
  footer: {
    description: "A registered non-profit organisation committed to ensuring every child has the nutrition, education, and care they deserve.",
    copyright:   "© 2024 Smile Welfare Trust. All rights reserved. Registered Non-Profit Organisation.",
    madeWith:    "Made with ❤️ for the children.",
    quickLinks: [
      { label: "About Us",     href: "#about"    },
      { label: "Our Programs", href: "#programs" },
      { label: "Our Impact",   href: "#impact"   },
      { label: "Donate Now",   href: "#donate"   }
    ],
    involvedLinks: [
      { label: "Volunteer",         href: "#help"    },
      { label: "Corporate CSR",     href: "#help"    },
      { label: "In-Kind Donations", href: "#help"    },
      { label: "Contact Us",        href: "#contact" }
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use",   href: "#" },
      { label: "Annual Reports", href: "#" },
      { label: "Donor FAQ",      href: "#" }
    ]
  }

};
