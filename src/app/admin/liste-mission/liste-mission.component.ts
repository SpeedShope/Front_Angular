import { Component } from '@angular/core';
import { MissionServiceService } from 'src/app/_services/mission-service.service';

@Component({
  selector: 'app-liste-mission',
  templateUrl: './liste-mission.component.html',
  styleUrls: ['./liste-mission.component.css']
})
export class ListeMissionComponent {
  Missions:any[]=[] 
  checkClick : boolean=false; 
  checkClick2 : boolean=false; 
    constructor(private missionserv:MissionServiceService) { }
  
    ngOnInit(): void {
      this.missionserv.getAllMissions().subscribe((missions)=>{
        this.Missions=missions
        console.log(missions)
      })
    } 


    show(){
this.checkClick=true;
    }

  
}
