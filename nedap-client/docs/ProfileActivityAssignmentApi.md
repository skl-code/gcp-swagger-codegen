# NedapOnsApi.ProfileActivityAssignmentApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**profileActivityAssignmentAPIDirectAssignmentsByEmployeeId**](ProfileActivityAssignmentApi.md#profileActivityAssignmentAPIDirectAssignmentsByEmployeeId) | **GET** /v0/administration/employees/{employee_id}/weeksheet_profile/direct_profile_activity_assignments | Return the direct profile activity assignments of an Employee corresponding to the given id.
[**profileActivityAssignmentAPIDirectAssignmentsByWeeksheetProfileId**](ProfileActivityAssignmentApi.md#profileActivityAssignmentAPIDirectAssignmentsByWeeksheetProfileId) | **GET** /v0/administration/weeksheet_profiles/{weeksheet_profile_id}/direct_profile_activity_assignments | Return the direct profile activity assignments of an WeeksheetProfile corresponding to the given id.
[**profileActivityAssignmentAPIExpenseAssignmentsByWeeksheetProfileId**](ProfileActivityAssignmentApi.md#profileActivityAssignmentAPIExpenseAssignmentsByWeeksheetProfileId) | **GET** /v0/administration/weeksheet_profiles/{weeksheet_profile_id}/expense_profile_activity_assignments | Return the indirect duration profile activity assignments of an WeeksheetProfile corresponding to the given id.
[**profileActivityAssignmentAPIIndirectAssignmentsByEmployeeId**](ProfileActivityAssignmentApi.md#profileActivityAssignmentAPIIndirectAssignmentsByEmployeeId) | **GET** /v0/administration/employees/{employee_id}/weeksheet_profile/indirect_profile_activity_assignments | Return the indirect profile activity assignments of an Employee corresponding to the given id.
[**profileActivityAssignmentAPIIndirectAssignmentsByWeeksheetProfileId**](ProfileActivityAssignmentApi.md#profileActivityAssignmentAPIIndirectAssignmentsByWeeksheetProfileId) | **GET** /v0/administration/weeksheet_profiles/{weeksheet_profile_id}/indirect_profile_activity_assignments | Return the indirect profile activity assignments of an WeeksheetProfile corresponding to the given id.
[**profileActivityAssignmentAPIIndirectDurationAssignmentsByEmployeeId**](ProfileActivityAssignmentApi.md#profileActivityAssignmentAPIIndirectDurationAssignmentsByEmployeeId) | **GET** /v0/administration/employees/{employee_id}/weeksheet_profile/indirect_duration_profile_activity_assignments | Return the indirect duration profile activity assignments of an Employee corresponding to the given id.
[**profileActivityAssignmentAPIIndirectDurationAssignmentsByWeeksheetProfileId**](ProfileActivityAssignmentApi.md#profileActivityAssignmentAPIIndirectDurationAssignmentsByWeeksheetProfileId) | **GET** /v0/administration/weeksheet_profiles/{weeksheet_profile_id}/indirect_duration_profile_activity_assignments | Return the indirect duration profile activity assignments of an WeeksheetProfile corresponding to the given id.

<a name="profileActivityAssignmentAPIDirectAssignmentsByEmployeeId"></a>
# **profileActivityAssignmentAPIDirectAssignmentsByEmployeeId**
> ListProfileActivityAssignmentList profileActivityAssignmentAPIDirectAssignmentsByEmployeeId(employeeId)

Return the direct profile activity assignments of an Employee corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ProfileActivityAssignmentApi();
let employeeId = 789; // Number | 

apiInstance.profileActivityAssignmentAPIDirectAssignmentsByEmployeeId(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**|  | 

### Return type

[**ListProfileActivityAssignmentList**](ListProfileActivityAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="profileActivityAssignmentAPIDirectAssignmentsByWeeksheetProfileId"></a>
# **profileActivityAssignmentAPIDirectAssignmentsByWeeksheetProfileId**
> ListProfileActivityAssignmentList profileActivityAssignmentAPIDirectAssignmentsByWeeksheetProfileId(weeksheetProfileId)

Return the direct profile activity assignments of an WeeksheetProfile corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ProfileActivityAssignmentApi();
let weeksheetProfileId = 789; // Number | 

apiInstance.profileActivityAssignmentAPIDirectAssignmentsByWeeksheetProfileId(weeksheetProfileId, (error, data, response) => {
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
 **weeksheetProfileId** | **Number**|  | 

### Return type

[**ListProfileActivityAssignmentList**](ListProfileActivityAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="profileActivityAssignmentAPIExpenseAssignmentsByWeeksheetProfileId"></a>
# **profileActivityAssignmentAPIExpenseAssignmentsByWeeksheetProfileId**
> ListProfileActivityAssignmentList profileActivityAssignmentAPIExpenseAssignmentsByWeeksheetProfileId(weeksheetProfileId)

Return the indirect duration profile activity assignments of an WeeksheetProfile corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ProfileActivityAssignmentApi();
let weeksheetProfileId = 789; // Number | 

apiInstance.profileActivityAssignmentAPIExpenseAssignmentsByWeeksheetProfileId(weeksheetProfileId, (error, data, response) => {
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
 **weeksheetProfileId** | **Number**|  | 

### Return type

[**ListProfileActivityAssignmentList**](ListProfileActivityAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="profileActivityAssignmentAPIIndirectAssignmentsByEmployeeId"></a>
# **profileActivityAssignmentAPIIndirectAssignmentsByEmployeeId**
> ListProfileActivityAssignmentList profileActivityAssignmentAPIIndirectAssignmentsByEmployeeId(employeeId)

Return the indirect profile activity assignments of an Employee corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ProfileActivityAssignmentApi();
let employeeId = 789; // Number | 

apiInstance.profileActivityAssignmentAPIIndirectAssignmentsByEmployeeId(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**|  | 

### Return type

[**ListProfileActivityAssignmentList**](ListProfileActivityAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="profileActivityAssignmentAPIIndirectAssignmentsByWeeksheetProfileId"></a>
# **profileActivityAssignmentAPIIndirectAssignmentsByWeeksheetProfileId**
> ListProfileActivityAssignmentList profileActivityAssignmentAPIIndirectAssignmentsByWeeksheetProfileId(weeksheetProfileId)

Return the indirect profile activity assignments of an WeeksheetProfile corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ProfileActivityAssignmentApi();
let weeksheetProfileId = 789; // Number | 

apiInstance.profileActivityAssignmentAPIIndirectAssignmentsByWeeksheetProfileId(weeksheetProfileId, (error, data, response) => {
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
 **weeksheetProfileId** | **Number**|  | 

### Return type

[**ListProfileActivityAssignmentList**](ListProfileActivityAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="profileActivityAssignmentAPIIndirectDurationAssignmentsByEmployeeId"></a>
# **profileActivityAssignmentAPIIndirectDurationAssignmentsByEmployeeId**
> ListProfileActivityAssignmentList profileActivityAssignmentAPIIndirectDurationAssignmentsByEmployeeId(employeeId)

Return the indirect duration profile activity assignments of an Employee corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ProfileActivityAssignmentApi();
let employeeId = 789; // Number | 

apiInstance.profileActivityAssignmentAPIIndirectDurationAssignmentsByEmployeeId(employeeId, (error, data, response) => {
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
 **employeeId** | **Number**|  | 

### Return type

[**ListProfileActivityAssignmentList**](ListProfileActivityAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="profileActivityAssignmentAPIIndirectDurationAssignmentsByWeeksheetProfileId"></a>
# **profileActivityAssignmentAPIIndirectDurationAssignmentsByWeeksheetProfileId**
> ListProfileActivityAssignmentList profileActivityAssignmentAPIIndirectDurationAssignmentsByWeeksheetProfileId(weeksheetProfileId)

Return the indirect duration profile activity assignments of an WeeksheetProfile corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ProfileActivityAssignmentApi();
let weeksheetProfileId = 789; // Number | 

apiInstance.profileActivityAssignmentAPIIndirectDurationAssignmentsByWeeksheetProfileId(weeksheetProfileId, (error, data, response) => {
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
 **weeksheetProfileId** | **Number**|  | 

### Return type

[**ListProfileActivityAssignmentList**](ListProfileActivityAssignmentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

