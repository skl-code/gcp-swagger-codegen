# NedapOnsApi.MovesClientPlannedSchedulePlannedVisitApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesClientPlannedSchedulePlannedVisitAPIPlannedSchedule**](MovesClientPlannedSchedulePlannedVisitApi.md#movesClientPlannedSchedulePlannedVisitAPIPlannedSchedule) | **GET** /v0/plannen_roosteren/clients/{client_id}/planned_schedule | Return the client planning filters of a Client within a specified period.

<a name="movesClientPlannedSchedulePlannedVisitAPIPlannedSchedule"></a>
# **movesClientPlannedSchedulePlannedVisitAPIPlannedSchedule**
> MovesListClientPlannedSchedulePlannedVisitList movesClientPlannedSchedulePlannedVisitAPIPlannedSchedule(clientId, _date)

Return the client planning filters of a Client within a specified period.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesClientPlannedSchedulePlannedVisitApi();
let clientId = 789; // Number | The id of the requested Client
let _date = new Date("2013-10-20"); // Date | The date for which to check

apiInstance.movesClientPlannedSchedulePlannedVisitAPIPlannedSchedule(clientId, _date, (error, data, response) => {
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
 **clientId** | **Number**| The id of the requested Client | 
 **_date** | **Date**| The date for which to check | 

### Return type

[**MovesListClientPlannedSchedulePlannedVisitList**](MovesListClientPlannedSchedulePlannedVisitList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

