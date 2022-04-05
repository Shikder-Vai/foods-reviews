import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className=" mb-10">
        <h1 className=" rounded font-semibold text-xl border-2 border-gray-600 bg-slate-300 p-2 m-4">
          Q: What is Context API?
        </h1>
        <p className="text-lg font-medium border-2 bg-red-50 rounded m-4 p-2">
          A: A React app can use the React Context API to generate global
          variables that can be passed around. This is an alternative to "prop
          drilling," which entails passing props from grandparent to child to
          parent and so on. When numerous components at various nesting levels
          need access to the same data, context is employed. It should be used
          with caution because it makes component reuse more difficult. Context
          is also marketed as a simpler, lighter way to Redux state.
        </p>
      </div>
      <div>
        <h1 className=" rounded font-semibold text-xl border-2 border-gray-600 bg-slate-300 p-2 m-4">
          Q:What is semantic tag?
        </h1>
        <p className="text-lg font-medium border-2 bg-red-50 rounded m-4 p-2">
          A: Semantic HTML elements are those that express their meaning in a
          way that is both human and machine readable. Header, footer, and
          article elements are all deemed semantic since they accurately explain
          the element's purpose and the sort of material it contains. Semantic
          elements also result in code that is more consistent. Semantic refers
          to syntax that improves the readability of HTML by clearly describing
          the various sections and layouts of web pages. It improves the content
          interpretation of browsers and search engines by making web pages more
          informative and adaptive.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
