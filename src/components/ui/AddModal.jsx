import { X } from "lucide-react"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { AppContext } from "../../context/AppContext"
import SelectIcons from "./SelectIcons"

const OverlayStyled = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: brightness(90%) blur(2px);
    padding: 2rem;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
`

const AddModalStyled = styled.div`
    width: 29%;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem 2.3rem;
    border-radius: .5rem;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3rem;

    & h1 {
        font-size: 1.2rem;
    }

    & svg {
        cursor: pointer;
    }
`

const FormStyled = styled.form`
    display: grid;
    gap: 1rem;

    & label {
        display: grid;
        gap: .5rem;

        & p:first-child {
            font-size: 1rem;
            font-weight: 500;
        }

        & p:last-child {
            color: red;
            font-size: .8rem;
            font-weight: 400;
        }

        & input {
            background-color: ${({ color }) => color === "Work" ? "rgba(196, 213, 242, 0.28)" : color === "Personal" ? "rgba(222, 247, 237, 0.44)" : "rgba(243, 227, 215, 0.22)"};
            font-size: .9rem;
            padding: 10px;
            border-radius: 5px;
            outline: none;
            color: ${props => props.color === "Work" ? "#3e5fc2" : props.color === "Personal" ? "#16c381" : "#c79708"};

            &::placeholder {
                color: ${props => props.color === "Work" ? "rgba(62, 95, 194, 0.42)" : props.color === "Personal" ? "rgba(22, 195, 129, 0.46)" : "rgba(199, 151, 8, 0.47)"}
            }
        }
    }

    & button {
        width: fit-content;
        padding: 10px 15px;
        border-radius: 9px;
        background-color: ${props => props.color === "Work" ? "rgba(62, 95, 194, 0.9)" : props.color === "Personal" ? " #16c381" : "rgba(199, 151, 8, 0.8)"};
        color: white;
        justify-self: flex-end;
        margin-top: 1.5rem;
        transition: all .2s ease-in-out;
        
        &:hover {
            box-shadow: 0 0 9px 1px rgb(0 0 0 / 17%);
        }

        &:active {
            box-shadow: none;
        }
    }
`

const SetIcon = styled.div`
    width: 4rem;
    height: 4rem;
    background-color: ${props => props.color === "Work" ? "rgba(196, 213, 242, 0.23)" : props.color === "Personal" ? "rgba(222, 247, 237, 0.35)" : "rgba(243, 227, 215, 0.19)"};
    border-radius: 50%;
    justify-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 1rem;

    & ion-icon {
        font-size: 1.7rem;
        color: ${props => props.color === "Work" ? "#3e5fc2" : props.color === "Personal" ? "#16c381" : "#c79708"};
    }
`

export default function AddModal() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const {
        isWork,
        isPersonal,
        isFun,
        closeModal,
        modalName,
        tab,
        setTab
    } = useContext(AppContext)

    const [showIcons, setShowIcons] = useState(false)
    const [selectedIcon, setSelectedIcon] = useState("brush-outline")

    const onSubmit = (data) => {
        const newTask = {
            id: Date.now(),
            title: data.title,
            category: data.category,
            icon: selectedIcon,
            tab: modalName,
        }

        const updatedTab = [newTask, ...tab]
        setTab(updatedTab);
        localStorage.setItem('TodosTab', JSON.stringify(updatedTab))

        closeModal()
        setSelectedIcon('brush-outline')
        reset()
    }


    const handleIconClick = (iconName) => {
        setSelectedIcon(iconName)
        setShowIcons(false)
    }

    const showModal = isWork || isPersonal || isFun

    return showModal && (
        <OverlayStyled>
            <AddModalStyled>
                <Header>
                    <h1>Add {modalName} Task</h1>
                    <X onClick={closeModal} />
                </Header>

                <FormStyled onSubmit={handleSubmit(onSubmit)} color={modalName}>
                    <SetIcon onClick={() => setShowIcons(!showIcons)} color={modalName}>
                        <ion-icon name={selectedIcon}></ion-icon>
                    </SetIcon>

                    {showIcons && (
                        <SelectIcons handleIconClick={handleIconClick} />
                    )}

                    {!showIcons &&
                        <>
                            <label htmlFor="title">
                                <p>Title</p>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Enter your title"
                                    autoComplete="off"
                                    {...register("title", { required: "Hey! Forgot to give a name to the task?😅" })}
                                    color={modalName}
                                />
                                {errors.title && <p>{errors.title.message}</p>}
                            </label>
                            <label htmlFor="category">
                                <p>Category</p>
                                <input
                                    list="categories"
                                    name="category"
                                    placeholder="Enter your category"
                                    {...register("category", { required: "Don't you even want to say what category it is?🤔" })}
                                    color={modalName}
                                />
                                {errors.category && <p>{errors.category.message}</p>}
                            </label>
                            <button type="submit" color={modalName}>Add Task</button>
                        </>
                    }
                </FormStyled>
            </AddModalStyled>
        </OverlayStyled>
    )
}
