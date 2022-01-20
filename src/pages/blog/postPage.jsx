import { useParams } from 'solid-app-router';
import { onMount } from 'solid-js';
import { createStore } from 'solid-js/store';
import Footer from '../../components/footer/footer';

let PostPage = () => {
  let params = useParams();

  let url = `https://www.googleapis.com/blogger/v3/blogs/912251002452110633/posts/${params.id}?key=AIzaSyBYYFsSeCGec4RCV6tqzZXuW4mBPASptgY&fetchImages=true&fetchBodies=true`;

  let [post, setPost] = createStore({}, { name: params.id + '-blog-post' });

  onMount(() => {
    fetch(url).then(async (response) => {
      setPost(await response.json());

      console.log(post);
    });
  });

  var stringToHTML = function (str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');

    // doc.querySelectorAll('*').style.background = "transparent";

    return doc.body;
  };

  return (
    <div class="flex flex-col items-center w-screen h-full overflow-x-hidden overflow-y-auto">
      <div class="z-10 flex flex-col w-full md:w-4/5 lg:w-4/6 h-auto shadow-md space-y-2 border-tl border-gray-200 backdrop-blur-md bg-white/50 rounded-sm animate-fade-in duration-50 ease-in-out m-2 p-2 md:p-5">
        {post.content && (
          <div class="prose prose-green max-w-none m-0 prose-img:w-full prose-img:m-0 p-5 prose-a:text-green-900 prose-h1:text-green-900 bg-white rounded-md animate-fade-in duration-50 ease-in-out">
            {stringToHTML(post.content)}
          </div>
        )}

        {!post.content && <div class="w-full text-center">Loading post...</div>}
      </div>

      <Footer />
    </div>
  );
};

export default PostPage;
