# NedapOnsApi.FinanceCareOrderApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financeCareOrderAPIByClient**](FinanceCareOrderApi.md#financeCareOrderAPIByClient) | **GET** /v0/administration/finance/care_orders/by_client/{client_id} | If you are looking for &#x27;zorglegitimaties&#x27;, then you can use the CareOrder API.
[**financeCareOrderAPIByClientAndFinanceType**](FinanceCareOrderApi.md#financeCareOrderAPIByClientAndFinanceType) | **GET** /v0/administration/finance/care_orders/by_client_and_finance_type/{client_object_id} | If you are looking for &#x27;zorglegitimaties&#x27;, then you can use the CareOrder API.
[**financeCareOrderAPIById**](FinanceCareOrderApi.md#financeCareOrderAPIById) | **GET** /v0/administration/finance/care_orders/{id} | Return the CareOrder corresponding to the given id
[**financeCareOrderAPIByIdentificationNo**](FinanceCareOrderApi.md#financeCareOrderAPIByIdentificationNo) | **GET** /v0/administration/finance/care_orders/by_identification_no/{identification_no} | Finds a CareOrder by its identification number (&#x27;legitimatienummer&#x27;).
[**financeCareOrderAPICreate**](FinanceCareOrderApi.md#financeCareOrderAPICreate) | **POST** /v0/administration/finance/care_orders | Create CareOrder
[**financeCareOrderAPIDelete**](FinanceCareOrderApi.md#financeCareOrderAPIDelete) | **DELETE** /v0/administration/finance/care_orders/{id} | Deletes the CareOrder with given id
[**financeCareOrderAPIStreamAll**](FinanceCareOrderApi.md#financeCareOrderAPIStreamAll) | **GET** /v0/xstream/care_orders/data | Return all CareOrder models in a streaming manner
[**financeCareOrderAPIStreamUpdates**](FinanceCareOrderApi.md#financeCareOrderAPIStreamUpdates) | **GET** /v0/xstream/care_orders/updates | Return all CareOrder models which where updated since the date given in the request.
[**financeCareOrderAPIUpdate**](FinanceCareOrderApi.md#financeCareOrderAPIUpdate) | **PUT** /v0/administration/finance/care_orders/{id} | Updates the given CareOrder

<a name="financeCareOrderAPIByClient"></a>
# **financeCareOrderAPIByClient**
> FinanceListCareOrderList financeCareOrderAPIByClient(clientId)

If you are looking for &#x27;zorglegitimaties&#x27;, then you can use the CareOrder API.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceCareOrderApi();
let clientId = 789; // Number | 

apiInstance.financeCareOrderAPIByClient(clientId, (error, data, response) => {
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
 **clientId** | **Number**|  | 

### Return type

[**FinanceListCareOrderList**](FinanceListCareOrderList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeCareOrderAPIByClientAndFinanceType"></a>
# **financeCareOrderAPIByClientAndFinanceType**
> FinanceListCareOrderList financeCareOrderAPIByClientAndFinanceType(clientObjectId, financetypeObjectId)

If you are looking for &#x27;zorglegitimaties&#x27;, then you can use the CareOrder API.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceCareOrderApi();
let clientObjectId = 789; // Number | ID of the client
let financetypeObjectId = 789; // Number | ID of the finance type

apiInstance.financeCareOrderAPIByClientAndFinanceType(clientObjectId, financetypeObjectId, (error, data, response) => {
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
 **clientObjectId** | **Number**| ID of the client | 
 **financetypeObjectId** | **Number**| ID of the finance type | 

### Return type

[**FinanceListCareOrderList**](FinanceListCareOrderList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeCareOrderAPIById"></a>
# **financeCareOrderAPIById**
> FinanceCareOrder financeCareOrderAPIById(id)

Return the CareOrder corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceCareOrderApi();
let id = 789; // Number | used for selecting CareOrder

apiInstance.financeCareOrderAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting CareOrder | 

### Return type

[**FinanceCareOrder**](FinanceCareOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeCareOrderAPIByIdentificationNo"></a>
# **financeCareOrderAPIByIdentificationNo**
> FinanceCareOrder financeCareOrderAPIByIdentificationNo(identificationNo)

Finds a CareOrder by its identification number (&#x27;legitimatienummer&#x27;).

In the returned model the identification number is named \&quot;userIdentifier\&quot;.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceCareOrderApi();
let identificationNo = "identificationNo_example"; // String | The identification number (Dutch: legitimatienummer) of the care order to find.

apiInstance.financeCareOrderAPIByIdentificationNo(identificationNo, (error, data, response) => {
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
 **identificationNo** | **String**| The identification number (Dutch: legitimatienummer) of the care order to find. | 

### Return type

[**FinanceCareOrder**](FinanceCareOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeCareOrderAPICreate"></a>
# **financeCareOrderAPICreate**
> FinanceCareOrder financeCareOrderAPICreate(body)

Create CareOrder

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceCareOrderApi();
let body = new NedapOnsApi.FinanceCareOrder(); // FinanceCareOrder | CareOrder to create

apiInstance.financeCareOrderAPICreate(body, (error, data, response) => {
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
 **body** | [**FinanceCareOrder**](FinanceCareOrder.md)| CareOrder to create | 

### Return type

[**FinanceCareOrder**](FinanceCareOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="financeCareOrderAPIDelete"></a>
# **financeCareOrderAPIDelete**
> financeCareOrderAPIDelete(id)

Deletes the CareOrder with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceCareOrderApi();
let id = 789; // Number | used for selecting CareOrder

apiInstance.financeCareOrderAPIDelete(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting CareOrder | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="financeCareOrderAPIStreamAll"></a>
# **financeCareOrderAPIStreamAll**
> FinanceListCareOrderList financeCareOrderAPIStreamAll()

Return all CareOrder models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceCareOrderApi();
apiInstance.financeCareOrderAPIStreamAll((error, data, response) => {
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

[**FinanceListCareOrderList**](FinanceListCareOrderList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="financeCareOrderAPIStreamUpdates"></a>
# **financeCareOrderAPIStreamUpdates**
> FinanceListCareOrderList financeCareOrderAPIStreamUpdates(since)

Return all CareOrder models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceCareOrderApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.financeCareOrderAPIStreamUpdates(since, (error, data, response) => {
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

[**FinanceListCareOrderList**](FinanceListCareOrderList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="financeCareOrderAPIUpdate"></a>
# **financeCareOrderAPIUpdate**
> FinanceCareOrder financeCareOrderAPIUpdate(body, id)

Updates the given CareOrder

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceCareOrderApi();
let body = new NedapOnsApi.FinanceCareOrder(); // FinanceCareOrder | CareOrder to update
let id = 789; // Number | used for selecting CareOrder

apiInstance.financeCareOrderAPIUpdate(body, id, (error, data, response) => {
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
 **body** | [**FinanceCareOrder**](FinanceCareOrder.md)| CareOrder to update | 
 **id** | **Number**| used for selecting CareOrder | 

### Return type

[**FinanceCareOrder**](FinanceCareOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

