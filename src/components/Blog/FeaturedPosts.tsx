"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BlogPosts } from "@/data/blogPosts";

const FeaturedPosts: React.FC = () => {
  const featuredPosts = BlogPosts.slice(0, 3);
  return (
    <Swiper>
      {featuredPosts.map((post) => (
        <SwiperSlide key={post.id}>
          <h3>{post.title}</h3>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedPosts;
