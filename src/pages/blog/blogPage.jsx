import moment from 'moment';
import { useNavigate } from 'solid-app-router';
import Footer from '../../components/footer/footer';
import useBlogPosts from '../../hooks/bloggerPosts';

let NewsPage = ({}) => {
  let navigate = useNavigate();

  let blogPosts = useBlogPosts();

  return (
    <div class="flex flex-col items-center w-screen h-full overflow-x-hidden overflow-y-auto">
      <div class="z-10 flex flex-col w-full md:w-4/5 lg:w-4/6 h-auto shadow-md space-y-2 pt-2 border-tl border-gray-200 backdrop-blur-md bg-white/50 rounded-sm animate-fade-in duration-50 ease-in-out m-2">
        <div class="flex w-full flex-col space-y-5  pt-10 p-5">
          <div class="flex-none text-5xl text-center font-bold border-b-2 border-green-900 pb-5">
            News
          </div>

          <div class="w-full grid gap-4 md:grid-cols-3">
            {blogPosts.length > 0 &&
              blogPosts.map((post) => (
                <div class="w-full h-auto bg-white rounded shadow-md space-y-5 shadow-gray-700/20 animate-fade-in duration-50 ease-in-out">
                  {post.images ? (
                    <img src={post.images[0].url} class="rounded-t" />
                  ) : (
                    <div class="bg-gray-300 w-full h-40 rounded-t"></div>
                  )}

                  <div
                    class="break-words space-y-5 px-5 pb-5 group cursor-pointer"
                    onClick={() => navigate('/blog/' + post.id)}
                  >
                    <div class="text-2xl text-green-900">{post.title}</div>
                    <div class="text-md group-hover:text-green-700">
                      Last updated on{' '}
                      {moment(post.updated).format('MMMM DD, YYYY')} by{' '}
                      {post.author.displayName}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {blogPosts.length === 0 && (
            <div class="w-full text-center pb-5">Loading posts...</div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsPage;
