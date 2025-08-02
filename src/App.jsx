import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <HowItWorks />
      <ContactCTA />
      <Footer />
      <main>
        {/* HeroSection will go here next */}
      </main>
    </>
  );
}

export default App;
