"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import FeatureCardNine from "@/components/sections/feature/FeatureCardNine";
import TextAbout from "@/components/sections/about/TextAbout";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import MetricCardTen from "@/components/sections/metrics/MetricCardTen";
import TeamCardTwo from "@/components/sections/team/TeamCardTwo";
import TestimonialCardSixteen from "@/components/sections/testimonial/TestimonialCardSixteen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="mediumSmall"
      sizing="mediumLargeSizeLargeTitles"
      background="noise"
      cardStyle="glass-elevated"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="MWR Engenharia"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Serviços", id: "services" },
            { name: "Projetos", id: "team" },
            { name: "Sobre a Empresa", id: "about" },
            { name: "Avaliações", id: "testimonials" },
            { name: "Contato", id: "contact" },
          ]}
          button={{
            text: "Solicitar Orçamento",            href: "contact"}}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="MWR"
          description="Energia Solar e Aquecimento Inteligente para sua Casa"
          buttons={[
            { text: "Solicitar Orçamento", href: "contact" },
            { text: "Ligar Agora", href: "tel:+551938162602" },
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AX2VppTtnuttzyDIZfEQzhVaYa/uploaded-1772724757410-boo53a04.jpg?_wi=1",              imageAlt: "Painéis solares em residência moderna"},
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AX2VppTtnuttzyDIZfEQzhVaYa/uploaded-1772724757410-4rkyszju.jpg?_wi=1",              imageAlt: "Sistema de aquecimento solar instalado"},
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AX2VppTtnuttzyDIZfEQzhVaYa/uploaded-1772724757410-0y55zbip.jpg?_wi=1",              imageAlt: "Escritório MWR Engenharia"},
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNine
          title="Nossos Serviços"
          description="Soluções completas de energia solar e aquecimento para residências com engenharia especializada"
          features={[
            {
              id: 1,
              title: "Energia Solar Fotovoltaica",              description: "Instalação de sistemas para geração de energia solar residencial com tecnologia de ponta",              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AX2VppTtnuttzyDIZfEQzhVaYa/uploaded-1772724757410-boo53a04.jpg?_wi=2"},
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AX2VppTtnuttzyDIZfEQzhVaYa/uploaded-1772724757410-4rkyszju.jpg?_wi=2"},
            },
            {
              id: 2,
              title: "Aquecimento Solar de Água",              description: "Soluções eficientes para aquecimento de água com energia solar, reduzindo custos",              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AX2VppTtnuttzyDIZfEQzhVaYa/uploaded-1772724757410-4rkyszju.jpg?_wi=3"},
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AX2VppTtnuttzyDIZfEQzhVaYa/uploaded-1772724757410-hefr373n.jpg?_wi=1"},
            },
            {
              id: 3,
              title: "Aquecimento de Piscina",              description: "Sistemas de aquecimento solar e trocadores de calor para maior conforto",              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AX2VppTtnuttzyDIZfEQzhVaYa/uploaded-1772724757410-0y55zbip.jpg?_wi=2"},
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AX2VppTtnuttzyDIZfEQzhVaYa/uploaded-1772724757410-m6xoehft.jpg?_wi=1"},
            },
          ]}
          showStepNumbers={true}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Sobre Nós"
          title="A MWR Engenharia é especializada em soluções de energia solar e aquecimento para residências. Com equipe técnica qualificada e equipamentos de alta qualidade, desenvolvemos projetos eficientes que garantem economia, conforto e sustentabilidade. Nosso compromisso é oferecer não apenas instalação, mas também suporte técnico e acompanhamento pós-venda de excelência."
          useInvertedBackground={false}
          buttons={[
            { text: "Conhecer Mais", href: "team" },
          ]}
        />
      </div>

      <div id="why-choose" data-section="why-choose">
        <ProductCardOne
          title="Por Que Escolher a MWR Engenharia?"
          description="Expertise técnica e atendimento premium que garantem seus projetos"
          products={[
            {
              id: "1",              name: "Equipe Técnica Especializada",              price: "Expertise Premium",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AX2VppTtnuttzyDIZfEQzhVaYa/uploaded-1772724757410-boo53a04.jpg?_wi=3"},
            {
              id: "2",              name: "Equipamentos de Alta Qualidade",              price: "Primeira Linha",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AX2VppTtnuttzyDIZfEQzhVaYa/uploaded-1772724757410-4rkyszju.jpg?_wi=4"},
            {
              id: "3",              name: "Projetos Personalizados",              price: "Sob Medida",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AX2VppTtnuttzyDIZfEQzhVaYa/uploaded-1772724757410-hefr373n.jpg?_wi=2"},
            {
              id: "4",              name: "Instalação Profissional",              price: "Certificada",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AX2VppTtnuttzyDIZfEQzhVaYa/uploaded-1772724757410-0y55zbip.jpg?_wi=3"},
            {
              id: "5",              name: "Suporte Pós-Venda",              price: "24/7 Atencioso",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AX2VppTtnuttzyDIZfEQzhVaYa/uploaded-1772724757410-m6xoehft.jpg?_wi=2"},
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Nossa Equipe Técnica"
          description="Profissionais especializados em engenharia, energia solar e sistemas térmicos"
          members={[
            {
              id: "1",              name: "Carlos Mendes",              role: "Engenheiro Sênior",              description: "20 anos de experiência em projetos de energia solar residencial",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AX2VppTtnuttzyDIZfEQzhVaYa/uploaded-1772736547180-n2mb6cra.jpg",              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"},
              ],
            },
            {
              id: "2",              name: "Ana Silva",              role: "Especialista em Sistemas Térmicos",              description: "Especialização em aquecimento solar e trocadores de calor",              imageSrc: "http://img.b2bpic.net/free-photo/business-woman-hard-hat-using-laptop_1303-29779.jpg",              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"},
              ],
            },
            {
              id: "3",              name: "Roberto Santos",              role: "Técnico de Instalação",              description: "Certificado em instalações solares com mais de 15 anos no mercado",              imageSrc: "http://img.b2bpic.net/free-photo/young-workman-wearing-white-hard-hat_1303-26649.jpg?_wi=2",              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"},
              ],
            },
            {
              id: "4",              name: "Juliana Costa",              role: "Gerente de Projetos",              description: "Coordena todos os projetos desde orçamento até pós-venda",              imageSrc: "http://img.b2bpic.net/free-photo/young-workman-wearing-white-hard-hat_1303-26649.jpg?_wi=3",              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"},
              ],
            },
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTen
          title="Números que Falam"
          description="Confiança comprovada por números crescentes de sucesso"
          metrics={[
            {
              id: "1",              title: "Avaliações no Google",              subtitle: "70+ clientes satisfeitos",              category: "Credibilidade",              value: "4.8 ⭐"},
            {
              id: "2",              title: "Projetos Instalados",              subtitle: "Centenas de instalações bem-sucedidas",              category: "Experiência",              value: "500+"},
            {
              id: "3",              title: "Área de Atendimento",              subtitle: "Indaiatuba e região de abrangência",              category: "Cobertura",              value: "Regional"},
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="O Que Nossos Clientes Dizem"
          description="Depoimentos reais de clientes satisfeitos com nossos serviços"
          testimonials={[
            {
              id: "1",              name: "João Martinez",              role: "Proprietário",              company: "Residência Indaiatuba",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg?_wi=1"},
            {
              id: "2",              name: "Fernanda Costa",              role: "Coordenadora",              company: "Casa Residencial",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg?_wi=2"},
            {
              id: "3",              name: "Pedro Oliveira",              role: "Proprietário",              company: "Condomínio Premium",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg?_wi=3"},
            {
              id: "4",              name: "Marisa Souza",              role: "Gerente",              company: "Edifício Sustentável",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg?_wi=4"},
          ]}
          kpiItems={[
            { value: "70+", label: "Avaliações no Google" },
            { value: "4.8", label: "Avaliação Média" },
            { value: "500+", label: "Projetos Completados" },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Solicite um Orçamento - Entre em contato com nossa equipe para avaliar seu projeto e receber uma proposta personalizada."
          animationType="reveal-blur"
          buttons={[
            { text: "Solicitar Orçamento", href: "tel:+551938162602" },
            { text: "Ligar Agora", href: "tel:+551938162602" },
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="MWR Engenharia"
          leftLink={{ text: "Política de Privacidade", href: "#" }}
          rightLink={{ text: "Termos de Serviço", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}
