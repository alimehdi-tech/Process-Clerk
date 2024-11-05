import {
  Plus,
  Mail,
  Lock,
  List,
  Calendar,
  Check,
  FileText,
  Phone,
  Globe,
  Star,
  Type,
} from "lucide-react";

const ElementSidebar = ({ addElement }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Add Form Elements</h2>
      <div className="space-y-2">
        <button
          onClick={() => addElement("text")}
          className="flex items-center w-full p-2 text-left hover:bg-gray-100 rounded"
        >
          <Type className="mr-2" size={18} /> Text Input
        </button>
        <button
          onClick={() => addElement("email")}
          className="flex items-center w-full p-2 text-left hover:bg-gray-100 rounded"
        >
          <Mail className="mr-2" size={18} /> Email Input
        </button>
        <button
          onClick={() => addElement("password")}
          className="flex items-center w-full p-2 text-left hover:bg-gray-100 rounded"
        >
          <Lock className="mr-2" size={18} /> Password Input
        </button>
        <button
          onClick={() => addElement("select")}
          className="flex items-center w-full p-2 text-left hover:bg-gray-100 rounded"
        >
          <List className="mr-2" size={18} /> Select Dropdown
        </button>
        <button
          onClick={() => addElement("date")}
          className="flex items-center w-full p-2 text-left hover:bg-gray-100 rounded"
        >
          <Calendar className="mr-2" size={18} /> Date Picker
        </button>
        <button
          onClick={() => addElement("checkbox")}
          className="flex items-center w-full p-2 text-left hover:bg-gray-100 rounded"
        >
          <Check className="mr-2" size={18} /> Checkbox
        </button>
        <button
          onClick={() => addElement("textarea")}
          className="flex items-center w-full p-2 text-left hover:bg-gray-100 rounded"
        >
          <FileText className="mr-2" size={18} /> Textarea
        </button>
        <button
          onClick={() => addElement("number")}
          className="flex items-center w-full p-2 text-left hover:bg-gray-100 rounded"
        >
          <Plus className="mr-2" size={18} /> Number Input
        </button>
        <button
          onClick={() => addElement("tel")}
          className="flex items-center w-full p-2 text-left hover:bg-gray-100 rounded"
        >
          <Phone className="mr-2" size={18} /> Telephone Input
        </button>
        <button
          onClick={() => addElement("url")}
          className="flex items-center w-full p-2 text-left hover:bg-gray-100 rounded"
        >
          <Globe className="mr-2" size={18} /> URL Input
        </button>
        <button
          onClick={() => addElement("radio")}
          className="flex items-center w-full p-2 text-left hover:bg-gray-100 rounded"
        >
          <Star className="mr-2" size={18} /> Radio Buttons
        </button>
      </div>
    </div>
  );
};

export default ElementSidebar;
