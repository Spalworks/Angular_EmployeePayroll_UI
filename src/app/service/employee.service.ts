import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  // private baseUrl: string = "http://localhost:8080/employeepayrollservice/";

  constructor(private httpClient: HttpClient) {}

  addEmployee(body: any): Observable<any> {
    return this.httpClient.post('http://localhost:8080/employeepayrollservice/create', body);
  }

  getEmployeeData(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/employeepayrollservice/');
  }

  deleteEmployeeData(empId: number) {
    return this.httpClient.delete(
      'http://localhost:8080/employeepayrollservice/delete/' + empId
    );
  }

  editEmployee(empId: number, body: any): Observable<any> {
    return this.httpClient.put(
      'http://localhost:8080/employeepayrollservice/update/' + empId , body
    )
  }
}
