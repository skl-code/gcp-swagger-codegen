# NedapOnsApi.AgendaClientAbsenceOccurrenceApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agendaClientAbsenceOccurrenceAPIByClientInPeriod**](AgendaClientAbsenceOccurrenceApi.md#agendaClientAbsenceOccurrenceAPIByClientInPeriod) | **GET** /v0/agenda/client_absence_occurrences/by_client_in_period | Used for selecting ClientAbsenceOccurrences from a client and moment in time.
[**agendaClientAbsenceOccurrenceAPIById**](AgendaClientAbsenceOccurrenceApi.md#agendaClientAbsenceOccurrenceAPIById) | **GET** /v0/agenda/client_absence_occurrences/{id} | Used for selecting a ClientAbsenceOccurrence

<a name="agendaClientAbsenceOccurrenceAPIByClientInPeriod"></a>
# **agendaClientAbsenceOccurrenceAPIByClientInPeriod**
> AgendaListClientAbsenceOccurrenceList agendaClientAbsenceOccurrenceAPIByClientInPeriod(clientId, opts)

Used for selecting ClientAbsenceOccurrences from a client and moment in time.

Used for selecting ClientAbsenceOccurrences from a client and moment in time.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgendaClientAbsenceOccurrenceApi();
let clientId = 789; // Number | The ID of the client to get the ClientAbsenceOccurrences from
let opts = { 
  'from': new Date("2013-10-20"), // Date | The start date of the ClientAbsenceOccurrences to retrieve
  'to': new Date("2013-10-20") // Date | The end date of the ClientAbsenceOccurrences to retrieve
};
apiInstance.agendaClientAbsenceOccurrenceAPIByClientInPeriod(clientId, opts, (error, data, response) => {
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
 **clientId** | **Number**| The ID of the client to get the ClientAbsenceOccurrences from | 
 **from** | **Date**| The start date of the ClientAbsenceOccurrences to retrieve | [optional] 
 **to** | **Date**| The end date of the ClientAbsenceOccurrences to retrieve | [optional] 

### Return type

[**AgendaListClientAbsenceOccurrenceList**](AgendaListClientAbsenceOccurrenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="agendaClientAbsenceOccurrenceAPIById"></a>
# **agendaClientAbsenceOccurrenceAPIById**
> AgendaClientAbsenceOccurrence agendaClientAbsenceOccurrenceAPIById(id)

Used for selecting a ClientAbsenceOccurrence

Used for selecting a ClientAbsenceOccurrence

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgendaClientAbsenceOccurrenceApi();
let id = "id_example"; // String | used for selecting ClientAbsenceOccurrence

apiInstance.agendaClientAbsenceOccurrenceAPIById(id, (error, data, response) => {
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
 **id** | **String**| used for selecting ClientAbsenceOccurrence | 

### Return type

[**AgendaClientAbsenceOccurrence**](AgendaClientAbsenceOccurrence.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

