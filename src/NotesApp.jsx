import React from "react";
import Header from './components/Header'
import AddNotes from './components/AddNotes'
import CardList from './components/CardList'
import { getInitialData } from './utils/index'
class NotesApps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Notes: getInitialData(),
            search: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.isArchived = this.isArchived.bind(this);
        this.restoreFromArchive = this.restoreFromArchive.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }
    onSearch(searchValue) {
        this.setState({ search: searchValue })
    }
    isArchived(id) {
        this.setState(prevState => {
            const updatedNotes = prevState.Notes.map(item => {
                if (item.id === id) {
                    return { ...item, archived: true };
                }
                return item;
            });

            return {
                Notes: updatedNotes
            };
        });
    }

    restoreFromArchive(id) {
        this.setState(prevState => {
            const updatedNotes = prevState.Notes.map(item => {
                if (item.id === id) {
                    return { ...item, archived: false };
                }
                return item;
            });

            return {
                Notes: updatedNotes
            };
        });
    }

    onDelete(id) {
        const NotesData = this.state.Notes.filter(item => item.id !== id);
        this.setState({ Notes: NotesData });
    }
    onSubmit({ title, description }) {
        this.setState((prevState) => {
            return {
                Notes: [
                    ...prevState.Notes,
                    {
                        id: +new Date(),
                        title,
                        body: description,
                        createdAt: new Date(),
                        archived: false,
                    },
                ],
            };
        });
    }

    render() {
        const filteredNotes = this.state.Notes.filter(note => note.title.toLowerCase().includes(this.state.search.toLowerCase()));
        const archiveData = this.state.Notes.filter(item => item.archived != false);
        const activeData = this.state.Notes.filter(item => item.archived == false);
        return (
            <div className="notes-app">
                <Header handleSearch={this.onSearch} />
                <AddNotes SubmitNotes={this.onSubmit} />
                <CardList Notes={filteredNotes} onDelete={this.onDelete} archived={this.isArchived} isArchived={archiveData} active={this.restoreFromArchive} activeData={activeData} />
            </div>
        );
    }
}
export default NotesApps;