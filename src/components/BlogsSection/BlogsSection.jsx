import React from "react";

const BlogsSection = () => {
  return (
    <div className="relative md:py-20 py-12 px-6 max-w-full min-h-[50vh]">
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col sm:gap-12 gap-8 ">
        <div>
          <h3 className="lg:text-[46px] sm:text-4xl text-[27px] leading-9 font-bold tracking-wide text-headingColor capitalize text-center">
            Recent Published Blogs
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
