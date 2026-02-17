# NedapOnsApi.OnsAdministrationEmployeeWorkdaysOverviewModelApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onsAdministrationEmployeeWorkdaysOverviewModelAPIGetWorkdaysForEmployees**](OnsAdministrationEmployeeWorkdaysOverviewModelApi.md#onsAdministrationEmployeeWorkdaysOverviewModelAPIGetWorkdaysForEmployees) | **GET** /v0/administration/employees/workday_norms/workdays | Returns the workdays for the given employees according to the workday norm clause count.

<a name="onsAdministrationEmployeeWorkdaysOverviewModelAPIGetWorkdaysForEmployees"></a>
# **onsAdministrationEmployeeWorkdaysOverviewModelAPIGetWorkdaysForEmployees**
> OnsAdministrationListEmployeeWorkdaysOverviewModelList onsAdministrationEmployeeWorkdaysOverviewModelAPIGetWorkdaysForEmployees(id, validFrom, validTo)

Returns the workdays for the given employees according to the workday norm clause count.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsAdministrationEmployeeWorkdaysOverviewModelApi();
let id = [3.4]; // [Number] | 
let validFrom = new Date("2013-10-20"); // Date | 
let validTo = new Date("2013-10-20"); // Date | 

apiInstance.onsAdministrationEmployeeWorkdaysOverviewModelAPIGetWorkdaysForEmployees(id, validFrom, validTo, (error, data, response) => {
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
 **id** | [**[Number]**](Number.md)|  | 
 **validFrom** | **Date**|  | 
 **validTo** | **Date**|  | 

### Return type

[**OnsAdministrationListEmployeeWorkdaysOverviewModelList**](OnsAdministrationListEmployeeWorkdaysOverviewModelList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

