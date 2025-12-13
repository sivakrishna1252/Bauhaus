import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
