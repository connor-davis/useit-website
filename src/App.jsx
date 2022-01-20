import { Route, Routes } from 'solid-app-router';
import HomePageHeader from './components/headers/homePageHeader';
import AboutPage from './pages/about/aboutPage';
import NewsPage from './pages/blog/blogPage';
import PostPage from './pages/blog/postPage';
import ContactPage from './pages/contact/contactPage';
import HomePage from './pages/home/homePage';
import LinksPage from './pages/links/linksPage';
import ProjectsPage from './pages/projects/projectsPage';
import ResourcesPage from './pages/resources/resourcesPage';
import ValuesPage from './pages/values/valuesPage';

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
        <Route path="/links" element={<LinksPage />} />
        <Route path="/values" element={<ValuesPage />} />
        <Route path="/blog">
          <Route path="/" element={<NewsPage />} />
          <Route path="/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
