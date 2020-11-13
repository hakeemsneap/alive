var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope,$http,$q) {

    var vm  = this;


    var records = []


    var applyFilterTypes = [{
            key: "auto",
            name: "Immediately"
        }, {
            key: "onClick",
            name: "On Button Click"
        }],


        dataGrid;

   getResult()

    
    function getOrderDay(rowData) {
        return (new Date(rowData.OrderDate)).getDay();
    }


    
    $scope.filterRow = {
        visible: true,
        applyFilter: "auto"
    };
    
    $scope.headerFilter = {
        visible: true
    };




    function showPosition(position) {
        $scope.latitude =  position.coords.latitude  ;
          $scope.longitude =  position.coords.longitude;

    }



    function getResult(fetchUrl,method) {
        var distSort = []
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                console.log("Geolocation is not supported by this browser.");
            }


        var reqBody =  {"ios":"100", "lan":"EN","ver":"100"}
        var deferred = $q.defer();
        $http({
            method  : 'post',
            url     : 'https://secure.kwsp.gov.my/m2/postBranchLocation',
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'json',
            },
            data : reqBody
        })
            .then(function (data, status, headers, config) {

                records.push(data.data.lis)

                $scope.masterRecords =  Object.assign(records[0])
                $scope.gridOptions = {
                    onInitialized: function(e) {
                        dataGrid = e.component;
                    },
                    paging: {
                        pageSize: 30
                    },
                    pager: {
                        showPageSizeSelector: true,
                        allowedPageSizes: [5, 10, 20],
                        showInfo: true
                    },
                    dataSource:  $scope.masterRecords,
                    keyExpr: "lon",

                    selection: {
                        mode: "single"
                    },
                    onSelectionChanged: function(e) {
                        e.component.collapseAll(-1);
                        e.component.expandRow(e.currentSelectedRowKeys[0]);
                    },
                    onContentReady: function(e) {
                        if(!e.component.getSelectedRowKeys().length)
                            e.component.selectRowsByIndexes(0);
                    },

                    showBorders: true,
                    bindingOptions: {
                        filterRow: "filterRow",
                        headerFilter: "headerFilter",
                        showColumnLines: "showColumnLines",
                        showRowLines: "showRowLines",
                        showBorders: "showBorders",
                        rowAlternationEnabled: "rowAlternationEnabled"

                    },
                    searchPanel: {
                        visible: true,
                        width: 400,
                        placeholder: "Search State/address/region"
                    },


                    columns: [{
                        dataField: "ste",
                        customizeText: function(cellInfo) {
                            if(cellInfo.value === "01")
                            return "Johor";

                        if(cellInfo.value === "02")
                  {
                      return "Kedah";
                  }
                            if(cellInfo.value === "02")
                            {
                                return "Kedah";
                            }
                            if(cellInfo.value === "03")
                            {
                                return "Kelantan";
                            }
                            if(cellInfo.value === "04")
                            {
                                return "Melaka";
                            }
                            if(cellInfo.value === "05")
                            {
                                return "Negeri Sembilan";
                            }
                            if(cellInfo.value === "06")
                            {
                                return "Pahang";
                            }
                            if(cellInfo.value === "08")
                            {
                                return "Perak";
                            }
                            if(cellInfo.value === "09")
                            {
                                return "Perlis";
                            }
                            if(cellInfo.value === "07")
                            {
                                return "Pulau Pinang";
                            }
                            if(cellInfo.value === "12")
                            {
                                return "Sabah";
                            }
                            if(cellInfo.value === "13")
                            {
                                return "Sarawak";
                            }
                            if(cellInfo.value === "10")
                            {
                                return "Selangor";
                            }
                            if(cellInfo.value === "11")
                            {
                                return "Terengganu";
                            }
                            if(cellInfo.value === "14")
                            {
                                return "W.Persekutuan (Kuala Lumpur)";
                            }
                            if(cellInfo.value === "16")
                            {
                                return "W.Persekutuan (Labuan)";
                            }
                            if(cellInfo.value === "16")
                            {
                                return "W.Persekutuan (Putrajaya)";
                            }
                        },
                        width: 250,
                        caption: "State",
                        // headerFilter: {
                        //     groupInterval: 10000
                        // },
                        allowFiltering: true,
                        allowHeaderFiltering: true,
                        headerFilter: {
                                    dataSource: [ {
                                        text: "ALL States",
                                        value: ["ste", ">", "0"]
                                    }, {

                                        text: "Johor",
                                        value: ["ste", "=", "01"]
                                    },  {
                                        text: "Kedah",
                                        value: ["ste", "=", "02"]
                                    },  {
                                        text: "Kelantan",
                                        value: ["ste", "=", "03"]
                                    },  {
                                        text: "Melaka",
                                        value: ["ste", "=", "04"]
                                    }, {
                                        text: "ALL States",
                                        value: ["ste", "=", "0"]
                                    }, {
                                        text: "Negeri Sembilan",
                                        value: ["ste", "=", "05"]
                                    }, {
                                        text: "Pahang",
                                        value: ["ste", "=", "06"]
                                    }, {
                                        text: "Perak",
                                        value: ["ste", "=", "08"]
                                    }, {
                                        text: "Perlis",
                                        value: ["ste", "=", "09"]
                                    }, {
                                        text: "Pulau Pinang",
                                        value: ["ste", "=", "07"]
                                    }, {
                                        text: "Sabah",
                                        value: ["ste", "=", "12"]
                                    },{
                                        text: "Sarawak",
                                        value: ["ste", "=", "13"]
                                    },{
                                        text: "Sabah",
                                        value: ["ste", "=", "12"]
                                    },{
                                        text: "Selangor",
                                        value: ["ste", "=", "10"]
                                    },{
                                        text: "Terengganu",
                                        value: ["ste", "=", "11"]
                                    },{
                                        text: "W.Persekutuan (Kuala Lumpur)",
                                        value: ["ste", "=", "14"]
                                    },{
                                        text: "W.Persekutuan (Labuan)",
                                        value: ["ste", "=", "16"]
                                    },{
                                        text: "W.Persekutuan (Putrajaya)",
                                        value: ["ste", "=", "16"]
                                    }]
                                }
                    },

                        {
                            dataField: "nam",
                            width: 250,
                            caption: "Region",
                            allowFiltering: true,
                            allowHeaderFiltering: false,

                        },
                        {
                            dataField: "ads",
                            width: 700,
                            caption: "Address",
                            allowFiltering: true,
                            allowHeaderFiltering: false,

                        },

                        {
                            dataField: "lon",
                            customizeText: function(cellInfo) {







                                var  row  = _.filter($scope.masterRecords, ['lon', cellInfo.value]);

                                var lat1 = row[0].lat ;
                                  var    lon1 = row[0].lon;
                                  var  lat2 =  $scope.latitude  // client location
                                var  lon2 =  $scope.longitude  // client location

                                var unit = 'K';

                                // The map, centered at Uluru
                                const uluru = { lat: lat1, lng: lon1 };




                                if ((lat1 == lat2) && (lon1 == lon2)) {
                                    return 0;
                                }
                                else {
                                    var radlat1 = Math.PI * lat1/180;
                                    var radlat2 = Math.PI * lat2/180;
                                    var theta = lon1-lon2;
                                    var radtheta = Math.PI * theta/180;
                                    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                                    if (dist > 1) {
                                        dist = 1;
                                    }
                                    dist = Math.acos(dist);
                                    dist = dist * 180/Math.PI;
                                    dist = dist * 60 * 1.1515;
                                    if (unit=="K") { dist = dist * 1.609344 }
                                    if (unit=="N") { dist = dist * 0.8684 }
                                    if(dist < 1){dist= Math.round(dist/10) * 1000}  // round of to nearest point
                                    if(dist > 1) {dist  = Math.round(dist / 10); }   // round of to nearest point

                                    // const map = new google.maps.Map(document.getElementById("map"), {
                                    //     zoom: 4,
                                    //     center: uluru,
                                    // });
                                    // // The marker, positioned at Uluru
                                    // const marker = new google.maps.Marker({
                                    //     position: uluru,
                                    //     map: map,
                                    // });
                                    $scope.DistanceLoc = dist + dist < 1? dist.toString()+' M':dist.toString()+' KM'
                                     distSort.push(dist);



                                    return dist < 1? dist.toString()+' M':dist.toString()+' KM' ;
                                }


                                // return 'lat='+row[0].lat+'lon='+row[0].lon ;


                            },
                            width: 150,
                            caption: "Distances",
                            allowFiltering: false,
                            allowHeaderFiltering: false,

                        }

                    ],
                    masterDetail: {
                        enabled: false,
                        template: "detail"
                    }
                };

                $scope.distanceSort = distSort;
                console.log($scope.distanceSort)
                deferred.resolve(data);
            },function (data) {
                deferred.reject([]);
            });
        return deferred.promise;
    }


    
    $scope.filterTypesOptions = {
        items: applyFilterTypes,
        value: applyFilterTypes[0].key,
        valueExpr: "val",
        displayExpr: "nam",
        bindingOptions: {
            value: "filterRow.applyFilter",
            disabled: "!filterRow.visible"
        }
    };

    $scope.filterVisibleOptions = {
        text: "Filter Row",
        bindingOptions: {
            value: "filterRow.visible"
        },
        onValueChanged: function(data) {
            dataGrid.clearFilter();
        }
    };
    function getTotalPageCount () {
        this.dataGrid.instance.pageCount();
    }

    $scope.headerFilterOptions = {
        text: "Header Filter",
        bindingOptions: {
            value: "headerFilter.visible"
        },
        onValueChanged: function() {
            dataGrid.clearFilter();
        }
    };






});