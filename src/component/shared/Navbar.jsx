import { Link } from "react-router-dom";

import { MdSubscriptions } from "react-icons/md";
import { DocumentIcon } from "../../icons/document/Order.jsx";
import { InviteIcon } from "../../icons/invite/User_add.jsx";
import { HomeIcon } from "../../icons/Home/Widget.jsx";
import { ContactIcon } from "../../icons/contacts/User.jsx";
import { FormIcon } from "../../icons/forms/Sort.jsx";

function Sidebar() {
  return (
    <div className="text-2xl text-gray-600 bg-gray-100 h-screen p-4 font-sans">
      <ul className="space-y-4">
        <Link to="/">
          <li className="flex items-center pl-3 p-2 hover:bg-gray-200 rounded-md shadow-gray-200 shadow-md btn">
            <div className="get-away">
              <HomeIcon />
            </div>
            <span className="flex-1 ml-6">Home</span>
          </li>
        </Link>
        <Link to="/documents">
          <li className="flex items-center p-2 hover:bg-gray-200 rounded-md shadow-gray-200 shadow-md btn">
            <div className="get-away ">
              <DocumentIcon className="icon-css" />
            </div>
            <span className="flex-1 ml-4">Documents</span>
          </li>
        </Link>
        <Link to="/membership">
          <li className="flex items-center p-2 hover:bg-gray-200 rounded-md shadow-gray-200 shadow-md btn">
            <div className="get-away">
              <MdSubscriptions className="mr-4 text-3xl" />
            </div>
            <span className="flex-1 ml-1">membership</span>
          </li>
        </Link>
        <Link to="/forms">
          <li className="flex items-center p-2 hover:bg-gray-200 rounded-md shadow-gray-200 shadow-md btn">
            <div className="get-away">
              <FormIcon className="mr-4" />
            </div>
            <span className="flex-1 ml-4">Forms</span>
          </li>
        </Link>
        <Link to="/Profile">
          <li className="flex items-center p-2 hover:bg-gray-200 rounded-md shadow-gray-200 shadow-md btn">
            <div className="get-away">
              <ContactIcon className="mr-4" />
            </div>
            <span className="flex-1 ml-5">Profile</span>
          </li>
        </Link>
        <Link to="/Home/invite">
          <li className="flex items-center p-2 hover:bg-gray-200 rounded-md shadow-gray-200 shadow-md btn">
            <div className="get-away">
              <InviteIcon className="mr-4" />
            </div>
            <span className="flex-1 ml-5">Invite</span>
          </li>
        </Link>
        <Link to="/inbox">
          <li className="flex items-center p-2 hover:bg-gray-200 rounded-md shadow-black shadow-md btn">
            <div className="get-away">
              <FormIcon className="mr-4 " />
            </div>
            <span className="flex-1 ml-4">Inbox</span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
