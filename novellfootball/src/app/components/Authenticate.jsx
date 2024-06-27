// pages/authenticate.js or components/Authenticate.js

import { useEffect } from "react";

const Authenticate = ({ callback, phoneNumber = 0 }) => {
    return (
        <div className="absolute top-0 opacity-0 w-full">
            <div
                className="pe_signin_button"
                data-client-id="17232928839562863277"
            ></div>
        </div>
    );
};

export default Authenticate;
