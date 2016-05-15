import {Component}         from '@angular/core';
import {CompanyService}    from '../company/company.service';
import {EmployeeComponent} from '../employee/employee.component';
import {EmployeeService}   from '../employee/employee.service';
import {Employee}          from '../employee/employee.model';


@Component({
  selector: 'site-template',
  templateUrl: 'app/template/startbootstrap-agency-1.0.6/index.html',
  directives: [EmployeeComponent],
  providers: [EmployeeService, CompanyService]
})

export class TemplateComponent {
  constructor(private _EmployeeService: EmployeeService, private _CompanyService: CompanyService) {};
  employees: Employee[];
  companyName: string;
  primaryColor: any;
  secondaryColor: any;
  companySuffix: string;
  catchPhrase: string;
  bs: string;
  bsBuzz: string;

  ngOnInit() {
    var self = this;
    this._EmployeeService.getEmployees(3)
      .subscribe(function(response) {
        self.employees = response.json();
      });

    this._CompanyService.getCompany()
      .then(function(response) {
        let companyData    = response.json();
        console.log(companyData)
        self.companyName   = companyData.companyName;
        self.companySuffix = companyData.companySuffix;
        self.catchPhrase   = companyData.catchPhrase;
        self.bs            = companyData.bs;
        self.bsBuzz        = companyData.bsBuzz;
        self.primaryColor = ['#318dbc', '#fc4538', '#1469aa', '#fb8c18',  '#0e427f', '#5ac2cb', '#7ecca8', '#fed200','#cdeac6', '#febb60'][Math.floor(Math.random() * 10)]
        self.secondaryColor = ['#9b78ce', '#fecf60', '#9ee2fa', '#44b44e', '#b1248e', '#04aae4', '#e48134', '#abcb76', '#ed4a3c', '#ec008c'][Math.floor(Math.random() * 10)]
      });
      this._CompanyService.getKantianSentences().then(function(response) {
        self.stuff            = response.json();
      })
  }
}

