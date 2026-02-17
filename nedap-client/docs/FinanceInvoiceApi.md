# NedapOnsApi.FinanceInvoiceApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financeInvoiceAPIStreamAll**](FinanceInvoiceApi.md#financeInvoiceAPIStreamAll) | **GET** /v0/xstream/invoices/data | Return all Invoice models in a streaming manner
[**financeInvoiceAPIStreamUpdates**](FinanceInvoiceApi.md#financeInvoiceAPIStreamUpdates) | **GET** /v0/xstream/invoices/updates | Return all Invoice models which where updated since the date given in the request.

<a name="financeInvoiceAPIStreamAll"></a>
# **financeInvoiceAPIStreamAll**
> FinanceListInvoiceList financeInvoiceAPIStreamAll()

Return all Invoice models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceInvoiceApi();
apiInstance.financeInvoiceAPIStreamAll((error, data, response) => {
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

[**FinanceListInvoiceList**](FinanceListInvoiceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="financeInvoiceAPIStreamUpdates"></a>
# **financeInvoiceAPIStreamUpdates**
> FinanceListInvoiceList financeInvoiceAPIStreamUpdates(since)

Return all Invoice models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceInvoiceApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.financeInvoiceAPIStreamUpdates(since, (error, data, response) => {
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

[**FinanceListInvoiceList**](FinanceListInvoiceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

