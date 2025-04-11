import AddModal from './ui/AddModal'
import ReusableTab from './ui/ReusableTab'
import styled from 'styled-components'

const TasksStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    padding: 2.2rem 2.2rem 0;
`

export default function Tasks() {
    return (
        <TasksStyled>
            <ReusableTab>Work</ReusableTab>
            <ReusableTab>Personal</ReusableTab>
            <ReusableTab>Fun</ReusableTab>
            <AddModal />
        </TasksStyled>
    )
}
