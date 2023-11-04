import React from "react"
import ContentLoader from "react-content-loader"

const GameSkeleton = (props) => (
    <ContentLoader 
    speed={1}
    width={1920}
    height={600}
    backgroundColor="#1f1f1f"
    foregroundColor="#1e1e1e"
    {...props}
  >
    <rect x="0" y="0" rx="20" ry="20" width="380" height="603" /> 
    <rect x="450" y="0" rx="10" ry="10" width="350" height="30" /> 
    <rect x="450" y="70" rx="10" ry="10" width="350" height="30" /> 
    <rect x="450" y="210" rx="10" ry="10" width="350" height="100" />
  </ContentLoader>
  )
  

export default GameSkeleton