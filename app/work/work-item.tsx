// app/works/work-item.tsx
import Image from 'next/image';
import { works } from '@/data';

interface WorkItemProps extends works {}

export default function WorkItem({ title, description, imageUrl }: WorkItemProps) {
  return (
    <div className="work-item bg-white p-4 rounded-lg shadow-md sm:flex sm:flex-col sm:items-center">
      <Image src={imageUrl} alt={title} width={300} height={200} className="rounded-lg mb-4 sm:mb-0" />
      <div className="sm:text-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}
