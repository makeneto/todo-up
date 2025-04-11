import styled from 'styled-components'
import { AppContext } from '../../context/AppContext'
import { useContext, useEffect, useState } from 'react'

import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors
} from '@dnd-kit/core'
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy
} from '@dnd-kit/sortable'
import SortableTask from './SortableTask'

const TabStyled = styled.div`
    width: 100%;
    max-height: 86dvh;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #2b96d908;
    display: grid;
    gap: 1.2rem;
    border-radius: .7rem;
    padding: 1.6rem 1.2rem;
    user-select: none;
    
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    & div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & h3 {
            font-weight: 500;
            font-size: 1rem;
        }

        & button {
            font-weight: 400;
            font-size: 1.3rem;
        }
    }
`

export default function ReusableTab({ children }) {
    const { setActiveState, setModalName, tab } = useContext(AppContext)

    const [tasks, setTasks] = useState(
        tab.filter(task => task.tab === children)
    )

    useEffect(() => {
        const filtered = tab.filter(task => task.tab === children);
        setTasks(filtered);
    }, [tab, children]);

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
    )

    const handleClick = (type) => {
        setActiveState(type)
        setModalName(children)
    }

    const handleDragEnd = (event) => {
        const { active, over } = event

        if (active.id !== over?.id) {
            setTasks((items) => {
                const oldIndex = items.findIndex(i => i.id === active.id)
                const newIndex = items.findIndex(i => i.id === over?.id)
                return arrayMove(items, oldIndex, newIndex)
            })
        }
    }

    return (
        <TabStyled>
            <div>
                <h3>{children}</h3>
                <button onClick={() => handleClick(children)}>+</button>
            </div>

            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext
                    items={tasks.map(task => task.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {tasks.map(task => (
                        <SortableTask key={task.id} id={task.id} task={task} type={children} />
                    ))}
                </SortableContext>
            </DndContext>
        </TabStyled>
    )
}