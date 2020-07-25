let app = angular.module('Covid-19', []);

const URL = 'https://covid-19.mathdro.id/api'

app.controller('MyCtrl', ($scope, $http) => {
  // this is a controller
  $scope.title = "Stay Home Stay Safe";

  $http.get(URL)
    .then((response) => {
      $scope.all_data=response.data
    }, (error) => {
      console.log(error)
    });

    $scope.get_c_data = () => {
      let country = ""

      country = $scope.c;
      if (country === "") {
        $scope.c_data = undefined;
        return undefined;
      } else {
        $http.get(`${URL}/countries/${country}`)
          .then((response) => {
            $scope.c_data = response.data
          }, (error) => {
            console.log(error)
          });
      }
    }
})
