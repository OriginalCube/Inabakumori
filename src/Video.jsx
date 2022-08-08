import React from 'react';

const Video = (props) => {
	const videoRef = React.useRef();
	React.useEffect(()=>{
		videoRef.current.src = `/videos/${props.source}.mp4`;
		videoRef.current.play();
		videoRef.current.volume = .2;
	},[]);

return (
		<div className='h-1/4 bg-white w-auto'>
			<video className='relative' ref={videoRef} width='100%' />
		</div>	
	)
}

export default Video;
