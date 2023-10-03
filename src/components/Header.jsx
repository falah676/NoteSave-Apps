import React from "react";

class Header extends React.Component{
    constructor(promps){
        super(promps)

      this.state = {
        search: ''
      };
        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    onChangeSearch(event) {
        // this.setState(() => {
        //   return {
        //     search: event.promps.value
        //   }
        // })

        const searchValue = event.target.value;
        this.setState({ search: searchValue });
        this.props.handleSearch(searchValue);
      };

    render(){
        return(
        <header className="header">
            <h2>NoteSave</h2>
            <div className="searchBar">
                <form>
                    <input type="text" id="searchInput" value={this.state.search} onChange={this.onChangeSearch}  placeholder='Cari Catatan...'/>
                </form>
            </div>
        </header>
        )
    }
}

export default Header;
 