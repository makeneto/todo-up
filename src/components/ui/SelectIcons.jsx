import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import styled from "styled-components"

const SelectIconsStyled = styled.div`
    background-color: ${props => props.color === "Work" ? "rgba(196, 213, 242, 0.23)" : props.color === "Personal" ? "rgba(222, 247, 237, 0.35)" : "rgba(243, 227, 215, 0.19)"};
    height: 13.8rem;
    padding: 1.4rem;
    border-radius: .6rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
    
    -ms-overflow-style: none;
    scrollbar-width: none;

    & ion-icon {
        font-size: 1.5rem;
        color: ${props => props.color === "Work" ? "#3e5fc2" : props.color === "Personal" ? "#16c381" : "#c79708"};
    }
`

export default function SelectIcons({ handleIconClick }) {
    const { modalName } = useContext(AppContext)

    return (
        <SelectIconsStyled color={modalName}>
            <ion-icon name="bar-chart-outline" onClick={() => handleIconClick("bar-chart-outline")}></ion-icon>
            <ion-icon name="book-outline" onClick={() => handleIconClick("book-outline")}></ion-icon>
            <ion-icon name="time-outline" onClick={() => handleIconClick("time-outline")}></ion-icon>
            <ion-icon name="layers-outline" onClick={() => handleIconClick("layers-outline")}></ion-icon>
            <ion-icon name="folder-outline" onClick={() => handleIconClick("folder-outline")}></ion-icon>
            <ion-icon name="pie-chart-outline" onClick={() => handleIconClick("pie-chart-outline")}></ion-icon>
            <ion-icon name="home-outline" onClick={() => handleIconClick("home-outline")}></ion-icon>
            <ion-icon name="person-outline" onClick={() => handleIconClick("person-outline")}></ion-icon>
            <ion-icon name="heart-outline" onClick={() => handleIconClick("heart-outline")}></ion-icon>
            <ion-icon name="cart-outline" onClick={() => handleIconClick("cart-outline")}></ion-icon>
            <ion-icon name="card-outline" onClick={() => handleIconClick("card-outline")}></ion-icon>
            <ion-icon name="restaurant-outline" onClick={() => handleIconClick("restaurant-outline")}></ion-icon>
            <ion-icon name="bed-outline" onClick={() => handleIconClick("bed-outline")}></ion-icon>
            <ion-icon name="call-outline" onClick={() => handleIconClick("call-outline")}></ion-icon>
            <ion-icon name="game-controller-outline" onClick={() => handleIconClick("game-controller-outline")}></ion-icon>
            <ion-icon name="musical-notes-outline" onClick={() => handleIconClick("musical-notes-outline")}></ion-icon>
            <ion-icon name="film-outline" onClick={() => handleIconClick("film-outline")}></ion-icon>
            <ion-icon name="library-outline" onClick={() => handleIconClick("library-outline")}></ion-icon>
            <ion-icon name="camera-outline" onClick={() => handleIconClick("camera-outline")}></ion-icon>
            <ion-icon name="map-outline" onClick={() => handleIconClick("map-outline")}></ion-icon>
            <ion-icon name="color-palette-outline" onClick={() => handleIconClick("color-palette-outline")}></ion-icon>
            <ion-icon name="barbell-outline" onClick={() => handleIconClick("barbell-outline")}></ion-icon>
            <ion-icon name="sparkles-outline" onClick={() => handleIconClick("sparkles-outline")}></ion-icon>
            <ion-icon name="settings-outline" onClick={() => handleIconClick("settings-outline")}></ion-icon>
            <ion-icon name="notifications-outline" onClick={() => handleIconClick("notifications-outline")}></ion-icon>
            <ion-icon name="checkmark-circle-outline" onClick={() => handleIconClick("checkmark-circle-outline")}></ion-icon>
            <ion-icon name="close-circle-outline" onClick={() => handleIconClick("close-circle-outline")}></ion-icon>
            <ion-icon name="trash-outline" onClick={() => handleIconClick("trash-outline")}></ion-icon>
            <ion-icon name="pencil-outline" onClick={() => handleIconClick("pencil-outline")}></ion-icon>
            <ion-icon name="search-outline" onClick={() => handleIconClick("search-outline")}></ion-icon>
            <ion-icon name="share-social-outline" onClick={() => handleIconClick("share-social-outline")}></ion-icon>
            <ion-icon name="star-outline" onClick={() => handleIconClick("star-outline")}></ion-icon>
            <ion-icon name="pricetag-outline" onClick={() => handleIconClick("pricetag-outline")}></ion-icon>
            <ion-icon name="link-outline" onClick={() => handleIconClick("link-outline")}></ion-icon>
            <ion-icon name="archive-outline" onClick={() => handleIconClick("archive-outline")}></ion-icon>
            <ion-icon name="arrow-back-outline" onClick={() => handleIconClick("arrow-back-outline")}></ion-icon>
            <ion-icon name="arrow-forward-outline" onClick={() => handleIconClick("arrow-forward-outline")}></ion-icon>
            <ion-icon name="bar-chart-outline" onClick={() => handleIconClick("bar-chart-outline")}></ion-icon>
            <ion-icon name="bookmark-outline" onClick={() => handleIconClick("bookmark-outline")}></ion-icon>
            <ion-icon name="tv-outline" onClick={() => handleIconClick("tv-outline")}></ion-icon>
            <ion-icon name="cloud-outline" onClick={() => handleIconClick("cloud-outline")}></ion-icon>
            <ion-icon name="code-slash-outline" onClick={() => handleIconClick("code-slash-outline")}></ion-icon>
            <ion-icon name="compass-outline" onClick={() => handleIconClick("compass-outline")}></ion-icon>
            <ion-icon name="download-outline" onClick={() => handleIconClick("download-outline")}></ion-icon>
            <ion-icon name="git-branch-outline" onClick={() => handleIconClick("git-branch-outline")}></ion-icon>
            <ion-icon name="headset-outline" onClick={() => handleIconClick("headset-outline")}></ion-icon>
            <ion-icon name="heart-circle-outline" onClick={() => handleIconClick("heart-circle-outline")}></ion-icon>
            <ion-icon name="lock-closed-outline" onClick={() => handleIconClick("lock-closed-outline")}></ion-icon>
            <ion-icon name="mail-outline" onClick={() => handleIconClick("mail-outline")}></ion-icon>
            <ion-icon name="mic-outline" onClick={() => handleIconClick("mic-outline")}></ion-icon>
            <ion-icon name="brush-outline" onClick={() => handleIconClick("brush-outline")}></ion-icon>
        </SelectIconsStyled>
    )
}
