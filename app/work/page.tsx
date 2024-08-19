// import { Work } from '@/data';
// import WorksLayout from './layout';
// import WorkItem from './work-item';



// const WorkPage: React.FC<{ works: Work[] }> = ({ works }) => {
//   return (
//     <WorksLayout>
//       {works.map((work) => (
//         <WorkItem width={0} height={0} key={work.id} {...work} />
//       ))}
//     </WorksLayout>
//   );
// }

import { Work, works } from '@/data'; 
import WorksLayout from './layout';
import WorkItem from './work-item';

const WorkPage = () => {
  return (
    <WorkComponent works={works} />
  );
};

const WorkComponent = ({ works }: { works: Work[] }) => {
  return (
    <WorksLayout>
       {works.map((work) => (
            <WorkItem width={0} height={0} key={work.id} {...work} />
          ))}
    </WorksLayout>
      );
};

export default WorkPage;

