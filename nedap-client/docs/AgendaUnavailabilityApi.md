# NedapOnsApi.AgendaUnavailabilityApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agendaUnavailabilityAPICreate**](AgendaUnavailabilityApi.md#agendaUnavailabilityAPICreate) | **POST** /v0/agenda/unavailabilities | Creates an Agenda Unavailability for the specified employee

<a name="agendaUnavailabilityAPICreate"></a>
# **agendaUnavailabilityAPICreate**
> AgendaUnavailability agendaUnavailabilityAPICreate(body)

Creates an Agenda Unavailability for the specified employee

Used to create new unavailabilities

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgendaUnavailabilityApi();
let body = new NedapOnsApi.AgendaUnavailability(); // AgendaUnavailability | Unavailibality to be created

apiInstance.agendaUnavailabilityAPICreate(body, (error, data, response) => {
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
 **body** | [**AgendaUnavailability**](AgendaUnavailability.md)| Unavailibality to be created | 

### Return type

[**AgendaUnavailability**](AgendaUnavailability.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

