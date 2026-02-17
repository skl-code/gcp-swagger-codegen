# NedapOnsApi.ArrangementTimeSlotApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**arrangementTimeSlotAPIAllForClient**](ArrangementTimeSlotApi.md#arrangementTimeSlotAPIAllForClient) | **GET** /v0/administration/arrangement/time_slots/all_for_client/{client_uuid} | Gets the time slots that have been specified for a client.
[**arrangementTimeSlotAPIAllForIntent**](ArrangementTimeSlotApi.md#arrangementTimeSlotAPIAllForIntent) | **GET** /v0/administration/arrangement/time_slots/all_for_intent/{intent_uuid} | Gets the time slots for an intent, i.e.
[**arrangementTimeSlotAPIByUuid**](ArrangementTimeSlotApi.md#arrangementTimeSlotAPIByUuid) | **GET** /v0/administration/arrangement/time_slots/{uuid} | Gets a time slot by UUID.
[**arrangementTimeSlotAPICreate**](ArrangementTimeSlotApi.md#arrangementTimeSlotAPICreate) | **POST** /v0/administration/arrangement/time_slots | Create TimeSlot
[**arrangementTimeSlotAPIDelete**](ArrangementTimeSlotApi.md#arrangementTimeSlotAPIDelete) | **DELETE** /v0/administration/arrangement/time_slots/{uuid} | Deletes the TimeSlot with given uuid
[**arrangementTimeSlotAPIGenericForClient**](ArrangementTimeSlotApi.md#arrangementTimeSlotAPIGenericForClient) | **GET** /v0/administration/arrangement/time_slots/generic_for_client/{client_uuid} | Gets all time slots that are generic to a client (have no connection to Intents (yet)).
[**arrangementTimeSlotAPIUpdate**](ArrangementTimeSlotApi.md#arrangementTimeSlotAPIUpdate) | **PUT** /v0/administration/arrangement/time_slots/{uuid} | Updates the given TimeSlot

<a name="arrangementTimeSlotAPIAllForClient"></a>
# **arrangementTimeSlotAPIAllForClient**
> ArrangementListTimeSlotList arrangementTimeSlotAPIAllForClient(clientUuid)

Gets the time slots that have been specified for a client.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementTimeSlotApi();
let clientUuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | the UUID of the client

apiInstance.arrangementTimeSlotAPIAllForClient(clientUuid, (error, data, response) => {
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
 **clientUuid** | [**String**](.md)| the UUID of the client | 

### Return type

[**ArrangementListTimeSlotList**](ArrangementListTimeSlotList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="arrangementTimeSlotAPIAllForIntent"></a>
# **arrangementTimeSlotAPIAllForIntent**
> ArrangementListTimeSlotList arrangementTimeSlotAPIAllForIntent(intentUuid)

Gets the time slots for an intent, i.e.

the slots that are connected via IntentPreference records.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementTimeSlotApi();
let intentUuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | the UUID of the intent

apiInstance.arrangementTimeSlotAPIAllForIntent(intentUuid, (error, data, response) => {
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
 **intentUuid** | [**String**](.md)| the UUID of the intent | 

### Return type

[**ArrangementListTimeSlotList**](ArrangementListTimeSlotList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="arrangementTimeSlotAPIByUuid"></a>
# **arrangementTimeSlotAPIByUuid**
> ArrangementTimeSlot arrangementTimeSlotAPIByUuid(uuid)

Gets a time slot by UUID.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementTimeSlotApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | the uuid of the time slot

apiInstance.arrangementTimeSlotAPIByUuid(uuid, (error, data, response) => {
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
 **uuid** | [**String**](.md)| the uuid of the time slot | 

### Return type

[**ArrangementTimeSlot**](ArrangementTimeSlot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="arrangementTimeSlotAPICreate"></a>
# **arrangementTimeSlotAPICreate**
> ArrangementTimeSlot arrangementTimeSlotAPICreate(body)

Create TimeSlot

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementTimeSlotApi();
let body = new NedapOnsApi.ArrangementTimeSlot(); // ArrangementTimeSlot | TimeSlot to create

apiInstance.arrangementTimeSlotAPICreate(body, (error, data, response) => {
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
 **body** | [**ArrangementTimeSlot**](ArrangementTimeSlot.md)| TimeSlot to create | 

### Return type

[**ArrangementTimeSlot**](ArrangementTimeSlot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="arrangementTimeSlotAPIDelete"></a>
# **arrangementTimeSlotAPIDelete**
> ArrangementTimeSlot arrangementTimeSlotAPIDelete(uuid)

Deletes the TimeSlot with given uuid

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementTimeSlotApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | the uuid of the time slot

apiInstance.arrangementTimeSlotAPIDelete(uuid, (error, data, response) => {
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
 **uuid** | [**String**](.md)| the uuid of the time slot | 

### Return type

[**ArrangementTimeSlot**](ArrangementTimeSlot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="arrangementTimeSlotAPIGenericForClient"></a>
# **arrangementTimeSlotAPIGenericForClient**
> ArrangementListTimeSlotList arrangementTimeSlotAPIGenericForClient(clientUuid)

Gets all time slots that are generic to a client (have no connection to Intents (yet)).

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementTimeSlotApi();
let clientUuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.arrangementTimeSlotAPIGenericForClient(clientUuid, (error, data, response) => {
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
 **clientUuid** | [**String**](.md)|  | 

### Return type

[**ArrangementListTimeSlotList**](ArrangementListTimeSlotList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="arrangementTimeSlotAPIUpdate"></a>
# **arrangementTimeSlotAPIUpdate**
> ArrangementTimeSlot arrangementTimeSlotAPIUpdate(body, uuid)

Updates the given TimeSlot

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementTimeSlotApi();
let body = new NedapOnsApi.ArrangementTimeSlot(); // ArrangementTimeSlot | TimeSlot to update
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | the uuid of the time slot

apiInstance.arrangementTimeSlotAPIUpdate(body, uuid, (error, data, response) => {
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
 **body** | [**ArrangementTimeSlot**](ArrangementTimeSlot.md)| TimeSlot to update | 
 **uuid** | [**String**](.md)| the uuid of the time slot | 

### Return type

[**ArrangementTimeSlot**](ArrangementTimeSlot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

