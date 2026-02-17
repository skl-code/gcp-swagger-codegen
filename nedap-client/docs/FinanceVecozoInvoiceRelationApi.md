# NedapOnsApi.FinanceVecozoInvoiceRelationApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financeVecozoInvoiceRelationAPIStreamAll**](FinanceVecozoInvoiceRelationApi.md#financeVecozoInvoiceRelationAPIStreamAll) | **GET** /v0/xstream/vecozo_invoice_relations/data | Return all VecozoInvoiceRelation models in a streaming manner
[**financeVecozoInvoiceRelationAPIStreamUpdates**](FinanceVecozoInvoiceRelationApi.md#financeVecozoInvoiceRelationAPIStreamUpdates) | **GET** /v0/xstream/vecozo_invoice_relations/updates | Return all VecozoInvoiceRelation models which where updated since the date given in the request.

<a name="financeVecozoInvoiceRelationAPIStreamAll"></a>
# **financeVecozoInvoiceRelationAPIStreamAll**
> FinanceListVecozoInvoiceRelationList financeVecozoInvoiceRelationAPIStreamAll()

Return all VecozoInvoiceRelation models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceVecozoInvoiceRelationApi();
apiInstance.financeVecozoInvoiceRelationAPIStreamAll((error, data, response) => {
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

[**FinanceListVecozoInvoiceRelationList**](FinanceListVecozoInvoiceRelationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="financeVecozoInvoiceRelationAPIStreamUpdates"></a>
# **financeVecozoInvoiceRelationAPIStreamUpdates**
> FinanceListVecozoInvoiceRelationList financeVecozoInvoiceRelationAPIStreamUpdates(since)

Return all VecozoInvoiceRelation models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceVecozoInvoiceRelationApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.financeVecozoInvoiceRelationAPIStreamUpdates(since, (error, data, response) => {
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

[**FinanceListVecozoInvoiceRelationList**](FinanceListVecozoInvoiceRelationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

