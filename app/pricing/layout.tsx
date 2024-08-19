import { Container } from 'react-bootstrap';

interface PricePageLayoutProps {
  children: React.ReactNode;
}

export default function WorksLayout({ children }: PricePageLayoutProps) {
  return (
    <Container className="my-4">
      {children}
    </Container>
  );
}
