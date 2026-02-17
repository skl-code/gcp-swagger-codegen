# NedapOnsApi.NavigationAvailabilityApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**navigationAvailabilityAPIGetCupidoNavigationAvailabilities**](NavigationAvailabilityApi.md#navigationAvailabilityAPIGetCupidoNavigationAvailabilities) | **GET** /v0/administration/navigation/availabilities | Get all navigation availabilities for Ons Administration

<a name="navigationAvailabilityAPIGetCupidoNavigationAvailabilities"></a>
# **navigationAvailabilityAPIGetCupidoNavigationAvailabilities**
> ListNavigationAvailabilityList navigationAvailabilityAPIGetCupidoNavigationAvailabilities(opts)

Get all navigation availabilities for Ons Administration

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.NavigationAvailabilityApi();
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.navigationAvailabilityAPIGetCupidoNavigationAvailabilities(opts, (error, data, response) => {
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
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**ListNavigationAvailabilityList**](ListNavigationAvailabilityList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

