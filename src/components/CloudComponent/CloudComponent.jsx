import React from "react";

const CloudComponent = props => (
    <svg viewBox="0 0 32 40" {...props}>
        <path style={{fill: props.lol}} d="M8.063 25.377c-3.313 0-6-2.688-6-6a5.985 5.985 0 0 1 4.127-5.688 4.22 4.22 0 0 1 4.216-4.065c.729 0 1.415.189 2.01.517a7.239 7.239 0 0 1 6.208-3.517 7.252 7.252 0 0 1 7.248 7.078 5.994 5.994 0 0 1 4.064 5.667c0 3.312-2.688 6-6 6H8.063v.008zm16.602-9.926a.998.998 0 0 1-.814-1.078c.021-.172.026-.336.026-.498a5.258 5.258 0 0 0-5.251-5.248 5.246 5.246 0 0 0-4.911 3.41 1 1 0 0 1-1.675.32 2.194 2.194 0 0 0-1.633-.73 2.223 2.223 0 0 0-2.22 2.217c0 .137.017.277.045.425.049.267-.008.54-.163.762a.991.991 0 0 1-.657.414c-1.899.312-3.352 1.95-3.35 3.93a4.01 4.01 0 0 0 4.001 4.002h15.875a4.007 4.007 0 0 0 3.998-4.002 3.994 3.994 0 0 0-3.271-3.924" />
        <text
            y={47}
            fontSize={5}
            fontWeight="bold"
            fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        >
            Created by Dmitry Baranovskiy
    </text>
        <text
            y={52}
            fontSize={5}
            fontWeight="bold"
            fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        >
            from the Noun Project
    </text>
    </svg>
);

export default CloudComponent;