import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];
  contact: Contact;
  first_name: String;
  last_name: String;
  phone: String;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe( contacts =>
      this.contacts = contacts);
  }

  addContact(){
    const newContact = {
      first_name : this.first_name,
      last_name : this.last_name,
      phone: this.phone,
    };

    this.contactService.addContact(newContact)
      .subscribe(contact => {
        this.contacts.push(contact)
    });

    this.contactService.refreshContactList();
  }

}
