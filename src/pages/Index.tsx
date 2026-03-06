import { useState, useEffect } from 'react';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import HomeView from '../views/HomeView';
import StandardDetailView from '../views/StandardDetailView';
import CoEView from '../views/CoEView';
import EVMODetailView from '../views/EVMODetailView';

const Index = () => {
  const [view, setView] = useState('home');
  const [detailId, setDetailId] = useState('');

  const navigate = (newView: string, id?: string) => {
    setView(newView);
    if (id) setDetailId(id);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  };

  return (
    <div className="min-h-screen bg-background">
      <Topbar onNavigate={navigate} />

      {view === 'home' && (
        <>
          <HomeView onNavigate={navigate} />
          <Footer />
        </>
      )}

      {view === 'standard' && (
        <StandardDetailView standardId={detailId} onNavigate={navigate} />
      )}

      {view === 'coe' && (
        <>
          <CoEView onNavigate={navigate} />
          <Footer />
        </>
      )}

      {view === 'evmo' && (
        <EVMODetailView onNavigate={navigate} />
      )}
    </div>
  );
};

export default Index;
