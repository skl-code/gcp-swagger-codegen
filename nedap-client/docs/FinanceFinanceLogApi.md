# NedapOnsApi.FinanceFinanceLogApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financeFinanceLogAPIStreamAll**](FinanceFinanceLogApi.md#financeFinanceLogAPIStreamAll) | **GET** /v0/xstream/finance_logs/data | Return all FinanceLog models in a streaming manner
[**financeFinanceLogAPIStreamUpdates**](FinanceFinanceLogApi.md#financeFinanceLogAPIStreamUpdates) | **GET** /v0/xstream/finance_logs/updates | Return all FinanceLog models which where updated since the date given in the request.

<a name="financeFinanceLogAPIStreamAll"></a>
# **financeFinanceLogAPIStreamAll**
> FinanceListFinanceLogList financeFinanceLogAPIStreamAll()

Return all FinanceLog models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceFinanceLogApi();
apiInstance.financeFinanceLogAPIStreamAll((error, data, response) => {
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

[**FinanceListFinanceLogList**](FinanceListFinanceLogList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="financeFinanceLogAPIStreamUpdates"></a>
# **financeFinanceLogAPIStreamUpdates**
> FinanceListFinanceLogList financeFinanceLogAPIStreamUpdates(since)

Return all FinanceLog models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceFinanceLogApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.financeFinanceLogAPIStreamUpdates(since, (error, data, response) => {
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

[**FinanceListFinanceLogList**](FinanceListFinanceLogList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

