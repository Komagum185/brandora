import Image from 'next/image';

interface Work {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  width: number;
  height: number; // Assuming image dimensions are available
}

interface WorkItemProps extends Work {}

export default function WorkItem({ title, description, imageUrl, width, height }: WorkItemProps) {
  return (
    <div className="work-item bg-white p-4 rounded-lg shadow-md sm:flex sm:flex-col sm:items-center">
      <Image src={imageUrl} alt={title} width={width} height={height} className="rounded-lg mb-4 sm:mb-0" />
      <div className="sm:text-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}