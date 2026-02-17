# NedapOnsApi.ArrangementIntentApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**arrangementIntentAPIByClientInPeriodPlannable**](ArrangementIntentApi.md#arrangementIntentAPIByClientInPeriodPlannable) | **GET** /v0/administration/arrangement/intents/by_client_period_plannable/{client_id} | Gets all intents for a Client in a given period and whether they are plannable
[**arrangementIntentAPIByEmployeeId**](ArrangementIntentApi.md#arrangementIntentAPIByEmployeeId) | **GET** /v0/administration/arrangement/intents/by_employee/{employee_id} | Gets all intents for an Employee.
[**arrangementIntentAPICreate**](ArrangementIntentApi.md#arrangementIntentAPICreate) | **POST** /v0/administration/arrangement/intents | Create Intent
[**arrangementIntentAPICreateOrUpdateTimeline**](ArrangementIntentApi.md#arrangementIntentAPICreateOrUpdateTimeline) | **PUT** /v0/administration/arrangement/intents/by_timeline/{timeline_uuid} | Updates all intents for a timeline identified by a UUID
[**arrangementIntentAPIDelete**](ArrangementIntentApi.md#arrangementIntentAPIDelete) | **DELETE** /v0/administration/arrangement/intents/{uuid} | Deletes the Intent with given uuid
[**arrangementIntentAPIDeleteTimeline**](ArrangementIntentApi.md#arrangementIntentAPIDeleteTimeline) | **DELETE** /v0/administration/arrangement/intents/by_timeline/{timeline_uuid} | Deletes all intents for a timeline identified by a UUID
[**arrangementIntentAPIUpdate**](ArrangementIntentApi.md#arrangementIntentAPIUpdate) | **PUT** /v0/administration/arrangement/intents/{uuid} | Updates the given Intent

<a name="arrangementIntentAPIByClientInPeriodPlannable"></a>
# **arrangementIntentAPIByClientInPeriodPlannable**
> ArrangementListIntentList arrangementIntentAPIByClientInPeriodPlannable(clientId, periodBegin, periodEnd, plannable)

Gets all intents for a Client in a given period and whether they are plannable

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementIntentApi();
let clientId = 789; // Number | objectId of the client
let periodBegin = new Date("2013-10-20"); // Date | beginning of the period
let periodEnd = new Date("2013-10-20"); // Date | end of the period
let plannable = true; // Boolean | if the intent is plannable

apiInstance.arrangementIntentAPIByClientInPeriodPlannable(clientId, periodBegin, periodEnd, plannable, (error, data, response) => {
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
 **clientId** | **Number**| objectId of the client | 
 **periodBegin** | **Date**| beginning of the period | 
 **periodEnd** | **Date**| end of the period | 
 **plannable** | **Boolean**| if the intent is plannable | 

### Return type

[**ArrangementListIntentList**](ArrangementListIntentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="arrangementIntentAPIByEmployeeId"></a>
# **arrangementIntentAPIByEmployeeId**
> ArrangementListIntentList arrangementIntentAPIByEmployeeId(employeeId, periodBegin, periodEnd, opts)

Gets all intents for an Employee.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementIntentApi();
let employeeId = 789; // Number | id
let periodBegin = new Date("2013-10-20"); // Date | the beginning of the period
let periodEnd = new Date("2013-10-20"); // Date | the end of the period
let opts = { 
  'includeEducation': true, // Boolean | if `true` also intents of the employee's education are returned
  'includeCluster': true // Boolean | if `true` also intents of the employee's team are returned
};
apiInstance.arrangementIntentAPIByEmployeeId(employeeId, periodBegin, periodEnd, opts, (error, data, response) => {
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
 **periodBegin** | **Date**| the beginning of the period | 
 **periodEnd** | **Date**| the end of the period | 
 **includeEducation** | **Boolean**| if &#x60;true&#x60; also intents of the employee&#x27;s education are returned | [optional] 
 **includeCluster** | **Boolean**| if &#x60;true&#x60; also intents of the employee&#x27;s team are returned | [optional] 

### Return type

[**ArrangementListIntentList**](ArrangementListIntentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="arrangementIntentAPICreate"></a>
# **arrangementIntentAPICreate**
> ArrangementIntent arrangementIntentAPICreate(body)

Create Intent

Deprecated due to potential overlap validation issues. Use createOrUpdateTimeline instead.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementIntentApi();
let body = new NedapOnsApi.ArrangementIntent(); // ArrangementIntent | Intent to create

apiInstance.arrangementIntentAPICreate(body, (error, data, response) => {
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
 **body** | [**ArrangementIntent**](ArrangementIntent.md)| Intent to create | 

### Return type

[**ArrangementIntent**](ArrangementIntent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="arrangementIntentAPICreateOrUpdateTimeline"></a>
# **arrangementIntentAPICreateOrUpdateTimeline**
> ArrangementListIntentList arrangementIntentAPICreateOrUpdateTimeline(body, timelineUuid)

Updates all intents for a timeline identified by a UUID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementIntentApi();
let body = new NedapOnsApi.ArrangementListIntentList(); // ArrangementListIntentList | 
let timelineUuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.arrangementIntentAPICreateOrUpdateTimeline(body, timelineUuid, (error, data, response) => {
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
 **body** | [**ArrangementListIntentList**](ArrangementListIntentList.md)|  | 
 **timelineUuid** | [**String**](.md)|  | 

### Return type

[**ArrangementListIntentList**](ArrangementListIntentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="arrangementIntentAPIDelete"></a>
# **arrangementIntentAPIDelete**
> ArrangementIntent arrangementIntentAPIDelete(uuid)

Deletes the Intent with given uuid

Deprecated due to potential overlap validation issues. Use deleteTimeline instead.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementIntentApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Identifier of Intent to delete.

apiInstance.arrangementIntentAPIDelete(uuid, (error, data, response) => {
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
 **uuid** | [**String**](.md)| Identifier of Intent to delete. | 

### Return type

[**ArrangementIntent**](ArrangementIntent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="arrangementIntentAPIDeleteTimeline"></a>
# **arrangementIntentAPIDeleteTimeline**
> arrangementIntentAPIDeleteTimeline(timelineUuid)

Deletes all intents for a timeline identified by a UUID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementIntentApi();
let timelineUuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.arrangementIntentAPIDeleteTimeline(timelineUuid, (error, data, response) => {
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
 **timelineUuid** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="arrangementIntentAPIUpdate"></a>
# **arrangementIntentAPIUpdate**
> ArrangementIntent arrangementIntentAPIUpdate(body, uuid)

Updates the given Intent

Deprecated due to potential overlap validation issues. Use createOrUpdateTimeline instead.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementIntentApi();
let body = new NedapOnsApi.ArrangementIntent(); // ArrangementIntent | Intent to update
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | Identifier of Intent to update.

apiInstance.arrangementIntentAPIUpdate(body, uuid, (error, data, response) => {
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
 **body** | [**ArrangementIntent**](ArrangementIntent.md)| Intent to update | 
 **uuid** | [**String**](.md)| Identifier of Intent to update. | 

### Return type

[**ArrangementIntent**](ArrangementIntent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

