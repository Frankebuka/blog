import React from "react";

const Tags = ({ tags }) => {
  return (
    <div>
      <div>
        <div className="blog-heading text-start py-2 mb-4">Tags</div>
      </div>
      <div>
        {tags?.map((tag, index) => (
          <p className="tag" key={index}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tags;
