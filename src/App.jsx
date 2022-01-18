import { Route, Routes } from 'solid-app-router';
import HomePageHeader from './components/headers/homePageHeader';
import AboutPage from './pages/about/aboutPage';
import ContactPage from './pages/contact/contactPage';
import HomePage from './pages/home/homePage';
import ProjectsPage from './pages/projects/projectsPage';
import ResourcesPage from './pages/resources/resourcesPage';

let App = () => {
  return (
    <div class="flex flex-col w-screen h-screen text-black overflow-hidden">
      <HomePageHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutPage />} />
        <Route path="/contactUs" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>

      <div class="bg-gray-50 w-screen h-20"></div>
    </div>
  );
};

export default App;
