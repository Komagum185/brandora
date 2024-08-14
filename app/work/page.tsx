'use client'
import WorksLayout from './layout';
import { works } from '@/data';
import WorkItem from './work-item';

export default function WorksPage({ works }: { works: works[] }) {
  return (
    <WorksLayout>
      {works.map((work) => (
        <WorkItem key={work.id} {...work} />
      ))}
    </WorksLayout>
  );
}

export async function Page() {
  const data = await fetch('https://api.example.com/...').then((res) =>
    res.json()
  )
  // const works: Work[] = [
  //   { id: 1, title: 'Project 1', description: 'Description for Project 1', imageUrl: '/project1.jpg' },
  //   { id: 2, title: 'Project 2', description: 'Description for Project 2', imageUrl: '/project2.jpg' },
  //   // ... more work items
  // ];

  return {
    props: {
      works,
    },
  };
}
