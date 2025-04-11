import { Pencil } from 'lucide-react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
// eslint-disable-next-line
import { motion, AnimatePresence } from 'framer-motion'

const Task = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: .6rem .8rem;
    border-radius: .7rem;
    box-shadow: 0 0 9px 0px #0000000d;
    cursor: pointer;

    & div {
        display: grid;
        gap: .4rem;
        text-transform: capitalize;

        & h4 {
            font-weight: 500;
            white-space: nowrap;
            max-width: 12rem;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        & p {
            font-size: .8rem;
            color: gray;
        }
    }
`

const TaskContent = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem !important;

    & label {
        display: flex;
        justify-self: end;
    }
`

const TaskProfile = styled.div`
    background-color: ${({ type }) => type === 'Work' ? '#c4d5f2' : type === 'Personal' ? '#def7ed' : '#f3e3d7'};
    width: 3rem;
    height: 3rem;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    border-radius: 50%;

    & ion-icon {
        font-size: 1.5rem;
        color: ${({ type }) => type === 'Work' ? '#3e5fc2' : type === 'Personal' ? '#16c381' : '#c79708'};
    }
`

export default function SortableTask({ task, type, id, removeTask }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
    const [isChecked, setIsChecked] = useState(false)
    const [shouldRender, setShouldRender] = useState(true)

    useEffect(() => {
        if (isChecked) {
            const timer = setTimeout(() => {
                const storedTasks = JSON.parse(localStorage.getItem("TodosTab")) || []
                const updatedTasks = storedTasks.filter(t => t.id !== id)
                localStorage.setItem("TodosTab", JSON.stringify(updatedTasks))

                setShouldRender(false)

                if (removeTask) removeTask(id)
            }, 500)

            return () => clearTimeout(timer)
        }
    }, [isChecked, id, removeTask])

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <AnimatePresence>
            {shouldRender && (
                <motion.div
                    ref={setNodeRef}
                    {...attributes}
                    {...listeners}
                    style={style}
                    initial={{ opacity: 1, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <Task ref={setNodeRef} {...attributes} {...listeners} style={style}>
                        <TaskContent>
                            <TaskProfile type={type}>
                                <ion-icon name={task.icon}></ion-icon>
                            </TaskProfile>
                            <div>
                                <h4>{task.title}</h4>
                                <p>{task.category}</p>
                            </div>
                        </TaskContent>

                        <label className="container">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            <div className="checkmark"></div>
                        </label>
                    </Task>
                </motion.div>
            )}
        </AnimatePresence>
    )
}