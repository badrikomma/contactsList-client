import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) {
    this.contacts = this.contactService.contacts;
   }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe( contacts =>
      this.contacts = contacts);
  }

  deleteContact(id) {
    this.contactService.deleteContact(id)
      .subscribe(data => {
        if(data.n == 1) {
          for(var i =0; i < this.contacts.length; i++) {
            if(this.contacts[i]._id == id) {
              this.contacts.splice(i,1);
            }
          }
        }
      })
  }

}
