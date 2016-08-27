interface IMyViewModelScope extends ng.IScope {
    vm: any; // vm stand for ViewModel
}

class MyController {
    private isChecked = true;
    private inputData = "This Is A String";

    static $inject = ["$scope"];
    constructor(private $scope: IMyViewModelScope) {
        $scope.vm = this;
    }

    private onToggleButtonClickHandler() {
        this.isChecked = !this.isChecked;
    }
}

app.controller("MyController", MyController);