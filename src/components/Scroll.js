import React from 'react';
const Scroll = (props) => <div style={{overflowY:'scroll',border:'1px rgba(0,0,0,0.5)',height:'1100px'}}>{props.children}</div>;
export default Scroll;
