export interface works {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  // Add more properties as needed
}

export const navItems=[
  {name:"Home", link: '/'},
  {name:"About", link: '#about'},
  {name:"Servies", link: '#services'},
  {name:"Works", link: '#works'},
  {name:"Pricing", link: '#pricing'},

]

  export const teamMembers = [
    {
        id: 1,
        name: 'Harris',
        title: 'CEO & Founder',
        bio: ', leading teams to success.',
        imageUrl: '/brandora.jpg',
    },
    {
        id: 2,
        name: 'Dean Ahereza',
        title: 'Chief Technology Officer',
        bio: 'Jane is an expert in cloud computing and AI, driving innovation at our company.',
        imageUrl: '/brandora.jpg',
    },
    {
        id: 3,
        name: 'Ayo Innocent',
        title: 'Lead Developer',
        bio: 'Mike specializes in web development, ensuring our products are cutting-edge.',
        imageUrl: '/brandora.jpg',
    },
    {
        id: 4,
        name: 'Edith',
        title: 'Project Manager',
        bio: 'Sara manages projects with precision and ensures timely delivery of all milestones.',
        imageUrl: '/brandora.jpg',
    },
    {
        id: 5,
        name: 'Dominc Toreto',
        title: 'UX/UI Designer',
        bio: 'Emily designs intuitive interfaces that enhance user experience across our platforms.',
        imageUrl: '/brandora.jpg',
    },
    {
        
        id: 6,
        name: 'someone somewhere',
        title: 'Marketing Director',
        bio: 'Chris creates strategies that position our brand at the forefront of the industry.',
        imageUrl: '/brandora.jpg',
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
export const comapanies = [
    {
        id:1,
        name: '',
        despcription: '',
        img: '/'
    },
    {
        id:2,
        name: '',
        despcription: '',
        img: '/'
    },
    {
        id:3,
        name: '',
        despcription: '',
        img: '/'
    },
    {
        id:4,
        name: '',
        despcription: '',
        img: '/'
    },
    {
        id:5,
        name: '',
        despcription: '',
        img: '/'
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
export const works = [
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
      title: 'Project 4',
      description: 'Description 4',
      imageUrl: '',
  },
  {
      id: 5,
      ttitle: 'Project 5',
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

  export const companies=[
    {
        imageUrl: "/global-paper.png",
        name: 'Glabal Paper',
        quote: '',
        title: '',
    },
    {
        imageUrl: '/Heey2.png',
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
        imageUrl: '/global paper.png',
        name: 'D-SPACE',
        quote: '',
        title: '',
    },
    {
        imageUrl: '/gps.png',
        name: 'GPS Security Uganda',
        quote: '',
        title: '',
    },
    {
        imageUrl: '/jinmao.png',
        name: 'JinMao',
    },
    {
        imageUrl: '/china.png',
        name: 'chinatown',
        quote: '',
        title: '',
    },
  ];


export const faqData = [
    {
      question: 'What is Brandora?',
      answer: 'Brandora is a tech company focused on providing innovative solutions to modern-day problems.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can reach out to our customer support team via email at support@brandor.com.',
    },
    {
      question: 'What services do you offer?',
      answer: 'We offer a wide range of services including web development, mobile app development, and cloud solutions.',
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