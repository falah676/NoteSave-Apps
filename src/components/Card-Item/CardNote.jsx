import CardBody from './CardBody'
import CardButton from './CardButton'
import PropTypes from 'prop-types'

const CardNote = ({NotesData, onDelete, archive}) => {
    return (
        <div className="card">
            <div className="card-content">
            <CardBody Notes={NotesData}/>
            <CardButton id={NotesData.id} onDelete={onDelete} onArchive={archive} isArchive={NotesData.archived}/>
            </div>
        </div>
    )
}
CardNote.propTypes = {
    NotesData:PropTypes.object.isRequired,
    onDelete:PropTypes.func.isRequired,
    archive :PropTypes.func.isRequired  
}
export default CardNote;