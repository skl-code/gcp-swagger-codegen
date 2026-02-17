# NedapOnsApi.FinanceCareOrderProductApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financeCareOrderProductAPIByCareOrderId**](FinanceCareOrderProductApi.md#financeCareOrderProductAPIByCareOrderId) | **GET** /v0/administration/finance/care_orders/{care_order_id}/care_order_products | Return the CareOrderProducts of a CareOrder corresponding to the given id.
[**financeCareOrderProductAPIById**](FinanceCareOrderProductApi.md#financeCareOrderProductAPIById) | **GET** /v0/administration/finance/care_order_products/{id} | Return the CareOrderProduct corresponding to the given id
[**financeCareOrderProductAPICreate**](FinanceCareOrderProductApi.md#financeCareOrderProductAPICreate) | **POST** /v0/administration/finance/care_order_products | Create CareOrderProduct
[**financeCareOrderProductAPIDelete**](FinanceCareOrderProductApi.md#financeCareOrderProductAPIDelete) | **DELETE** /v0/administration/finance/care_order_products/{id} | Deletes the CareOrderProduct with given id
[**financeCareOrderProductAPIStreamAll**](FinanceCareOrderProductApi.md#financeCareOrderProductAPIStreamAll) | **GET** /v0/xstream/care_order_products/data | Return all CareOrderProduct models in a streaming manner
[**financeCareOrderProductAPIStreamUpdates**](FinanceCareOrderProductApi.md#financeCareOrderProductAPIStreamUpdates) | **GET** /v0/xstream/care_order_products/updates | Return all CareOrderProduct models which where updated since the date given in the request.
[**financeCareOrderProductAPIUpdate**](FinanceCareOrderProductApi.md#financeCareOrderProductAPIUpdate) | **PUT** /v0/administration/finance/care_order_products/{id} | Updates the given CareOrderProduct

<a name="financeCareOrderProductAPIByCareOrderId"></a>
# **financeCareOrderProductAPIByCareOrderId**
> FinanceListCareOrderProductList financeCareOrderProductAPIByCareOrderId(careOrderId)

Return the CareOrderProducts of a CareOrder corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceCareOrderProductApi();
let careOrderId = 789; // Number | 

apiInstance.financeCareOrderProductAPIByCareOrderId(careOrderId, (error, data, response) => {
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
 **careOrderId** | **Number**|  | 

### Return type

[**FinanceListCareOrderProductList**](FinanceListCareOrderProductList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeCareOrderProductAPIById"></a>
# **financeCareOrderProductAPIById**
> FinanceCareOrderProduct financeCareOrderProductAPIById(id)

Return the CareOrderProduct corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceCareOrderProductApi();
let id = 789; // Number | used for selecting CareOrderProduct

apiInstance.financeCareOrderProductAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting CareOrderProduct | 

### Return type

[**FinanceCareOrderProduct**](FinanceCareOrderProduct.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeCareOrderProductAPICreate"></a>
# **financeCareOrderProductAPICreate**
> FinanceCareOrderProduct financeCareOrderProductAPICreate(body)

Create CareOrderProduct

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceCareOrderProductApi();
let body = new NedapOnsApi.FinanceCareOrderProduct(); // FinanceCareOrderProduct | CareOrderProduct to create

apiInstance.financeCareOrderProductAPICreate(body, (error, data, response) => {
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
 **body** | [**FinanceCareOrderProduct**](FinanceCareOrderProduct.md)| CareOrderProduct to create | 

### Return type

[**FinanceCareOrderProduct**](FinanceCareOrderProduct.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeCareOrderProductAPIDelete"></a>
# **financeCareOrderProductAPIDelete**
> financeCareOrderProductAPIDelete(id)

Deletes the CareOrderProduct with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceCareOrderProductApi();
let id = 789; // Number | used for selecting CareOrderProduct

apiInstance.financeCareOrderProductAPIDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| used for selecting CareOrderProduct | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="financeCareOrderProductAPIStreamAll"></a>
# **financeCareOrderProductAPIStreamAll**
> FinanceListCareOrderProductList financeCareOrderProductAPIStreamAll()

Return all CareOrderProduct models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceCareOrderProductApi();
apiInstance.financeCareOrderProductAPIStreamAll((error, data, response) => {
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

[**FinanceListCareOrderProductList**](FinanceListCareOrderProductList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="financeCareOrderProductAPIStreamUpdates"></a>
# **financeCareOrderProductAPIStreamUpdates**
> FinanceListCareOrderProductList financeCareOrderProductAPIStreamUpdates(since)

Return all CareOrderProduct models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceCareOrderProductApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.financeCareOrderProductAPIStreamUpdates(since, (error, data, response) => {
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

[**FinanceListCareOrderProductList**](FinanceListCareOrderProductList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="financeCareOrderProductAPIUpdate"></a>
# **financeCareOrderProductAPIUpdate**
> FinanceCareOrderProduct financeCareOrderProductAPIUpdate(body, id)

Updates the given CareOrderProduct

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceCareOrderProductApi();
let body = new NedapOnsApi.FinanceCareOrderProduct(); // FinanceCareOrderProduct | CareOrderProduct to update
let id = 789; // Number | used for selecting CareOrderProduct

apiInstance.financeCareOrderProductAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**FinanceCareOrderProduct**](FinanceCareOrderProduct.md)| CareOrderProduct to update | 
 **id** | **Number**| used for selecting CareOrderProduct | 

### Return type

[**FinanceCareOrderProduct**](FinanceCareOrderProduct.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

