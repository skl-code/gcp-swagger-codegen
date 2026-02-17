# NedapOnsApi.ArrangementIntentPreferenceApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**arrangementIntentPreferenceAPIAddIntentToTimeSlot**](ArrangementIntentPreferenceApi.md#arrangementIntentPreferenceAPIAddIntentToTimeSlot) | **POST** /v0/administration/arrangement/intent_preferences/add_intent_to_time_slot/{intent_uuid} | Adds an extra or first Intent to the TimeSlot.
[**arrangementIntentPreferenceAPIForClientInPeriod**](ArrangementIntentPreferenceApi.md#arrangementIntentPreferenceAPIForClientInPeriod) | **GET** /v0/administration/arrangement/intent_preferences/for_client_in_period/{client_uuid} | Gets a list of IntentPreferences for the client in a period.
[**arrangementIntentPreferenceAPIRemoveIntentFromTimeSlot**](ArrangementIntentPreferenceApi.md#arrangementIntentPreferenceAPIRemoveIntentFromTimeSlot) | **DELETE** /v0/administration/arrangement/intent_preferences/remove_intent_from_time_slot/{intent_uuid} | Removes an Intent from the TimeSlot.
[**arrangementIntentPreferenceAPISetIntentToTimeSlots**](ArrangementIntentPreferenceApi.md#arrangementIntentPreferenceAPISetIntentToTimeSlots) | **POST** /v0/administration/arrangement/intent_preferences/set_intent_to_time_slots/{intent_uuid} | Ties an Intent to a list of TimeSlots, replacing all previous connections.
[**arrangementIntentPreferenceAPISetTimeSlotToIntents**](ArrangementIntentPreferenceApi.md#arrangementIntentPreferenceAPISetTimeSlotToIntents) | **POST** /v0/administration/arrangement/intent_preferences/set_time_slot_to_intents/{time_slot_uuid} | Connects a TimeSlot to a list of Intents, replacing all, if any, previous connections.

<a name="arrangementIntentPreferenceAPIAddIntentToTimeSlot"></a>
# **arrangementIntentPreferenceAPIAddIntentToTimeSlot**
> arrangementIntentPreferenceAPIAddIntentToTimeSlot(intentUuid, timeSlotUuid)

Adds an extra or first Intent to the TimeSlot.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementIntentPreferenceApi();
let intentUuid = "intentUuid_example"; // String | 
let timeSlotUuid = "timeSlotUuid_example"; // String | 

apiInstance.arrangementIntentPreferenceAPIAddIntentToTimeSlot(intentUuid, timeSlotUuid, (error, data, response) => {
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
 **intentUuid** | **String**|  | 
 **timeSlotUuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="arrangementIntentPreferenceAPIForClientInPeriod"></a>
# **arrangementIntentPreferenceAPIForClientInPeriod**
> ArrangementListIntentPreferenceList arrangementIntentPreferenceAPIForClientInPeriod(clientUuid, periodBegin, periodEnd)

Gets a list of IntentPreferences for the client in a period.

Only Intents that are within the period or partially overlap with it, will be included in the result IntentPreferenceList.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementIntentPreferenceApi();
let clientUuid = "clientUuid_example"; // String | 
let periodBegin = new Date("2013-10-20"); // Date | 
let periodEnd = new Date("2013-10-20"); // Date | 

apiInstance.arrangementIntentPreferenceAPIForClientInPeriod(clientUuid, periodBegin, periodEnd, (error, data, response) => {
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
 **clientUuid** | **String**|  | 
 **periodBegin** | **Date**|  | 
 **periodEnd** | **Date**|  | 

### Return type

[**ArrangementListIntentPreferenceList**](ArrangementListIntentPreferenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="arrangementIntentPreferenceAPIRemoveIntentFromTimeSlot"></a>
# **arrangementIntentPreferenceAPIRemoveIntentFromTimeSlot**
> arrangementIntentPreferenceAPIRemoveIntentFromTimeSlot(intentUuid, timeSlotUuid)

Removes an Intent from the TimeSlot.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementIntentPreferenceApi();
let intentUuid = "intentUuid_example"; // String | 
let timeSlotUuid = "timeSlotUuid_example"; // String | 

apiInstance.arrangementIntentPreferenceAPIRemoveIntentFromTimeSlot(intentUuid, timeSlotUuid, (error, data, response) => {
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
 **intentUuid** | **String**|  | 
 **timeSlotUuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="arrangementIntentPreferenceAPISetIntentToTimeSlots"></a>
# **arrangementIntentPreferenceAPISetIntentToTimeSlots**
> arrangementIntentPreferenceAPISetIntentToTimeSlots(body, intentUuid)

Ties an Intent to a list of TimeSlots, replacing all previous connections.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementIntentPreferenceApi();
let body = new NedapOnsApi.ArrangementUuidList(); // ArrangementUuidList | 
let intentUuid = "intentUuid_example"; // String | 

apiInstance.arrangementIntentPreferenceAPISetIntentToTimeSlots(body, intentUuid, (error, data, response) => {
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
 **body** | [**ArrangementUuidList**](ArrangementUuidList.md)|  | 
 **intentUuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="arrangementIntentPreferenceAPISetTimeSlotToIntents"></a>
# **arrangementIntentPreferenceAPISetTimeSlotToIntents**
> arrangementIntentPreferenceAPISetTimeSlotToIntents(body, timeSlotUuid)

Connects a TimeSlot to a list of Intents, replacing all, if any, previous connections.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ArrangementIntentPreferenceApi();
let body = new NedapOnsApi.ArrangementUuidList(); // ArrangementUuidList | 
let timeSlotUuid = "timeSlotUuid_example"; // String | 

apiInstance.arrangementIntentPreferenceAPISetTimeSlotToIntents(body, timeSlotUuid, (error, data, response) => {
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
 **body** | [**ArrangementUuidList**](ArrangementUuidList.md)|  | 
 **timeSlotUuid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

