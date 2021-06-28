export interface Doctor {
    id: number;
    name?: string;
    imagePath?: string;
    specialtyName?: string;
    phone?: string;
    patientPay?: number;
    isActive?: boolean;
    isOnline?: boolean;
    os?: string;
    creationDate?: Date;
    rank?: number;

}