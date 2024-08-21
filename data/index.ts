export interface Work {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  // Add more properties as needed
}

export const navItems=[
  {name:"Brandora", link: '/'},
  {name:"About", link: '/about'},
  {name:"Services", link: '/services'},
  {name:"Works", link: '/works'},
  {name:"Pricing", link: '/pricing'},

]

export const teamMembers = [
  {
    name: 'Bonnie Green',
    title: 'Senior Front-end Developer',
    imageUrl: 'https://images.unsplash.com/photo-1492462543947-040389c4a66c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Micheal Gough',
    title: 'Front-end Developer',
    imageUrl: 'https://images.unsplash.com/photo-1542370773-ae6d54f6748d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Helene Engels',
    title: 'Designer',
    imageUrl: 'https://images.unsplash.com/photo-1564809392-cd81eb82320d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3Dg',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
  {
    name: 'Neil Sims',
    title: 'CEO & React Developer',
    imageUrl: 'https://images.unsplash.com/photo-1509988892867-8bf3ee9e3afa?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#',
    },
  },
];


  export const gridItems=[
    {
        id: 1,
        title: '',
        description: '',
        className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh',
        imgClassName: 'w-full h-full',
        titleClassName: 'justify-end',
        img: '',
    },
    {
        id: 2,
        title: '',
        description: '',
        className: 'lg:col-span-2 md:col-span-3 md:row-span-3',
        imgClassName: '',
        titleClassName: 'justify-end',
        img: '',
    },
    {
        id: 3,
        title: '',
        description: '',
        className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh',
        imgClassName: '',
        titleClassName: 'justify-end',
        img: '',
    },
    {
        id: 4,
        title: '',
        description: '',
        className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh',
        imgClassName: 'w-full h-full',
        titleClassName: 'justify-end',
        img: '',
    },
    {
        id: 5,
        title: '',
        description: '',
        className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh',
        imgClassName: 'w-full h-full',
        titleClassName: 'justify-end',
        img: '',
    },
  ]

export const socialMedia=[
    {
        img: '/',
        link: '#facebook'
    },
    {
        img: '/',
        link: '#instagram'
    },
    {
        img: '/',
        link: '#twitter'
    },
    {
        img: '/',
        link: '#linkedin'
    },
]
export const testimonials = [
    {
        author: '',
        company: '',
        img: '/global paper.png',
        quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        author: '',
        company: '',
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        author: '',
        company: '',
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        author: '',
        company: '',
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        author: '',
        company: '',
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
  ];
export const works: Work[] = [
  {
      id: 1,
      title: 'Project 1',
      description: 'Description 1',
      imageUrl: '',
  },
  {
      id: 2,
      title: 'Project 2',
      description: 'Description 2',
      imageUrl: '',
  },
  {
      id: 3,
      title: 'Project 3',
      description: 'Description 3',
      imageUrl: '',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Description 4',
    imageUrl: '',
  },
  {
      id: 5,
      title: 'Project 5',
      description: 'Description 5',
      imageUrl: '',
  },
  {
      id: 6,
      title: 'Project 6',
      description: 'Description 6',
      imageUrl: '',
  }
]

export const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
   
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },
   
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },
   
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];

  export const items=[
    {
        img: "/gp.png",
        name: 'Glabal Paper',
        quote: '',
        title: '',
    },
    {
        img: '/Heey2.png',
        name: 'HEEY 2',
        quote: '',
        title: '',
    },
    {
        img: '/bajsan.png',
        name: 'BAJSAN',
        quote: '',
        title: '',
    },
    {
        img: '/dspace.png',
        name: 'D-SPACE',
        quote: '',
        title: '',
    },
    {
        img: '/gps.png',
        name: 'GPS Security Uganda',
        quote: '',
        title: '',
    },
    {
        img: '/jinmao.png',
        name: '',
        quote: '',
        title: '',

    },
    {
      img: '/lmz.png',
      name: '',
      quote: '',
      title: '',
  },
    {
        img: '/yidao.png',
        name: '',
        quote: '',
        title: '',
    },
  ];


export const faqData = [
    {
      question: 'What is Brandora?',
      answer: 'Brandora Design & Media Services Co Ltd targets the following customer segments Emerging Brands and Startups: We specialize in helping emerging brands and startups establish and solidify their brand identity. Through innovative strategies and designs, we attract the attention of target markets.Small and Medium Enterprises (SMEs): We provide comprehensive brand-building services tailored to small and medium enterprises. Our goal is to help them stand out in competitive markets, expand market share, and enhance brand value. Multinational Companies and Large Enterprise Branches: We collaborate with multinational companies and their branches in East Africa, offering localized brand strategies and advertising design services that cater to local market needs and cultural contexts. Industry-Specific Clients: We focus on specific industries such as consumer goods, technology, real estate, and financial services, delivering customized brand consultancy and advertising solutions tailored to their unique requirements. Clients Seeking Brand Innovation and Market Share Growth: Our clients typically seek to achieve business growth and increase market share through innovative brand strategies and precise market promotion. Brandora Design & Media Services Co Ltd is committed to providing ongoing support and innovative solutions tailored to the diverse needs of different client segments. Our professional team ensures that each client receives personalized service aimed at achieving success in competitive markets.',
    },
    {
      question: 'What problems does Brandora seek to solve?',
      answer: 'Brandora Design & Media Services Co Ltd addresses a variety of issues for clients in brand building and advertising design, including but not limited to: Brand Identification and Positioning: We help clients clearly define the uniqueness of their brand and its market positioning, ensuring it accurately communicates core values to target audiences. 2.Lack of Market Competitiveness: Through thorough market analysis and competitor research, we develop effective brand strategies and marketing plans to enhance clients competitiveness in fierce markets. Inconsistent Brand Image: We design and implement unified brand visuals and communication strategies to maintain consistency and professionalism across various media and channels. Market Share and Business Growth: Using innovative advertising design and precise market promotion, we assist clients in expanding market share and achieving business growth. Cross-cultural and Regional Adaptation: For multinational companies and their branches in East Africa, we provide localized brand strategies and advertising design services to help clients adapt to local market cultures and consumer preferences. Through professional brand consultancy and creative design, Brandora Design & Media Services Co Ltd is committed to solving various challenges clients face in brand building and market promotion, bringing them sustained business success and enhanced brand value.',
    },
    {
      question: 'Who are our competitors?',
      answer: '•  Other creative design and advertising agencies: Similar firms focusing on brand building, advertising design, and media services, competing based on creative uniqueness and execution capabilities. Specialized brand consulting firms: These companies offer professional brand strategy and market analysis services, competing based on strategic insights and analytical capabilities. Digital marketing and social media agencies: Companies specializing in digital marketing, social media management and online advertising, competing based on digital expertise and effectiveness in online promotions. Large advertising agencies and multinational advertising groups: Global advertising firms and multinational advertising groups often have greater resources and global networks, competing based on coverage and global service capabilities. Regional competitors: In the East African region, there have local creative design and advertising agencies, competing based on local market understanding and utilization of local resources.',
    },
    // Add more FAQ items as needed
  ];

export interface SubItem {
  title: string;
}

export interface Item {
  title: string;
  subItems?: SubItem[];
}

export interface Section {
  sectionTitle: string;
  items: Item[];
}

export const servicesData: Section[] = [
  {
    sectionTitle: 'Brand Strategy',
    items: [
      {
        title: 'Brand Positioning and Analysis',
        subItems: [
          { title: 'Market Research and Competitive Analysis' },
          { title: 'Brand Positioning and Differentiation Strategy' },
          { title: 'Defining Brand Core Values and Vision' },
        ],
      },
      {
        title: 'Brand Architecture Design',
        subItems: [
          { title: 'Brand Naming and Logo Design' },
          { title: 'Brand Story and Visual Identity System' },
          { title: 'Brand Language and Tone of Voice' },
        ],
      },
      {
        title: 'Brand Management and Maintenance',
        subItems: [
          { title: 'Brand Asset Evaluation and Management' },
          { title: 'Brand Consistency Management' },
          { title: 'Brand Crisis Management and Public Relations' },
        ],
      },
    ],
  },
  {
    sectionTitle: 'Marketing Planning',
    items: [
      {
        title: 'Market Marketing Plan',
        subItems: [
          { title: 'Market Segmentation and Target Market Selection' },
          { title: 'Setting Marketing Goals and KPIs' },
          { title: 'Integrated Marketing Communication Strategy (IMC)' },
        ],
      },
      {
        title: 'Digital Marketing',
        subItems: [
          { title: 'Social Media Marketing Planning and Execution' },
          { title: 'Search Engine Optimization (SEO) and Search Engine Marketing (SEM)' },
          { title: 'Content Marketing and Influencer Collaborations' },
          { title: 'Web Design & Development' },
        ],
      },
      {
        title: 'Event Marketing',
        subItems: [
          { title: 'Product Launches and Brand Event Planning' },
          { title: 'Trade Shows and Sponsorship Management' },
        ],
      },

    ],
  },
  {
    sectionTitle: 'Advertising Design and Placement',
    items: [
      {
        title: 'Creative Design',
        subItems: [
          { title: 'Print Advertising Design (posters, flyers, business cards, etc.)' },
          { title: 'Dynamic Ad Production (video ads, animations, etc.)' },
          { title: 'Advertising Copywriting and Design' },
        ],
      },
      {
        title: 'Ad Production',
        subItems: [
          { title: 'Advertising Photography and Video Shooting' },
          { title: 'Multi-channel Adaptation of Ad Materials' },
          { title: 'Post-production and Special Effects for Ads' },
        ],
      },
      {
        title: 'Ad Placement and Monitoring',
        subItems: [
          { title: 'Media Channel Selection and Budget Allocation' },
          { title: 'Ad Placement Strategy and Execution' },
          {title: ''}
        ],
      },

    ],
  },
  
];
export const serviceCards = [
  {
    title: "Brand Identification and Positioning",
    desc: "Brand positioning and analysis along with brand architecture design and we also do brand management and maintenence",
  },
  {
    title: "Marketing Planning",
    desc: "We do market segmentation and Target Market Selection",
  },
  {
    title: "Advertising Design and Placement",
    desc: "We do creative design and ad production along with ad placement and monitoring",
  },
  
];
