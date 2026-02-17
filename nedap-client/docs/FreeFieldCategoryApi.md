# NedapOnsApi.FreeFieldCategoryApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**freeFieldCategoryAPIStreamAll**](FreeFieldCategoryApi.md#freeFieldCategoryAPIStreamAll) | **GET** /v0/xstream/free_field_categories/data | Retrieve all entries for free_field_categories

<a name="freeFieldCategoryAPIStreamAll"></a>
# **freeFieldCategoryAPIStreamAll**
> ListFreeFieldCategoryList freeFieldCategoryAPIStreamAll()

Retrieve all entries for free_field_categories

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FreeFieldCategoryApi();
apiInstance.freeFieldCategoryAPIStreamAll((error, data, response) => {
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

[**ListFreeFieldCategoryList**](ListFreeFieldCategoryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

