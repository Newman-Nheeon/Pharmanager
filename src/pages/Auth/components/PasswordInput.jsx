import { useState } from "react";

import UseAnimations from "react-useanimations";
import visibility from 'react-useanimations/lib/visibility';




function PasswordInput(props) {
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    return (
        <div className="relative">
            <div
              className="absolute right-6 top-[50%] -translate-y-[50%] "
              onClick={() => setPasswordVisibility(!passwordVisibility)}
            >
              <UseAnimations animation={visibility} size={25} strokeColor="gray"/>
            </div>
            <input
              type={passwordVisibility ? "text" : "password"}
              className="border-2 focus:outline-none rounded-md p-4 w-full"
              {...props}
            />
          </div>
    )
}

export default PasswordInput
