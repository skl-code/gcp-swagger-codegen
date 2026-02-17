# NedapOnsApi.OnsEhrLastVisitedPlanApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onsEhrLastVisitedPlanAPIByEmployeeId**](OnsEhrLastVisitedPlanApi.md#onsEhrLastVisitedPlanAPIByEmployeeId) | **GET** /v0/openehr_dossier/back_channel/unauthorized/employees/{employee_id}/last_visited_plan | Finds the last visited plan of the given employee

<a name="onsEhrLastVisitedPlanAPIByEmployeeId"></a>
# **onsEhrLastVisitedPlanAPIByEmployeeId**
> OnsEhrLastVisitedPlan onsEhrLastVisitedPlanAPIByEmployeeId(employeeId)

Finds the last visited plan of the given employee

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsEhrLastVisitedPlanApi();
let employeeId = 789; // Number | The id of the employee

apiInstance.onsEhrLastVisitedPlanAPIByEmployeeId(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**| The id of the employee | 

### Return type

[**OnsEhrLastVisitedPlan**](OnsEhrLastVisitedPlan.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

