import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MissionServiceService } from 'src/app/_services/mission-service.service';

@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrls: ['./buyer-details.component.css']
})
export class BuyerDetailsComponent {
  showAgentDetails:boolean=false; 
  mission:any;
  id_mission:number;
  constructor(
   private route :ActivatedRoute, 
    private MissionService: MissionServiceService
  ) { 
    this.showAgentDetails=true;
  }
  ngOnInit(){

    this.route.params.subscribe(params => {
      const id = params['id'];
      // Now you have the order ID, you can use it as needed
      console.log(id)
    });  this.route.params.subscribe(params => {
      this.id_mission = params['id'];
      // Now you have the order ID, you can use it as needed
      console.log(this.id_mission)
    });
    this.MissionService.getBillDetails(this.id_mission).subscribe(
      (data) => {
        this.mission=data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  



}
