import React from "react";

import "../components-css/SideBar.css";

function SideBar() {
  return (
    <div className="sidebar" id="sidebar">
      <div className="logo-details">
        {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="blue"
      >
        <g>
          <path d="M21.055,7.814C17.513,1.404,7.118,0,7.118,0s4.798,5.34-1.334,9.567c-3.875,2.666-5.41,6.13-3.75,9.914   c1.27,2.899,3.96,4.076,6.861,4.519c-0.745-1.434-0.932-3.505-0.381-5.628c0.055-0.212,0.116-0.434,0.186-0.635   c0.813,1.258,2.147,1.946,3.449,1.628c1.783-0.424,2.829-2.581,2.342-4.798c-0.111-0.481-0.292-0.943-0.536-1.372   c0.07,0.017,0.14,0.023,0.212,0.047c2.225,0.635,3.301,3.962,2.403,7.435c-0.266,1.052-0.715,2.049-1.326,2.945   c3.82-1.23,6.361-4.311,7.06-7.056C23.041,13.709,22.482,10.38,21.055,7.814z" />
        </g>
      </svg> */}

        <span className="logo-name">AwTask</span>
      </div>

      <div>
        <ul className="nav-links">
          <li>
            <a href="#" className="active">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="blue"
            >
              <path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z" />
            </svg> */}
              <span className="links_name">Home</span>
            </a>
          </li>

          <li>
            <a href="#" className="active">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="blue"
            >
              <path d="M19,2H18V1a1,1,0,0,0-2,0V2H8V1A1,1,0,0,0,6,1V2H5A5.006,5.006,0,0,0,0,7V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V7A5.006,5.006,0,0,0,19,2ZM2,7A3,3,0,0,1,5,4H19a3,3,0,0,1,3,3V8H2ZM19,22H5a3,3,0,0,1-3-3V10H22v9A3,3,0,0,1,19,22Z" />
              <circle cx="12" cy="15" r="1.5" />
              <circle cx="7" cy="15" r="1.5" />
              <circle cx="17" cy="15" r="1.5" />
            </svg> */}
              <span className="links_name">Schedule</span>
            </a>
          </li>

          <li>
            <a href="#" className="active">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="blue"
            >
              <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" />
              <path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" />
            </svg> */}

              <span className="links_name">Profile</span>
            </a>
          </li>
          <li>
            <a href="/login" className="active">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="blue"
            >
              <g id="_01_align_center" data-name="01 align center">
                <path d="M2,21V3A1,1,0,0,1,3,2H8V0H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H8V22H3A1,1,0,0,1,2,21Z" />
                <path d="M23.123,9.879,18.537,5.293,17.123,6.707l4.264,4.264L5,11l0,2,16.443-.029-4.322,4.322,1.414,1.414,4.586-4.586A3,3,0,0,0,23.123,9.879Z" />
              </g>
            </svg> */}

              <span className="links_name">Log Out</span>
            </a>
          </li>
          <li>
            <a href="#" className="active">
              {/* <i className="fa fa-info-circle"></i> */}
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="blue"
            >
              <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
              <path d="M12,10H11a1,1,0,0,0,0,2h1v6a1,1,0,0,0,2,0V12A2,2,0,0,0,12,10Z" />
              <circle cx="12" cy="6.5" r="1.5" />
            </svg> */}

              <span className="links_name">About Us</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
