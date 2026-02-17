# NedapOnsApi.FreeFieldDefinitionApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**freeFieldDefinitionAPIStreamAll**](FreeFieldDefinitionApi.md#freeFieldDefinitionAPIStreamAll) | **GET** /v0/xstream/free_field_definitions/data | Retrieve all entries for free_field_definitions

<a name="freeFieldDefinitionAPIStreamAll"></a>
# **freeFieldDefinitionAPIStreamAll**
> ListFreeFieldDefinitionList freeFieldDefinitionAPIStreamAll()

Retrieve all entries for free_field_definitions

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FreeFieldDefinitionApi();
apiInstance.freeFieldDefinitionAPIStreamAll((error, data, response) => {
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

[**ListFreeFieldDefinitionList**](ListFreeFieldDefinitionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

