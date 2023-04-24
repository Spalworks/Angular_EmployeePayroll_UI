import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from '../../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public employeeCount: number = 0;
  public employeeDetails: Employee[] = [];

  constructor(private employeeService: EmployeeService) { 

  }

  ngOnInit(): void {
    this.employeeService.getEmployeeData().subscribe(response =>{
      this.employeeDetails = response.data
      this.employeeCount = this.employeeDetails.length
      console.log(response.data)
    })
  }

  remove(empId: number): void {
    console.log('remove icon clicked. Employee id is : ' + empId);
    this.employeeService.deleteEmployeeData(empId).subscribe(response=>{
      console.log(response)
      this.ngOnInit()
    })
  }

  update(employee: Employee) {
    // console.log(employee);

    this.employeeService.editEmployee(employee.id, employee).subscribe(response=>{
      console.log(response)
      this.ngOnInit()
    })
  }
}
