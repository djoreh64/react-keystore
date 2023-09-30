import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    className="card-holder"
    speed={1}
    viewBox="0 0 200 400"
    backgroundColor="#1f1f1f"
    foregroundColor="#1e1e1e"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="200" height="220" /> 
    <rect x="0" y="230" rx="10" ry="10" width="197" height="17" /> 
    <rect x="0" y="257" rx="10" ry="10" width="197" height="17" />
  </ContentLoader>
)

export default MyLoader