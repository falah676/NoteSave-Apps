import React from "react";
import PropTypes from "prop-types"
class AddNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      count: 50
    };
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangeSubmitNotes = this.onChangeSubmitNotes.bind(this);
  }

  onChangeDesc(event) {
    this.setState(() => {
      return {
        description: event.target.value
      };
    });
  }

  





  onChangeTitle(event) {
    const maxLength = 50
      this.setState(() => {
        return {
          title: event.target.value.substr(0, maxLength),
          count: event.target.value.length > 50 ? 0 : maxLength - event.target.value.length
        };
      });
  }

  onChangeSubmitNotes(event) {
    event.preventDefault();
    this.props.SubmitNotes(this.state);
    this.setState({
        title: "",
        description: ""
    });
}


  render() {
    return (
      <section className="section-input-notes">
        <div className="form-input-notes">
          <h2>Buat Catatan</h2>
          <p>Tersisa karakter: {this.state.count}</p>
          <form action="" className="form-notes" onSubmit={this.onChangeSubmitNotes}>
            <input type="text" name="title" id="title-notes" placeholder="Masukan Judul..." className="input-notes" value={this.state.title} onChange={this.onChangeTitle} onKeyDown={this.characterCount}/>
            <textarea id="desc-notes" className="desc-notes" cols="30" rows="10" placeholder="Masukan Isi Notes" value={this.state.description} onChange={this.onChangeDesc}></textarea>
            <button type="submit" className="submit-notes">
              Tambah Catatan
            </button>
          </form>
        </div>
      </section>
    );
  }
}
AddNotes.propTypes = {
  SubmitNotes: PropTypes.func.isRequired
}
export default AddNotes;
