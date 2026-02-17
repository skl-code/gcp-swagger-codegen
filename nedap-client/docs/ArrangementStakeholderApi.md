# NedapOnsApi.ArrangementStakeholderApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**arrangementStakeholderAPIByIntentUuid**](ArrangementStakeholderApi.md#arrangementStakeholderAPIByIntentUuid) | **GET** /v0/administration/arrangement/stakeholders/by_intent/{intent_uuid} | Gets the Stakeholders which belong to an Intent
[**arrangementStakeholderAPIByTimelineUuid**](ArrangementStakeholderApi.md#arrangementStakeholderAPIByTimelineUuid) | **GET** /v0/administration/arrangement/stakeholders/by_timeline/{timeline_uuid} | Gets the Stakeholders which belong to a Timeline
[**arrangementStakeholderAPIByUuid**](ArrangementStakeholderApi.md#arrangementStakeholderAPIByUuid) | **GET** /v0/administration/arrangement/stakeholders/{uuid} | Gets an Stakeholder by UUID
[**arrangementStakeholderAPICreate**](ArrangementStakeholderApi.md#arrangementStakeholderAPICreate) | **POST** /v0/administration/arrangement/stakeholders | Create Stakeholder
[**arrangementStakeholderAPIDelete**](ArrangementStakeholderApi.md#arrangementStakeholderAPIDelete) | **DELETE** /v0/administration/arrangement/stakeholders/{uuid} | Deletes the Stakeholder with given uuid
[**arrangementStakeholderAPIUpdate**](ArrangementStakeholderApi.md#arrangementStakeholderAPIUpdate) | **PUT** /v0/administration/arrangement/stakeholders/{uuid} | Updates the given Stakeholder

<a name="arrangementStakeholderAPIByIntentUuid"></a>
# **arrangementStakeholderAPIByIntentUuid**
> ArrangementListStakeholderList arrangementStakeholderAPIByIntentUuid(intentUuid)

Gets the Stakeholders which belong to an Intent

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementStakeholderApi();
let intentUuid = "intentUuid_example"; // String | the UUID of the Intent

apiInstance.arrangementStakeholderAPIByIntentUuid(intentUuid, (error, data, response) => {
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
 **intentUuid** | **String**| the UUID of the Intent | 

### Return type

[**ArrangementListStakeholderList**](ArrangementListStakeholderList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="arrangementStakeholderAPIByTimelineUuid"></a>
# **arrangementStakeholderAPIByTimelineUuid**
> ArrangementListStakeholderList arrangementStakeholderAPIByTimelineUuid(timelineUuid)

Gets the Stakeholders which belong to a Timeline

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementStakeholderApi();
let timelineUuid = "timelineUuid_example"; // String | the UUID of the Timeline

apiInstance.arrangementStakeholderAPIByTimelineUuid(timelineUuid, (error, data, response) => {
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
 **timelineUuid** | **String**| the UUID of the Timeline | 

### Return type

[**ArrangementListStakeholderList**](ArrangementListStakeholderList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="arrangementStakeholderAPIByUuid"></a>
# **arrangementStakeholderAPIByUuid**
> ArrangementStakeholder arrangementStakeholderAPIByUuid(uuid)

Gets an Stakeholder by UUID

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementStakeholderApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | the uuid of the Stakeholder

apiInstance.arrangementStakeholderAPIByUuid(uuid, (error, data, response) => {
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
 **uuid** | [**String**](.md)| the uuid of the Stakeholder | 

### Return type

[**ArrangementStakeholder**](ArrangementStakeholder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="arrangementStakeholderAPICreate"></a>
# **arrangementStakeholderAPICreate**
> ArrangementStakeholder arrangementStakeholderAPICreate(body)

Create Stakeholder

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementStakeholderApi();
let body = new NedapOnsApi.ArrangementStakeholder(); // ArrangementStakeholder | Stakeholder to create

apiInstance.arrangementStakeholderAPICreate(body, (error, data, response) => {
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
 **body** | [**ArrangementStakeholder**](ArrangementStakeholder.md)| Stakeholder to create | 

### Return type

[**ArrangementStakeholder**](ArrangementStakeholder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="arrangementStakeholderAPIDelete"></a>
# **arrangementStakeholderAPIDelete**
> ArrangementStakeholder arrangementStakeholderAPIDelete(uuid)

Deletes the Stakeholder with given uuid

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementStakeholderApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | the uuid of the Stakeholder

apiInstance.arrangementStakeholderAPIDelete(uuid, (error, data, response) => {
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
 **uuid** | [**String**](.md)| the uuid of the Stakeholder | 

### Return type

[**ArrangementStakeholder**](ArrangementStakeholder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="arrangementStakeholderAPIUpdate"></a>
# **arrangementStakeholderAPIUpdate**
> ArrangementStakeholder arrangementStakeholderAPIUpdate(body, uuid)

Updates the given Stakeholder

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementStakeholderApi();
let body = new NedapOnsApi.ArrangementStakeholder(); // ArrangementStakeholder | Stakeholder to update
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | the uuid of the Stakeholder

apiInstance.arrangementStakeholderAPIUpdate(body, uuid, (error, data, response) => {
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
 **body** | [**ArrangementStakeholder**](ArrangementStakeholder.md)| Stakeholder to update | 
 **uuid** | [**String**](.md)| the uuid of the Stakeholder | 

### Return type

[**ArrangementStakeholder**](ArrangementStakeholder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

