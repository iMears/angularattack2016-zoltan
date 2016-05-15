"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// services
var company_service_1 = require('./company/company.service');
var giphy_service_1 = require('./giphy/giphy.service');
var giphy_service_2 = require('./giphy/giphy.service');
var employee_service_1 = require('./employee/employee.service');
var AppComponent = (function () {
    function AppComponent(_CompanyService, _GiphyService, _YoutubeService, _EmployeeService) {
        this._CompanyService = _CompanyService;
        this._GiphyService = _GiphyService;
        this._YoutubeService = _YoutubeService;
        this._EmployeeService = _EmployeeService;
    }
    AppComponent.prototype.getCompanyName = function (word1, word2) {
        this._CompanyService.getName();
    };
    AppComponent.prototype.getGiphy = function (phrase) {
        this._GiphyService.getImgUrl(phrase);
    };
    AppComponent.prototype.getVideo = function () {
        this._YoutubeService.getVideo().then(function (result) {
            console.log('>>> RANDOM YOUTUBE DATA', result.json());
        });
    };
    AppComponent.prototype.getEmployee = function () {
        this._EmployeeService.getEmployee().subscribe(function (result) {
            console.log('>>> RANDOM EMPLOYEE DATA', result.json());
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var word1 = 'yo'; //faker.random.word();
        var word2 = 'dawg'; //faker.random.word();
        this.getCompanyName(word1, word2);
        this.getGiphy('picard wtf');
        this.getVideo();
        this.getEmployee();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<h1>The App</h1>',
            providers: [company_service_1.CompanyService, giphy_service_1.GiphyService, giphy_service_2.YoutubeService, employee_service_1.EmployeeService]
        }), 
        __metadata('design:paramtypes', [company_service_1.CompanyService, giphy_service_1.GiphyService, (typeof (_a = typeof giphy_service_2.YoutubeService !== 'undefined' && giphy_service_2.YoutubeService) === 'function' && _a) || Object, employee_service_1.EmployeeService])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map