import Character from './Character.js'

const CharactersList = ({characterArray}) => {
    return(
        // console.log( characterArray)
        
        characterArray.map(character => {   
            return (
                <>
                    <div className = 'CharactersList'>
                    <ul className ='Characters'>
                        <Character 
                        key = {characterArray.id} 
                        name = {character.name} 
                        status = {character.status}
                        species = {character.species}
                        type = {character.type}
                        gender = {character.gender}
                        image = {character.image}
                        />
                    </ul>
                    </div>
                </>
            )
        })
    )
}

export default CharactersList