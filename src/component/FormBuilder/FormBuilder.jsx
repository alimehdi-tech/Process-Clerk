  import React, { useState, useCallback } from "react";
  import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
  import ElementSidebar from "./ElementSidebar";
  import FormElementRenderer from "./FormElementRenderer";

  const FormBuilder = () => {
    const [formElements, setFormElements] = useState([]);
    const [activeElement, setActiveElement] = useState(null);

    const addElement = (type) => {
      const newElement = {
        id: Date.now().toString(),
        type,
        label: `New ${type} field`,
        hasLabel: true,
        width: "full",
        alignment: "left",
      };
      if (type === "select" || type === "radio") {
        newElement.options = ["Option 1", "Option 2", "Option 3"];
      }
      setFormElements([...formElements, newElement]);
      setActiveElement(newElement.id);
    };

    const updateElement = (id, updates) => {
      setFormElements(
        formElements.map((el) => (el.id === id ? { ...el, ...updates } : el))
      );
    };

    const removeElement = (id) => {
      setFormElements(formElements.filter((el) => el.id !== id));
    };

    const onDragEnd = useCallback(
      (result) => {
        if (!result.destination) return;
        const reorderedElements = Array.from(formElements);
        const [movedElement] = reorderedElements.splice(result.source.index, 1);
        reorderedElements.splice(result.destination.index, 0, movedElement);
        setFormElements(reorderedElements);
      },
      [formElements]
    );

    return (
      <div className="flex">
        <div className="w-1/4">
          <ElementSidebar addElement={addElement} />
        </div>
        <div className="w-2/4 p-4">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="form-elements">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {formElements.map((element, index) => (
                    <Draggable
                      key={element.id}
                      draggableId={element.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          className="mb-4 p-4 bg-white shadow rounded"
                        >
                          <FormElementRenderer element={element} />
                          {/* Optional: Add buttons to edit/remove elements here */}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <div className="w-1/4">{/* Config panel can go here */}</div>
      </div>
    );
  };

  export default FormBuilder;
