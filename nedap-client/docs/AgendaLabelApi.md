# NedapOnsApi.AgendaLabelApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agendaLabelAPIAll**](AgendaLabelApi.md#agendaLabelAPIAll) | **GET** /v0/agenda/labels | Returns every Label available from the LabelAPI

<a name="agendaLabelAPIAll"></a>
# **agendaLabelAPIAll**
> AgendaListLabelList agendaLabelAPIAll()

Returns every Label available from the LabelAPI

List appointment labels currently available

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AgendaLabelApi();
apiInstance.agendaLabelAPIAll((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AgendaListLabelList**](AgendaListLabelList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

