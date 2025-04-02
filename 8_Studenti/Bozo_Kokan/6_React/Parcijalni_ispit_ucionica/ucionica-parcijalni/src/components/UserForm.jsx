import React from "react";

class UserForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userName: "",
        };
    }

    handleUserChange(e){
        const userName = e.target.value;
        this.setState({ userName });
    };
    // ako se puse u obliku arrow notacije     
    // handleUserChange = (e) => {
    //     const userName = e.target.value;
    //     this.setState({ userName });
    // } onda pisemo onChange={handleUserChange}

    handleUserSelected = (e) => {
        e.preventDefault();

        const { userName } = this.state;
        const { setUser } = this.props;

        setUser(userName);
    }

    render(){

        const { userName } = this.state;

        return(
            <form onSubmit={this.handleUserSelected}>                
                <div style={styles.container}>
                    <label htmlFor="name" style={styles.label}>Github username:</label>
                    <br />
                    <input id="name" type="text" autoFocus style={styles.input} value={userName} onChange={this.handleUserChange.bind(this)}/> 
                    <br />
                    <button style={styles.button}>Go!</button>
                </div>
            </form>
        );
    }
}

export default UserForm;

const styles = {
    container: {
        paddingLeft: 50,
        paddingRight: 50
    },
    button: {
        marginTop: 20,
        width: "100%",
    },
    input: {
        marginTop: 10,
        width: "100%",
        boxSizing: "border-box",
    },
    label: {
        fontWeight: "bold",
    }
};