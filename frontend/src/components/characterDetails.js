import {useState, useEffect} from "react"
import { useParams } from "react-router"
import { useNavigate } from "react-router"
import styled from 'styled-components'
import axios from 'axios'
import Modal from 'react-modal'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root')

const CharacterDetails = () => {
    let subtitle
    let {characterId} = useParams()
    const [thisCharacter, setThisCharacter] = useState({})
    const [modalIsOpen, setIsOpen] = useState(false)

    useEffect(()=> {
            getCharacter()
        },[])

    //modal
    const openModal=() => {
        setIsOpen(true)
    }
    const afterOpenModal = () => {
        subtitle.style.color = '#f00'
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    
    //character
    const getCharacter = async() => {
        await axios
        .get(`${process.env.REACT_APP_DB_CHARACTERS}${characterId}`)
        .then(res => setThisCharacter(res.data))
    }
    const deleteCharacter = async() => {
        await axios
        .delete(`${process.env.REACT_APP_DB_CHARACTERS}${characterId}`)
        navigate(process.env.REACT_APP_CHARACTERS)
    }

    return (
        <StyledCharacterDetails>
            <section className="character-identifiers">
                <h3 className="character-name">Name: {thisCharacter.name}<span className="character-level">Lvl: {thisCharacter.level}</span></h3>
            </section>
            <section className="character-details">
                <h2 className="character-health">Health: {thisCharacter.currentHealth}/<span className="character-maxValue">{thisCharacter.maxHealth}</span></h2>
                <h2 className="character-mana">Mana: {thisCharacter.currentMana}/<span className="character-maxValue">{thisCharacter.maxMana}</span></h2>
                <h2 className="character-attack">Attack: {thisCharacter.attack}</h2>
                <h2 className="character-defense">Defense: {thisCharacter.defense}</h2>
                <h2 className="character-exp">Experience: {thisCharacter.currentExp}/<span className="character-maxValue">{thisCharacter.nextLevelExp}</span></h2>
            </section>
            <button className="delete" onClick={openModal}>DELETE THIS CHARACTER</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Are you sure?</h2>
                <button onClick={closeModal}>close</button>
                <div>Once deleted, a character can not be recovered</div>
                <form>
                    <button onClick={deleteCharacter}>CONFIRM DELETE</button>
                    <button onClick={closeModal}>CANCEL</button>
                </form>
            </Modal>
        </StyledCharacterDetails>
    )
}

const StyledCharacterDetails = styled.div`
.character-identifiers {
    width: 50%;
    border: solid 1px red;
    .character-name {
        border: solid 1px blue;
        position: absolute;
        float: bottom;
    }
    .character-level {
        margin-left: 1rem;
    }
}
.character-details {
    width: 50%;
    margin-left: 50%;
}

.delete {
    font-size: .7rem;
    color: red;
    font-weight: bold;
    border: 3px solid red;
    width: fit-content;
}
    
`

export default CharacterDetails