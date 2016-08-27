var MyController = (function () {
    function MyController($scope) {
        this.$scope = $scope;
        this.isChecked = true;
        this.inputData = "This Is A String";
        $scope.vm = this;
    }
    MyController.prototype.onToggleButtonClickHandler = function () {
        this.isChecked = !this.isChecked;
    };
    MyController.$inject = ["$scope"];
    return MyController;
}());
app.controller("MyController", MyController);
//# sourceMappingURL=MyController.js.map