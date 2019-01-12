import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cupiditate assumenda doloremque repudiandae impedit aperiam nemo laboriosam id optio repellat voluptatibus ab, eveniet provident ipsum libero eaque itaque! Aliquid, molestiae.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by HK</div>
          <div>11th jan ,2pm</div>
        </div>

      </div>
    </div>
  )
}

export default ProjectDetails;
