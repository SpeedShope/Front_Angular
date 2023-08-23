import { Component } from '@angular/core';

@Component({
  selector: 'app-deliveryagent-form',
  templateUrl: './deliveryagent-form.component.html',
  styleUrls: ['./deliveryagent-form.component.css']
})
export class DeliveryagentFormComponent {
  form: any = {
    cin: '',
    vehiculeType: '',
    vehiculeMatricule: '',
    vehiculeMarque: '',
    vehiculeModele: '',
    vehiculeCouleur: '',
    vehiculeAnnee: null,
    vehiculePlaces: null,
    vehiculeVolume: null,
    vehiculePoids: null,
    vehiculeLongueur: null,
    vehiculeLargeur: null,
    vehiculeHauteur: null,
    vehiculeCarburant: '',
    // ... Other fields ...
  };

  vehicleTypeOptions: string[] = ['track', 'van', 'car'];

  submitForm() {
    // Here, you can access the form data via the this.form object
    console.log(this.form);
    // Add further logic to submit the form data to a server or perform any other actions
  }
}
