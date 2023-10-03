import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MissionServiceService } from 'src/app/_services/mission-service.service';

@Component({
  selector: 'app-billdetails',
  templateUrl: './billdetails.component.html',
  styleUrls: ['./billdetails.component.css']
})
export class BilldetailsComponent {

  id_mission : any=null;
  showBillDetails = false;
  mission:any; 

  constructor(private missionserv:MissionServiceService, private route:ActivatedRoute ) { 
    this.showBillDetails=true;

    
  }
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id_mission = params['id'];
      // Now you have the order ID, you can use it as needed
      console.log(this.id_mission)
    });
    this.missionserv.getBillDetails(this.id_mission).subscribe(
      (data) => {
        this.mission = data;
        console.log(this.mission)

      },
      (error) => {
        console.error(error);
      }
    );
  }
  
     
  }


  

