angular.module('app').controller('hoursContr',['$scope',function($scope){
    
    $scope.hours=[
        {type:'Breakfast',
         hours:[
             {
              date:'Mon-Friday',
              time:'7:30AM - 10:30AM'
             }
         ]},
        {type:'Lunch',
          hours:[
             {
              date:'Mon-Sunday',
              time:'10:30AM - 5:00PM'
             }
         ]},
        {type:'Dinner',
          hours:[
             {
              date:'Mon-Thursday',
              time:'5:00AM - 9:30PM'
             },
             {
              date:'Fri-Sunsday',
              time:'5:00AM - 11:30PM' 
             }
         ]}
        
    ]
    
    
    
    }])