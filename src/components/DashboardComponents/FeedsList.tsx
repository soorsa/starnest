import {
  MoreHorizontal,
  Newspaper,
  Share2,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import FeedsSkeleton from "../SkeletonsComponents/FeedsSkeleton";
import ErrorPlaceholder from "./ErrorPlaceholder";
interface Prop {
  posts: Feeds[];
  isError: boolean;
  isLoading: boolean;
}
const FeedsList: React.FC<Prop> = ({ posts, isError, isLoading }) => {
  // const navigate = useNavigate();
  if (isLoading || isError) {
    return <FeedsSkeleton />;
  }
  if (posts.length < 1) {
    return (
      <ErrorPlaceholder
        title="No Post Found"
        message="Not found... no posts found at the moment."
        icon={<Newspaper />}
      />
    );
  }
  return (
    <div className="space-y-8">
      {posts.map((feed, index) => {
        return (
          <div className="bg-white rounded-2xl p-2 text-left" key={index}>
            <div className="px-4 pt-4 pb-3">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <Link
                    to={`/dashboard/mentorship/post/${feed.id}`}
                    className="text-lg font-starnest-mid hover:underline underline-offset-1 cursor-pointer"
                  >
                    {feed.title}
                  </Link>
                  <em className="text-gray-600 text-sm">Posted by Admin</em>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <MoreHorizontal className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-900 leading-relaxed line-clamp-4">
                {feed.content}
              </p>

              {/* <div className="flex gap-1 mt-3 -ml-1">
                  {feed.hashtags.map((hashtag, index) => (
                    <span
                      key={index}
                      className="text-sm text-blue-600 hover:underline cursor-pointer"
                    >
                      {hashtag}
                    </span>
                  ))}
                </div> */}
            </div>

            {/* Engagement Bar */}
            <div className="px-4 py-3 flex items-center justify-between text-gray-500">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 hover:text-blue-600 transition">
                  <ThumbsUp className="w-5 h-5" />
                  <span className="text-sm">{10} likes</span>
                </button>
                <button className="flex items-center gap-2 hover:text-blue-600 transition">
                  <ThumbsDown className="w-5 h-5" />
                  <span className="text-sm">{5} dislikes</span>
                </button>
              </div>
              <button className="hover:text-blue-600 transition">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeedsList;
