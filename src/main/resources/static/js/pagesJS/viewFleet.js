
var dataSet = [
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];

var data = [
    {
        "license": 79654,
        "owner": "OPTIQUE",
        "make": "2007 Dodge",
        "model": "Long Box 1500 Brown",
        "vin": "5bb4fe390b71475960e4d5e8",
        "id": 0,
        "isActive": true
      },
      {
        "license": 98790,
        "owner": "ZILLANET",
        "make": "2008 Honda",
        "model": "Long Box 1500 Blue",
        "vin": "5bb4fe39917276ddfcd933b1",
        "id": 1,
        "isActive": false
      },
      {
        "license": 21045,
        "owner": "KRAGGLE",
        "make": "2013 Dodge",
        "model": "Long Box 1500 Green",
        "vin": "5bb4fe3997b8d299c0f851a7",
        "id": 2,
        "isActive": false
      },
      {
        "license": 96410,
        "owner": "KINETICA",
        "make": "2012 Dodge",
        "model": "Crew Cab 1500 Green",
        "vin": "5bb4fe39969f64f6bbb8b124",
        "id": 3,
        "isActive": true
      },
      {
        "license": 29425,
        "owner": "SCHOOLIO",
        "make": "2016 Honda",
        "model": "Trailer Blue",
        "vin": "5bb4fe39b1c4844c944bbf26",
        "id": 4,
        "isActive": true
      },
      {
        "license": 37611,
        "owner": "MOREGANIC",
        "make": "2005 Ford",
        "model": "Single Cab 2500 Brown",
        "vin": "5bb4fe39be2ccd8559f2d271",
        "id": 5,
        "isActive": false
      },
      {
        "license": 65625,
        "owner": "BIOLIVE",
        "make": "2014 Ford",
        "model": "Long Box 1500 Blue",
        "vin": "5bb4fe39c0b58e18f000b7a6",
        "id": 6,
        "isActive": false
      },
      {
        "license": 41883,
        "owner": "ROCKABYE",
        "make": "2007 Dodge",
        "model": "Single Cab 2500 Brown",
        "vin": "5bb4fe391a1b491c341cd66d",
        "id": 7,
        "isActive": true
      },
      {
        "license": 77962,
        "owner": "DIGIRANG",
        "make": "2005 Honda",
        "model": "Single Cab 2500 Brown",
        "vin": "5bb4fe3977cd25fc191324e1",
        "id": 8,
        "isActive": true
      },
      {
        "license": 78381,
        "owner": "PERMADYNE",
        "make": "2003 Ford",
        "model": "Long Box 1500 Green",
        "vin": "5bb4fe3982e7a2875222a03a",
        "id": 9,
        "isActive": false
      },
      {
        "license": 55063,
        "owner": "SPLINX",
        "make": "2018 Chevy",
        "model": "Long Box 1500 Blue",
        "vin": "5bb4fe394f2dcd76998a307c",
        "id": 10,
        "isActive": true
      },
      {
        "license": 18250,
        "owner": "BITENDREX",
        "make": "2015 Ford",
        "model": "Trailer Green",
        "vin": "5bb4fe392708f84294a278f7",
        "id": 11,
        "isActive": false
      },
      {
        "license": 28635,
        "owner": "NORSUL",
        "make": "2011 Dodge",
        "model": "Crew Cab 1500 Blue",
        "vin": "5bb4fe390e2a36691b50fc3f",
        "id": 12,
        "isActive": true
      },
      {
        "license": 74182,
        "owner": "MENBRAIN",
        "make": "1998 Honda",
        "model": "Trailer Brown",
        "vin": "5bb4fe391a5d0950fc43ec73",
        "id": 13,
        "isActive": true
      },
      {
        "license": 50173,
        "owner": "MEDICROIX",
        "make": "2017 Chevy",
        "model": "Trailer Blue",
        "vin": "5bb4fe394a5dd3f5524d6fc5",
        "id": 14,
        "isActive": false
      },
      {
        "license": 90702,
        "owner": "ECOSYS",
        "make": "2018 Ford",
        "model": "Long Box 1500 Green",
        "vin": "5bb4fe39c161e18f45eab89c",
        "id": 15,
        "isActive": true
      }
]
  
$(document).ready(function() {
    $('#expense').DataTable( {
        data: data,
        dom: 'Brtip',
        bProcessing: true,
        bPaginate: false,
        buttons: [
            {
                text: 'Print <i class="fa fa-lg fa-print"></i>',
                extend: 'print',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5]
                },
                className: 'table-btns print-btn'
            },
            {
                text: 'Export to Excel <i class="fa fa-lg fa-file-excel-o"></i>',
                extend: 'excel',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5]
                },
                className: 'table-btns excel-btn'
            },
            {
                text: 'Add <i class="fa fa-lg fa-plus"></i>',
                action: function () {
                    window.location.href = '/addNewFleet';
                },
                className: 'table-btns add-btn'
            },
            {
                text: 'Refresh <i class="fa fa-lg fa-repeat"></i>',
                action: function () {
                    window.location.reload();
                },
                className: 'table-btns refresh-btn'
            }

        ],
        "columnDefs": [{
            "targets": [6],
            "visible": false,
            "searchable": false,
        }],
        columns: [
            {data: "license"},
            {data: "owner"},
            {data: "make"},
            {data: "model"},
            {data: "vin"},
            {data: "isActive"},
            {data: "id"}
        ]
    } );
} );


        



 

