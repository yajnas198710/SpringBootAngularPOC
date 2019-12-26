import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://10.105.129.146:6004/api/v1/employees';

  private createEmployeesURL = 'http://10.105.129.146:6004/api/v1/createEmployees';

  private updateEmployeesURL = 'http://10.105.129.146:6004/api/v1/updateEmployees';

  private deleteEmployeesURL = 'http://10.105.129.146:6004/api/v1/deleteEmployees';

  private getEmployeesURL = 'http://10.105.129.146:6004/api/v1/getEmployees';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.getEmployeesURL}/${id}`);
  }

  createEmployee(createEmployees: Object): Observable<Object> {
    return this.http.post(`${this.createEmployeesURL}`, createEmployees);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.updateEmployeesURL}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.deleteEmployeesURL}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
