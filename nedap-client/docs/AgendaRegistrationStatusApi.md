# NedapOnsApi.AgendaRegistrationStatusApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agendaRegistrationStatusAPIByTypeIds**](AgendaRegistrationStatusApi.md#agendaRegistrationStatusAPIByTypeIds) | **GET** /v0/agenda/agenda_registration_status | Return the agenda registrations status of a specific type corresponding to the given id.

<a name="agendaRegistrationStatusAPIByTypeIds"></a>
# **agendaRegistrationStatusAPIByTypeIds**
> AgendaListRegistrationStatusList agendaRegistrationStatusAPIByTypeIds(validFrom, validTo, type, typeIds)

Return the agenda registrations status of a specific type corresponding to the given id.

Return the agenda registrations status of a specific type corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgendaRegistrationStatusApi();
let validFrom = new Date("2013-10-20"); // Date | Start date (inclusive) of selection period
let validTo = new Date("2013-10-20"); // Date | End date (exclusive) of selection period
let type = new NedapOnsApi.AgendaRegistrationStatusType(); // AgendaRegistrationStatusType | type of status, can be: employee, client, team, location
let typeIds = [3.4]; // [Number] | List of ids

apiInstance.agendaRegistrationStatusAPIByTypeIds(validFrom, validTo, type, typeIds, (error, data, response) => {
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
 **validFrom** | **Date**| Start date (inclusive) of selection period | 
 **validTo** | **Date**| End date (exclusive) of selection period | 
 **type** | [**AgendaRegistrationStatusType**](.md)| type of status, can be: employee, client, team, location | 
 **typeIds** | [**[Number]**](Number.md)| List of ids | 

### Return type

[**AgendaListRegistrationStatusList**](AgendaListRegistrationStatusList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

