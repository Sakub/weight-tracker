import './DeleteEntryModal.css'

const DeleteEntryModal = ({closeModal}) => {
    return <div className='modal__mask quickFadeIn'>
        <div className="modal">
            <p className="modal__heading">Are you sure you want to delete this entry?</p>
            <button className={'modal__button button button-accent'} onClick={closeModal}>Cancel</button>
            <button className={'modal__button button button-danger'}>Delete</button>
        </div>
    </div>
}

export default DeleteEntryModal