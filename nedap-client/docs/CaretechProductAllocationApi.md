# NedapOnsApi.CaretechProductAllocationApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**caretechProductAllocationAPICreateProductAllocationServerGateway**](CaretechProductAllocationApi.md#caretechProductAllocationAPICreateProductAllocationServerGateway) | **POST** /v0/caretech/server/product_allocations | Create a product allocation, including a new product instance, for a client

<a name="caretechProductAllocationAPICreateProductAllocationServerGateway"></a>
# **caretechProductAllocationAPICreateProductAllocationServerGateway**
> CaretechProductAllocation caretechProductAllocationAPICreateProductAllocationServerGateway(body)

Create a product allocation, including a new product instance, for a client

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.CaretechProductAllocationApi();
let body = new NedapOnsApi.CaretechProductAllocation(); // CaretechProductAllocation | 

apiInstance.caretechProductAllocationAPICreateProductAllocationServerGateway(body, (error, data, response) => {
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
 **body** | [**CaretechProductAllocation**](CaretechProductAllocation.md)|  | 

### Return type

[**CaretechProductAllocation**](CaretechProductAllocation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

