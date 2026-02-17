# NedapOnsApi.FinanceProductApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financeProductAPIByFinanceTypeId**](FinanceProductApi.md#financeProductAPIByFinanceTypeId) | **GET** /v0/administration/finance/finance_types/{finance_type_id}/products | Return the Products of a FinanceType corresponding to the given id.
[**financeProductAPIById**](FinanceProductApi.md#financeProductAPIById) | **GET** /v0/administration/finance/products/{id} | Return the Product corresponding to the given id
[**financeProductAPIStreamAll**](FinanceProductApi.md#financeProductAPIStreamAll) | **GET** /v0/xstream/products/data | Return all Product models in a streaming manner
[**financeProductAPIStreamUpdates**](FinanceProductApi.md#financeProductAPIStreamUpdates) | **GET** /v0/xstream/products/updates | Return all Product models which where updated since the date given in the request.

<a name="financeProductAPIByFinanceTypeId"></a>
# **financeProductAPIByFinanceTypeId**
> FinanceListProductList financeProductAPIByFinanceTypeId(financeTypeId)

Return the Products of a FinanceType corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceProductApi();
let financeTypeId = 789; // Number | 

apiInstance.financeProductAPIByFinanceTypeId(financeTypeId, (error, data, response) => {
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
 **financeTypeId** | **Number**|  | 

### Return type

[**FinanceListProductList**](FinanceListProductList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeProductAPIById"></a>
# **financeProductAPIById**
> FinanceProduct financeProductAPIById(id)

Return the Product corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceProductApi();
let id = 789; // Number | used for selecting Product

apiInstance.financeProductAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Product | 

### Return type

[**FinanceProduct**](FinanceProduct.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeProductAPIStreamAll"></a>
# **financeProductAPIStreamAll**
> FinanceListProductList financeProductAPIStreamAll()

Return all Product models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceProductApi();
apiInstance.financeProductAPIStreamAll((error, data, response) => {
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

[**FinanceListProductList**](FinanceListProductList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="financeProductAPIStreamUpdates"></a>
# **financeProductAPIStreamUpdates**
> FinanceListProductList financeProductAPIStreamUpdates(since)

Return all Product models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceProductApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.financeProductAPIStreamUpdates(since, (error, data, response) => {
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
 **since** | **Date**|  | 

### Return type

[**FinanceListProductList**](FinanceListProductList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

