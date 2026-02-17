# NedapOnsApi.PresenceLogApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**presenceLogAPIByAgendaOccurrenceId**](PresenceLogApi.md#presenceLogAPIByAgendaOccurrenceId) | **GET** /v0/agenda/agenda_occurrences/{agenda_occurrence_id}/presence_logs | Return the PresenceLogs of a AgendaOccurrence corresponding to the given id.
[**presenceLogAPIByCareOrderId**](PresenceLogApi.md#presenceLogAPIByCareOrderId) | **GET** /v0/administration/finance/care_orders/{care_order_id}/presence_logs | Return the PresenceLogs of a CareOrder corresponding to the given id.
[**presenceLogAPIByClientId**](PresenceLogApi.md#presenceLogAPIByClientId) | **GET** /v0/administration/clients/{client_id}/presence_logs | Return the presence logs of a Client corresponding to the given id.
[**presenceLogAPIByEmployeeId**](PresenceLogApi.md#presenceLogAPIByEmployeeId) | **GET** /v0/administration/employees/{employee_id}/presence_logs | Return the presence logs of a Employee corresponding to the given id.
[**presenceLogAPIById**](PresenceLogApi.md#presenceLogAPIById) | **GET** /v0/administration/presence/presence_logs/{id} | Return Presence Log corresponding to the given id
[**presenceLogAPIWithCareOrder**](PresenceLogApi.md#presenceLogAPIWithCareOrder) | **GET** /v0/administration/presence/presence_logs/with_care_order/{presence_log_object_id} | 

<a name="presenceLogAPIByAgendaOccurrenceId"></a>
# **presenceLogAPIByAgendaOccurrenceId**
> ListPresenceLogList presenceLogAPIByAgendaOccurrenceId(agendaOccurrenceId)

Return the PresenceLogs of a AgendaOccurrence corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PresenceLogApi();
let agendaOccurrenceId = "agendaOccurrenceId_example"; // String | id

apiInstance.presenceLogAPIByAgendaOccurrenceId(agendaOccurrenceId, (error, data, response) => {
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
 **agendaOccurrenceId** | **String**| id | 

### Return type

[**ListPresenceLogList**](ListPresenceLogList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="presenceLogAPIByCareOrderId"></a>
# **presenceLogAPIByCareOrderId**
> ListPresenceLogList presenceLogAPIByCareOrderId(careOrderId, opts)

Return the PresenceLogs of a CareOrder corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PresenceLogApi();
let careOrderId = 789; // Number | Long identifying the CareOrder to search for
let opts = { 
  'limit': 56, // Number | Integer used to limit the result size
  'page': 56 // Number | Integer used to indicate the index of the page of results (ie. first result is on row = page * limit)
};
apiInstance.presenceLogAPIByCareOrderId(careOrderId, opts, (error, data, response) => {
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
 **careOrderId** | **Number**| Long identifying the CareOrder to search for | 
 **limit** | **Number**| Integer used to limit the result size | [optional] 
 **page** | **Number**| Integer used to indicate the index of the page of results (ie. first result is on row &#x3D; page * limit) | [optional] 

### Return type

[**ListPresenceLogList**](ListPresenceLogList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="presenceLogAPIByClientId"></a>
# **presenceLogAPIByClientId**
> ListPresenceLogList presenceLogAPIByClientId(clientId, opts)

Return the presence logs of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PresenceLogApi();
let clientId = 789; // Number | id
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | 
  'validTo': new Date("2013-10-20") // Date | 
};
apiInstance.presenceLogAPIByClientId(clientId, opts, (error, data, response) => {
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
 **clientId** | **Number**| id | 
 **validFrom** | **Date**|  | [optional] 
 **validTo** | **Date**|  | [optional] 

### Return type

[**ListPresenceLogList**](ListPresenceLogList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="presenceLogAPIByEmployeeId"></a>
# **presenceLogAPIByEmployeeId**
> ListPresenceLogList presenceLogAPIByEmployeeId(employeeId, validFrom, validTo, opts)

Return the presence logs of a Employee corresponding to the given id.

Setting extended to true  calculates the ORT hours on the fly and adds them to the response.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PresenceLogApi();
let employeeId = 789; // Number | id
let validFrom = new Date("2013-10-20"); // Date | 
let validTo = new Date("2013-10-20"); // Date | 
let opts = { 
  'extended': true // Boolean | 
};
apiInstance.presenceLogAPIByEmployeeId(employeeId, validFrom, validTo, opts, (error, data, response) => {
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
 **validFrom** | **Date**|  | 
 **validTo** | **Date**|  | 
 **extended** | **Boolean**|  | [optional] 

### Return type

[**ListPresenceLogList**](ListPresenceLogList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="presenceLogAPIById"></a>
# **presenceLogAPIById**
> PresenceLog presenceLogAPIById(id, opts)

Return Presence Log corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PresenceLogApi();
let id = 789; // Number | used for selecting PresenceLog
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.presenceLogAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting PresenceLog | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**PresenceLog**](PresenceLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="presenceLogAPIWithCareOrder"></a>
# **presenceLogAPIWithCareOrder**
> PresenceLog presenceLogAPIWithCareOrder(presenceLogObjectId)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PresenceLogApi();
let presenceLogObjectId = 789; // Number | 

apiInstance.presenceLogAPIWithCareOrder(presenceLogObjectId, (error, data, response) => {
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
 **presenceLogObjectId** | **Number**|  | 

### Return type

[**PresenceLog**](PresenceLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

