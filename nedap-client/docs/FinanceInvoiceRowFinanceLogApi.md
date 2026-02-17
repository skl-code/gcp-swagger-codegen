# NedapOnsApi.FinanceInvoiceRowFinanceLogApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financeInvoiceRowFinanceLogAPIStreamUpdates**](FinanceInvoiceRowFinanceLogApi.md#financeInvoiceRowFinanceLogAPIStreamUpdates) | **GET** /v0/xstream/invoice_row_finance_logs/updates | Return all InvoiceRowFinanceLog models which where updated since the date given in the request.

<a name="financeInvoiceRowFinanceLogAPIStreamUpdates"></a>
# **financeInvoiceRowFinanceLogAPIStreamUpdates**
> FinanceListInvoiceRowFinanceLogList financeInvoiceRowFinanceLogAPIStreamUpdates(since)

Return all InvoiceRowFinanceLog models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceInvoiceRowFinanceLogApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.financeInvoiceRowFinanceLogAPIStreamUpdates(since, (error, data, response) => {
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

[**FinanceListInvoiceRowFinanceLogList**](FinanceListInvoiceRowFinanceLogList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

