# NedapOnsApi.MovesEmployeeScheduleApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesEmployeeScheduleAPIByEmployeeId**](MovesEmployeeScheduleApi.md#movesEmployeeScheduleAPIByEmployeeId) | **GET** /v0/plannen_roosteren/employee_schedules/by_employee_id/{employee_id} | Returns the EmployeeSchedule for the given Employee for the requested period.
[**movesEmployeeScheduleAPIByEmployeeIdAuthorized**](MovesEmployeeScheduleApi.md#movesEmployeeScheduleAPIByEmployeeIdAuthorized) | **GET** /v0/plannen_roosteren/authorized/employee_schedules/by_employee_id/{employee_id} | Returns the EmployeeSchedule for the given Employee for the requested period.

<a name="movesEmployeeScheduleAPIByEmployeeId"></a>
# **movesEmployeeScheduleAPIByEmployeeId**
> MovesEmployeeSchedule movesEmployeeScheduleAPIByEmployeeId(employeeId, from, to, opts)

Returns the EmployeeSchedule for the given Employee for the requested period.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesEmployeeScheduleApi();
let employeeId = 789; // Number | The {id} of the requested Employee
let from = new Date("2013-10-20"); // Date | The start date of the period.
let to = new Date("2013-10-20"); // Date | The end date of the period (exclusive).
let opts = { 
  'include': "include_example" // String | Comma-separated list of keywords to indicate which                    features/fields/subresources you'd like to have included                    in the response.                    `exportability` - The `.exportable` attribute of various                    models will be computed to indicate whether they would                    be exported by the EmployeeExportApi at this time.                    `flex_signups` - RosterSlots will be included for which                    the employee has signedup, but has not been assigned to                    yet. FlexSignups of colleagues for the same RosterSlot                    are also included.                    `unavailability` - UnavailabilityOccurrences for both                    whole days and parts of days are included.                    `location_authorizations` - LocationAuthorizations are                    included for each RosterSlot and PlannedVisit.                    `availability` - AvailabilityOccurrences are included.                    `leave_requests` - LeaveRequestOccurrences are included.
};
apiInstance.movesEmployeeScheduleAPIByEmployeeId(employeeId, from, to, opts, (error, data, response) => {
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
 **employeeId** | **Number**| The {id} of the requested Employee | 
 **from** | **Date**| The start date of the period. | 
 **to** | **Date**| The end date of the period (exclusive). | 
 **include** | **String**| Comma-separated list of keywords to indicate which                    features/fields/subresources you&#x27;d like to have included                    in the response.                    &#x60;exportability&#x60; - The &#x60;.exportable&#x60; attribute of various                    models will be computed to indicate whether they would                    be exported by the EmployeeExportApi at this time.                    &#x60;flex_signups&#x60; - RosterSlots will be included for which                    the employee has signedup, but has not been assigned to                    yet. FlexSignups of colleagues for the same RosterSlot                    are also included.                    &#x60;unavailability&#x60; - UnavailabilityOccurrences for both                    whole days and parts of days are included.                    &#x60;location_authorizations&#x60; - LocationAuthorizations are                    included for each RosterSlot and PlannedVisit.                    &#x60;availability&#x60; - AvailabilityOccurrences are included.                    &#x60;leave_requests&#x60; - LeaveRequestOccurrences are included. | [optional] 

### Return type

[**MovesEmployeeSchedule**](MovesEmployeeSchedule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="movesEmployeeScheduleAPIByEmployeeIdAuthorized"></a>
# **movesEmployeeScheduleAPIByEmployeeIdAuthorized**
> MovesEmployeeSchedule movesEmployeeScheduleAPIByEmployeeIdAuthorized(employeeId, from, to, opts)

Returns the EmployeeSchedule for the given Employee for the requested period.

This operation returns the same data as the non-authorized variant, except less of it in certain cases. Also some model attributes can be left blank.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesEmployeeScheduleApi();
let employeeId = 789; // Number | The {id} of the requested Employee
let from = new Date("2013-10-20"); // Date | The start date of the period.
let to = new Date("2013-10-20"); // Date | The end date of the period (exclusive).
let opts = { 
  'include': "include_example" // String | See documentation under non-authorized variant of this operation.
};
apiInstance.movesEmployeeScheduleAPIByEmployeeIdAuthorized(employeeId, from, to, opts, (error, data, response) => {
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
 **employeeId** | **Number**| The {id} of the requested Employee | 
 **from** | **Date**| The start date of the period. | 
 **to** | **Date**| The end date of the period (exclusive). | 
 **include** | **String**| See documentation under non-authorized variant of this operation. | [optional] 

### Return type

[**MovesEmployeeSchedule**](MovesEmployeeSchedule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

