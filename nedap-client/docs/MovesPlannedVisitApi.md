# NedapOnsApi.MovesPlannedVisitApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesPlannedVisitAPIByClientId**](MovesPlannedVisitApi.md#movesPlannedVisitAPIByClientId) | **GET** /v0/plannen_roosteren/planned_visits/by_client_id/{client_id} | Return the planned visits of a Client within a specified period.
[**movesPlannedVisitAPIByEmployeeId**](MovesPlannedVisitApi.md#movesPlannedVisitAPIByEmployeeId) | **GET** /v0/plannen_roosteren/planned_visits/by_employee_id/{employee_id} | Return the planned visits of an Employee within a specified period.

<a name="movesPlannedVisitAPIByClientId"></a>
# **movesPlannedVisitAPIByClientId**
> MovesListPlannedVisitList movesPlannedVisitAPIByClientId(clientId, from, to, opts)

Return the planned visits of a Client within a specified period.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesPlannedVisitApi();
let clientId = 789; // Number | The id of the Client whose PlannedVisits you want to retrieve.
let from = new Date("2013-10-20"); // Date | The start date of the period.
let to = new Date("2013-10-20"); // Date | The end date of the period (exclusive).
let opts = { 
  'include': "include_example" // String | Comma-separated list of keywords to indicate which features/fields/subresources you'd like to have included in the response. No keywords supported at the moment. Parameter is defined for symmetry with PlannedVisitAPI.byEmployeeId.
};
apiInstance.movesPlannedVisitAPIByClientId(clientId, from, to, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**| The id of the Client whose PlannedVisits you want to retrieve. | 
 **from** | **Date**| The start date of the period. | 
 **to** | **Date**| The end date of the period (exclusive). | 
 **include** | **String**| Comma-separated list of keywords to indicate which features/fields/subresources you&#x27;d like to have included in the response. No keywords supported at the moment. Parameter is defined for symmetry with PlannedVisitAPI.byEmployeeId. | [optional] 

### Return type

[**MovesListPlannedVisitList**](MovesListPlannedVisitList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="movesPlannedVisitAPIByEmployeeId"></a>
# **movesPlannedVisitAPIByEmployeeId**
> MovesListPlannedVisitList movesPlannedVisitAPIByEmployeeId(employeeId, from, to, opts)

Return the planned visits of an Employee within a specified period.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesPlannedVisitApi();
let employeeId = 789; // Number | The id of the Employee whose PlannedVisits you want to retrieve.
let from = new Date("2013-10-20"); // Date | The start date of the period.
let to = new Date("2013-10-20"); // Date | The end date of the period (exclusive).
let opts = { 
  'include': "include_example" // String | Comma-separated list of keywords to indicate which features/fields/subresources you'd like to have included in the response. `exportability` - The `Plancard.exportable` attribute will be computed to indicate whether a plancard would be exported by the EmployeeExportApi at this time.
};
apiInstance.movesPlannedVisitAPIByEmployeeId(employeeId, from, to, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | **Number**| The id of the Employee whose PlannedVisits you want to retrieve. | 
 **from** | **Date**| The start date of the period. | 
 **to** | **Date**| The end date of the period (exclusive). | 
 **include** | **String**| Comma-separated list of keywords to indicate which features/fields/subresources you&#x27;d like to have included in the response. &#x60;exportability&#x60; - The &#x60;Plancard.exportable&#x60; attribute will be computed to indicate whether a plancard would be exported by the EmployeeExportApi at this time. | [optional] 

### Return type

[**MovesListPlannedVisitList**](MovesListPlannedVisitList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

