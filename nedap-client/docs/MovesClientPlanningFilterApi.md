# NedapOnsApi.MovesClientPlanningFilterApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesClientPlanningFilterAPIByClientId**](MovesClientPlanningFilterApi.md#movesClientPlanningFilterAPIByClientId) | **GET** /v0/plannen_roosteren/clients/{client_id}/client_planning_filters | Return the client planning filters of a Client within a specified period.

<a name="movesClientPlanningFilterAPIByClientId"></a>
# **movesClientPlanningFilterAPIByClientId**
> MovesListClientPlanningFilterList movesClientPlanningFilterAPIByClientId(clientId, from, to)

Return the client planning filters of a Client within a specified period.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesClientPlanningFilterApi();
let clientId = 789; // Number | The {id} of the requested Client
let from = new Date("2013-10-20"); // Date | The start date of the requested period
let to = new Date("2013-10-20"); // Date | The end date of the requested period (exclusive)

apiInstance.movesClientPlanningFilterAPIByClientId(clientId, from, to, (error, data, response) => {
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
 **clientId** | **Number**| The {id} of the requested Client | 
 **from** | **Date**| The start date of the requested period | 
 **to** | **Date**| The end date of the requested period (exclusive) | 

### Return type

[**MovesListClientPlanningFilterList**](MovesListClientPlanningFilterList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

