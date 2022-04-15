import React from 'react'
import MediaQuery from 'react-responsive'
import WhatWeDoFullScreen from './FullScreen/WhatWeDoFullScreen'
import WhatWeDoSmallScreen from './SmallScreen/WhatWeDoSmallScreen'

const WhatWeDo = () => {
	return (
		<>
			<MediaQuery minDeviceWidth={800}>
				<WhatWeDoFullScreen />
			</MediaQuery>
			<MediaQuery maxDeviceWidth={800}>
				<WhatWeDoSmallScreen />
			</MediaQuery>
		</>
	)
}

export default WhatWeDo