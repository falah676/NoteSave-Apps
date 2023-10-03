import PropTypes from 'prop-types'
const CardButton = ({id,  onDelete, onArchive, isArchive}) => {
    return(
    <div className="card-bottom">
        <button className="btn-delete" onClick={() => onDelete(id)}>Delete</button>
        <button className="btn-archive" onClick={() => onArchive(id)}>{isArchive ? 'Pindahkan' : 'Arsipkan'}</button>
    </div>
    )
};
CardButton.propTypes={
    onDelete:PropTypes.func.isRequired,
    id:PropTypes.number.isRequired,
    onArchive:PropTypes.func.isRequired,
    isArchive:PropTypes.bool.isRequired
}
export default CardButton;