import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBars, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

interface HeaderCProps {

}

interface HeaderCState {

}

class HeaderC extends React.Component<HeaderCProps, HeaderCState> {
  // state = { :  }
  render() {
    
    return (
      <div className="bg-white">
        <header className="">
          <nav className="mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="h-16 flex items-center">

            
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
              // onClick={() => setOpen(true)}
              >
                <a>
                  <FontAwesomeIcon
                    className="h-6 w-6"
                    icon={faBars}
                  />
                </a>
              </button>

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <a>
                    <img
                      className="h-8 lg:h-12 w-auto"
                      src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1649541738/pinturas/PUNTO_COLORS_EXPRESS_CHOCO_yoygoy.png"
                      alt=""
                    />
                  </a>
                </Link>

              </div>

              <div className="ml-auto ">
                <Link href="/auth/login">
                  
                    <a className="p-2 text-gray-400 hover:text-gray-500 items-center flex">
                      <span className="sr-only">Login</span>
                      <FontAwesomeIcon
                        className="w-6 h-6"
                        icon={faRightToBracket}
                      />
                    </a>
                </Link>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderC;