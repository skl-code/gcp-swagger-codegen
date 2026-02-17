# NedapOnsApi.EvsEvsAbilityApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**evsEvsAbilityAPIAbleTo**](EvsEvsAbilityApi.md#evsEvsAbilityAPIAbleTo) | **GET** /v0/administration/evsabilities/{action} | 

<a name="evsEvsAbilityAPIAbleTo"></a>
# **evsEvsAbilityAPIAbleTo**
> EvsEvsAbility evsEvsAbilityAPIAbleTo(action, opts)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.EvsEvsAbilityApi();
let action = "action_example"; // String | 
let opts = { 
  'clientId': 789, // Number | 
  'employeeId': 789 // Number | 
};
apiInstance.evsEvsAbilityAPIAbleTo(action, opts, (error, data, response) => {
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
 **action** | **String**|  | 
 **clientId** | **Number**|  | [optional] 
 **employeeId** | **Number**|  | [optional] 

### Return type

[**EvsEvsAbility**](EvsEvsAbility.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

