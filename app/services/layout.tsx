// app/works/layout.tsx
import { Container } from 'react-bootstrap';

interface ServicesLayoutProps {
  children: React.ReactNode;
}

export default function WorksLayout({ children }: ServicesLayoutProps) {
  return (
    <Container className="my-4">
      {children}
    </Container>
  );
}
