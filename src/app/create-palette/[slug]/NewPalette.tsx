'use client'

import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'

import css from './style.module.css'


// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (hex: string, isDragging: boolean, style) => {
  if (style.transform) {
    const value = style.transform.match(/\((.*?)\)/)[1].split(',')[0];
    return {
      ...style,
      transform: `translate(${value}, 0px)`,
      backgroundColor: hex,
    };
  }
  else {3
    return { ...style, backgroundColor: hex, };
  }
};


const getListStyle = (isDraggingOver: boolean) => ({
  display: 'flex',
  overflow: 'auto',
});

type Props = {}

type Item = {
  id: number,
  content: string,
  hex: string,
}

function NewPalette({ }: Props) {
  const [items, setItems] = useState([
    {
      id: 1,
      content: 'good',
      hex: '#fcba03'
    },
    {
      id: 2,
      content: 'nice',
      hex: '#24fc03'
    },
    {
      id: 3,
      content: 'best',
      hex: '#ff0095'
    },
    {
      id: 4,
      content: 'he',
      hex: '#0d00ff'
    },
  ])

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const updatedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    ) as Item[];

    setItems(updatedItems);
  }

  const handleClick = (index: number) => {
    console.log("clicked")
    // const newItems = [...items];
    // newItems[index].hex = "tomato"
    // setItems(newItems)
  }


  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal" >
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id.toString()} index={index} >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        item.hex,
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                      className={css.palette__color}
                      onClick={() => handleClick(index)}
                    >
                      {item.id}
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
  )
}

export default NewPalette