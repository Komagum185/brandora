// components/BrandoraList.tsx
import CardComponent from '@/components/ui/card-component';
import React from 'react';


export const ServiceList: React.FC = () => {
return (
  <div className='bg-white min-w-screen w-screen'>
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-base font-semibold leading-7 text-indigo-600">
        LET BRANDORA TRANSFORM YOUR VISION IN TO REALITY!!</h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      A reputable global brand that deals with brand transformation.
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-600">
      Every brand has a story to tell, let Brandora help you craft and share your own unique tale with the rest of the world.
      Our aim is to unleash the power of your brand through creating the most memorable branding, marketing and advertising strategies.
      Are you a startup looking to break into the market or an established company seeking to rebrand and reinvent yourself? 
      Let our team of experts tailor an innovative solution to your needs.
      </p>
    </div>
  <div className=" bg-gray-900 flex items-center justify-center p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className='p-6 m-6 text-white'>
      <h1 className='text-center text-white font-extrabold text-sm'>
      Brand Strategy
      </h1>
    </div>
    <CardComponent
      imageUrl="/brandora.png"
      title="Brand Positioning and Analysis"
      items={[
        'Market Research and Competitive Analysis',
        'Brand Positioning and Differentiation Strategy',
          'Defining Brand Core Values and Vision']
        }
    />
    <CardComponent
      imageUrl="/brandora.png"
      title="Brand Architecture Design"
      items={[
        'Brand Naming and Logo Design',
        'Brand Story and Visual Identity System',
          'Brand Language and Tone of Voice']
        }
    />
    <CardComponent
      imageUrl="/brandora.png"
      title="Brand Management and Maintenance"
      items={[
        'Brand Asset Evaluation and Management',
        'Brand Consistency Management',
          'Brand Crisis Management and Public Relations']
        }
    />
  </div>
  </div>
  <div className="bg-gray-900 flex items-center justify-center p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <CardComponent
      imageUrl="/brandora.png"
    
      title="Market Marketing Plan"
      items={[
        'Market Segmentation and Target Market Selection',
        'Setting Marketing Goals and KPIs',
          'ntegrated Marketing Communication Strategy (IMC)']
        }
    />
    <CardComponent
      imageUrl="/brandora.png"
      title="Digital Marketing"
      items={[
        'Search Engine Optimization (SEO) and Search Engine Marketing (SEM)',
        'Content Marketing and Influencer Collaborations',
          'Web Design & Development',
        'Social Media Marketing Planning and Execution']
        }
    />
    <CardComponent
      imageUrl="/brandora.png"
      title="Event Marketing"
      items={[
        'Product Launches and Brand Event Planning',
        'Experiential Marketing and Interactive Event Desi',
          'Trade Shows and Sponsorship Management']
        }
    />
    <div className='p-6 m-6 text-white'>
    <h1 className='text-center text-white font-extrabold text-sm'>Market Planning</h1>
    </div>
  </div>
  </div>
  <div className="bg-gray-900 flex items-center justify-center p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div className='p-6 m-6 text-white'>
  <h1 className='text-center text-white font-extrabold text-sm'>Advertising Design and Placement</h1>
    </div>
    <CardComponent
      imageUrl="/brandora.png"
    
      title="Creative Design"
      items={[
        'Print Advertising Design (posters, flyers, business cards, etc.)',
        'Dynamic Ad Production (video ads, animations, etc.)',
          'Advertising Copywriting and Design']
        }
    />
    <CardComponent
      imageUrl="/brandora.png"
      title="Ad Production"
      items={[
        'Advertising Photography and Video Shooting',
        'Multi-channel Adaptation of Ad Materials',
          'Post-production and Special Effects for Ads']
        }
    />
    <CardComponent
      imageUrl="/brandora.png"
      title="Ad Placement and Monitoring"
      items={[
        'Advertising Effectiveness Monitoring and Optimization',
        'Ad Placement Strategy and Execution',
          'Media Channel Selection and Budget Allocation']
        }
    />
  </div>
  </div>

  </div>
);
};
