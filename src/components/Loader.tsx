import React from 'react';
import { CircularProgress, Stack, Skeleton } from '@mui/material';

const Loader: React.FC = () => {
	return (
		<Stack sx={{ color: 'grey' , height: 'calc(100vh - 400px)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			<CircularProgress color="inherit" />
		</Stack>
	);
};

export default Loader;
