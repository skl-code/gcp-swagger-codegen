# NedapOnsApi.FinanceInvoiceRowApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financeInvoiceRowAPIStreamAll**](FinanceInvoiceRowApi.md#financeInvoiceRowAPIStreamAll) | **GET** /v0/xstream/invoice_rows/data | Return all InvoiceRow models in a streaming manner
[**financeInvoiceRowAPIStreamUpdates**](FinanceInvoiceRowApi.md#financeInvoiceRowAPIStreamUpdates) | **GET** /v0/xstream/invoice_rows/updates | Return all InvoiceRow models which where updated since the date given in the request.

<a name="financeInvoiceRowAPIStreamAll"></a>
# **financeInvoiceRowAPIStreamAll**
> FinanceListInvoiceRowList financeInvoiceRowAPIStreamAll()

Return all InvoiceRow models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceInvoiceRowApi();
apiInstance.financeInvoiceRowAPIStreamAll((error, data, response) => {
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

[**FinanceListInvoiceRowList**](FinanceListInvoiceRowList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="financeInvoiceRowAPIStreamUpdates"></a>
# **financeInvoiceRowAPIStreamUpdates**
> FinanceListInvoiceRowList financeInvoiceRowAPIStreamUpdates(since)

Return all InvoiceRow models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceInvoiceRowApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.financeInvoiceRowAPIStreamUpdates(since, (error, data, response) => {
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

[**FinanceListInvoiceRowList**](FinanceListInvoiceRowList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

