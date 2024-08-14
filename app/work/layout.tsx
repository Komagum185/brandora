// app/works/layout.tsx
import { Container } from 'react-bootstrap';

interface WorksLayoutProps {
  children: React.ReactNode;
}

export default function WorksLayout({ children }: WorksLayoutProps) {
  return (
    <Container className="my-4">
      {children}
    </Container>
  );
}
