// contract.model.ts
export interface Contract {
    contractid: number;
    contractduration: number;
    contractdatedeb: string;
    cin: string;
    hasCar: boolean;
    typeday: string;
    carModel: string;
    carType: string;
    user: any; // You can define a User interface if needed
    signature: boolean;
    acceptstatus:boolean;
  }
  