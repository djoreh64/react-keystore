import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader: React.FC = (props) => (
	<ContentLoader 
		className="skeleton"
		speed={1}
		viewBox="0 0 200 300"
		backgroundColor="#1f1f1f"
		foregroundColor="#1e1e1e"
		{...props}
	>
		<rect x="0" y="1" rx="10" ry="10" width="200" height="242" /> 
		<rect x="0" y="256" rx="10" ry="10" width="197" height="17" /> 
		<rect x="0" y="284" rx="10" ry="10" width="194" height="15" />
	</ContentLoader>
);

export default MyLoader;