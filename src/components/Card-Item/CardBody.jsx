import PropTypes from 'prop-types'
import { showFormattedDate } from '../../utils'
const CardBody = ({Notes}) => {
    //jika ingin pake cara ribet mengubah tanggal ISO menjadi hari dan tanggal biasa
    // const getDate = new Date(Notes.createdAt);
    // const date = getDate.getDate();
    // const getDay = getDate.getDay();
    // const getMonth = getDate.getMonth();
    // const year = getDate.getFullYear();
    // const dayName = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'];
    // const monthName = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    // const day = dayName[getDay];
    // const month = monthName[getMonth]
    return (
        <div className="card-body">
            <h3 className="card-title">{Notes.title}</h3>
            <p className="card-date">{showFormattedDate(Notes.createdAt)}</p>
            <p className="card-desc">{Notes.body}</p>
        </div>
    )
}
CardBody.propTypes={
    Notes:PropTypes.object.isRequired
}
export default CardBody