import { Component } from 'react';
import contactsJson from '../contacts.json';
import ContactDetails from './ContactDetails';

class Contacts extends Component {

    state = {
        contacts: contactsJson.slice(0,5) 
    }

    
// function to round the popularity value
    roundPopularity = (popularity) => {
        console.log(popularity)
        return  popularity.toFixed(2)
    }

    handleAdd = () => {
        let randomIndex =Math.floor(Math.random() * contactsJson.length)
        let randomContact = contactsJson[randomIndex]

        this.setState( {
            contacts: [...this.state.contacts, randomContact]
        })
    }

    handleSortName = () => {
        let clonedContacts =JSON.parse(JSON.stringify(this.state.contacts))

        clonedContacts.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            }
            else if (a.name < b.name) {
                return -1
            }
            else {
                return 0
            }
        })

        this.setState({
            contacts: clonedContacts
        })
    }

    handleSortPopularity = () => {
        let clonedContacts = JSON.parse(JSON.stringify(this.state.contacts))

        clonedContacts.sort((a, b) => {
           return a.popularity - b.popularity;
        })

        this.setState({
            contacts: clonedContacts
        })
    }

    handleDelete = (contactId) => {

        let filteredStudents = this.state.contacts.filter((singleContact) => {
            return singleContact.id !== contactId
        })
        
        this.setState({
            contacts: filteredStudents
        })
    }


    render() {
     
        return (
            <div>
                <h1>Contacts</h1>
                <button onClick={this.handleAdd}>add random contact</button>
                <button onClick={this.handleSortName}>sort by name</button>
                <button onClick={this.handleSortPopularity}>sort by popularity</button>

                {
                    this.state.contacts.map(contact => {
                        return (
                            <ul>
                                <li><img class="profile-pic" src={contact.pictureUrl}></img></li>   
                                <li>{contact.name}</li>
                                <li>{this.roundPopularity(contact.popularity)}</li>
                                
                                <button onDelete={this.handleDelete}>delete</button>
                                 
                            </ul>     
                        )
                            
                    })
                }
                

            </div>

        )
    }
}

export default Contacts