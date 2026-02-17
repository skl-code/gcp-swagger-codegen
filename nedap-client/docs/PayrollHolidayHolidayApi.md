# NedapOnsApi.PayrollHolidayHolidayApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payrollHolidayHolidayAPIAll**](PayrollHolidayHolidayApi.md#payrollHolidayHolidayAPIAll) | **GET** /v0/administration/holidays | Returns every Holiday available from the HolidayAPI
[**payrollHolidayHolidayAPIBetween**](PayrollHolidayHolidayApi.md#payrollHolidayHolidayAPIBetween) | **GET** /v0/administration/holidays/between | Returns a list with holidays which lay between the given days.

<a name="payrollHolidayHolidayAPIAll"></a>
# **payrollHolidayHolidayAPIAll**
> PayrollHolidayListHolidayList payrollHolidayHolidayAPIAll(opts)

Returns every Holiday available from the HolidayAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollHolidayHolidayApi();
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.payrollHolidayHolidayAPIAll(opts, (error, data, response) => {
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

[**PayrollHolidayListHolidayList**](PayrollHolidayListHolidayList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollHolidayHolidayAPIBetween"></a>
# **payrollHolidayHolidayAPIBetween**
> PayrollHolidayListHolidayList payrollHolidayHolidayAPIBetween(validFrom, validTo, opts)

Returns a list with holidays which lay between the given days.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollHolidayHolidayApi();
let validFrom = new Date("2013-10-20"); // Date | 
let validTo = new Date("2013-10-20"); // Date | 
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.payrollHolidayHolidayAPIBetween(validFrom, validTo, opts, (error, data, response) => {
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
 **validFrom** | **Date**|  | 
 **validTo** | **Date**|  | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**PayrollHolidayListHolidayList**](PayrollHolidayListHolidayList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

