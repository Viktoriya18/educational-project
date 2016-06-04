(function(){
    "use strict"
    angular
        .module('myApp')
        .controller("HomeController", HomeControllerFunc)
        .controller("AboutController", AboutControllerFunc)
        .controller("SecondController", SecondControllerFunc)
        .controller("SecondMotilityController", SecondMotilityControllerFunc)
        .controller("SixthController", SixthControllerFunc)

        HomeControllerFunc.$inject = [];
        function HomeControllerFunc() {
            var vm = this;
        }

        AboutControllerFunc.$inject = [];
        function AboutControllerFunc() {
            var vm = this;
        }

        SecondControllerFunc.$inject = [];
        function SecondControllerFunc() {
            var vm = this;
        }

        SecondMotilityControllerFunc.$inject = [];
        function SecondMotilityControllerFunc() {
            var vm = this;
            console.log('tets')
             vm.dragControlListeners = {
                containment: '#blocks' 
            };
            vm.items = {
            "columns": [
                    {"name": "Ideas", "cards": [
                      {"url": "img/j.png"},
                      {"url": "img/l.png"},
                      {"url": "img/d.png"},
                      {"url": "img/p.png"},
                      {"url": "img/m.png"}
                    ]},
                    {"name": "Not started", "cards": [
                      {"url": "img/dog.png"},
                      {"url": "img/pig.png"},
                      {"url": "img/lion.png"},
                      {"url": "img/monkey.png"},
                      {"url": "img/juice.png"}
                    ]}
                  ]
            }
        }

        SixthControllerFunc.$inject = [];
        function SixthControllerFunc() {
            var vm = this;
        }

})();
