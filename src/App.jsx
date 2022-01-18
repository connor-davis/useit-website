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
        <Route path="/" component={<HomePage />} />
        <Route path="/aboutUs" component={<AboutPage />} />
        <Route path="/contactUs" component={<ContactPage />} />
        <Route path="/projects" component={<ProjectsPage />} />
        <Route path="/resources" component={<ResourcesPage />} />
      </Routes>

      <div class="bg-gray-50 w-screen h-20"></div>
    </div>
  );
};

export default App;
