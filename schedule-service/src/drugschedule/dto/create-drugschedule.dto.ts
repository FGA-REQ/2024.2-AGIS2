export class CreateDrugscheduleDto {
  drugId: string   // chave estrangeira de remédio
  numberOfDays: number
  initialDate: Date
  drugBreak: number
  patientCPF: string
}

