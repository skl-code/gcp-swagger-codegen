# NedapOnsApi.AgendaAgendaSeriesApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agendaAgendaSeriesAPIArchiveGroup**](AgendaAgendaSeriesApi.md#agendaAgendaSeriesAPIArchiveGroup) | **POST** /v0/agenda/agenda_series/archive_group | Archive an AgendaSeries from a Groupcare Group
[**agendaAgendaSeriesAPICreate**](AgendaAgendaSeriesApi.md#agendaAgendaSeriesAPICreate) | **POST** /v0/agenda/agenda_series | Create AgendaSeries
[**agendaAgendaSeriesAPIUpdateGroup**](AgendaAgendaSeriesApi.md#agendaAgendaSeriesAPIUpdateGroup) | **PUT** /v0/agenda/agenda_series/update_group | Update the Group information for an Agenda series

<a name="agendaAgendaSeriesAPIArchiveGroup"></a>
# **agendaAgendaSeriesAPIArchiveGroup**
> AgendaAgendaSeries agendaAgendaSeriesAPIArchiveGroup(body)

Archive an AgendaSeries from a Groupcare Group

Used to archive an AgendaSeries from a Groupcare Group. Deprecated: use Groepsplanning instead.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgendaAgendaSeriesApi();
let body = new NedapOnsApi.AgendaAgendaSeries(); // AgendaAgendaSeries | AgendaSeries from a Group to archive

apiInstance.agendaAgendaSeriesAPIArchiveGroup(body, (error, data, response) => {
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
 **body** | [**AgendaAgendaSeries**](AgendaAgendaSeries.md)| AgendaSeries from a Group to archive | 

### Return type

[**AgendaAgendaSeries**](AgendaAgendaSeries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agendaAgendaSeriesAPICreate"></a>
# **agendaAgendaSeriesAPICreate**
> AgendaAgendaSeries agendaAgendaSeriesAPICreate(body)

Create AgendaSeries

Used to create AgendaSeries

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgendaAgendaSeriesApi();
let body = new NedapOnsApi.AgendaAgendaSeries(); // AgendaAgendaSeries | AgendaSeries to create

apiInstance.agendaAgendaSeriesAPICreate(body, (error, data, response) => {
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
 **body** | [**AgendaAgendaSeries**](AgendaAgendaSeries.md)| AgendaSeries to create | 

### Return type

[**AgendaAgendaSeries**](AgendaAgendaSeries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="agendaAgendaSeriesAPIUpdateGroup"></a>
# **agendaAgendaSeriesAPIUpdateGroup**
> AgendaAgendaSeries agendaAgendaSeriesAPIUpdateGroup(body)

Update the Group information for an Agenda series

Used to update the Group information for an Agenda series. Deprecated: use Groepsplanning instead.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgendaAgendaSeriesApi();
let body = new NedapOnsApi.AgendaAgendaSeries(); // AgendaAgendaSeries | AgendaSeries from a group to update

apiInstance.agendaAgendaSeriesAPIUpdateGroup(body, (error, data, response) => {
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
 **body** | [**AgendaAgendaSeries**](AgendaAgendaSeries.md)| AgendaSeries from a group to update | 

### Return type

[**AgendaAgendaSeries**](AgendaAgendaSeries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

