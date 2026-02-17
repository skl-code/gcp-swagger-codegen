# NedapOnsApi.WeeksheetProfileApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**weeksheetProfileAPIByEmployeeId**](WeeksheetProfileApi.md#weeksheetProfileAPIByEmployeeId) | **GET** /v0/administration/employees/{employee_id}/weeksheet_profile | Return the weeksheet profile of a employee corresponding to the given employee id.
[**weeksheetProfileAPIDeleteByEmployeeId**](WeeksheetProfileApi.md#weeksheetProfileAPIDeleteByEmployeeId) | **DELETE** /v0/administration/employees/{employee_id}/weeksheet_profile | Delete the weeksheet profile of a employee corresponding to the given employee id.
[**weeksheetProfileAPIGetAllWeeksheetProfiles**](WeeksheetProfileApi.md#weeksheetProfileAPIGetAllWeeksheetProfiles) | **GET** /v0/administration/weeksheet_profiles | Return all weeksheet profiles
[**weeksheetProfileAPIUpdateByEmployeeIdAndWeeksheetProfileId**](WeeksheetProfileApi.md#weeksheetProfileAPIUpdateByEmployeeIdAndWeeksheetProfileId) | **PUT** /v0/administration/employees/{employee_id}/weeksheet_profile/{weeksheet_profile_id} | Update the weeksheet profile of an employee corresponding to the given employee id and weeksheet profile id

<a name="weeksheetProfileAPIByEmployeeId"></a>
# **weeksheetProfileAPIByEmployeeId**
> WeeksheetProfile weeksheetProfileAPIByEmployeeId(employeeId)

Return the weeksheet profile of a employee corresponding to the given employee id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.WeeksheetProfileApi();
let employeeId = 789; // Number | id

apiInstance.weeksheetProfileAPIByEmployeeId(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**| id | 

### Return type

[**WeeksheetProfile**](WeeksheetProfile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="weeksheetProfileAPIDeleteByEmployeeId"></a>
# **weeksheetProfileAPIDeleteByEmployeeId**
> weeksheetProfileAPIDeleteByEmployeeId(employeeId)

Delete the weeksheet profile of a employee corresponding to the given employee id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.WeeksheetProfileApi();
let employeeId = 789; // Number | id

apiInstance.weeksheetProfileAPIDeleteByEmployeeId(employeeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | **Number**| id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="weeksheetProfileAPIGetAllWeeksheetProfiles"></a>
# **weeksheetProfileAPIGetAllWeeksheetProfiles**
> ListWeeksheetProfileList weeksheetProfileAPIGetAllWeeksheetProfiles()

Return all weeksheet profiles

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.WeeksheetProfileApi();
apiInstance.weeksheetProfileAPIGetAllWeeksheetProfiles((error, data, response) => {
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

[**ListWeeksheetProfileList**](ListWeeksheetProfileList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="weeksheetProfileAPIUpdateByEmployeeIdAndWeeksheetProfileId"></a>
# **weeksheetProfileAPIUpdateByEmployeeIdAndWeeksheetProfileId**
> WeeksheetProfile weeksheetProfileAPIUpdateByEmployeeIdAndWeeksheetProfileId(employeeId, weeksheetProfileId)

Update the weeksheet profile of an employee corresponding to the given employee id and weeksheet profile id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.WeeksheetProfileApi();
let employeeId = 789; // Number | id
let weeksheetProfileId = 789; // Number | 

apiInstance.weeksheetProfileAPIUpdateByEmployeeIdAndWeeksheetProfileId(employeeId, weeksheetProfileId, (error, data, response) => {
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
 **employeeId** | **Number**| id | 
 **weeksheetProfileId** | **Number**|  | 

### Return type

[**WeeksheetProfile**](WeeksheetProfile.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

