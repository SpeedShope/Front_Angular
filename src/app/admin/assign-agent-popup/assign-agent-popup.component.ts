import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MissionServiceService } from 'src/app/_services/mission-service.service';
import { UserService } from 'src/app/_services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assign-agent-popup',
  templateUrl: './assign-agent-popup.component.html',
  styleUrls: ['./assign-agent-popup.component.css']
})
export class AssignAgentPopupComponent {
  delivery_agents: any[] = []; // Initialize as an empty array
  orderid: any; 
  deliveryid:any; 

  constructor(private userserv: UserService, private route :ActivatedRoute, private MissionService: MissionServiceService) { }

  ngOnInit(): void {
        // You can now use `agentId` for further processing
   this.route.params.subscribe(params => {
    this.orderid = params['orderId'];
    // Now you have the order ID, you can use it as needed
    console.log(this.orderid);
  });
    this.getDeliveries();
    
  }
  getDeliveries() {
    this.userserv.getAllDeliveries().subscribe(
      deliveries => {
        this.delivery_agents = deliveries; // Assign the retrieved deliveries to the property
      },
      error => {
        console.error(error); // Handle errors
      }
    );
  }

  affectOrderToDeliveryAgent(agentId: number, orderId: number) {
    this.MissionService.affectOrderToDeliveryAgent(agentId, orderId).subscribe(
      res => {
        console.log(res);
        // Do something with the response
        Swal.fire({
          title: 'Success!',
          text: 'Order has been assigned to the selected delivery agent',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      },
      error => {
        console.error(error); // Handle errors
        Swal.fire({
          title: 'Error!',
          text: 'An error has occurred while assigning the order to the selected delivery agent',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    );
  }

  assignAgent(agentId: number) {
    // Do something with the selected agent ID (agentId)
    console.log("Selected agent ID:", agentId);


    this.affectOrderToDeliveryAgent(agentId, this.orderid);
    

  }
  


}
