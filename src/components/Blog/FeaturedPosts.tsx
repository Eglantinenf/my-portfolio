"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { BlogPosts } from "@/data/blogPosts";

const FeaturedPosts: React.FC = () => {
  const featuredPosts = BlogPosts.slice(0, 3);
  return (
    <div className="max-w-4xl mx-auto relative">
      <Swiper
        className="pb-12"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
      >
        {featuredPosts.map((post) => (
          <SwiperSlide key={post.id} className="flex px-4 sm:px-10 lg:px-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {post.summary}
                </p>

                <a
                  href={`/blog/${post.slug}`}
                  className="mt-auto inline-block text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedPosts;
