import { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';

const HeroSection = (): JSX.Element => {
    const slides = [
        {
          content: {
            heading: "Navigate Oman’s Labor Market",
            subheading: "Empowering Your Career Choices",
            description: "Discover in-depth insights and analysis of Oman’s job market to help you make informed career decisions and plan your next step.",
          },
          backgroundImage: "url('https://images.pexels.com/photos/691552/pexels-photo-691552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        },
        {
          content: {
            heading: "Your Career Path Made Clear",
            subheading: "Tools for Success",
            description: "Find the resources and guidance you need to identify your strengths, explore opportunities, and take actionable steps toward your career goals.",
          },
          backgroundImage: "url('https://images.pexels.com/photos/3873659/pexels-photo-3873659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        },
        {
          content: {
            heading: "Shape Your Future in Oman",
            subheading: "Unlock Opportunities",
            description: "Analyze trends, plan for demand, and connect with opportunities tailored to your ambitions in Oman’s dynamic labor market.",
          },
          backgroundImage: "url('https://images.pexels.com/photos/5992569/pexels-photo-5992569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        },
      ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up on component unmount
  }, [slides.length]);

  return (
    <div style={{ width: '100%', height: '88vh', position: 'relative', overflow: 'hidden' }}>
      {slides.map((slide, index) => (
        <div
className={styles.hero_section__wrapper}
          key={index}
          style={{
            display: currentSlide === index ? 'flex' : 'none',
            backgroundImage: slide.backgroundImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            position: 'absolute',
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          <h4>{slide.content.subheading}</h4>
          <h2>{slide.content.heading}</h2>
          <p>{slide.content.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;