function tablePrinter($scope) {
            $scope.items = [
                { name: 'куриное мясо', price: 10.90, category: 'мясо', count:3 },
                { name: 'свиное мясо', price: 1.10, category: 'мясо',count:6 },
                { name: 'семга', price: 2.60, category: 'рыба',count:1 },
                { name: 'сметана', price: 17.50, category: 'молоко',count:8 },
                { name: 'селедка', price: 5.90, category: 'рыба',count:5 },
                { name: 'карп', price: 4.79, category: 'рыба',count:2 },
                { name: 'индюшатина', price: 3.79, category: 'мясо',count:3 },
                { name: 'молоко', price: 45.99, category: 'молоко',count:9 },
                { name: 'сливки', price: 14.79, category: 'молоко',count:4 },
            ];
            $scope.limit = $scope.items.length;
            $scope.categories = $scope.items
                .map(i => i.category)
                .filter((value, i, array) => array.indexOf(value) === i);

            $scope.namePredicate = function (nameFilter) {
                return function (item) {
                    return !nameFilter || item.name === nameFilter.name;
                };
            };

            $scope.categoryPredicate = function (categoryFilter) {
                return function (item) {
                    return !categoryFilter || item.category === categoryFilter;
                };
            };

            $scope.orderByFieldNames = [];

            $scope.orderByField = function (fieldName) {
                $scope.orderByFieldNames.push(fieldName);
            }


            $scope.cities = [
                {city:'Мадрид',country:'Испания'},
                {city:'Ливерпуль',country:'Великобритания'},
                {city:'Мюнхен',country:'Германия'},
                {city:'Бергамо',country:'Италия'},
                {city:'Одесса',country:'Украина'},
                {city:'Салоники'},
                {city:'Яссы',country:'Румыния'},
                {city:'Пхеньян'},
                {city:'Вашингтон'},
                {city:'Воркута'}
            ];


            $scope.change = function() {
                document.getElementById('change').disabled = false;
                document.getElementById('change').value = 'Hello world!';
            };  
        }