import React from 'react';
import Video from './Video.jsx';
import Controls from './Controls.jsx';

const Front = () =>{
	const [mLeft, setMLeft] = React.useState(0);
	const keyInput = (e) =>{
		let tempKey = e.key;	
		setMLeft(mLeft + 15);	
		console.log(tempKey);
	}

	React.useEffect(() => {
		window.addEventListener('keydown', keyInput);
		return () => window.removeEventListener('keydown', keyInput);
	}, [])
	
	return (
		<div className='front'>
			<h1 className='text-black' onClick={()=>setMLeft(mLeft + 15)}>{mLeft}</h1>	
			<Controls />
			<Video source={'rainyBoots'}/>
		</div>
	)
}

export default Front;
