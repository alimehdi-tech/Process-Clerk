const FormElementRenderer = ({ element }) => {
  const baseClasses = `mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
    element.width === "full"
      ? "w-full"
      : element.width === "3/4"
      ? "w-3/4"
      : element.width === "1/2"
      ? "w-1/2"
      : "w-1/4"
  }`;

  const wrapperClasses = `${
    element.alignment === "left"
      ? "text-left"
      : element.alignment === "center"
      ? "text-center"
      : "text-right"
  }`;

  switch (element.type) {
    case "text":
    case "email":
    case "password":
    case "number":
    case "tel":
    case "url":
      return (
        <div className={wrapperClasses}>
          <input
            type={element.type}
            className={baseClasses}
            placeholder={element.hasLabel ? "" : element.label}
          />
        </div>
      );
    case "select":
      return (
        <div className={wrapperClasses}>
          <select className={baseClasses}>
            {element.options?.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
          </select>
        </div>
      );
    case "date":
      return (
        <div className={wrapperClasses}>
          <input type="date" className={baseClasses} />
        </div>
      );
    case "checkbox":
      return (
        <div className={`flex items-center ${wrapperClasses}`}>
          <input
            type="checkbox"
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {!element.hasLabel && <span className="ml-2">{element.label}</span>}
        </div>
      );
    case "textarea":
      return (
        <div className={wrapperClasses}>
          <textarea
            className={baseClasses}
            rows={3}
            placeholder={element.hasLabel ? "" : element.label}
          ></textarea>
        </div>
      );
    case "radio":
      return (
        <div className={`space-y-2 ${wrapperClasses}`}>
          {element.options?.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                name={element.id}
              />
              <label className="ml-2 block text-sm text-gray-900">
                {option}
              </label>
            </div>
          ))}
        </div>
      );
    case "file":
      return (
        <div className={wrapperClasses}>
          <input
            type="file"
            className={`${baseClasses} text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100`}
          />
        </div>
      );
    default:
      return null;
  }
};

export default FormElementRenderer;
