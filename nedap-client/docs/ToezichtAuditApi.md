# NedapOnsApi.ToezichtAuditApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**toezichtAuditAPIStreamExport**](ToezichtAuditApi.md#toezichtAuditAPIStreamExport) | **GET** /v0/auditing/export | Export audits for a given time period

<a name="toezichtAuditAPIStreamExport"></a>
# **toezichtAuditAPIStreamExport**
> ToezichtListAuditList toezichtAuditAPIStreamExport(dateFrom, dateTo, opts)

Export audits for a given time period

Exports audits for a given time period. Returns JSON data.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ToezichtAuditApi();
let dateFrom = "dateFrom_example"; // String | Start date of exported audits (included)
let dateTo = "dateTo_example"; // String | End date of exported audits (included)
let opts = { 
  'titles': ["titles_example"] // [String] | Patterns used to filter audits by title, format: titles=title1&titles=title2&titles=title3
};
apiInstance.toezichtAuditAPIStreamExport(dateFrom, dateTo, opts, (error, data, response) => {
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
 **dateFrom** | **String**| Start date of exported audits (included) | 
 **dateTo** | **String**| End date of exported audits (included) | 
 **titles** | [**[String]**](String.md)| Patterns used to filter audits by title, format: titles&#x3D;title1&amp;titles&#x3D;title2&amp;titles&#x3D;title3 | [optional] 

### Return type

[**ToezichtListAuditList**](ToezichtListAuditList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

