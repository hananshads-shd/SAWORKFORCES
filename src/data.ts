import {
  StatItem,
  ServiceItem,
  JobOpening,
  Testimonial,
  ProcessStage,
  IndustryItem,
  ComparisonBenefit
} from "./types";

export const STATS_DATA: StatItem[] = [
  {
    id: "candidates-placed",
    value: 12500,
    suffix: "+",
    label: "Candidates Placed",
    description: "Successfully matched talent into long-term careers across India."
  },
  {
    id: "active-talent",
    value: 45000,
    suffix: "+",
    label: "Active Talent Pool",
    description: "Vetted and ready-to-deploy professionals across various sectors."
  },
  {
    id: "partner-companies",
    value: 350,
    suffix: "+",
    label: "Partner Companies",
    description: "From hyper-growth Bangalore startups to Fortune 500 enterprises."
  },
  {
    id: "success-rate",
    value: 98,
    suffix: "%",
    label: "Placement Success Rate",
    description: "Our retention rate after the crucial first 90-day onboarding period."
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "talent-acquisition",
    title: "Talent Acquisition",
    shortDesc: "End-to-end modern recruitment for technical, executive, and specialty roles.",
    fullDesc: "Our premier Talent Acquisition service goes beyond traditional keyword searches. We deploy AI-powered screening alongside deep industry connections to uncover highly passive top-tier candidates who match your company culture and strategic direction.",
    icon: "Target",
    benefits: [
      "AI-screened high-caliber profiles",
      "Average time-to-hire reduced by 40%",
      "Specialized executive search team"
    ],
    features: [
      "Executive Headhunting",
      "Technical Sourcing",
      "Cultural Alignment Audits",
      "Salary Benchmarking Surveys"
    ]
  },
  {
    id: "staffing-solutions",
    title: "Staffing Solutions",
    shortDesc: "Flexible, fast, and fully-vetted contractual and temporary manpower.",
    fullDesc: "Whether you need to scale up for peak season, cover parental leave, or build a flexible contingency workforce, our agile Staffing Solutions provide immediate access to dependable, pre-qualified talent on demand.",
    icon: "Users",
    benefits: [
      "Rapid deployment (under 48 hours)",
      "Fully compliant legal onboarding",
      "Flexible scaling options"
    ],
    features: [
      "Contract-to-Hire Staffing",
      "Seasonal Team Provisioning",
      "Project-Based Special Forces",
      "Shift-Staffing Management"
    ]
  },
  {
    id: "driver-recruitment",
    title: "Driver Recruitment & Fleet Management",
    shortDesc: "Professional, background-verified driver recruiting for premium fleets, logistics, and corporate transport.",
    fullDesc: "A core specialization of SA Workforce Solutions. We source, strictly verify, and onboard professional drivers. We serve premium ride-hailing services (Uber Black), corporate executives, logistics firms, and premium logistics partners across Bangalore and India.",
    icon: "Car",
    benefits: [
      "100% police background-verified",
      "Advanced road test & behavioral training",
      "Zero-hassle fleet replacement policies"
    ],
    features: [
      "Uber Black Certified Chauffeurs",
      "Corporate Executive Drivers",
      "Heavy Commercial & Logistics Drivers",
      "Fleet Replacement Support"
    ]
  },
  {
    id: "workforce-management",
    title: "Workforce Management",
    shortDesc: "Comprehensive HR operations, payroll outsourcing, and field attendance tracking.",
    fullDesc: "We relieve your operations of administrative strain. SA Workforce Solutions acts as your integrated workforce partner, managing attendance, regulatory compliance, employee benefits, conflict resolution, and shift scheduling so you can focus strictly on growth.",
    icon: "Briefcase",
    benefits: [
      "100% compliant with Indian Labor laws",
      "Automated attendance & shift mapping",
      "Dedicated account manager support"
    ],
    features: [
      "PF, ESI, and LWF Compliance",
      "Geo-fenced Mobile Attendance Systems",
      "Conflict Resolution & HR Auditing",
      "Real-time Workforce Analytics Portal"
    ]
  },
  {
    id: "manpower-outsourcing",
    title: "Manpower Outsourcing",
    shortDesc: "Full-scale outsourcing of critical secondary business units.",
    fullDesc: "Delegate complete functional units to our reliable teams. From warehouse operations, hospitality support, security, to facility management, we handle the recruitment, supervision, and performance delivery end-to-end.",
    icon: "Cpu",
    benefits: [
      "SLA-driven performance guarantees",
      "Lower operational overhead",
      "Seamless replacement and scaling"
    ],
    features: [
      "Warehouse & Logistics Crewing",
      "Retail Staff Outsourcing",
      "Hospitality Front Desk Teams",
      "Administrative Support outsourcing"
    ]
  },
  {
    id: "career-services",
    title: "Career Services",
    shortDesc: "Elite coaching, resume tailoring, and interview training for job seekers.",
    fullDesc: "We don't just help companies hire; we empower talent to rise. Our professional Career Services department works with candidates to refine their resumes, prepare for challenging technical interviews, and match with the top-tier corporations in Bangalore.",
    icon: "Award",
    benefits: [
      "Resume audits by industry HR managers",
      "Mock interviews simulating real scenarios",
      "Fast-track connection to active roles"
    ],
    features: [
      "Professional Resume Rewriting",
      "Interview Simulation & Feedback",
      "Career Navigation Strategy Session",
      "Exclusive Job Search Assistance"
    ]
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "transportation",
    name: "Transportation & Premium Chauffeurs",
    iconName: "Car",
    description: "Sourcing elite chauffeurs for corporate transit and premium ride-share fleets.",
    rolesAvailable: ["Premium Fleet Drivers", "Uber Black Partners", "Executive Chauffeurs"]
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    iconName: "Truck",
    description: "Managing rapid logistics personnel, truck drivers, and shipping coordinators.",
    rolesAvailable: ["Heavy Vehicle Drivers", "Warehouse Operators", "Logistics Managers"]
  },
  {
    id: "healthcare",
    name: "Healthcare & Pharmaceuticals",
    iconName: "Activity",
    description: "Reliable support staff, administrative assistants, and allied healthcare resources.",
    rolesAvailable: ["Lab Technicians", "Admin Assistants", "Pharmaceutical Sales Executives"]
  },
  {
    id: "hospitality",
    name: "Hospitality & Guest Relations",
    iconName: "Compass",
    description: "First-impression professionals for luxury hotels, events, and corporate guest bays.",
    rolesAvailable: ["Front Desk Associates", "Guest Relations Managers", "Event Support Staff"]
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    iconName: "ShoppingBag",
    description: "Agile retail consultants, store supervisors, and delivery logistics networks.",
    rolesAvailable: ["Store Managers", "Sales Associates", "E-comm Fulfillment Executives"]
  },
  {
    id: "it-services",
    name: "IT Services & Tech Consulting",
    iconName: "Terminal",
    description: "Matching Bangalore's top software, infrastructure, and QA engineers with tech leaders.",
    rolesAvailable: ["Full-stack Developers", "Cloud Engineers", "QA Automation Lead"]
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    iconName: "Settings",
    description: "SLA-compliant skilled technicians, supervisors, and machine operators.",
    rolesAvailable: ["CNC Operators", "Industrial Supervisors", "Assembly Technicians"]
  },
  {
    id: "corporate-services",
    name: "Corporate & Admin Services",
    iconName: "Layers",
    description: "Smooth back-office support, billing specialists, and executive assistants.",
    rolesAvailable: ["Executive Assistants", "Data Entry Leads", "Operations Coordinators"]
  }
];

export const PROCESS_DATA: ProcessStage[] = [
  {
    step: 1,
    title: "Requirement Collection",
    duration: "Day 1",
    description: "Deep dive into your organization's talent needs, culture, and operational goals.",
    details: [
      "Establish functional parameters and skills criteria",
      "Determine ideal cultural profiles",
      "Benchmark salaries against current industry standards"
    ]
  },
  {
    step: 2,
    title: "Candidate Sourcing",
    duration: "Days 2 - 4",
    description: "Activating SA Workforce's proprietary active database and multi-channel marketing campaigns.",
    details: [
      "Run targeted social & LinkedIn campaign outreach",
      "Query our verified 45,000+ candidate directory",
      "Reach passive talent through direct industry headhunting"
    ]
  },
  {
    step: 3,
    title: "Screening & Assessments",
    duration: "Days 5 - 7",
    description: "Rigorous technical reviews, behavioral evaluations, and dynamic skill testing.",
    details: [
      "Initial video interviews to test communication proficiency",
      "Practical skills tests custom-designed for the position",
      "Psychometric assessments for executive placements"
    ]
  },
  {
    step: 4,
    title: "Comprehensive Verification",
    duration: "Days 8 - 9",
    description: "Strict background checking, driving license verification, and address validation.",
    details: [
      "Rigorous previous employer reference reviews",
      "Verify education transcripts and driving history checks",
      "Initiate police database checks and physical address verification"
    ]
  },
  {
    step: 5,
    title: "Interview Coordination",
    duration: "Days 10 - 11",
    description: "Seamless synchronization between candidate calendars and your hiring team.",
    details: [
      "Pre-brief candidates on role expectations",
      "Setup dynamic video or in-person conference loops",
      "Collect prompt feedback from both parties"
    ]
  },
  {
    step: 6,
    title: "Selection & Offer Advice",
    duration: "Day 12",
    description: "Consultative feedback, salary negotiations, and closing the ideal candidate.",
    details: [
      "Help construct attractive and realistic compensation packets",
      "Counsel candidate through resignation from their previous firm",
      "Secure signed offer documents to guarantee commitment"
    ]
  },
  {
    step: 7,
    title: "Onboarding & Support",
    duration: "Day 30 and Beyond",
    description: "Transition tracking, legal payroll registration, and milestone reviews.",
    details: [
      "Coordinate first-day documentation and compliance",
      "30-day, 60-day, and 90-day check-ins with both manager and talent",
      "Execute seamless replacement policy in rare cases"
    ]
  }
];

export const COMPARISON_DATA: ComparisonBenefit[] = [
  {
    title: "Average Time-to-Hire",
    traditional: "45 - 60 Days",
    saWorkforce: "10 - 14 Days",
    isPositive: true
  },
  {
    title: "Background Verification",
    traditional: "Basic check or entirely unverified",
    saWorkforce: "100% Rigorous physical and police checks",
    isPositive: true
  },
  {
    title: "Driver Quality Standard",
    traditional: "Simple license holders, untrained",
    saWorkforce: "Uber Black certified, tested, client-facing etiquette",
    isPositive: true
  },
  {
    title: "Compliance & Legal Risk",
    traditional: "Ad-hoc contracts with high violation risks",
    saWorkforce: "100% PF, ESI, Labor Law Compliant, fully outsourced",
    isPositive: true
  },
  {
    title: "First 90-Day Retention",
    traditional: "Below 65% on average",
    saWorkforce: "98% placement stability & retention rate",
    isPositive: true
  },
  {
    title: "Administrative Effort",
    traditional: "Heavy burden of paper timesheets & payroll",
    saWorkforce: "Completely automated portal with single invoicing",
    isPositive: true
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Rohan Pillai",
    designation: "Director of Fleet Operations",
    company: "Apex Luxury Chauffeurs Bangalore",
    content: "We were struggling to scale our premium ride-share operations due to a high driver-turnover rate. SA Workforce Solutions stepped in and provided certified, highly professional Uber Black caliber drivers. Their vetting is impeccable. Our ratings skyrocketed!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1619380061814-58f03707f082?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    id: "test-2",
    name: "Priyanka Nair",
    designation: "Head of Talent Acquisition",
    company: "ZetaStream Technologies",
    content: "SA Workforce understands Bangalore's tech ecosystem like no other. They delivered three Senior Full-stack Devs and a DevOps Lead in under two weeks. Each candidate was perfectly prepared and structurally aligned with our rapid release roadmap.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    id: "test-3",
    name: "Arun Kurup",
    designation: "VP of Supply Chain",
    company: "GatiLogistics India",
    content: "Managing peak festival supply chain staffing used to be our biggest headache. SA Workforce's manpower outsourcing saved the season. They deployed 120 vetted warehouse operators and heavy truck drivers within 72 hours, managing payroll flawlessly.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    id: "test-4",
    name: "Meera Fernandez",
    designation: "General Manager",
    company: "Palazzo Premium Suites",
    content: "SA Workforce Solutions has redefined hospitality recruitment. Their outsourced front desk agents are polite, excellently trained, and possess superior communication skills. They take full accountability for attendance and replacement.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    id: "test-5",
    name: "Vikram Madhavan",
    designation: "Co-Founder",
    company: "GrowNest Agritech",
    content: "As a young startup, we didn't have the HR bandwidth to draft employment contracts, set up PF/ESI, or track field visits. Outsource-staffing with SA Workforce Solutions has let us run extremely lean. They represent true operational peace of mind.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?auto=format&fit=crop&q=80&w=120&h=120"
  }
];

export const JOBS_DATA: JobOpening[] = [
  {
    id: "job-1",
    title: "Premium Fleet Chauffeur (Uber Black Certified)",
    department: "Transportation & Premium Driver Services",
    location: "Bangalore (Indiranagar, MG Road, HSR Layout)",
    type: "Full-Time",
    salaryRange: "₹28,000 - ₹35,000 / Month + High Performance Incentives",
    experienceRequired: "4+ Years commercial driving experience with premium sedans",
    description: "We are hiring professional, highly-trained, and vetted chauffeurs to operate luxury fleets, executive transport, and Uber Black vehicles across Bangalore. You must possess impeccable grooming standards, safe driving records, and decent English/Kannada conversational proficiency.",
    requirements: [
      "Valid Indian Commercial Driving License (Yellow Board badge holder)",
      "Impeccable knowledge of Bangalore roads, short cuts, and traffic guidelines",
      "Own a modern smartphone and understand GPS navigation apps proficiently",
      "Clean criminal and driving records (verified physically and via police database)"
    ],
    postedDate: "June 25, 2026",
    isHot: true
  },
  {
    id: "job-2",
    title: "Logistics Warehouse Supervisor",
    department: "Logistics & Supply Chain Outsource",
    location: "Nelamangala Hub, Bangalore",
    type: "Full-Time",
    salaryRange: "₹30,000 - ₹38,000 / Month",
    experienceRequired: "3+ Years in E-commerce warehouse or heavy supply chain hubs",
    description: "Supervise inbound/outbound crew, coordinate packing logs, monitor shipping lanes, and manage on-shift temporary workforce. This is a fast-paced role at our logistics partner's primary Bangalore fulfillment hub.",
    requirements: [
      "Graduate in any stream or Diploma in Logistics Management",
      "Hands-on experience with Warehouse Management Software (WMS)",
      "Excellent leadership skills to manage a staff of 45+ outsourced crew",
      "Willingness to support rotational night shifts"
    ],
    postedDate: "June 24, 2026",
    isHot: false
  },
  {
    id: "job-3",
    title: "Senior Recruitment Consultant (IT & Startups)",
    department: "Talent Acquisition Division",
    location: "Bangalore (HSR Layout - Hybrid)",
    type: "Full-Time",
    salaryRange: "₹8,00,000 - ₹12,00,000 / Annum + Rewarding Uncapped Placement Commissions",
    experienceRequired: "3 - 5 Years in tech-hiring, agency experience highly valued",
    description: "Join our core elite talent acquisition team at SA Workforce Solutions. You will own the full recruitment lifecycle for top-tier startups, from partner mapping to sourcing, deep screening, and offer closing.",
    requirements: [
      "Proven history of placing software developers, cloud architects, and product managers",
      "In-depth command of Boolean strings, LinkedIn Recruiter premium, and Git/StackOverflow search",
      "Exceptional communication skills, high emotional intelligence, and bargaining abilities",
      "Ability to handle high volume pipelines simultaneously with accuracy"
    ],
    postedDate: "June 26, 2026",
    isHot: true
  },
  {
    id: "job-4",
    title: "Hospitality Executive (Corporate Guest Relations)",
    department: "Hospitality & Guest Relations",
    location: "Whitefield, Bangalore",
    type: "Full-Time",
    salaryRange: "₹25,000 - ₹30,000 / Month",
    experienceRequired: "1 - 3 Years in front-desk hospitality or premium premium hotel guest bays",
    description: "Represent the premium corporate front office of a tier-1 multinational client. Responsibilities include greeting international delegations, handling telephone switches, booking conference rooms, and organizing transit files.",
    requirements: [
      "Degree or Diploma in Hospitality, Hotel Management, or Mass Communication",
      "Fluent verbal and written English with warm, helpful public demeanor",
      "Familiar with standard MS Office apps, spreadsheet summaries, and calendar tools",
      "Presentable, highly organized, and punctual"
    ],
    postedDate: "June 23, 2026",
    isHot: false
  },
  {
    id: "job-5",
    title: "Heavy Cargo Transport Operator",
    department: "Transportation & Logistics Fleet",
    location: "Bangalore Outer Ring Road Hub",
    type: "Contract",
    salaryRange: "₹35,000 - ₹45,000 / Month + Allowances",
    experienceRequired: "5+ Years driving multi-axle trailers or heavy container trucks",
    description: "We are recruiting heavy cargo drivers for interstate shipments. Routes originate from Bangalore industrial sectors into neighboring Southern hubs. Security and reliability are our highest guidelines.",
    requirements: [
      "Heavy Motor Vehicle (HMV) Valid License",
      "Zero accident records in the last 48 months",
      "Strong understanding of payload safety, tie-downs, and container checks",
      "Physical fitness and clear eye-sight test certifications"
    ],
    postedDate: "June 25, 2026",
    isHot: true
  }
];
