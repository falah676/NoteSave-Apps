import CardNote from './Card-Item/CardNote'
import PropTypes from 'prop-types'
const CardList = ({Notes, onDelete, archived, isArchived, active, activeData}) => {


    return (
        <section className="card-list">
                <div className="note note-active">
                <h1>Catatan</h1>
                <div className="note-list">
                   {
                    activeData.length === 0 || Notes.length === 0 ?
                    <p>Tidak Ada Catatan</p>
                    :
                    Notes.map((item) => (
                        !item.archived&&(
                        <CardNote NotesData={item} key={item.id} onDelete={onDelete} archive={archived}/>
                        )
                        )) 
                }
                </div>
                </div>
                <div className="note note-archive">
                <h1>Arsip</h1>
                <div className="note-list">
                {
                    isArchived.length === 0 || Notes.length === 0? 
                    <p>Tidak Ada Catatan</p>
                    :
                    Notes.map((item)=> (
                        item.archived && (
                            <CardNote NotesData={item} key={item.id} onDelete={onDelete}  archive={active}/>
                        )
                    ))
                }
                </div>
                </div>
        </section>
    )
}
CardList.propTypes = {
    Notes:PropTypes.array.isRequired,
    archived:PropTypes.func.isRequired,
    isArchived:PropTypes.array.isRequired,
    activeData:PropTypes.array.isRequired,
    onDelete:PropTypes.func.isRequired,
    active:PropTypes.func.isRequired
}
export default CardList