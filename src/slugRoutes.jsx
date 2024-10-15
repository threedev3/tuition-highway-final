// import React from "react";
// import { useParams } from "react-router-dom"; // Import useParams
// import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

// const SlugRoute = ({ demoRef, children }) => {
//   const { slug } = useParams(); // Get the slug from the URL
//   console.log("Current slug:", slug); // Debugging: Check the slug

//   // Find and return the matching child based on the key
//   // const childToRender = React.Children.map(children, (child) => {
//   //   console.log("Child key:", child.key); // Debugging: Check each child's key

//   //   // If the key matches "blog", return BlogsDetails
//   //   if (child.key === "blog") {
//   //     return React.cloneElement(child, { demoRef }, slug);
//   //   }

//   //   // If the key matches "curriculum", return CurriculumPage
//   //   else if (child.key === "curriculum") {
//   //     return React.cloneElement(child, { demoRef }, slug);
//   //   }

//   //   // Return null for non-matching children
//   //   // return <NotFoundPage />;
//   // });

//  React.Children.toArray(children).find((child) => {
//     console.log("Child key:", child.key); // Debugging: Check each child's key

//     console.log("children:", children); // Debugging: Check each child's key


//     if ( child.key === ".$blog") {
//         // return React.cloneElement(childToRender, { demoRef });
//         return <BlogsDetails demoRef={demoRef} />
//       }


//       if ( child.key === "curriculum") {
//         return React.cloneElement(childToRender, { demoRef });
//       }

//     // Check if the key matches "blog" or "curriculum"
//     // return child.key === "blog" || child.key === "curriculum";
//   });

//   // console.log("childToRender", childToRender)
//   // If a matching child is found, clone it and pass demoRef
//   // if (childToRender) {
//   //   return React.cloneElement(childToRender, { demoRef });
//   // }

//   // If no matches, render NotFoundPage
//   // return <NotFoundPage />;
// };


//   // If a child was matched and rendered, return it
//   // if (childToRender) {
//   //   return <>{childToRender}</>;
//   // }

//   // If no matches, render NotFoundPage
//   // return <NotFoundPage />;


// export default SlugRoute;


// import React from "react";
// import { useParams } from "react-router-dom";
// import BlogsDetails from "./pages/BlogsDetails/BlogsDetails";
// import CurriculumPage from "./pages/CurriculumPage/CurriculumPage";
// import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

// const SlugRoute = ({ demoRef }) => {
//   const { slug } = useParams();

//   // Example logic to determine which page to render based on slug
//   if (isBlogSlug(slug)) {
//     return <BlogsDetails demoRef={demoRef} />;
//   } else if (isCurriculumSlug(slug)) {
//     return <CurriculumPage demoRef={demoRef} />;
//   }

//   // Render NotFoundPage if no match is found
//   return <NotFoundPage />;
// };

// // Example logic functions to identify different slugs
// const isBlogSlug = (slug) => {
//   // Replace with your logic for identifying blog slugs, e.g., a list of known slugs or a pattern
//   const blogSlugs = ["blog-1", "blog-2", "latest-news"]; // Example slugs
//   return blogSlugs.includes(slug);
// };

// const isCurriculumSlug = (slug) => {
//   // Replace with your logic for identifying curriculum slugs, e.g., a list of known slugs or a pattern
//   const curriculumSlugs = ["math-curriculum", "science-curriculum"]; // Example slugs
//   return curriculumSlugs.includes(slug);
// };

// export default SlugRoute;


import React from "react";
import { useParams } from "react-router-dom";

import CurriculumPage from "./pages/CurriculumPage/CurrculumPage";
import BlogsDetails from "./pages/BlogsDetails/BlogsDetails";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import { blogsMain, curriculumOffering } from "./data/data";

const SlugRoute = ({ demoRef }) => {
  const { slug } = useParams();

  // Check if the slug exists in the curriculum data
  const curriculum = curriculumOffering.find((c) => c.slug === slug);
  if (curriculum) {
    return <CurriculumPage demoRef={demoRef} />;
  }

  // Check if the slug exists in the blogs data
  const blog = blogsMain.find((b) => b.slug === slug);
  if (blog) {
    return <BlogsDetails />;
  }

  // If slug is not found in either, render NotFoundPage
  return <NotFoundPage />;
};

export default SlugRoute;
