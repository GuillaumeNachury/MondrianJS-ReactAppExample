import React from 'react';
import {mondrianReact} from 'mondrianjs-react';


// identifier => the filename that will be grabbed from the server
// endpointName => The endpoint we defined during the init process
const Holder = (props) => <mondrianReact.RemoteComponent identifier="remoteCmp.mdr" endpointName='local' {...props}/>

export default Holder;