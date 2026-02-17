# NedapOnsApi.FinanceGroupActivitySuggestionModelApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financeGroupActivitySuggestionModelAPIActivityByClientAndGroupActivity**](FinanceGroupActivitySuggestionModelApi.md#financeGroupActivitySuggestionModelAPIActivityByClientAndGroupActivity) | **GET** /v0/administration/finance/activity_suggestions/{group_activity_object_id} | Get activities for a group activity and clients at a given date
[**financeGroupActivitySuggestionModelAPIGetAllGroupActivities**](FinanceGroupActivitySuggestionModelApi.md#financeGroupActivitySuggestionModelAPIGetAllGroupActivities) | **GET** /v0/administration/finance/activity_suggestions | Get all group activities

<a name="financeGroupActivitySuggestionModelAPIActivityByClientAndGroupActivity"></a>
# **financeGroupActivitySuggestionModelAPIActivityByClientAndGroupActivity**
> FinanceListGroupActivitySuggestionModelList financeGroupActivitySuggestionModelAPIActivityByClientAndGroupActivity(groupActivityObjectId, opts)

Get activities for a group activity and clients at a given date

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceGroupActivitySuggestionModelApi();
let groupActivityObjectId = 789; // Number | 
let opts = { 
  'clientIds': [3.4], // [Number] | Include clientIds
  '_date': new Date("2013-10-20") // Date | Date of registration
};
apiInstance.financeGroupActivitySuggestionModelAPIActivityByClientAndGroupActivity(groupActivityObjectId, opts, (error, data, response) => {
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
 **groupActivityObjectId** | **Number**|  | 
 **clientIds** | [**[Number]**](Number.md)| Include clientIds | [optional] 
 **_date** | **Date**| Date of registration | [optional] 

### Return type

[**FinanceListGroupActivitySuggestionModelList**](FinanceListGroupActivitySuggestionModelList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeGroupActivitySuggestionModelAPIGetAllGroupActivities"></a>
# **financeGroupActivitySuggestionModelAPIGetAllGroupActivities**
> FinanceListGroupActivityModelList financeGroupActivitySuggestionModelAPIGetAllGroupActivities()

Get all group activities

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceGroupActivitySuggestionModelApi();
apiInstance.financeGroupActivitySuggestionModelAPIGetAllGroupActivities((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**FinanceListGroupActivityModelList**](FinanceListGroupActivityModelList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

