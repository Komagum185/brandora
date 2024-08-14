// components/BrandoraList.tsx
import CardComponent from '@/components/ui/card-component';
import React from 'react';


export const ServiceList: React.FC = () => {
  return (
    <div className='min-h-screen bg-white min-w-screen'>
    <div className=" bg-gray-900 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CardComponent
          imageUrl="/images/sample-image.jpg"
          title="Creative Design"
          items={[
            'Print Advertising Design (posters, flyers, business cards, etc.)',
             'Dynamic Ad Production (video ads, animations, etc.)',
              'Advertising Copywriting and Design']
            }
        />
        <CardComponent
          imageUrl="/images/sample-image2.jpg"
          title="Ad Production"
          items={[
            'Advertising Photography and Video Shooting',
             'Multi-channel Adaptation of Ad Materials',
              'Post-production and Special Effects for Ads']
            }
        />
        <CardComponent
          imageUrl="/images/sample-image3.jpg"
          title="Ad Placement and Monitoring"
          items={[
            'Advertising Effectiveness Monitoring and Optimization',
             'Ad Placement Strategy and Execution',
              'Media Channel Selection and Budget Allocation']
            }
        />
      </div>
    </div>
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardComponent
          imageUrl="/images/sample-image.jpg"
         
          title="Creative Design"
          items={[
            'Print Advertising Design (posters, flyers, business cards, etc.)',
             'Dynamic Ad Production (video ads, animations, etc.)',
              'Advertising Copywriting and Design']
            }
        />
        <CardComponent
          imageUrl="/images/sample-image2.jpg"
          title="Ad Production"
          items={[
            'Advertising Photography and Video Shooting',
             'Multi-channel Adaptation of Ad Materials',
              'Post-production and Special Effects for Ads']
            }
        />
        <CardComponent
          imageUrl="/images/sample-image3.jpg"
          title="Ad Placement and Monitoring"
          items={[
            'Advertising Effectiveness Monitoring and Optimization',
             'Ad Placement Strategy and Execution',
              'Media Channel Selection and Budget Allocation']
            }
        />
      </div>
    </div>
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardComponent
          imageUrl="/images/sample-image.jpg"
         
          title="Creative Design"
          items={[
            'Print Advertising Design (posters, flyers, business cards, etc.)',
             'Dynamic Ad Production (video ads, animations, etc.)',
              'Advertising Copywriting and Design']
            }
        />
        <CardComponent
          imageUrl="/images/sample-image2.jpg"
          title="Ad Production"
          items={[
            'Advertising Photography and Video Shooting',
             'Multi-channel Adaptation of Ad Materials',
              'Post-production and Special Effects for Ads']
            }
        />
        <CardComponent
          imageUrl="/images/sample-image3.jpg"
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
