import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  http = inject(HttpClient);

  addDepartment(model: any | FormData): Observable<void> {
    return this.http.post<void>('http://192.168.0.138:80/department', model)
  }

  getAllDepartments(): Observable<any[]> {
    return this.http.get<any[]>('http://192.168.0.138:80/department');
  }

  getDepartment(id: any): Observable<any> {
    return this.http.get<any>(`http://192.168.0.138:80/department/${id}`);
  }

  updateDepartment(id: any, updateDepartmentRequest: any | FormData): Observable<any> {
    return this.http.put<any>(`http://192.168.0.138:80/department/${id}`, updateDepartmentRequest);
  }

  deleteDepartment(id: any): Observable<any> {
    return this.http.delete<any>(`http://192.168.0.138:80/department/${id}`);
  }
}
